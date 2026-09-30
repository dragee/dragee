import range from './utils/range.js'
import removeItem from './utils/remove-array-item.js'
import debounce from './utils/debounce.js'
import EventEmitter from './eventEmitter.js'
import Rectangle from './geometry/rectangle.js'
import { transformedSpaceDistanceFactory } from './geometry/distances.js'
import { scopes, currentScope } from './scope.js'

import { FloatLeftStrategy } from './positioning.js'
import { BoundToElement } from './bounding.js'

export default class Tray extends EventEmitter {
  constructor(element, draggables, options = {}) {
    super(options)

    this.options = Object.assign({
      timeEnd: 200,
      timeExchange: 400
    }, options)

    this.positioningStrategy = options.strategy || new FloatLeftStrategy(
      this.getRectangle.bind(this),
      {
        radius: 80,
        getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 }),
        removable: true
      }
    )

    this.element = element
    this.draggables = []
    this.listeners = new AbortController()
    draggables.forEach((draggable) => this.accept(draggable))

    const scope = options.scope || currentScope()
    scope.addTray(this)

    this.startBounding()
    this.init()

    this.lastPosition = this.getPosition()
    this.resizeObserver = new ResizeObserver(debounce(() => this.onResize(), 100))
    this.resizeObserver.observe(this.element)
    if (this.container) {
      this.resizeObserver.observe(this.container)
    }
  }

  onResize() {
    const position = this.getPosition()
    const shift = position.sub(this.lastPosition)
    this.lastPosition = position

    this.draggables.filter((draggable) => !draggable.isDragging).forEach((draggable) => draggable.remeasure())
    this.innerDraggables.forEach((draggable) => draggable.setPosition(draggable.position.add(shift)))
    this.refresh()
  }

  startBounding() {
    this.bound = this.options.bound || BoundToElement.bounding(this.element)
  }

  positioning (draggables, indexesOfNew) {
    return this.positioningStrategy.positioning(draggables, indexesOfNew)
  }

  sorting (oldDraggables, newDraggables, indexOfNews) {
    return this.positioningStrategy.sorting(oldDraggables, newDraggables, indexOfNews)
  }

  init() {
    let rectangles, indexesOfNew

    this.innerDraggables = this.draggables.filter((draggable) => {
      let element = draggable.element.parentNode
      while (element) {
        if (element === this.element) {
          return true
        }
        element = element.parentNode
      }
      return false
    })

    if (this.innerDraggables.length) {
      indexesOfNew = range(this.innerDraggables.length)
      rectangles = this.positioning(this.innerDraggables.map((draggable) => {
        return draggable.getRectangle()
      }), indexesOfNew)
      this.setPosition(rectangles, indexesOfNew)
      this.innerDraggables.forEach((draggable) => this.emitTrayEvent('add', draggable))
    }
  }

  getRectangle() {
    return Rectangle.fromElement(this.element, this.container, true)
  }

  catchDraggable(draggable) {
    if (this.options.catchDraggable) {
      return this.options.catchDraggable(this, draggable)
    } else {
      const trayRectangle = this.getRectangle()
      const draggableSquare = draggable.getRectangle().getSquare()

      return draggableSquare < trayRectangle.getSquare()
              && trayRectangle.includePoint(draggable.getCenter())
    }
  }

  getPosition() {
    return this.getRectangle().position
  }

  getSize() {
    return this.getRectangle().size
  }

  destroy() {
    this.listeners.abort()
    this.resizeObserver.disconnect()
    scopes.forEach((scope) => removeItem(scope.trays, this))
  }

  refresh() {
    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [])
    this.setPosition(rectangles, [], 0)
  }

  drop(draggable) {
    const newDraggablesIndex = []

    if (!this.getRectangle().includePoint(draggable.getCenter())) {
      return false
    }

    const beforeAddEvent = this.emitTrayEvent('beforeAdd', draggable, { cancelable: true })
    if (beforeAddEvent.canceled) {
      return false
    }

    draggable.position = this.bound(draggable.position, draggable.getSize())

    this.innerDraggables = this.sorting(this.innerDraggables, [draggable], newDraggablesIndex)
    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), newDraggablesIndex)

    this.setPosition(rectangles, newDraggablesIndex)
    if (this.innerDraggables.indexOf(draggable) !== -1) {
      this.emitTrayEvent('add', draggable)
    }
    return true
  }

  setPosition(rectangles, indexesOfNew, time) {
    this.innerDraggables.slice(0).forEach((draggable, i) => {
      const rect = rectangles[i],
        timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExchange

      if (rect.removable) {
        draggable.move(draggable.initialPosition, { duration: timeEnd, silent: true })
        removeItem(this.innerDraggables, draggable)
        this.emitTrayEvent('remove', draggable)
      } else {
        draggable.move(rect.position, { duration: timeEnd, silent: true })
      }
    })
  }

  add(draggable, time) {
    const newDraggablesIndex = this.innerDraggables.length

    const beforeAddEvent = this.emitTrayEvent('beforeAdd', draggable, { cancelable: true })
    if (beforeAddEvent.canceled) {
      return
    }

    this.accept(draggable)
    this.pushInnerDraggable(draggable)
    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [newDraggablesIndex])

    this.setPosition(rectangles, [newDraggablesIndex], time || 0)
    if (this.innerDraggables.indexOf(draggable) !== -1) {
      this.emitTrayEvent('add', draggable)
    }
  }

  pushInnerDraggable(draggable) {
    if (this.innerDraggables.indexOf(draggable)===-1) {
      this.innerDraggables.push(draggable)
    }
  }

  accept(draggable) {
    if (this.draggables.includes(draggable)) return

    this.draggables.push(draggable)
    draggable.trays.push(this)
    draggable.addEventListener('drag:move', () => this.remove(draggable), { signal: this.listeners.signal })
  }

  remove(draggable) {
    const index = this.innerDraggables.indexOf(draggable)
    if (index === -1) {
      return
    }

    this.innerDraggables.splice(index, 1)

    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [])

    this.setPosition(rectangles, [])
    this.emitTrayEvent('remove', draggable)
  }

  reset() {
    this.innerDraggables.forEach((draggable) => {
      draggable.move(draggable.initialPosition, { silent: true })
      this.emitTrayEvent('remove', draggable)
    })
    this.innerDraggables = []
  }

  getSortedDraggables() {
    return this.innerDraggables.slice()
  }

  emitTrayEvent(type, draggable, options) {
    const domType = type.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    return this.emitWithDomEvent(this.element, `tray:${type}`, `dragee:tray-${domType}`, { tray: this, draggable }, options)
  }

  get container() {
    return (this._container = this._container || this.options.container || this.element.offsetParent)
  }
}


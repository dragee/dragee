import range from './utils/range.js'
import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'
import dispatchDomEvent from './utils/dispatch-dom-event'
import Rectangle from './geometry/rectangle'
import { transformedSpaceDistanceFactory } from './geometry/distances'
import { scopes, currentScope } from './scope'

import { FloatLeftStrategy } from './positioning'
import { BoundToElement } from './bounding'

export default class Target extends EventEmitter {
  constructor(element, draggables, options = {}) {
    super(options)
    const target = this

    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400
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
    this.removeOnMoveControllers = new Map()
    draggables.forEach((draggable) => draggable.targets.push(target))
    this.draggables = draggables

    currentScope().addTarget(this)

    this.startBounding()
    this.init()
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
      this.innerDraggables.forEach((draggable) => this.emitTargetEvent('add', draggable))
    }
  }

  getRectangle() {
    return Rectangle.fromElement(this.element, this.container, true)
  }

  catchDraggable(draggable) {
    if (this.options.catchDraggable) {
      return this.options.catchDraggable(this, draggable)
    } else {
      const targetRectangle = this.getRectangle()
      const draggableSquare = draggable.getRectangle().getSquare()

      return draggableSquare < targetRectangle.getSquare()
              && targetRectangle.includePoint(draggable.getCenter())
    }
  }

  getPosition() {
    return this.getRectangle().position
  }

  getSize() {
    return this.getRectangle().size
  }

  destroy() {
    scopes.forEach((scope) => removeItem(scope.targets, this))
  }

  refresh() {
    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [])
    this.setPosition(rectangles, [], 0)
  }

  onEnd(draggable) {
    const newDraggablesIndex = []

    if (!this.getRectangle().includePoint(draggable.getCenter())) {
      return false
    }

    if (!this.emitTargetEvent('beforeAdd', draggable, { cancelable: true })) {
      return false
    }

    draggable.position = this.bound(draggable.position, draggable.getSize())

    this.innerDraggables = this.sorting(this.innerDraggables, [draggable], newDraggablesIndex)
    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), newDraggablesIndex)

    this.setPosition(rectangles, newDraggablesIndex)
    if (this.innerDraggables.indexOf(draggable) !== -1) {
      this.addRemoveOnMove(draggable)
    }
    return true
  }

  setPosition(rectangles, indexesOfNew, time) {
    this.innerDraggables.slice(0).forEach((draggable, i) => {
      const rect = rectangles[i],
        timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange

      if (rect.removable) {
        draggable.move(draggable.initialPosition, timeEnd, true, true)
        this.stopRemoveOnMove(draggable)
        removeItem(this.innerDraggables, draggable)
        this.emitTargetEvent('remove', draggable)
      } else {
        draggable.move(rect.position, timeEnd, true, true)
      }
    })
  }

  add(draggable, time) {
    const newDraggablesIndex = this.innerDraggables.length

    if (!this.emitTargetEvent('beforeAdd', draggable, { cancelable: true })) {
      return
    }

    this.pushInnerDraggable(draggable)
    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), newDraggablesIndex, draggable)

    this.setPosition(rectangles, [newDraggablesIndex], time || 0)
    if (this.innerDraggables.indexOf(draggable) !== -1) {
      this.addRemoveOnMove(draggable)
    }
  }

  pushInnerDraggable(draggable) {
    if (this.innerDraggables.indexOf(draggable)===-1) {
      this.innerDraggables.push(draggable)
    }
  }

  addRemoveOnMove(draggable) {
    this.stopRemoveOnMove(draggable)
    const controller = new AbortController()
    draggable.addEventListener('drag:move', () => this.remove(draggable), { signal: controller.signal })
    this.removeOnMoveControllers.set(draggable, controller)

    this.emitTargetEvent('add', draggable)
  }

  stopRemoveOnMove(draggable) {
    this.removeOnMoveControllers.get(draggable)?.abort()
    this.removeOnMoveControllers.delete(draggable)
  }

  remove(draggable) {
    this.stopRemoveOnMove(draggable)

    const index = this.innerDraggables.indexOf(draggable)
    if (index === -1) {
      return
    }

    this.innerDraggables.splice(index, 1)

    const rectangles = this.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [])

    this.setPosition(rectangles, [])
    this.emitTargetEvent('remove', draggable)
  }

  reset() {
    this.innerDraggables.forEach((draggable) => {
      draggable.move(draggable.initialPosition, 0, true, true)
      this.stopRemoveOnMove(draggable)
      this.emitTargetEvent('remove', draggable)
    })
    this.innerDraggables = []
  }

  getSortedDraggables() {
    return this.innerDraggables.slice()
  }

  emitTargetEvent(type, draggable, { cancelable = false } = {}) {
    const detail = { target: this, draggable }
    const isNotPrevented = this.emit(`target:${type}`, detail, { cancelable })

    if (!this.domEvents) return isNotPrevented

    const domType = type.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    return dispatchDomEvent(this.element, `dragee:target-${domType}`, detail, { cancelable }) && isNotPrevented
  }

  get container() {
    return (this._container = this._container || this.options.container || this.options.parent || this.element.offsetParent)
  }

  get domEvents() {
    return this.options.domEvents !== false
  }
}


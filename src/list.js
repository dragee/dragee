import debounce from './utils/debounce.js'
import removeItem from './utils/remove-array-item.js'
import EventEmitter from './eventEmitter.js'
import {
  getDistance,
  indexOfNearestPoint
} from './geometry/distances.js'

import Draggable from './draggable.js'

export default class List extends EventEmitter {
  constructor(draggables, options={}) {
    super(options)
    this.options = Object.assign({
      timeEnd: 200,
      timeExchange: 400,
      radius: 30
    }, options)

    this.container = options.container
    this.draggables = draggables
    this.changedDuringIteration = false
    this.controllers = new Map()

    this.resizeObserver = new ResizeObserver(debounce(this.onResize.bind(this), 100))

    if (this.container) {
      this.resizeObserver.observe(this.container)
    }

    this.init()
  }

  onResize() {
    if (this.options.reorderOnChange) this.reset()
    this.draggables.forEach((draggable) => {
      if(!draggable.isDragging) {
        draggable.startPositioning()
      }
    })
  }

  init() {
    this._enable = true
    this.draggables.forEach((draggable) => this.initDraggable(draggable))
  }

  initDraggable(draggable) {
    draggable.enable = this._enable
    this.listenTo(draggable, 'drag:move', () => this.onMove(draggable))
    this.listenTo(draggable, 'drag:release', (event) => {
      if (event.canceled) return

      event.cancel()
      draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd)
      this.onRelease(draggable)
    })
    this.resizeObserver.observe(draggable.element)
  }

  listenTo(draggable, eventName, handler) {
    draggable.addEventListener(eventName, handler, { signal: this.signalFor(draggable) })
  }

  signalFor(draggable) {
    if (!this.controllers.has(draggable)) {
      this.controllers.set(draggable, new AbortController())
    }
    return this.controllers.get(draggable).signal
  }

  releaseDraggable(draggable) {
    this.resizeObserver.unobserve(draggable.element)
    this.controllers.get(draggable)?.abort()
    this.controllers.delete(draggable)
    removeItem(this.draggables, draggable)
  }

  onMove(draggable) {
    if (this.swappingDisabled) return

    const sortedDraggables = this.getSortedDraggables()
    const pinnedPositions = sortedDraggables.map((draggable) => draggable.pinnedPosition)

    const currentIndex = sortedDraggables.indexOf(draggable)
    const targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.distanceFunc)

    if (targetIndex !== -1 && currentIndex !== targetIndex) {
      if (targetIndex < currentIndex) {
        for (let i=targetIndex; i<currentIndex; i++) {
          sortedDraggables[i].pinPosition(pinnedPositions[i+1], this.options.timeExchange)
        }
      } else {
        for (let i=currentIndex; i<targetIndex; i++) {
          sortedDraggables[i+1].pinPosition(pinnedPositions[i], this.options.timeExchange)
        }
      }

      if (draggable.nativeDragAndDrop) {
        draggable.pinPosition(pinnedPositions[targetIndex])
      } else {
        draggable.pinnedPosition = pinnedPositions[targetIndex]
      }

      this.changedDuringIteration = true
    }
  }

  onRelease(draggable) {
    if (this.changedDuringIteration) {
      this.emitListEvent('change', draggable)
      this.changedDuringIteration = false

      if (this.options.reorderOnChange && this.options.container) {
        this.reorderElements(draggable)
      }
    }
  }

  reorderElements(movedDraggable) {
    const sortedDraggables = this.getSortedDraggables()
    const index = sortedDraggables.indexOf(movedDraggable)
    const next = sortedDraggables[index + 1]

    this.reset()

    if (next) {
      this.container.insertBefore(movedDraggable.element, next.element)
    } else {
      this.container.appendChild(movedDraggable.element)
    }

    this.draggables.forEach((d) => d.startPositioning())
    this.emitListEvent('reordered', movedDraggable)
  }

  emitListEvent(type, draggable) {
    this.emitWithDomEvent(draggable.element, `list:${type}`, `dragee:list-${type}`, { list: this, draggable })
  }

  getCurrentPinnedPositions() {
    return this.draggables.map((draggable) => draggable.pinnedPosition.clone())
  }

  getSortedDraggables() {
    return this.draggables.sort(this.sorting.bind(this))
  }

  reset() {
    this.draggables.forEach((draggable) => draggable.resetPositionToInitial())
  }

  refresh() {
    this.draggables.forEach((draggable) => draggable.refresh())
  }

  add(draggables) {
    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }
    draggables.forEach((draggable) => this.initDraggable(draggable))
    this.draggables = this.draggables.concat(draggables)
  }

  remove(draggables) {
    const initialPositions = this.draggables.map((draggable) => draggable.initialPosition)
    const list = []
    const sortedDraggables = this.getSortedDraggables()

    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }

    draggables.forEach((draggable) => this.releaseDraggable(draggable))

    let j = 0
    sortedDraggables.forEach((draggable) => {
      if (this.draggables.indexOf(draggable) !== -1) {
        if (draggable.pinnedPosition !== initialPositions[j]) {
          draggable.pinPosition(initialPositions[j], this.options.timeExchange)
        }
        draggable.initialPosition = initialPositions[j]
        j++
        list.push(draggable)
      }
    })
    this.draggables = list
  }

  clear() {
    this.remove(this.draggables.slice())
  }

  destroy() {
    this.draggables.forEach((draggable) => draggable.destroy())
    if (this.container) {
      this.resizeObserver.unobserve(this.container)
    }
  }

  sorting(draggableA, draggableB) {
    if (this.options.sorting) {
      return this.options.sorting(draggableA, draggableB)
    } else {
      if (draggableA.pinnedPosition.y < draggableB.pinnedPosition.y) return -1
      if (draggableA.pinnedPosition.y > draggableB.pinnedPosition.y) return 1
      if (draggableA.pinnedPosition.x < draggableB.pinnedPosition.x) return -1
      if (draggableA.pinnedPosition.x > draggableB.pinnedPosition.x) return 1
      return 0
    }
  }

  get distanceFunc() {
    return this.options.getDistance || getDistance
  }

  get positions() {
    return this.getCurrentPinnedPositions()
  }

  set positions(positions) {
    const message = 'wrong array length'
    if (positions.length === this.draggables.length) {
      positions.forEach((point, i) => {
        this.draggables[i].pinPosition(point)
      })
    } else {
      throw message
    }
  }

  get enable() {
    return this._enable
  }

  set enable(enable) {
    this._enable = enable
    this.draggables.forEach((draggable) => {
      draggable.enable = enable
    })
  }

  get swappingDisabled() {
    return this._swappingDisabled
  }

  set swappingDisabled(disabled) {
    this._swappingDisabled = disabled
  }
}

import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'
import {
  getDistance,
  indexOfNearestPoint
} from './geometry/distances'

import Draggable from './draggable'

export default class List extends EventEmitter {
  constructor(draggables, options={}) {
    super(undefined, options)
    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30,
      getDistance: getDistance
    }, options)

    this.draggables = draggables
    this.init()
  }

  init() {
    this._enable = true
    this.draggables.forEach(this.initDraggable, this)
  }

  initDraggable(draggable) {
    draggable.enable = this._enable
    draggable.on('drag:move', () => this.onMove(draggable))
    draggable.dragEndAction = () => draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd)
  }

  onMove(draggable) {
    const sortedDraggables = this.getSortedDraggables()
    const pinnedPositions = sortedDraggables.map((draggable) => draggable.pinnedPosition)

    const currentIndex = sortedDraggables.indexOf(draggable)
    const targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.options.getDistance)

    if (targetIndex !== -1 && currentIndex !== targetIndex) {
      if (targetIndex < currentIndex) {
        for (let i=targetIndex; i<currentIndex; i++) {
          sortedDraggables[i].pinPosition(pinnedPositions[i+1], this.options.timeExcange)
        }
      } else {
        for (let i=currentIndex; i<targetIndex; i++) {
          sortedDraggables[i+1].pinPosition(pinnedPositions[i], this.options.timeExcange)
        }
      }
      draggable.pinnedPosition = pinnedPositions[targetIndex]
      this.emit('list:change')
    }
  }

  getCurrentPinnedPositions() {
    return this.draggables.map((draggable) => draggable.pinnedPosition.clone())
  }

  getSortedDraggables() {
    const initialPositions = this.draggables.map((draggable) => draggable.initialPosition)

    const sortedDraggables = initialPositions.map((position) => {
      return this.draggables.filter((draggable) => draggable.pinnedPosition.compare(position))[0]
    })

    return sortedDraggables
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
    draggables.forEach(this.initDraggable, this)
    this.draggables = this.draggables.concat(draggables)
  }

  remove(draggables) {
    const initialPositions = this.draggables.map((draggable) => draggable.initialPosition)
    const list = []
    const sortedDraggables = this.getSortedDraggables()

    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }

    draggables.forEach((draggable) => {
      draggable.resetOn('drag:end')
      draggable.resetOn('drag:move')
      removeItem(this.draggables, draggable)
    })

    let j = 0
    sortedDraggables.forEach((draggable) => {
      if (this.draggables.indexOf(draggable) !== -1) {
        if (draggable.pinnedPosition !== initialPositions[j]) {
          draggable.pinPosition(initialPositions[j], this.options.timeExcange)
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

  static factory(parentElement, elements, options={}) {
    const draggables = [...elements].map((element) => {
      return new Draggable(element, Object.assign({
        parent: parentElement
      }, options.draggable || {}))
    })
    return new List(draggables, options.list || {})
  }
}

import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'
import {
  getDistance,
  indexOfNearestPoint
} from './geometry/helpers'
import { Draggable } from './draggable'

export default class List extends EventEmitter {
  constructor(draggables, options={}) {
    super(undefined, options)
    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30,
      getDistance: getDistance,
      isDisplacement: false,
      isSortable: true
    }, options)

    this.draggables = draggables
    this.init()
  }

  init() {
    this._enable = true
    this.draggables.forEach(this.initDraggable, this)
  }

  initDraggable(draggable) {
    let moveHandler
    const list = this

    draggable.enable = this._enable
    if (this.options.isDisplacement) {
      moveHandler = function() {
        if (draggable.isDragging) {
          list.onStart(draggable)
          draggable.unsubscribe('drag:move', moveHandler)
        }
      }

      draggable.dragEndAction = () => {
        this.onEndDisplaycement(draggable)
        draggable.on('drag:move', moveHandler)
      }

      draggable.on('drag:move', moveHandler)
    } else {
      draggable.dragEndAction = () => this.onEnd(draggable)
    }
  }

  moveOrSave(draggable, position, time) {
    if (draggable.isDragging) {
      draggable.fixPosition = position
    } else {
      draggable.move(position, time, true)
    }
  }

  onEnd(draggable) {
    const fixPositions = this.getCurrentFixPosition()
    const currentIndex = this.draggables.indexOf(draggable)
    const excangeIndex = indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance)

    if (excangeIndex === -1 || excangeIndex === currentIndex) {
      draggable.move(draggable.fixPosition, this.options.timeEnd, true)
    } else {
      this.moveOrSave(this.draggables[excangeIndex], fixPositions[currentIndex], this.options.timeExcange)
      this.draggables[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true)
      this.emit('list:change')
    }
    return true
  }

  sortIfPossible(draggable) {
    const fixPosition = draggable.fixPosition
    const currentIndex = this.draggables.indexOf(draggable)
    const nextDraggable = this.draggables[currentIndex + 1]
    const prevDraggable = this.draggables[currentIndex - 1]

    if (draggable.downDirection && nextDraggable) {
      const distance = this.options.getDistance(draggable.position, nextDraggable.position)
      if (distance < this.options.radius) {
        draggable.fixPosition = nextDraggable.fixPosition
        this.moveOrSave(nextDraggable, fixPosition, this.options.timeExcange);
        [this.draggables[currentIndex], this.draggables[currentIndex + 1]] = [this.draggables[currentIndex + 1], this.draggables[currentIndex]]
        this.sortIfPossible(draggable)
      }
    }

    if (draggable.upDirection && prevDraggable) {
      const distance = this.options.getDistance(draggable.position, prevDraggable.position)
      if (distance < this.options.radius) {
        draggable.fixPosition = prevDraggable.fixPosition
        this.moveOrSave(prevDraggable, fixPosition, this.options.timeExcange);
        [this.draggables[currentIndex], this.draggables[currentIndex - 1]] = [this.draggables[currentIndex - 1], this.draggables[currentIndex]]
        this.sortIfPossible(draggable)
      }
    }
  }

  onEndDisplaycement(draggable) {
    const sortedDraggables = this.getSortedDraggables()
    const fixPositions = sortedDraggables.map((draggable) => draggable.fixPosition)

    const currentIndex = sortedDraggables.indexOf(draggable)
    const targetIndex = indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance)

    if (targetIndex !== -1) {
      if (targetIndex < currentIndex) {
        for (let i=targetIndex; i<currentIndex; i++) {
          this.moveOrSave(sortedDraggables[i], fixPositions[i+1], this.options.timeExcange)
        }
      } else {
        for (let i=currentIndex; i<targetIndex; i++) {
          this.moveOrSave(sortedDraggables[i+1], fixPositions[i], this.options.timeExcange)
        }
      }
      draggable.move(fixPositions[targetIndex], this.options.timeEnd, true)
    } else {
      draggable.move(draggable.fixPosition, this.options.timeEnd, true)
    }
  }

  onStart(draggable) {
    let i
    const sortedDraggables = this.getSortedDraggables()
    const fixPositions = sortedDraggables.map((draggable) => draggable.fixPosition)

    const currentIndex = sortedDraggables.indexOf(draggable)
    for (i = currentIndex + 1; i < sortedDraggables.length; i++) {
      this.moveOrSave(sortedDraggables[i], fixPositions[i - 1], this.options.timeExcange)
    }
    sortedDraggables[currentIndex].fixPosition = fixPositions[i - 1]
  }

  getCurrentFixPosition() {
    return this.draggables.map((draggable) => draggable.fixPosition.clone())
  }

  getSortedDraggables() {
    const initPositions = this.draggables.map((draggable) => draggable.initPosition)

    const sortedDraggables = initPositions.map((position) => {
      return this.draggables.filter((draggable) => draggable.fixPosition.compare(position))[0]
    })

    return sortedDraggables
  }

  reset() {
    this.draggables.forEach((draggable) => {
      draggable.move(draggable.initPosition, 0, true, false)
    })
  }

  refresh() {
    this.draggables.forEach((draggable) => {
      draggable.refresh()
    })
  }

  add(draggables) {
    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }
    draggables.forEach(this.initDraggable, this)
    this.draggables = this.draggables.concat(draggables)
  }

  remove(draggables) {
    const initPositions = this.draggables.map((draggable) => draggable.initPosition)
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
        if (draggable.fixPosition !== initPositions[j]) {
          draggable.move(initPositions[j], this.options.timeExcange, true)
        }
        draggable.initPosition = initPositions[j]
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
    return this.getCurrentFixPosition()
  }

  set positions(positions) {
    const message = 'wrong array length'
    if (positions.length === this.draggables.length) {
      positions.forEach((point, i) => {
        this.draggables[i].move(point, 0, true, true)
      }, this)
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
    elements = Array.prototype.slice.call(elements)
    const draggables = elements.map((element) => {
      return new Draggable(element, Object.assign({
        parent: parentElement
      }, options.draggable || {}))
    })
    return new List(draggables, options.list || {})
  }
}

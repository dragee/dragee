import removeItem from './utils/remove-array-item'
import Event from './event'
import { Geometry } from './geometry'
import { Draggable } from './draggable'

const Dragee = { Event } //todo remove after refactore

class List {
  constructor(draggables, options={}) {
    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30,
      getDistance: Geometry.getDistance,
      isDisplacement: false,
      isSortable: true
    }, options)

    this.draggables = draggables
    this.onChange = new Dragee.Event(this)
    if (options.onChange) {
      this.onChange.add(options.onChange)
    }
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
          draggable.onMove.remove(moveHandler)
          return true
        }
      }

      draggable.onEnd.add(() => {
        this.onEndDisplaycement(draggable)
        draggable.onMove.add(moveHandler)
        return true
      })

      draggable.onMove.add(moveHandler)
    } else {
      draggable.onEnd.add(() => {
        this.onEnd(draggable)
        return true
      })
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
    const excangeIndex = Geometry.indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance)

    if (excangeIndex === -1 || excangeIndex === currentIndex) {
      draggable.move(draggable.fixPosition, this.options.timeEnd, true)
    } else {
      this.moveOrSave(this.draggables[excangeIndex], fixPositions[currentIndex], this.options.timeExcange)
      this.draggables[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true)
      this.onChange.fire()
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
    const targetIndex = Geometry.indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance)

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
      draggable.onEnd.reset()
      draggable.onMove.reset() //todo remove reset in future
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
}

function listFactory(parentElement, elements, options={}) {
  const draggableOptions = options.draggable || {}
  const listOptions = options.list || {}
  draggableOptions.parent = draggableOptions.parent || parentElement
  elements = Array.prototype.slice.call(elements)

  const draggables = elements.map((element) => {
    return new Draggable(element, draggableOptions)
  })

  return new List(draggables, listOptions)
}

export { List, listFactory }

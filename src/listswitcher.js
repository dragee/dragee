import Point from './geometry/point'
import {
  indexOfNearestPoint,
  getXDifference
} from './geometry/helpers'
import { Draggable } from './draggable'
import { List } from './list'

class ListSwitcher extends List {
  constructor(draggables, options={}) {
    options.stepOn = options.stepOn || new Point(-50, 0)
    super(draggables, options)
  }

  init() {
    this.draggables.forEach((draggable) => {
      draggable.isOn = false
      draggable.dragEndAction = () => this.onEnd(draggable)
    })
  }

  onEnd(draggable) {
    const fixPositions = this.getCurrentFixPositionWithOff()
    const currentIndex = this.draggables.indexOf(draggable)
    const excangeIndex = indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance)

    if (excangeIndex === -1 || excangeIndex === currentIndex) {
      this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd)
    } else {
      if (this.draggables[excangeIndex].isDragging) {
        this.fixToOff(excangeIndex, fixPositions[currentIndex])
      } else {
        this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange)
      }
      this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd)
      this.emit('list:change')
    }
  }

  moveDraggable(index, position, fixOffPosition, time) {
    const positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)]
    const isOn = indexOfNearestPoint(positions, position, -1, getXDifference)

    if (this.draggables[index].isOn !== !!isOn) {
      this.draggables[index].isOn = !!isOn
      this.emit('list:change')
    }

    this.draggables[index].move(positions[isOn], time, true)
  }

  fixToOff(index, fixOffPosition) {
    this.draggables[index].isOn = false
    this.draggables[index].fixPosition = fixOffPosition
  }

  moveDraggableToOff(index, fixOffPosition, time) {
    this.draggables[index].isOn = false
    this.draggables[index].move(fixOffPosition, time, true)
  }

  getCurrentFixPositionWithOff() {
    return this.draggables.map((draggable) => {
      return draggable.isOn ? draggable.fixPosition.sub(this.options.stepOn) : draggable.fixPosition.clone()
    }, this)
  }

  getSortedDraggables() {
    return this.draggables.map((draggable) => draggable.initPosition)
                          .map((position) => {
                            return this.draggables.filter((draggable) => {
                              return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(this.options.stepOn))
                            }, this)[0]
                          }, this)
  }

  reset() {
    this.draggables.forEach((draggable) => {
      draggable.move(draggable.initPosition, 0, true, false)
      draggable.isOn = false
    })
  }

  get positions() {
    return this.draggables.map((draggable) => {
      const position = draggable.fixPosition.clone()
      position.isOn = draggable.isOn
      return position
    })
  }

  set positions(positions) {
    const message = 'wrong array length'
    if (positions.length === this.draggables.length) {
      positions.forEach((point, i) => {
        this.draggables[i].isOn = point.isOn
        this.draggables[i].move(point, 0, true, true)
      }, this)
    } else {
      throw message
    }
  }
}

function listSwitcherFactory(element, draggableElements, options={}) {
  const draggableOptions = options.draggable || {}
  const listOptions = options.list || {}

  draggableOptions.parent = draggableOptions.parent || element
  draggableElements = Array.prototype.slice.call(draggableElements)

  const draggables = draggableElements.map((element) => {
    return new Draggable(element, draggableOptions)
  })
  return new ListSwitcher(draggables, listOptions)
}

export { listSwitcherFactory, ListSwitcher }

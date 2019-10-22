import Point from './geometry/point'
import {
  indexOfNearestPoint,
  getXDifference
} from './geometry/helpers'
import { Draggable } from './draggable'
import List from './list'

export default class ListSwitcher extends List {
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
    const pinnedPositions = this.getCurrentPinnedPositionWithOff()
    const currentIndex = this.draggables.indexOf(draggable)
    const exchangeIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.options.getDistance)

    if (exchangeIndex === -1 || exchangeIndex === currentIndex) {
      this.moveDraggable(currentIndex, draggable.position, pinnedPositions[currentIndex], this.options.timeEnd)
    } else {
      if (this.draggables[exchangeIndex].isDragging) {
        this.pinnedToOff(exchangeIndex, pinnedPositions[currentIndex])
      } else {
        this.moveDraggableToOff(exchangeIndex, pinnedPositions[currentIndex], this.options.timeExcange)
      }
      this.moveDraggable(currentIndex, draggable.position, pinnedPositions[exchangeIndex], this.options.timeEnd)
      this.emit('list:change')
    }
  }

  moveDraggable(index, position, pinnedOffPosition, time) {
    const positions = [pinnedOffPosition, pinnedOffPosition.add(this.options.stepOn)]
    const isOn = indexOfNearestPoint(positions, position, -1, getXDifference)

    if (this.draggables[index].isOn !== !!isOn) {
      this.draggables[index].isOn = !!isOn
      this.emit('list:change')
    }

    this.draggables[index].pinPosition(positions[isOn], time)
  }

  pinnedToOff(index, pinnedOffPosition) {
    this.draggables[index].isOn = false
    this.draggables[index].pinnedPosition = pinnedOffPosition
  }

  moveDraggableToOff(index, pinnedOffPosition, time) {
    this.draggables[index].isOn = false
    this.draggables[index].pinPosition(pinnedOffPosition, time)
  }

  getCurrentPinnedPositionWithOff() {
    return this.draggables.map((draggable) => {
      return draggable.isOn ? draggable.pinnedPosition.sub(this.options.stepOn) : draggable.pinnedPosition.clone()
    }, this)
  }

  getSortedDraggables() {
    return this.draggables.map((draggable) => draggable.initialPosition)
                          .map((position) => {
                            return this.draggables.filter((draggable) => {
                              return draggable.pinnedPosition.compare(position) || draggable.pinnedPosition.compare(position.add(this.options.stepOn))
                            }, this)[0]
                          }, this)
  }

  reset() {
    this.draggables.forEach((draggable) => {
      draggable.resetPositionToInitial()
      draggable.isOn = false
    })
  }

  get positions() {
    return this.draggables.map((draggable) => {
      const position = draggable.pinnedPosition.clone()
      position.isOn = draggable.isOn
      return position
    })
  }

  set positions(positions) {
    const message = 'wrong array length'
    if (positions.length === this.draggables.length) {
      positions.forEach((point, i) => {
        this.draggables[i].isOn = point.isOn
        this.draggables[i].pinPosition(point, 0)
      }, this)
    } else {
      throw message
    }
  }

  static factory(parentElement, elements, options={}) {
    elements = Array.prototype.slice.call(elements)
    const draggables = elements.map((element) => {
      return new Draggable(element, Object.assign({
        parent: parentElement
      }, options.draggable || {}))
    })
    return new ListSwitcher(draggables, options.list || {})
  }
}

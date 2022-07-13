import List from './list'
import { indexOfNearestPoint, getYDifference } from './geometry/distances'

import Draggable from './draggable'

const arrayMove = (array, from, to) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
}

export default class BubblingList extends List {
  constructor(draggables, options={}) {
    super(draggables, options)
    this.autoDetectVerticalGap()
    this.autoDetectStartPosition()
  }

  autoDetectVerticalGap() {
    if (this.draggables.length >= 2 && !this.verticalGap) {
      const sorted = this.getSortedDraggables()

      this.verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y
    } else {
      this.verticalGap = 0
    }
  }

  autoDetectStartPosition() {
    if (this.draggables.length >= 1 && !this.startPosition) {
      this.startPosition = this.draggables[0].pinnedPosition
    }
  }

  add(draggables) {
    super.add(draggables)
    this.autoDetectStartPosition()
    this.autoDetectVerticalGap()
  }

  onMove(draggable) {
    const sortedDraggables = this.getSortedDraggables()
    const pinnedPositions = sortedDraggables.map((draggable) => draggable.pinnedPosition)

    const currentIndex = sortedDraggables.indexOf(draggable)
    const targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.distanceFunc)

    if (targetIndex !== -1 && currentIndex !== targetIndex) {
      arrayMove(sortedDraggables, currentIndex, targetIndex)
      this.bubbling(sortedDraggables, draggable)
      this.changedDuringIteration = true
    }
  }

  bubbling(sortedDraggables, currentDraggable) {
    const currentPosition = this.startPosition.clone()
    sortedDraggables ||= this.getSortedDraggables()

    sortedDraggables.forEach((draggable) => {
      if (!draggable.pinnedPosition.compare(currentPosition)) {
        if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
          draggable.pinnedPosition = currentPosition.clone()
        } else {
          draggable.pinPosition(currentPosition, (draggable === currentDraggable) ? 0 : this.options.timeExcange)
        }
      }

      currentPosition.y = currentPosition.y + draggable.getSize().y + this.verticalGap
    })
  }

  remove(draggables) {
    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }

    draggables.forEach((draggable) => this.releaseDraggable(draggable))
    this.draggables = this.draggables.filter((d) => !draggables.includes(d))

    this.draggables.forEach((d) => d.startPositioning())

    this.autoDetectStartPosition()
    this.bubbling()
  }

  get distanceFunc() {
    return this.options.getDistance || getYDifference
  }

  static factory(containerElement, elements, options={}) {
    const draggables = Array.from(elements).map((element) => {
      return new Draggable(element, Object.assign({
        container: containerElement
      }, options.draggable || {}))
    })

    return new BubblingList(draggables, Object.assign({
      container: containerElement
    }, options.list || {}))
  }
}

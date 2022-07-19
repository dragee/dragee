import List from './list'
import { indexOfNearestPoint, getYDifference } from './geometry/distances'
import Point from './geometry/point'

import Draggable from './draggable'

const arrayMove = (array, from, to) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
}

export default class BubblingList extends List {
  autoDetectVerticalGap() {
    if (!this._verticalGap && !this.options.verticalGap && this.draggables.length >= 2) {
      const sorted = this.getSortedDraggables()
      this._verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y
    }
  }

  autoDetectStartPosition() {
    if (this.draggables.length >= 1 && !this.startPosition) {
      this.startPosition = this.draggables[0].pinnedPosition
    }
  }

  initDraggable(draggable) {
    super.initDraggable(draggable)
    draggable.on('drag:start', () => this.onDragStart(draggable))
  }

  onDragStart(draggable) {
    this.autoDetectVerticalGap()
    this.autoDetectStartPosition()
    this.cachedSortedDraggables = this.getSortedDraggables()
    this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable)
  }

  onMove(draggable) {
    const prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1]
    const nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1]
    const currentPosition = draggable.pinnedPosition

    let currentOrder
    let targetIndex

    if(draggable.upDirection && prevDraggable) {
      currentOrder = [prevDraggable, draggable].map((d) => d.pinnedPosition)
      targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc)

      if (targetIndex === 0) {
        if(draggable.shouldUseNativeDragAndDrop()) {
          draggable.pinPosition(prevDraggable.pinnedPosition)
        } else {
          draggable.pinnedPosition = prevDraggable.pinnedPosition.clone()
        }
        prevDraggable.pinPosition(new Point(
          currentPosition.x,
          draggable.pinnedPosition.y + draggable.getSize().y + this.verticalGap
        ), this.options.timeExcange)
        arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable)
        this.onMove(draggable)
        this.changedDuringIteration = true
      }
    } else if(draggable.downDirection && nextDraggable) {
      currentOrder = [draggable, nextDraggable].map((d) => d.pinnedPosition)
      targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc)

      if(targetIndex === 1) {
        nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange)
        const draggableNewPosition = new Point(
          nextDraggable.pinnedPosition.x,
          nextDraggable.pinnedPosition.y + nextDraggable.getSize().y + this.verticalGap
        )
        if(draggable.shouldUseNativeDragAndDrop()) {
          draggable.pinPosition(draggableNewPosition)
        } else {
          draggable.pinnedPosition = draggableNewPosition
        }
        arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable++, this.indexOfActiveDraggable)
        this.onMove(draggable)
        this.changedDuringIteration = true
      }
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

    if(this.draggables.length > 0) {
      this.autoDetectVerticalGap()
      this.autoDetectStartPosition()
      this.bubbling()
    }
  }

  get distanceFunc() {
    return this.options.getDistance || getYDifference
  }

  get verticalGap() {
    if(this.options.verticalGap) {
      return this.options.verticalGap
    } else {
      this.autoDetectVerticalGap()
      return this._verticalGap || 0
    }
  }

  set verticalGap(gapValue) {
    this.options.verticalGap = gapValue
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

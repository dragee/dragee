import List from './list'
import { indexOfNearestPoint, getXDifference, getYDifference } from './geometry/distances'

import Draggable from './draggable'

const arrayMove = (array, from, to) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
}

export default class BubblingList extends List {
  autoDetectGap() {
    if (this._gap !== undefined || this.explicitGap !== undefined || this.draggables.length < 2) return

    const axis = this.axis
    const sorted = this.getSortedDraggables()
    // Skip items already detached from the DOM (e.g. removed before `remove()`): their size is 0
    const index = sorted.findIndex((d, i) => i < sorted.length - 1 && d.element.isConnected)
    if (index === -1) return

    const [current, next] = [sorted[index], sorted[index + 1]]
    this._gap = next.pinnedPosition[axis] - current.pinnedPosition[axis] - current.getSize()[axis]
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
    this.autoDetectGap()
    this.autoDetectStartPosition()
    this.cachedSortedDraggables = this.getSortedDraggables()
    this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable)
  }

  onMove(draggable) {
    if (this.swappingDisabled) return

    const prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1]
    const nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1]
    const currentPosition = draggable.pinnedPosition

    let currentOrder
    let targetIndex

    if(this.isMovingBackward(draggable) && prevDraggable) {
      currentOrder = [prevDraggable, draggable].map((d) => d.pinnedPosition)
      targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc)

      if (targetIndex === 0) {
        if(draggable.shouldUseNativeDragAndDrop()) {
          draggable.pinPosition(prevDraggable.pinnedPosition)
        } else {
          draggable.pinnedPosition = prevDraggable.pinnedPosition.clone()
        }
        const prevNewPosition = this.nextPosition(draggable.pinnedPosition, draggable)
        prevNewPosition[this.crossAxis] = currentPosition[this.crossAxis]
        prevDraggable.pinPosition(prevNewPosition, this.options.timeExcange)
        arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable)
        this.onMove(draggable)
        this.changedDuringIteration = true
      }
    } else if(this.isMovingForward(draggable) && nextDraggable) {
      currentOrder = [draggable, nextDraggable].map((d) => d.pinnedPosition)
      targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc)

      if(targetIndex === 1) {
        nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange)
        const draggableNewPosition = this.nextPosition(nextDraggable.pinnedPosition, nextDraggable)
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
    let currentPosition = this.startPosition.clone()
    sortedDraggables ||= this.getSortedDraggables()

    sortedDraggables.forEach((draggable) => {
      if (!draggable.pinnedPosition.compare(currentPosition)) {
        if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
          draggable.pinnedPosition = currentPosition.clone()
        } else {
          draggable.pinPosition(currentPosition, (draggable === currentDraggable) ? 0 : this.options.timeExcange)
        }
      }

      currentPosition = this.nextPosition(currentPosition, draggable)
    })
  }

  remove(draggables) {
    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }

    // Detect layout before removal, otherwise the gap is measured across the hole
    this.autoDetectGap()
    this.autoDetectStartPosition()

    draggables.forEach((draggable) => this.releaseDraggable(draggable))
    this.draggables = this.draggables.filter((d) => !draggables.includes(d))

    this.draggables.forEach((d) => d.startPositioning())

    if(this.draggables.length > 0) {
      this.bubbling()
    }
  }

  // Position right after `draggable` placed at `position`, along the list axis
  nextPosition(position, draggable) {
    const next = position.clone()
    next[this.axis] = position[this.axis] + draggable.getSize()[this.axis] + this.gap
    return next
  }

  isMovingBackward(draggable) {
    return this.axis === 'x' ? draggable.leftDirection : draggable.upDirection
  }

  isMovingForward(draggable) {
    return this.axis === 'x' ? draggable.rightDirection : draggable.downDirection
  }

  get axis() {
    return this.options.axis === 'x' ? 'x' : 'y'
  }

  get crossAxis() {
    return this.axis === 'x' ? 'y' : 'x'
  }

  get distanceFunc() {
    return this.options.getDistance || (this.axis === 'x' ? getXDifference : getYDifference)
  }

  get explicitGap() {
    return this.options.gap ?? this.options.verticalGap
  }

  get gap() {
    if (this.explicitGap !== undefined) return this.explicitGap

    this.autoDetectGap()
    return this._gap || 0
  }

  set gap(gapValue) {
    this.options.gap = gapValue
  }

  // Deprecated alias for `gap`
  get verticalGap() {
    return this.gap
  }

  set verticalGap(gapValue) {
    this.gap = gapValue
  }
}

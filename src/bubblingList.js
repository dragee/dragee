import List from './list'
import { indexOfNearestPoint, getYDifference } from './geometry/distances'
import Point from './geometry/point'

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

  onResize() {
    super.onResize()
    this.autoDetectVerticalGap()
  }

  add(draggables) {
    super.add(draggables)
    this.autoDetectStartPosition()
    this.autoDetectVerticalGap()
  }

  onDragStart(draggable) {
    this.cachedSortedDraggables = this.getSortedDraggables()
    this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable)
  }

  onMove(draggable) {
    const prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1]
    const nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1]
    const currentOrder = [prevDraggable, draggable, nextDraggable].filter(Boolean).map((d) => d.pinnedPosition)
    const currentPosition = draggable.pinnedPosition

    const targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc)

    if(prevDraggable && targetIndex === 0) {
      if(draggable.shouldUseNativeDragAndDrop()) {
        draggable.pinPosition(prevDraggable.pinnedPosition)
      } else {
        draggable.pinnedPosition = prevDraggable.pinnedPosition.clone()
      }
      prevDraggable.pinPosition(new Point(
        currentPosition.x,
        draggable.pinnedPosition.y + draggable.getSize().y + (this.verticalGap || 0)
      ), this.options.timeExcange)
      arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable)
      this.onMove(draggable)
      this.changedDuringIteration = true
    } else if(nextDraggable && (targetIndex === 2 || (targetIndex === 1 && !prevDraggable))) {
      nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange)
      const draggableNewPosition = new Point(
        nextDraggable.pinnedPosition.x,
        nextDraggable.pinnedPosition.y + nextDraggable.getSize().y + (this.verticalGap || 0)
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

      currentPosition.y = currentPosition.y + draggable.getSize().y + (this.verticalGap || 0)
    })
  }

  remove(draggables) {
    if (!(draggables instanceof Array)) {
      draggables = [draggables]
    }

    draggables.forEach((draggable) => this.releaseDraggable(draggable))
    this.draggables = this.draggables.filter((d) => !draggables.includes(d))

    this.draggables.forEach((d) => d.startPositioning())
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

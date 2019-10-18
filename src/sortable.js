import { List } from './list'
import { getYDifference } from './geometry/helpers'
import { Draggable } from './draggable'

class Sortable extends List {
  constructor(draggables, options={}) {
    options.getDistance = options.getDistance || getYDifference
    super(draggables, options)
  }

  initDraggable(draggable) {
    draggable.enable = this._enable
    if (this.options.isSortable) {
      draggable.onMove.add(() => {
        if (draggable.isDragging) {
          this.exchangeDraggableIfPossible(draggable)
          return true
        }
      })

      draggable.onEnd.add(() => {
        draggable.move(draggable.fixPosition, this.options.timeEnd)
      })
    }
  }

  exchangeDraggableIfPossible(draggable) {
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
        this.exchangeDraggableIfPossible(draggable)
      }
    }

    if (draggable.upDirection && prevDraggable) {
      const distance = this.options.getDistance(draggable.position, prevDraggable.position)
      if (distance < this.options.radius) {
        draggable.fixPosition = prevDraggable.fixPosition
        this.moveOrSave(prevDraggable, fixPosition, this.options.timeExcange);
        [this.draggables[currentIndex], this.draggables[currentIndex - 1]] = [this.draggables[currentIndex - 1], this.draggables[currentIndex]]
        this.exchangeDraggableIfPossible(draggable)
      }
    }
  }
}

function sortableFactory(parentElement, elements, options={}) {
  const draggableOptions = options.draggable || {}
  const listOptions = options.list || {}
  draggableOptions.parent = draggableOptions.parent || parentElement
  elements = Array.prototype.slice.call(elements)

  const draggables = elements.map((element) => {
    return new Draggable(element, draggableOptions)
  })

  return new Sortable(draggables, listOptions)
}

export { Sortable, sortableFactory }

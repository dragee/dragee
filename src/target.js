import range from './utils/range.js'
import removeItems from 'remove-array-items'
import getDefaultParent from './utils/getdefaultparent'
import Event from './event'
import { Geometry } from './geometry'
import { positionType, sortingFactory, positionFactory } from './positioning'
import { scopes, defaultScope } from './scope'

const Dragee = { positionType,  positionFactory, sortingFactory, scopes, Event }//todo remove after refactore

const addToDefaultScope = function(target) {
  defaultScope.addTarget(target)
}

class Target {
  constructor(element, draggables, options = {}) {
    const target = this
    const parent = options.parent || getDefaultParent(element)

    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      parent: parent,
      sorting: Dragee.sortingFactory(Dragee.positionType.floatLeft)(80, Geometry.transformedSpaceDistanceFactory({ x: 1, y: 4 })),
      positioning: Dragee.positionFactory(Dragee.positionType.floatLeft)(this.getRectangle.bind(this), { removable: true })
    }, options)

    this.element = element
    draggables.forEach((draggable) => draggable.targets.push(target))
    this.draggables = draggables
    this.onAdd = new Dragee.Event(this)
    this.beforeAdd = new Dragee.Event(this)
    this.onRemove = new Dragee.Event(this)

    if (options.onRemove) {
      this.onRemove.add(options.onRemove)
    }

    if (options.onAdd) {
      this.onAdd.add(options.onAdd)
    }

    if (options.beforeAdd) {
      this.beforeAdd.add(options.beforeAdd)
    }

    Target.onCreate.fire(this)

    this.init()
  }

  init() {
    let rectangles, indexesOfNew

    this.innerDraggables = this.draggables.filter((draggable) => {
      let element = draggable.element.parentNode
      while (element) {
        if (element === this.element) {
          return true
        }
        element = element.parentNode
      }
      return false
    })

    if (this.innerDraggables.length) {
      indexesOfNew = range(this.innerDraggables.length)
      rectangles = this.options.positioning(this.innerDraggables.map((draggable) => {
        return draggable.getRectangle()
      }), indexesOfNew)
      this.setPosition(rectangles, indexesOfNew)
      this.innerDraggables.forEach((draggable) => this.onAdd.fire(draggable))
    }
  }

  getRectangle() {
    return Geometry.createRectangleFromElement(
      this.element,
      this.options.parent,
      this.options.isContentBoxSize,
      true
    )
  }

  catchDraggable(draggable) {
    if (this.options.catchDraggable) {
      return this.options.catchDraggable(this, draggable)
    } else {
      const targetRectangle = this.getRectangle()
      const draggableSquare = draggable.getRectangle().getSquare()

      return draggableSquare < targetRectangle.getSquare()
              && targetRectangle.includePoint(draggable.getCenter())
    }
  }

  getPosition() {
    return this.getRectangle().position
  }

  getSize() {
    return this.getRectangle().size
  }

  destroy() {
    Dragee.scopes.forEach((scope) => removeItems(scope.targets, this))
  }

  refresh() {
    const rectangles = this.options.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [])
    this.setPosition(rectangles, [], 0)
  }

  onEnd(draggable) {
    const newDraggablesIndex = []
    const includePoint = this.getRectangle().includePoint(draggable.getPosition())

    if (!includePoint) {
      if (this.getRectangle().includePoint(draggable.getCenter())) {
        draggable.position = draggable.getCenter().clone()
      } else {
        return false
      }
    }

    this.beforeAdd.fire(draggable)

    this.innerDraggables = this.options.sorting(this.innerDraggables, [draggable], newDraggablesIndex)
    const rectangles = this.options.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), newDraggablesIndex, draggable)

    this.setPosition(rectangles, newDraggablesIndex)
    if (this.innerDraggables.indexOf(draggable) !== -1) {
      this.addRemoveOnMove(draggable)
    }
    return true
  }

  setPosition(rectangles, indexesOfNew, time) {
    this.innerDraggables.slice(0).forEach((draggable, i) => {
      const rect = rectangles[i],
        timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange

      if (rect.removable) {
        draggable.move(draggable.initPosition, timeEnd, true, true)
        removeItems(this.innerDraggables, draggable)

        this.onRemove.fire(draggable)
      } else {
        draggable.move(rect.position, timeEnd, true, true)
      }
    })
  }

  add(draggable, time) {
    const newDraggablesIndex = this.innerDraggables.length

    this.beforeAdd.fire(draggable)

    this.pushInnerDraggable(draggable)
    const rectangles = this.options.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), newDraggablesIndex, draggable)

    this.setPosition(rectangles, [newDraggablesIndex], time || 0)
    if (this.innerDraggables.indexOf(draggable) !== -1) {
      this.addRemoveOnMove(draggable)
    }
  }

  pushInnerDraggable(draggable) {
    if (this.innerDraggables.indexOf(draggable)===-1) {
      this.innerDraggables.push(draggable)
    }
  }

  addRemoveOnMove(draggable) {
    draggable.onMove.add(this.removeHandler = () => {
      this.remove(draggable)
    })

    this.onAdd.fire(draggable)
  }

  remove(draggable) {
    draggable.onMove.remove(this.removeHandler)

    const index = this.innerDraggables.indexOf(draggable)
    if (index === -1) {
      return
    }

    this.innerDraggables.splice(index, 1)

    const rectangles = this.options.positioning(this.innerDraggables.map((draggable) => {
      return draggable.getRectangle()
    }), [])

    this.setPosition(rectangles, [])
    this.onRemove.fire(draggable)
  }

  reset() {
    this.innerDraggables.forEach((draggable) => {
      draggable.move(draggable.initPosition, 0, true, true)
      this.onRemove.fire(draggable)
    })
    this.innerDraggables = []
  }

  getSortedDraggables() {
    this.innerDraggables.slice()
  }
}

Target.onCreate = new Dragee.Event(Target, { isReverse: true, isStopOnTrue: true })
Target.onCreate.add(addToDefaultScope)

export { Target }

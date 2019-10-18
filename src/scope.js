import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'
import { Draggable } from './draggable'
import { Target } from './target'

const scopes = []

class Scope {
  constructor(draggables, targets, options={}) {
    scopes.forEach((scope) => {
      if (draggables) {
        draggables.forEach((draggable) => {
          removeItem(scope.draggables, draggable)
        })
      }

      if (targets) {
        targets.forEach((target) => {
          removeItem(scope.targets, target)
        })
      }
    })

    this.draggables = draggables || []
    this.targets = targets || []
    scopes.push(this)
    this.options = {
      timeEnd: (options.timeEnd) || 400
    }

    this.onChange = new EventEmitter(this)
    if (options.onChange) {
      this.onChange.add(options.onChange)
    }
    this.init()
  }

  init() {
    this.draggables.forEach((draggable) => {
      draggable.onEnd.add(() => {
        return this.onEnd(draggable)
      })
    })
  }

  addDraggable(draggable) {
    this.draggables.push(draggable)
    draggable.onEnd.unshift(() => {
      return this.onEnd(draggable)
    })
  }

  addTarget(target) {
    this.targets.push(target)
  }

  onEnd(draggable) {
    const shotTargets = this.targets.filter((target) => {
      return target.draggables.indexOf(draggable) !== -1
    }).filter((target) => {
      return target.catchDraggable(draggable)
    }).sort((a, b) => {
      return a.getRectangle().getSquare() - b.getRectangle().getSquare()
    })

    if (shotTargets.length) {
      shotTargets[0].onEnd(draggable)
    } else if (draggable.targets.length) {
      draggable.move(draggable.initPosition, this.options.timeEnd, true, true)
    }
    this.onChange.fire()
    return true
  }

  reset() {
    this.targets.forEach((target) => target.reset())
  }

  refresh() {
    this.draggables.forEach((draggable) => draggable.refresh())
    this.targets.forEach((target) => target.refresh())
  }

  get positions() {
    return this.targets.map((target) => {
      return target.innerDraggables.map((draggable) => this.draggables.indexOf(draggable))
    })
  }

  set positions(positions) {
    const message = 'wrong array length'
    if (positions.length === this.targets.length) {
      this.targets.forEach((target) => target.reset())

      positions.forEach((targetIndexes, i) => {
        targetIndexes.forEach((index) => {
          this.targets[i].add(this.draggables[index])
        })
      })
    } else {
      throw message
    }
  }
}

const defaultScope = new Scope()

function scope(fn) {
  const currentScope = new Scope()
  const addDraggableToScope = function(draggable) {
    currentScope.addDraggable(draggable)
    return true
  }
  const addTargetToScope = function(target) {
    currentScope.addTarget(target)
    return true
  }

  Draggable.onCreate.add(addDraggableToScope)
  Target.onCreate.add(addTargetToScope)
  fn.call()
  Draggable.onCreate.remove(addDraggableToScope)
  Target.onCreate.remove(addTargetToScope)
  return currentScope
}

function scopeFactory(parentElement, draggableElements, targetElements, options={}) {
  const draggableOptions = options.draggable || {}
  const targetOptions = options.target || {}
  const scopeOptions = options.scope || {}
  draggableOptions.parent = draggableOptions.parent || parentElement
  targetOptions.parent = targetOptions.parent || parentElement
  draggableElements = Array.prototype.slice.call(draggableElements)
  targetElements = Array.prototype.slice.call(targetElements)

  const draggables = draggableElements.map((element) => {
    return new Draggable(element, draggableOptions)
  })

  const targets = targetElements.map((element) => {
    return new Target(element, draggables, targetOptions)
  })
  return new Scope(draggables, targets, scopeOptions)
}

export { scopes, defaultScope, Scope, scopeFactory, scope }

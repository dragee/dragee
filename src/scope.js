import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'
import { Draggable } from './draggable'
import { Target } from './target'

const scopes = []

class Scope extends EventEmitter {
  constructor(draggables, targets, options={}) {
    super(undefined, options)
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

    this.init()
  }

  init() {
    this.draggables.forEach((draggable) => {
      draggable.dragEndAction = () => this.onEnd(draggable)
    })
  }

  addDraggable(draggable) {
    this.draggables.push(draggable)
    draggable.dragEndAction = () => this.onEnd(draggable)
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

    this.emit('scope:change')
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
    Draggable.emitter.interrupt()
  }

  const addTargetToScope = function(target) {
    currentScope.addTarget(target)
    Draggable.emitter.interrupt()
  }

  Draggable.emitter.prependOn('draggable:create', addDraggableToScope)
  Target.emitter.prependOn('target:create', addTargetToScope)
  fn.call()
  Draggable.emitter.unsubscribe('draggable:create', addDraggableToScope)
  Target.emitter.unsubscribe('target:create', addTargetToScope)
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

  const draggables = draggableElements.map((element) => new Draggable(element, draggableOptions))
  const targets = targetElements.map((element) => new Target(element, draggables, targetOptions))
  return new Scope(draggables, targets, scopeOptions)
}

export { scopes, defaultScope, Scope, scopeFactory, scope }

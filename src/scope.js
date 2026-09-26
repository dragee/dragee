import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'

const scopes = []
const scopeStack = []

class Scope extends EventEmitter {
  constructor(draggables, targets, options={}) {
    super(options)
    scopes.forEach((scope) => {
      if (draggables) {
        draggables.forEach((draggable) => scope.releaseDraggable(draggable))
      }

      if (targets) {
        targets.forEach((target) => {
          removeItem(scope.targets, target)
        })
      }
    })

    this.draggables = draggables || []
    this.targets = targets || []
    this.dragEndActionReleases = new Map()
    scopes.push(this)
    this.options = {
      timeEnd: (options.timeEnd) || 400
    }

    this.init()
  }

  init() {
    this.draggables.forEach((draggable) => this.initDraggable(draggable))
  }

  addDraggable(draggable) {
    this.draggables.push(draggable)
    this.initDraggable(draggable)
  }

  initDraggable(draggable) {
    this.dragEndActionReleases.set(draggable, draggable.overrideDragEndAction(() => this.onEnd(draggable)))
  }

  releaseDraggable(draggable) {
    const release = this.dragEndActionReleases.get(draggable)
    if (release) {
      release()
      this.dragEndActionReleases.delete(draggable)
    }
    removeItem(this.draggables, draggable)
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
      draggable.pinPosition(draggable.initialPosition, this.options.timeEnd)
    }

    this.emit('scope:change', draggable)
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

function currentScope() {
  return scopeStack[scopeStack.length - 1] || defaultScope
}

function scope(fn) {
  const currentScope = new Scope()

  scopeStack.push(currentScope)
  try {
    fn.call()
  } finally {
    scopeStack.pop()
  }
  return currentScope
}

export { scopes, defaultScope, currentScope, Scope, scope }

import removeItem from './utils/remove-array-item'
import EventEmitter from './eventEmitter'

const scopes = []
const scopeStack = []

class Scope extends EventEmitter {
  constructor(draggables, trays, options={}) {
    super(options)
    scopes.forEach((scope) => {
      if (draggables) {
        draggables.forEach((draggable) => scope.releaseDraggable(draggable))
      }

      if (trays) {
        trays.forEach((tray) => scope.releaseTray(tray))
      }
    })

    this.draggables = draggables || []
    this.trays = trays || []
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
    scopes.forEach((scope) => scope.releaseDraggable(draggable))
    this.draggables.push(draggable)
    this.initDraggable(draggable)
  }

  initDraggable(draggable) {
    draggable.dragEndAction = () => this.onEnd(draggable)
  }

  releaseDraggable(draggable) {
    removeItem(this.draggables, draggable)
  }

  addTray(tray) {
    scopes.forEach((scope) => scope.releaseTray(tray))
    this.trays.push(tray)
  }

  releaseTray(tray) {
    removeItem(this.trays, tray)
  }

  onEnd(draggable) {
    const shotTrays = this.trays.filter((tray) => {
      return tray.draggables.indexOf(draggable) !== -1
    }).filter((tray) => {
      return tray.catchDraggable(draggable)
    }).sort((a, b) => {
      return a.getRectangle().getSquare() - b.getRectangle().getSquare()
    })

    const isAccepted = shotTrays.length > 0 && shotTrays[0].onEnd(draggable)

    if (!isAccepted && draggable.trays.length) {
      draggable.pinPosition(draggable.initialPosition, this.options.timeEnd)
    }

    this.emit('scope:change', { scope: this, draggable })
  }

  reset() {
    this.trays.forEach((tray) => tray.reset())
  }

  refresh() {
    this.draggables.forEach((draggable) => draggable.refresh())
    this.trays.forEach((tray) => tray.refresh())
  }

  get positions() {
    return this.trays.map((tray) => {
      return tray.innerDraggables.map((draggable) => this.draggables.indexOf(draggable))
    })
  }

  set positions(positions) {
    const message = 'wrong array length'
    if (positions.length === this.trays.length) {
      this.trays.forEach((tray) => tray.reset())

      positions.forEach((trayIndexes, i) => {
        trayIndexes.forEach((index) => {
          this.trays[i].add(this.draggables[index])
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

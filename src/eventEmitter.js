export default class EventEmitter {
  constructor (options = {}) {
    this.context = options.context || this
    this.events = {}

    if (options.on) {
      for (const [eventName, fn] of Object.entries(options.on)) {
        this.on(eventName, fn)
      }
    }
  }

  emit(eventName) {
    this.interrupted = false
    const args = [].slice.call(arguments, 1)

    if (!this.events[eventName]) return

    for (const func of this.events[eventName]) {
      func.apply(this.context, args)
      if (this.interrupted) {
        return
      }
    }
  }

  interrupt() {
    this.interrupted = true
  }

  on(eventName, fn) {
    if (!this.events) this.events = {}
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(fn)
  }

  off(eventName, fn) {
    if (this.events[eventName]) {
      if (fn) {
        const index = this.events[eventName].indexOf(fn)
        this.events[eventName].splice(index, 1)
      } else {
        this.events[eventName] = []
      }
    }
  }

  prependOn(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].unshift(fn)
  }

  reset () {
    this.events = {}
  }

  get emitter () {
    return this
  }
}

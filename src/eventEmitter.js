export default class EventEmitter {
  constructor (options = {}) {
    this.events = {}

    if (options && options.on) {
      for (const [eventName, fn] of Object.entries(options.on)) {
        this.on(eventName, fn)
      }
    }
  }

  emit(eventName, ...args) {
    this.interrupted = false

    if (!this.events[eventName]) return

    // Iterate over a copy so listeners can unsubscribe while the event is being emitted
    for (const func of this.events[eventName].slice()) {
      func(...args)
      if (this.interrupted) {
        return
      }
    }
  }

  interrupt() {
    this.interrupted = true
  }

  on(eventName, fn) {
    this.listeners(eventName).push(fn)
    return () => this.off(eventName, fn)
  }

  prependOn(eventName, fn) {
    this.listeners(eventName).unshift(fn)
    return () => this.off(eventName, fn)
  }

  once(eventName, fn) {
    const wrapper = (...args) => {
      this.off(eventName, wrapper)
      fn(...args)
    }
    wrapper.listener = fn
    return this.on(eventName, wrapper)
  }

  off(eventName, fn) {
    if (!this.events[eventName]) return

    const index = this.events[eventName].findIndex((listener) => listener === fn || listener.listener === fn)
    if (index !== -1) {
      this.events[eventName].splice(index, 1)
    }
  }

  // Deprecated alias for `off`
  unsubscribe(eventName, fn) {
    this.off(eventName, fn)
  }

  listeners(eventName) {
    return (this.events[eventName] ||= [])
  }

  resetEmitter () {
    this.events = {}
  }

  resetOn(eventName) {
    this.events[eventName] = []
  }
}

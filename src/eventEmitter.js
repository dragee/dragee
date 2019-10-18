export default class EventEmitter {
  constructor (context, options = {}) {
    this.context = context || this
    this.events = {}

    if (options && options.on) {
      for (const [eventName, fn] of Object.entries(options.on)) {
        this.on(eventName, fn)
      }
    }
  }

  emit(eventName) {
    this.stopped = false
    const args = [].slice.call(arguments, 1)

    if (!this.events[eventName]) return

    for (let i = 0; i < this.events[eventName].length; i++) {
      this.events[eventName][i].apply(this.context, args)
      if (this.stopped) {
        return
      }
    }
  }

  stopPropagation() {
    this.stopped = true
  }

  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(fn)
  }

  prependOn(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].unshift(fn)
  }

  unsubscribe(eventName, fn) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(fn)
      this.events[eventName].splice(index, 1)
    }
  }

  resetEmitter () {
    this.events = {}
  }

  resetOn(eventName) {
    this.events[eventName] = []
  }
}

export default class EventEmitter extends EventTarget {
  constructor (options = {}) {
    super()

    if (options && options.on) {
      Object.entries(options.on).forEach(([eventName, fn]) => this.on(eventName, fn))
    }
  }

  emit(eventName, detail, { cancelable = false } = {}) {
    return this.dispatchEvent(new CustomEvent(eventName, { detail, cancelable }))
  }

  on(eventName, fn, options) {
    this.addEventListener(eventName, fn, options)
    return () => this.off(eventName, fn)
  }

  once(eventName, fn) {
    return this.on(eventName, fn, { once: true })
  }

  off(eventName, fn) {
    this.removeEventListener(eventName, fn)
  }

  // Deprecated alias for `off`
  unsubscribe(eventName, fn) {
    this.off(eventName, fn)
  }
}

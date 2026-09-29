import DrageeEvent from './utils/dragee-event'
import dispatchDomEvent from './utils/dispatch-dom-event'

export default class EventEmitter extends EventTarget {
  constructor (options = {}) {
    super()

    if (options && options.on) {
      Object.entries(options.on).forEach(([eventName, fn]) => this.on(eventName, fn))
    }
  }

  emit(eventName, detail, { cancelable = false } = {}) {
    const event = new DrageeEvent(eventName, detail, { cancelable })
    this.dispatchEvent(event)
    return event
  }

  emitWithDomEvent(element, eventName, domEventName, detail, { cancelable = false } = {}) {
    const event = this.emit(eventName, detail, { cancelable })
    if (this.domEvents && dispatchDomEvent(element, domEventName, detail, { cancelable }).canceled) {
      event.cancel()
    }
    return event
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

  unsubscribe(eventName, fn) {
    this.off(eventName, fn)
  }

  get domEvents() {
    return !this.options || this.options.domEvents !== false
  }
}

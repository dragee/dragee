import EventEmitter from '../src/eventEmitter'
import * as Root from '../src/index'

describe('EventEmitter', () => {
  let emitter

  beforeEach(() => {
    emitter = new EventEmitter()
  })

  describe('on / emit', () => {
    it('should call listeners in order with an event carrying the detail', () => {
      const calls = []
      emitter.on('test', (event) => calls.push(['first', event.type, event.detail]))
      emitter.on('test', (event) => calls.push(['second', event.type, event.detail]))

      emitter.emit('test', { value: 42 })

      expect(calls).toEqual([
        ['first', 'test', { value: 42 }],
        ['second', 'test', { value: 42 }]
      ])
    })

    it('should put the event data on the event itself', () => {
      const received = []
      emitter.on('test', ({ value, detail }) => received.push([value, detail]))

      emitter.emit('test', { value: 42 })

      expect(received).toEqual([[42, { value: 42 }]])
    })

    it('should register initial listeners from the on option', () => {
      const fn = jest.fn()
      const em = new EventEmitter({ on: { init: fn } })
      em.emit('init')
      expect(fn).toHaveBeenCalledTimes(1)
    })
  })

  describe('on', () => {
    it('should return a function that removes the listener', () => {
      const fn = jest.fn()
      const off = emitter.on('test', fn)
      off()
      emitter.emit('test')
      expect(fn).not.toHaveBeenCalled()
    })
  })

  describe('once', () => {
    it('should call the listener only for the first emit', () => {
      const fn = jest.fn()
      emitter.once('test', fn)
      emitter.emit('test', 1)
      emitter.emit('test', 2)
      expect(fn).toHaveBeenCalledTimes(1)
      expect(fn.mock.calls[0][0].detail).toBe(1)
    })
  })
})

describe('EventEmitter subclass from the package root', () => {
  class Widget extends Root.EventEmitter {
    constructor(element, options = {}) {
      super(options)
      this.element = element
    }

    change(value) {
      return this.emitWithDomEvent(this.element, 'widget:change', 'widget-change', { widget: this, value }, { cancelable: true })
    }
  }

  function createWidget(options) {
    const element = document.createElement('div')
    document.body.appendChild(element)
    return new Widget(element, options)
  }

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it.each([
    [{}, 1],
    [{ domEvents: false }, 0]
  ])('should dispatch the DOM event depending on the options %p', (options, domEventCount) => {
    const widget = createWidget(options)
    const onDomChange = jest.fn()
    document.body.addEventListener('widget-change', onDomChange)

    widget.change(5)

    expect(onDomChange).toHaveBeenCalledTimes(domEventCount)
  })

  it.each([
    ['a listener', (widget) => widget.on('widget:change', (event) => event.cancel())],
    ['a DOM listener', () => document.body.addEventListener('widget-change', (event) => event.preventDefault())]
  ])('should return the event as canceled when %s cancels it', (_name, cancel) => {
    const widget = createWidget()
    cancel(widget)

    expect(widget.change(5).canceled).toBe(true)
  })
})

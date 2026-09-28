import EventEmitter from '../src/eventEmitter'

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

    it('should register initial listeners from the on option', () => {
      const fn = jest.fn()
      const em = new EventEmitter({ on: { 'init': fn } })
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

import EventEmitter from '../src/eventEmitter'

describe('EventEmitter', () => {
  let emitter

  beforeEach(() => {
    emitter = new EventEmitter()
  })

  describe('on / emit', () => {
    it('should register and call a listener', () => {
      const fn = jest.fn()
      emitter.on('test', fn)
      emitter.emit('test')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should pass arguments to listener', () => {
      const fn = jest.fn()
      emitter.on('test', fn)
      emitter.emit('test', 'a', 42)
      expect(fn).toHaveBeenCalledWith('a', 42)
    })

    it('should call multiple listeners in order', () => {
      const calls = []
      emitter.on('test', () => calls.push('first'))
      emitter.on('test', () => calls.push('second'))
      emitter.emit('test')
      expect(calls).toEqual(['first', 'second'])
    })

    it('should not throw when emitting event with no listeners', () => {
      expect(() => emitter.emit('nonexistent')).not.toThrow()
    })
  })

  describe('constructor with options.on', () => {
    it('should register initial listeners from options', () => {
      const fn = jest.fn()
      const em = new EventEmitter({ on: { 'init': fn } })
      em.emit('init')
      expect(fn).toHaveBeenCalledTimes(1)
    })
  })

  describe('prependOn', () => {
    it('should add listener to the beginning', () => {
      const calls = []
      emitter.on('test', () => calls.push('second'))
      emitter.prependOn('test', () => calls.push('first'))
      emitter.emit('test')
      expect(calls).toEqual(['first', 'second'])
    })
  })

  describe('off', () => {
    it('should remove only the specified listener', () => {
      const fn1 = jest.fn()
      const fn2 = jest.fn()
      emitter.on('test', fn1)
      emitter.on('test', fn2)
      emitter.off('test', fn1)
      emitter.emit('test')
      expect(fn1).not.toHaveBeenCalled()
      expect(fn2).toHaveBeenCalledTimes(1)
    })

    it('should not remove anything when the listener was never added', () => {
      const fn = jest.fn()
      emitter.on('test', fn)
      emitter.off('test', () => {})
      emitter.off('nope', () => {})
      emitter.emit('test')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should also be available as unsubscribe', () => {
      const fn = jest.fn()
      emitter.on('test', fn)
      emitter.unsubscribe('test', fn)
      emitter.emit('test')
      expect(fn).not.toHaveBeenCalled()
    })

    it('should not skip the next listener when a listener removes itself during emit', () => {
      const second = jest.fn()
      const first = () => emitter.off('test', first)
      emitter.on('test', first)
      emitter.on('test', second)
      emitter.emit('test')
      expect(second).toHaveBeenCalledTimes(1)
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
      expect(fn).toHaveBeenCalledWith(1)
    })

    it('should be removable with off using the original listener', () => {
      const fn = jest.fn()
      emitter.once('test', fn)
      emitter.off('test', fn)
      emitter.emit('test')
      expect(fn).not.toHaveBeenCalled()
    })
  })

  describe('interrupt', () => {
    it('should stop event propagation mid-emit', () => {
      const fn1 = jest.fn(() => emitter.interrupt())
      const fn2 = jest.fn()
      emitter.on('test', fn1)
      emitter.on('test', fn2)
      emitter.emit('test')
      expect(fn1).toHaveBeenCalledTimes(1)
      expect(fn2).not.toHaveBeenCalled()
    })
  })

  describe('resetEmitter', () => {
    it('should clear all events', () => {
      const fn = jest.fn()
      emitter.on('a', fn)
      emitter.on('b', fn)
      emitter.resetEmitter()
      emitter.emit('a')
      emitter.emit('b')
      expect(fn).not.toHaveBeenCalled()
    })
  })

  describe('resetOn', () => {
    it('should clear listeners for a specific event', () => {
      const fnA = jest.fn()
      const fnB = jest.fn()
      emitter.on('a', fnA)
      emitter.on('b', fnB)
      emitter.resetOn('a')
      emitter.emit('a')
      emitter.emit('b')
      expect(fnA).not.toHaveBeenCalled()
      expect(fnB).toHaveBeenCalledTimes(1)
    })
  })
})

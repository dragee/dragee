import Draggable from '../src/draggable'
import Point from '../src/geometry/point'
import Rectangle from '../src/geometry/rectangle'
import {
  createContainer,
  createDraggable,
  track,
  mouseDown,
  mouseMove,
  simulateDrag,
  endDrag,
  cleanup
} from './testing-sdk'

afterEach(cleanup)

describe('draggable/move', () => {
  it('should update translate3d property on move', () => {
    const draggable = createDraggable()

    expect(draggable.element.style.transform).toEqual('translate3d(0px, 0px, 0px)')
    draggable.move(new Point(255, 100))
    expect(draggable.element.style.transform).toEqual('translate3d(255px, 100px, 0px)')
    draggable.move(new Point(0, 0))
    expect(draggable.element.style.transform).toEqual('translate3d(0px, 0px, 0px)')
  })

  it('should remove translate3d on zero positioning when option set', () => {
    const draggable = createDraggable({ shouldRemoveZeroTranslate: true })

    expect(draggable.element.style.transform).toEqual('')
    draggable.move(new Point(255, 100))
    expect(draggable.element.style.transform).toEqual('translate3d(255px, 100px, 0px)')
    draggable.move(new Point(0, 0))
    expect(draggable.element.style.transform).toEqual('')
  })

  it('should preserve existing transform properties', () => {
    const container = createContainer()
    const el = document.createElement('div')
    el.style.transform = 'rotate(0.5turn)'
    container.appendChild(el)
    const draggable = track(new Draggable(el, { container }))

    expect(el.style.transform).toEqual('rotate(0.5turn) translate3d(0px, 0px, 0px)')
    draggable.move(new Point(255, 100))
    expect(el.style.transform).toEqual('rotate(0.5turn) translate3d(255px, 100px, 0px)')
  })

  it('should emit drag:move unless silent', () => {
    const draggable = createDraggable()
    const fn = jest.fn()
    draggable.on('drag:move', fn)

    draggable.move(new Point(10, 10))
    expect(fn).toHaveBeenCalledTimes(1)

    draggable.move(new Point(20, 20), 0, true)
    expect(fn).toHaveBeenCalledTimes(1)
  })
})

describe('draggable/position management', () => {
  it('should pin position, clone to avoid mutation, and reset to initial', () => {
    const draggable = createDraggable({ position: new Point(20, 30) })

    const point = new Point(50, 60)
    draggable.pinPosition(point)
    point.x = 999
    expect(draggable.pinnedPosition.x).toBe(50)

    draggable.resetPositionToInitial()
    expect(draggable.pinnedPosition.x).toBe(20)
    expect(draggable.pinnedPosition.y).toBe(30)
  })

  it('should set and get position correctly', () => {
    const draggable = createDraggable()
    draggable.setPosition(new Point(77, 88))
    expect(draggable.position.x).toBe(77)

    draggable.move(new Point(30, 40))
    const pos = draggable.getPosition()
    expect(pos.x).toBe(30)
    expect(pos.y).toBe(40)
  })
})

describe('draggable/drag lifecycle', () => {
  it('should emit start, move, end events through full drag cycle', () => {
    const draggable = createDraggable()
    const startFn = jest.fn()
    const moveFn = jest.fn()
    const endFn = jest.fn()
    draggable.on('drag:start', startFn)
    draggable.on('drag:move', moveFn)
    draggable.on('drag:end', endFn)

    simulateDrag(draggable, new Point(10, 10), new Point(50, 50))
    expect(startFn).toHaveBeenCalledTimes(1)
    expect(moveFn).toHaveBeenCalledTimes(1)
    expect(draggable.isDragging).toBe(true)

    endDrag(new Point(50, 50))
    expect(endFn).toHaveBeenCalledTimes(1)
    expect(draggable.isDragging).toBe(false)
  })

  it('should not start drag when disabled', () => {
    const draggable = createDraggable()
    draggable.enable = false
    const startFn = jest.fn()
    draggable.on('drag:start', startFn)

    simulateDrag(draggable, new Point(10, 10), new Point(20, 20))
    expect(startFn).not.toHaveBeenCalled()
  })

  it('should apply bounding constraints during drag', () => {
    const draggable = createDraggable({
      bound: (point) => new Point(
        Math.max(0, Math.min(100, point.x)),
        Math.max(0, Math.min(100, point.y))
      )
    })

    simulateDrag(draggable, new Point(0, 0), new Point(500, 500))
    expect(draggable.position.x).toBeLessThanOrEqual(100)
    expect(draggable.position.y).toBeLessThanOrEqual(100)
    endDrag(new Point(500, 500))
  })

  it('should add dragee-active class while dragging', () => {
    const draggable = createDraggable()

    simulateDrag(draggable, new Point(0, 0), new Point(50, 50))
    expect(draggable.element.classList.contains('dragee-active')).toBe(true)
    endDrag(new Point(50, 50))
  })

  it('should detect movement directions during drag', () => {
    const draggable = createDraggable()

    simulateDrag(draggable, new Point(0, 0), new Point(50, 50))
    expect(draggable.leftDirection).toBe(true)
    expect(draggable.downDirection).toBe(true)
    endDrag(new Point(50, 50))
  })
})

describe('draggable/enable', () => {
  it('should toggle dragee-disable class with enable state', () => {
    const draggable = createDraggable()
    expect(draggable.enable).toBe(true)

    draggable.enable = false
    expect(draggable.element.classList.contains('dragee-disable')).toBe(true)
    expect(draggable.enable).toBe(false)

    draggable.enable = true
    expect(draggable.element.classList.contains('dragee-disable')).toBe(false)
  })
})

describe('draggable/handler', () => {
  it('should start drag from handle, not from element body', () => {
    const container = createContainer()
    const el = document.createElement('div')
    const handle = document.createElement('span')
    el.appendChild(handle)
    container.appendChild(el)

    const d = track(new Draggable(el, { container, handler: handle }))
    const startFn = jest.fn()
    d.on('drag:start', startFn)

    handle.dispatchEvent(new MouseEvent('mousedown', {
      clientX: 10, clientY: 10, bubbles: true
    }))
    expect(startFn).toHaveBeenCalledTimes(1)
    endDrag(new Point(10, 10))
  })

  it('should use string selector to find handle within element', () => {
    const container = createContainer()
    const el = document.createElement('div')
    const handle = document.createElement('span')
    handle.classList.add('handle')
    el.appendChild(handle)
    container.appendChild(el)

    const d = track(new Draggable(el, { container, handler: '.handle' }))
    expect(d.handler).toBe(handle)
  })
})

describe('draggable/bounding', () => {
  it('should apply custom bound function', () => {
    const draggable = createDraggable({
      bound: (point) => new Point(Math.min(point.x, 50), Math.min(point.y, 50))
    })
    const bounded = draggable.bounding.bound(new Point(100, 200))
    expect(bounded.x).toBe(50)
    expect(bounded.y).toBe(50)
  })
})

describe('draggable/dragStartThreshold', () => {
  it('should not fire drag:start below the threshold', () => {
    const d = createDraggable({ dragStartThreshold: 5 })
    const startFn = jest.fn()
    d.on('drag:start', startFn)

    simulateDrag(d, new Point(0, 0), new Point(2, 2))
    expect(startFn).not.toHaveBeenCalled()
    endDrag(new Point(2, 2))
  })

  it('should fire drag:start once after crossing the threshold', () => {
    const d = createDraggable({ dragStartThreshold: 5 })
    const startFn = jest.fn()
    d.on('drag:start', startFn)

    mouseDown(d.element, new Point(0, 0))
    mouseMove(new Point(2, 2))          // below threshold — silent
    expect(startFn).not.toHaveBeenCalled()
    mouseMove(new Point(10, 10))        // crosses threshold
    expect(startFn).toHaveBeenCalledTimes(1)
    mouseMove(new Point(20, 20))        // already started — no extra fire
    expect(startFn).toHaveBeenCalledTimes(1)
    endDrag(new Point(20, 20))
  })

  it('should not fire drag:end when threshold was never crossed', () => {
    const d = createDraggable({ dragStartThreshold: 5 })
    const endFn = jest.fn()
    d.on('drag:end', endFn)

    simulateDrag(d, new Point(0, 0), new Point(2, 2))
    endDrag(new Point(2, 2))
    expect(endFn).not.toHaveBeenCalled()
  })

  it('should not move element below the threshold', () => {
    const d = createDraggable({ dragStartThreshold: 5 })

    simulateDrag(d, new Point(0, 0), new Point(2, 2))
    expect(d.element.classList.contains('dragee-active')).toBe(false)
    expect(d.isDragging).toBeFalsy()
    endDrag(new Point(2, 2))
  })

  it('defaults to 0 — immediate drag:start like before', () => {
    const d = createDraggable()
    const startFn = jest.fn()
    d.on('drag:start', startFn)

    mouseDown(d.element, new Point(0, 0))
    expect(startFn).toHaveBeenCalledTimes(1)
    endDrag(new Point(0, 0))
  })
})

describe('draggable/destroy', () => {
  it('should allow re-creating draggable on same element after destroy', () => {
    const container = createContainer()
    const el = document.createElement('div')
    container.appendChild(el)

    const d1 = new Draggable(el, { container })
    d1.destroy()
    const d2 = track(new Draggable(el, { container }))
    expect(d2.element).toBe(el)
  })

  it('should throw when creating two draggables on same element', () => {
    const draggable = createDraggable()
    expect(() => new Draggable(draggable.element)).toThrow()
  })
})

describe('draggable/refresh', () => {
  it('should call bounding.refresh when available', () => {
    const refreshFn = jest.fn()
    const draggable = createDraggable({
      bounding: { bound: (p) => p, refresh: refreshFn }
    })
    draggable.refresh()
    expect(refreshFn).toHaveBeenCalled()
  })
})

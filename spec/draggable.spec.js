import Draggable from '../src/draggable'
import Point from '../src/geometry/point'
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

    draggable.move(new Point(20, 20), { silent: true })
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

  it('should animate pinPosition over the given duration without emitting drag:move', () => {
    const draggable = createDraggable()
    const fn = jest.fn()
    draggable.on('drag:move', fn)

    draggable.pinPosition(new Point(50, 60), { duration: 250 })

    expect(draggable.element.style.transition).toContain('transform 250ms')
    expect(fn).not.toHaveBeenCalled()
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

    const detailOf = (fn) => fn.mock.calls[0][0].detail

    simulateDrag(draggable, new Point(10, 10), new Point(50, 50))
    expect(startFn).toHaveBeenCalledTimes(1)
    expect(detailOf(startFn)).toEqual({ draggable })
    expect(moveFn).toHaveBeenCalledTimes(1)
    expect(detailOf(moveFn)).toEqual({ draggable })
    expect(draggable.isDragging).toBe(true)

    endDrag(new Point(50, 50))
    expect(endFn).toHaveBeenCalledTimes(1)
    expect(detailOf(endFn)).toEqual({ draggable })
    expect(draggable.isDragging).toBe(false)
  })

  it('should dispatch bubbling dragee:* DOM events that can be delegated to an ancestor', () => {
    const draggable = createDraggable()
    const received = []
    document.body.addEventListener('dragee:start', ({ type, draggable }) => received.push([type, draggable]))
    document.body.addEventListener('dragee:move', ({ type, draggable }) => received.push([type, draggable]))
    document.body.addEventListener('dragee:end', ({ type, draggable }) => received.push([type, draggable]))

    simulateDrag(draggable, new Point(10, 10), new Point(50, 50))
    endDrag(new Point(50, 50))

    expect(received).toEqual([
      ['dragee:start', draggable],
      ['dragee:move', draggable],
      ['dragee:end', draggable]
    ])
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
    expect(draggable.rightDirection).toBe(true)
    expect(draggable.downDirection).toBe(true)
    endDrag(new Point(50, 50))
  })
})

describe('draggable/release', () => {
  it('should pin the draggable where it was released', () => {
    const draggable = createDraggable()

    simulateDrag(draggable, new Point(0, 0), new Point(30, 40))
    endDrag(new Point(30, 40))

    expect(draggable.pinnedPosition).toEqual(new Point(30, 40))
  })

  it('should keep the previous pinned position when drag:release is canceled', () => {
    const draggable = createDraggable()
    draggable.on('drag:release', (event) => event.cancel())

    simulateDrag(draggable, new Point(0, 0), new Point(30, 40))
    endDrag(new Point(30, 40))

    expect(draggable.pinnedPosition).toEqual(new Point(0, 0))
  })
})

describe('draggable/canceling drag start', () => {
  it.each([
    ['a drag:start listener', {}, (draggable) => draggable.on('drag:start', (e) => e.cancel())],
    ['a delegated dragee:start listener', {}, (draggable) => draggable.element.parentElement.addEventListener('dragee:start', (e) => e.preventDefault())],
    ['a drag:start listener with dragStartThreshold', { dragStartThreshold: 5 }, (draggable) => draggable.on('drag:start', (e) => e.cancel())]
  ])('should not drag when %s cancels it', (_name, options, prevent) => {
    const draggable = createDraggable(options)
    const onMove = jest.fn()
    const onEnd = jest.fn()
    draggable.on('drag:move', onMove)
    draggable.on('drag:end', onEnd)
    prevent(draggable)

    simulateDrag(draggable, new Point(0, 0), new Point(50, 50))
    endDrag(new Point(50, 50))

    expect(onMove).not.toHaveBeenCalled()
    expect(onEnd).not.toHaveBeenCalled()
    expect(draggable.element.style.transform).toEqual('translate3d(0px, 0px, 0px)')
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
    expect(() => new Draggable(draggable.element)).toThrow(Error)
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

describe('draggable/form fields', () => {
  const createField = (tagName) => {
    if (tagName === 'contenteditable') {
      const field = document.createElement('div')
      field.setAttribute('contenteditable', 'true')
      return field
    }
    return document.createElement(tagName)
  }

  it.each(['input', 'textarea', 'select', 'contenteditable'])('should not start a drag pressed on a nested %s', (tagName) => {
    const draggable = createDraggable()
    const field = createField(tagName)
    draggable.element.appendChild(field)
    const startFn = jest.fn()
    draggable.on('drag:start', startFn)

    mouseDown(field, new Point(10, 10))
    mouseMove(new Point(50, 50))

    expect(startFn).not.toHaveBeenCalled()
    expect(draggable.position).toEqual(new Point(0, 0))
  })

  it('should start a drag pressed elsewhere on an element that contains a field', () => {
    const draggable = createDraggable()
    draggable.element.appendChild(document.createElement('input'))

    simulateDrag(draggable, new Point(10, 10), new Point(50, 50))

    expect(draggable.isDragging).toBe(true)
  })

  it('should start a drag when the draggable itself is inside a contenteditable', () => {
    const editor = document.createElement('div')
    editor.setAttribute('contenteditable', 'true')
    document.body.appendChild(editor)
    const draggable = createDraggable()
    editor.appendChild(draggable.element)

    simulateDrag(draggable, new Point(10, 10), new Point(50, 50))

    expect(draggable.isDragging).toBe(true)
  })

  it('should leave mousedown on a nested field to the browser so it can take focus', () => {
    const draggable = createDraggable()
    const field = document.createElement('input')
    draggable.element.appendChild(field)
    const mousedown = new MouseEvent('mousedown', { bubbles: true, cancelable: true })

    field.dispatchEvent(mousedown)

    expect(mousedown.defaultPrevented).toBe(false)
  })
})

describe('draggable/nested draggables', () => {
  function createNested() {
    const outer = createDraggable()
    const innerElement = document.createElement('div')
    outer.element.appendChild(innerElement)
    const inner = track(new Draggable(innerElement, { container: outer.element }))
    return { outer, inner }
  }

  it('should start only the innermost draggable pressed', () => {
    const { outer, inner } = createNested()
    const outerStart = jest.fn()
    const innerStart = jest.fn()
    outer.on('drag:start', outerStart)
    inner.on('drag:start', innerStart)

    mouseDown(inner.element, new Point(10, 10))
    mouseMove(new Point(50, 50))

    expect(innerStart).toHaveBeenCalledTimes(1)
    expect(outerStart).not.toHaveBeenCalled()
    expect(outer.position).toEqual(new Point(0, 0))
  })

  it('should start the outer draggable pressed outside the inner one', () => {
    const { outer } = createNested()

    simulateDrag(outer, new Point(10, 10), new Point(50, 50))

    expect(outer.isDragging).toBe(true)
  })

  it('should start the outer draggable when the inner one is disabled', () => {
    const { outer, inner } = createNested()
    inner.enable = false

    mouseDown(inner.element, new Point(10, 10))
    mouseMove(new Point(50, 50))

    expect(outer.isDragging).toBe(true)
  })
})

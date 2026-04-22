import Draggable from '../src/draggable'

// jsdom doesn't ship ResizeObserver; mock it so List/BubblingList can be constructed
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = MockResizeObserver

// Track every draggable created via this SDK so `cleanup()` can destroy them all
const tracked = []

export function createContainer() {
  const container = document.createElement('div')
  container.style.position = 'relative'
  document.body.appendChild(container)
  return container
}

// Create a single draggable in a fresh container (or reuse options.container / options.element)
export function createDraggable(options = {}) {
  const { element, container = createContainer(), ...rest } = options
  const el = element || document.createElement('div')
  if (!element) container.appendChild(el)
  const d = new Draggable(el, { container, ...rest })
  tracked.push(d)
  return d
}

// Create N draggables inside a shared container. `optionsFn(i)` returns per-item options.
export function createDraggables(count, optionsFn = () => ({})) {
  const container = createContainer()
  const draggables = Array.from({ length: count }, (_, i) => {
    const el = document.createElement('div')
    container.appendChild(el)
    const d = new Draggable(el, { container, ...optionsFn(i) })
    tracked.push(d)
    return d
  })
  return { container, draggables }
}

export function track(draggable) {
  tracked.push(draggable)
  return draggable
}

// Low-level event dispatchers
export function mouseDown(element, point) {
  element.dispatchEvent(new MouseEvent('mousedown', {
    clientX: point.x, clientY: point.y, bubbles: true
  }))
}

export function mouseMove(point) {
  document.dispatchEvent(new MouseEvent('mousemove', {
    clientX: point.x, clientY: point.y, bubbles: true
  }))
}

export function mouseUp(point) {
  document.dispatchEvent(new MouseEvent('mouseup', {
    clientX: point.x, clientY: point.y, bubbles: true
  }))
}

// High-level drag helpers
export function simulateDrag(draggable, from, to) {
  mouseDown(draggable.element, from)
  mouseMove(to)
}

export const endDrag = mouseUp

// Call in `afterEach` to destroy tracked draggables and clear the DOM
export function cleanup() {
  tracked.forEach((d) => d.destroy())
  tracked.length = 0
  document.body.innerHTML = ''
}

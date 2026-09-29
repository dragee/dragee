import BubblingList from '../src/bubblingList'
import Point from '../src/geometry/point'
import { createDraggables, simulateDrag, endDrag, cleanup } from './testing-sdk'

afterEach(cleanup)

function createBubblingSetup(options = {}, { count = 3, crossPosition = 0 } = {}) {
  const { container, draggables } = createDraggables(count, (i) => ({
    position: options.axis === 'x' ? new Point(i * 50, crossPosition) : new Point(crossPosition, i * 50)
  }))
  const list = new BubblingList(draggables, { container, ...options })
  return { list, draggables }
}

function dragBy(draggable, delta) {
  const from = draggable.pinnedPosition
  simulateDrag(draggable, from, from.add(delta))
  endDrag(from.add(delta))
}

describe('BubblingList', () => {
  describe('vertical', () => {
    it('should swap with the next item when dragged down past it', () => {
      const { draggables: [first, second] } = createBubblingSetup()

      dragBy(first, new Point(0, 45))

      expect(first.pinnedPosition.y).toBe(50)
      expect(second.pinnedPosition.y).toBe(0)
    })

    it('should report the change with the dragged item, also as a bubbling DOM event', () => {
      const { list, draggables: [first] } = createBubblingSetup()
      const onChange = jest.fn()
      const domEvents = []
      list.on('list:change', onChange)
      document.body.addEventListener('dragee:list-change', (e) => domEvents.push(e.detail))

      dragBy(first, new Point(0, 45))

      expect(onChange.mock.calls.map(([event]) => event.detail)).toEqual([{ list, draggable: first }])
      expect(domEvents).toEqual([{ list, draggable: first }])
    })

    it('should not swap items when swappingDisabled is true', () => {
      const { list, draggables: [first, second] } = createBubblingSetup()
      list.swappingDisabled = true

      dragBy(second, new Point(0, -45))

      expect(first.pinnedPosition.y).toBe(0)
      expect(second.pinnedPosition.y).toBe(50)
    })
  })

  describe('horizontal', () => {
    it('should swap with the previous item when dragged left past it', () => {
      const { draggables: [first, second] } = createBubblingSetup({ axis: 'x' })

      dragBy(second, new Point(-45, 0))

      expect(first.pinnedPosition.x).toBe(50)
      expect(second.pinnedPosition.x).toBe(0)
    })

    it('should swap with the next item when dragged right past it', () => {
      const { draggables: [first, second] } = createBubblingSetup({ axis: 'x' })

      dragBy(first, new Point(45, 0))

      expect(first.pinnedPosition.x).toBe(50)
      expect(second.pinnedPosition.x).toBe(0)
    })
  })

  describe('remove', () => {
    it('should close the hole using the gap detected from item positions', () => {
      const { list, draggables: [, middle, last] } = createBubblingSetup()

      list.remove(middle)

      expect(last.pinnedPosition.y).toBe(50)
    })

    it('should close the hole along x with an explicit gap and keep the cross position', () => {
      const { list, draggables: [, middle, last] } = createBubblingSetup({ axis: 'x', gap: 10 }, { crossPosition: 7 })

      list.remove(middle)

      expect(last.pinnedPosition.x).toBe(10)
      expect(last.pinnedPosition.y).toBe(7)
    })

    it('should support the verticalGap option', () => {
      const { list, draggables: [, middle, last] } = createBubblingSetup({ verticalGap: 10 })

      list.remove(middle)

      expect(last.pinnedPosition.y).toBe(10)
    })
  })

  describe('reorderOnChange', () => {
    it.each([
      ['next to its new neighbours', new Point(0, 45), [1, 0, 2]],
      ['at the end', new Point(0, 95), [1, 2, 0]]
    ])('should move the dropped element %s in the DOM without the container option', (_name, delta, expectedOrder) => {
      const { container, draggables } = createDraggables(3, (i) => ({ position: new Point(0, i * 50) }))
      const elements = draggables.map((draggable) => draggable.element)
      new BubblingList(draggables, { reorderOnChange: true })

      dragBy(draggables[0], delta)

      expect([...container.children]).toEqual(expectedOrder.map((i) => elements[i]))
    })
  })
})

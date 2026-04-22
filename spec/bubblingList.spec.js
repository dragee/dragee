import BubblingList from '../src/bubblingList'
import Point from '../src/geometry/point'
import { createDraggables, cleanup } from './testing-sdk'

afterEach(cleanup)

function createBubblingSetup(count = 3, options = {}) {
  const { container, draggables } = createDraggables(count, (i) => ({
    position: new Point(0, i * 50)
  }))
  // Add inline height so it looks like a real list; doesn't affect jsdom measurement
  draggables.forEach((d) => { d.element.style.height = '40px' })

  const list = new BubblingList(draggables, { container, ...options })
  return { list, draggables, container }
}

describe('BubblingList', () => {
  it('should create a list and auto-detect vertical gap from item positions', () => {
    const { list } = createBubblingSetup(3)
    // Items at y=0, y=50, y=100; gap should be auto-detected as 50
    expect(list.draggables).toHaveLength(3)
    expect(list.verticalGap).toBe(50)
  })

  describe('bubbling', () => {
    it('should reposition items sequentially from start position with gap', () => {
      const { list, draggables } = createBubblingSetup(3, { verticalGap: 10 })
      list.startPosition = new Point(0, 0)

      list.bubbling(draggables)

      // In jsdom size.y = 0, so positions: 0, 10, 20
      expect(draggables[0].pinnedPosition.y).toBe(0)
      expect(draggables[1].pinnedPosition.y).toBe(10)
      expect(draggables[2].pinnedPosition.y).toBe(20)
    })
  })

  describe('remove', () => {
    it('should remove a draggable and re-bubble remaining items', () => {
      const { list, draggables } = createBubblingSetup(3, { verticalGap: 10 })
      const d1 = draggables[1]
      list.startPosition = new Point(0, 0)

      list.remove(d1)
      expect(list.draggables).toHaveLength(2)
      expect(list.draggables).not.toContain(d1)
    })

    it('should remove multiple draggables', () => {
      const { list, draggables } = createBubblingSetup(3)
      const d0 = draggables[0]
      const d1 = draggables[1]
      const d2 = draggables[2]
      list.remove([d0, d2])
      expect(list.draggables).toHaveLength(1)
      expect(list.draggables[0]).toBe(d1)
    })

    it('should handle removing all items', () => {
      const { list, draggables } = createBubblingSetup(2)
      list.remove(draggables.slice())
      expect(list.draggables).toHaveLength(0)
    })
  })

  it('should not swap items when swappingDisabled is true', () => {
    const { list, draggables } = createBubblingSetup(3)
    list.swappingDisabled = true
    list.onDragStart(draggables[0])
    draggables[0].upDirection = true

    const pinnedBefore = draggables[1].pinnedPosition.clone()
    list.onMove(draggables[0])
    expect(draggables[1].pinnedPosition.compare(pinnedBefore)).toBe(true)
  })

  it('should auto-detect start position from first draggable on drag start', () => {
    const { list, draggables } = createBubblingSetup(3)
    list.onDragStart(draggables[1])
    expect(list.startPosition.compare(draggables[0].pinnedPosition)).toBe(true)
  })
})

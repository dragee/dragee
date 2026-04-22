import Draggable from '../src/draggable'
import List from '../src/list'
import Point from '../src/geometry/point'
import { createContainer, createDraggables, track, cleanup } from './testing-sdk'

afterEach(cleanup)

function createListSetup(count = 3, listOptions = {}) {
  const { container, draggables } = createDraggables(count, (i) => ({
    position: new Point(i * 10, 0)
  }))
  const list = new List(draggables, { container, ...listOptions })
  return { list, draggables, container }
}

describe('list/getSortedDraggables', () => {
  it('should return order based on x position when y is same', () => {
    const { list, draggables } = createListSetup(3)
    const [a, b, c] = draggables

    const sorted = list.getSortedDraggables()
    expect(sorted[0]).toBe(a)
    expect(sorted[1]).toBe(b)
    expect(sorted[2]).toBe(c)
  })

  it('should re-sort after position change', () => {
    const { list, draggables } = createListSetup(3)
    const [a, b, c] = draggables

    c.move(new Point(-5, 0))

    const sorted = list.getSortedDraggables()
    expect(sorted[0]).toBe(c)
    expect(sorted[1]).toBe(a)
    expect(sorted[2]).toBe(b)
  })
})

describe('list/sorting', () => {
  it('should sort by y first, then x', () => {
    const { container, draggables } = createDraggables(3, (i) => ({
      position: [new Point(0, 20), new Point(10, 10), new Point(5, 10)][i]
    }))
    const [d1, d2, d3] = draggables

    const list = new List(draggables, { container })
    const sorted = list.getSortedDraggables()
    expect(sorted[0]).toBe(d3) // y=10, x=5
    expect(sorted[1]).toBe(d2) // y=10, x=10
    expect(sorted[2]).toBe(d1) // y=20
  })

  it('should use custom sorting function', () => {
    const { list, draggables } = createListSetup(3, {
      sorting: (a, b) => b.pinnedPosition.x - a.pinnedPosition.x // reverse x order
    })
    const d0 = draggables[0] // x=0
    const d2 = draggables[2] // x=20

    const sorted = list.getSortedDraggables()
    expect(sorted[0]).toBe(d2)
    expect(sorted[2]).toBe(d0)
  })
})

describe('list/add', () => {
  it('should add a single draggable', () => {
    const { list, container } = createListSetup(2)

    const newEl = document.createElement('div')
    container.appendChild(newEl)
    const newD = track(new Draggable(newEl, { position: new Point(30, 0), container }))

    list.add(newD)
    expect(list.draggables).toHaveLength(3)
  })

  it('should add an array of draggables', () => {
    const { list, container } = createListSetup(1)

    const newDraggables = Array.from({ length: 2 }, (_, i) => {
      const el = document.createElement('div')
      container.appendChild(el)
      return track(new Draggable(el, { position: new Point((i + 1) * 10, 0), container }))
    })

    list.add(newDraggables)
    expect(list.draggables).toHaveLength(3)
  })
})

describe('list/remove', () => {
  it('should remove a draggable from the list', () => {
    const { list, draggables } = createListSetup(3)
    const d1 = draggables[1]
    list.remove(d1)
    expect(list.draggables).toHaveLength(2)
    expect(list.draggables).not.toContain(d1)
  })

  it('should remove multiple draggables', () => {
    const { list, draggables } = createListSetup(3)
    const d0 = draggables[0]
    const d1 = draggables[1]
    const d2 = draggables[2]
    list.remove([d0, d2])
    expect(list.draggables).toHaveLength(1)
    expect(list.draggables[0]).toBe(d1)
  })
})

describe('list/clear', () => {
  it('should remove all draggables', () => {
    const { list } = createListSetup(3)
    list.clear()
    expect(list.draggables).toHaveLength(0)
  })
})

describe('list/positions', () => {
  it('getter should return cloned pinned positions', () => {
    const { list, draggables } = createListSetup(3)
    const positions = list.positions
    expect(positions).toHaveLength(3)
    expect(positions[0].x).toBe(draggables[0].pinnedPosition.x)
    // Should be clones
    positions[0].x = 999
    expect(draggables[0].pinnedPosition.x).not.toBe(999)
  })

  it('setter should update all draggable positions', () => {
    const { list, draggables } = createListSetup(3)
    const newPositions = [new Point(100, 0), new Point(200, 0), new Point(300, 0)]
    list.positions = newPositions
    expect(draggables[0].pinnedPosition.x).toBe(100)
    expect(draggables[1].pinnedPosition.x).toBe(200)
    expect(draggables[2].pinnedPosition.x).toBe(300)
  })

  it('setter should throw on wrong array length', () => {
    const { list } = createListSetup(3)
    expect(() => {
      list.positions = [new Point(0, 0)]
    }).toThrow()
  })
})

describe('list/enable', () => {
  it('should propagate enable to all draggables', () => {
    const { list, draggables } = createListSetup(3)
    list.enable = false
    draggables.forEach((d) => expect(d.enable).toBe(false))
    list.enable = true
    draggables.forEach((d) => expect(d.enable).toBe(true))
  })
})

describe('list/onEnd', () => {
  it('should emit list:change when items were swapped', () => {
    const { list, draggables } = createListSetup(2)
    const changeFn = jest.fn()
    list.on('list:change', changeFn)

    // Simulate a change happened during drag
    list.changedDuringIteration = true
    list.onEnd(draggables[0])
    expect(changeFn).toHaveBeenCalledTimes(1)
    expect(list.changedDuringIteration).toBe(false)
  })

  it('should not emit list:change when no swap happened', () => {
    const { list, draggables } = createListSetup(2)
    const changeFn = jest.fn()
    list.on('list:change', changeFn)

    list.onEnd(draggables[0])
    expect(changeFn).not.toHaveBeenCalled()
  })
})

describe('list/reset', () => {
  it('should reset all draggables to initial positions', () => {
    const { list, draggables } = createListSetup(3)
    const initialPositions = draggables.map((d) => d.initialPosition.clone())

    draggables[0].pinPosition(new Point(999, 999))
    list.reset()

    draggables.forEach((d, i) => {
      expect(d.pinnedPosition.x).toBe(initialPositions[i].x)
      expect(d.pinnedPosition.y).toBe(initialPositions[i].y)
    })
  })
})


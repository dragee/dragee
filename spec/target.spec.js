import Target from '../src/target'
import Point from '../src/geometry/point'
import { createContainer, createDraggables, cleanup } from './testing-sdk'

afterEach(cleanup)

function createTargetSetup(count = 2) {
  const { container, draggables } = createDraggables(count)
  const targetElement = document.createElement('div')
  createContainer().appendChild(targetElement)
  const target = new Target(targetElement, draggables, { container })
  return { target, draggables }
}

describe('Target', () => {
  it('should release a draggable added with add() when it is moved', () => {
    const { target } = createTargetSetup(0)
    const { draggables: [draggable] } = createDraggables(1)
    target.add(draggable)

    draggable.move(new Point(5, 5))

    expect(target.getSortedDraggables()).not.toContain(draggable)
  })

  it('should stop reacting to its draggables after destroy', () => {
    const { target, draggables: [draggable] } = createTargetSetup()
    target.add(draggable)
    target.destroy()

    draggable.move(new Point(5, 5))

    expect(target.getSortedDraggables()).toContain(draggable)
  })

  it('should keep other drag:move listeners when a draggable is removed', () => {
    const { target, draggables: [first, second] } = createTargetSetup()
    target.add(first)
    const onMove = jest.fn()
    first.on('drag:move', onMove)
    target.add(second)

    target.remove(first)
    first.move(new Point(5, 5))

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  it('should dispatch bubbling dragee:target-* DOM events from the target element', () => {
    const { target, draggables: [draggable] } = createTargetSetup()
    const received = []
    const record = (e) => received.push([e.type, e.target, e.detail])
    document.body.addEventListener('dragee:target-before-add', record)
    document.body.addEventListener('dragee:target-add', record)
    document.body.addEventListener('dragee:target-remove', record)

    target.add(draggable)
    draggable.move(new Point(5, 5))

    const detail = { target, draggable }
    expect(received).toEqual([
      ['dragee:target-before-add', target.element, detail],
      ['dragee:target-add', target.element, detail],
      ['dragee:target-remove', target.element, detail]
    ])
  })
})

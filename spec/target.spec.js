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

import Target from '../src/target'
import Point from '../src/geometry/point'
import { createContainer, createDraggable, createDraggables, simulateDrag, endDrag, cleanup } from './testing-sdk'

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

  describe('refusing a draggable in target:beforeAdd', () => {
    it('should not add it programmatically', () => {
      const { target, draggables: [draggable] } = createTargetSetup()
      target.on('target:beforeAdd', (e) => e.preventDefault())

      target.add(draggable)

      expect(target.getSortedDraggables()).not.toContain(draggable)
    })

    it('should send a dropped draggable back to its initial position', () => {
      const draggable = createDraggable({ position: new Point(100, 100) })
      const targetElement = document.createElement('div')
      createContainer().appendChild(targetElement)
      const target = new Target(targetElement, [draggable], { catchDraggable: () => true })
      targetElement.addEventListener('dragee:target-before-add', (e) => e.preventDefault())

      simulateDrag(draggable, new Point(100, 100), new Point(0, 0))
      endDrag(new Point(0, 0))

      expect(target.getSortedDraggables()).not.toContain(draggable)
      expect(draggable.position).toEqual(new Point(100, 100))
      expect(draggable.element.style.transition).toContain('transform 400ms')
      target.destroy()
    })
  })

  it('should leave a drop prevented by a drag:drop listener of the draggable to that listener', () => {
    const draggable = createDraggable({
      position: new Point(100, 100),
      on: { 'drag:drop': (event) => event.preventDefault() }
    })
    const targetElement = document.createElement('div')
    createContainer().appendChild(targetElement)
    const target = new Target(targetElement, [draggable], { catchDraggable: () => true })

    simulateDrag(draggable, new Point(100, 100), new Point(0, 0))
    endDrag(new Point(0, 0))

    expect(target.getSortedDraggables()).not.toContain(draggable)
    expect(draggable.position).toEqual(new Point(0, 0))
    target.destroy()
  })
})

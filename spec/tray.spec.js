import Tray from '../src/tray'
import Point from '../src/geometry/point'
import { createContainer, createDraggables, cleanup } from './testing-sdk'

afterEach(cleanup)

function createTargetSetup(count = 2) {
  const { container, draggables } = createDraggables(count)
  const trayElement = document.createElement('div')
  createContainer().appendChild(trayElement)
  const tray = new Tray(trayElement, draggables, { container })
  return { tray, draggables }
}

describe('Tray', () => {
  it('should release a draggable added with add() when it is moved', () => {
    const { tray } = createTargetSetup(0)
    const { draggables: [draggable] } = createDraggables(1)
    tray.add(draggable)

    draggable.move(new Point(5, 5))

    expect(tray.getSortedDraggables()).not.toContain(draggable)
  })

  it('should stop reacting to its draggables after destroy', () => {
    const { tray, draggables: [draggable] } = createTargetSetup()
    tray.add(draggable)
    tray.destroy()

    draggable.move(new Point(5, 5))

    expect(tray.getSortedDraggables()).toContain(draggable)
  })

  it('should dispatch bubbling dragee:tray-* DOM events from the tray element', () => {
    const { tray, draggables: [draggable] } = createTargetSetup()
    const received = []
    const record = (e) => received.push([e.type, e.target, e.detail])
    document.body.addEventListener('dragee:tray-before-add', record)
    document.body.addEventListener('dragee:tray-add', record)
    document.body.addEventListener('dragee:tray-remove', record)

    tray.add(draggable)
    draggable.move(new Point(5, 5))

    const detail = { tray, draggable }
    expect(received).toEqual([
      ['dragee:tray-before-add', tray.element, detail],
      ['dragee:tray-add', tray.element, detail],
      ['dragee:tray-remove', tray.element, detail]
    ])
  })

})

import Tray from '../src/tray'
import Point from '../src/geometry/point'
import { FloatLeftStrategy, NotCrossingStrategy } from '../src/positioning'
import { createContainer, createDraggable, createDraggables, simulateDrag, endDrag, triggerResize, cleanup } from './testing-sdk'

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

  describe('refusing a draggable in tray:beforeAdd', () => {
    it('should not add it programmatically', () => {
      const { tray, draggables: [draggable] } = createTargetSetup()
      tray.on('tray:beforeAdd', (e) => e.cancel())

      tray.add(draggable)

      expect(tray.getSortedDraggables()).not.toContain(draggable)
    })

    it('should send a dropped draggable back to its initial position', () => {
      const draggable = createDraggable({ position: new Point(100, 100) })
      const trayElement = document.createElement('div')
      createContainer().appendChild(trayElement)
      const tray = new Tray(trayElement, [draggable], { catchDraggable: () => true })
      trayElement.addEventListener('dragee:tray-before-add', (e) => e.preventDefault())

      simulateDrag(draggable, new Point(100, 100), new Point(0, 0))
      endDrag(new Point(0, 0))

      expect(tray.getSortedDraggables()).not.toContain(draggable)
      expect(draggable.position).toEqual(new Point(100, 100))
      expect(draggable.element.style.transition).toContain('transform 400ms')
      tray.destroy()
    })
  })

  it('should leave a drop canceled by a drag:release listener of the draggable to that listener', () => {
    const draggable = createDraggable({
      position: new Point(100, 100),
      on: { 'drag:release': (event) => event.cancel() }
    })
    const trayElement = document.createElement('div')
    createContainer().appendChild(trayElement)
    const tray = new Tray(trayElement, [draggable], { catchDraggable: () => true })

    simulateDrag(draggable, new Point(100, 100), new Point(0, 0))
    endDrag(new Point(0, 0))

    expect(tray.getSortedDraggables()).not.toContain(draggable)
    expect(draggable.position).toEqual(new Point(0, 0))
    tray.destroy()
  })
})

describe('Tray.add', () => {
  it('should animate the added draggable over the given duration', () => {
    const { tray } = createTargetSetup(0)
    const { draggables: [draggable] } = createDraggables(1)

    tray.add(draggable, { duration: 250 })

    expect(draggable.element.style.transition).toContain('transform 250ms')
  })

  it('should place the added draggable without animation by default', () => {
    const { tray } = createTargetSetup(0)
    const { draggables: [draggable] } = createDraggables(1)

    tray.add(draggable)

    expect(draggable.element.style.transition).toContain('transform 0ms')
  })
})

describe('Tray and destroyed draggables', () => {
  it('should forget a draggable that is destroyed', () => {
    const { tray, draggables: [draggable, other] } = createTargetSetup()
    tray.add(draggable)
    tray.add(other)

    draggable.destroy()

    expect(tray.draggables).not.toContain(draggable)
    expect(tray.getSortedDraggables()).toEqual([other])
  })

  it('should no longer be listed in the trays of its draggables after destroy', () => {
    const { tray, draggables: [draggable] } = createTargetSetup()

    tray.destroy()

    expect(draggable.trays).not.toContain(tray)
  })
})

describe('Tray on page resize', () => {
  let layout

  beforeEach(() => {
    jest.useFakeTimers()
    layout = { trayLeft: 0, trayWidth: 300, cardLeft: 0 }
  })

  afterEach(() => jest.useRealTimers())

  function createResizableSetup(createStrategy, cardCount = 1) {
    const container = createContainer()
    const trayElement = document.createElement('div')
    container.appendChild(trayElement)
    trayElement.getBoundingClientRect = () => ({ left: layout.trayLeft, top: 0, width: layout.trayWidth, height: 200 })

    const cards = Array.from({ length: cardCount }, () => {
      const element = document.createElement('div')
      container.appendChild(element)
      element.getBoundingClientRect = () => ({ left: 0, top: 0, width: 100, height: 30 })
      Object.defineProperty(element, 'offsetLeft', { get: () => layout.cardLeft })
      return createDraggable({ element, container })
    })
    const tray = new Tray(trayElement, cards, {
      container,
      strategy: createStrategy && createStrategy(() => tray.getRectangle())
    })
    return { tray, cards }
  }

  function resize(changes) {
    Object.assign(layout, changes)
    triggerResize()
    jest.advanceTimersByTime(100)
  }

  it('should lay out its draggables again to fit the resized tray', () => {
    const { tray, cards: [first, second] } = createResizableSetup((rectangle) => new FloatLeftStrategy(rectangle, { paddingTopLeft: new Point(10, 10) }), 2)
    tray.add(first)
    tray.add(second)
    expect(second.position.y).toBe(first.position.y)

    resize({ trayLeft: 100, trayWidth: 150, cardLeft: 50 })

    expect(first.position).toEqual(new Point(110, 10))
    expect(first.element.style.transform).toBe('translate3d(60px, 10px, 0px)')
    expect(second.position.y).toBeGreaterThan(first.position.y)
    tray.destroy()
  })

  it('should keep draggables where they lie inside a tray that moved', () => {
    const { tray, cards: [card] } = createResizableSetup((rectangle) => new NotCrossingStrategy(rectangle))
    card.setPosition(new Point(20, 20))
    tray.add(card)

    resize({ trayLeft: 100 })

    expect(card.position).toEqual(new Point(120, 20))
    tray.destroy()
  })

  it('should move a draggable lying outside the tray to its new place in the layout', () => {
    const { tray, cards: [card] } = createResizableSetup()

    resize({ cardLeft: 30 })

    expect(card.position).toEqual(new Point(30, 0))
    expect(card.element.style.transform).toBe('translate3d(0px, 0px, 0px)')
    tray.destroy()
  })
})

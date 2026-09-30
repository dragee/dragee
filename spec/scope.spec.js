import Draggable from '../src/draggable'
import Tray from '../src/tray'
import Point from '../src/geometry/point'
import { scope, defaultScope } from '../src/scope'
import { createContainer, track, simulateDrag, endDrag, cleanup } from './testing-sdk'

afterEach(cleanup)

function createElements(count) {
  const container = createContainer()
  const elements = Array.from({ length: count }, () => document.createElement('div'))
  container.append(...elements)
  return { container, elements }
}

describe('scope()', () => {
  it('should put draggables and trays created inside it only into the new scope', () => {
    const { container, elements: [draggableElement, trayElement] } = createElements(2)
    let draggable, tray

    const currentScope = scope(() => {
      draggable = track(new Draggable(draggableElement, { container }))
      tray = new Tray(trayElement, [draggable], { container })
    })

    expect(currentScope.draggables).toContain(draggable)
    expect(currentScope.trays).toContain(tray)
    expect(defaultScope.draggables).not.toContain(draggable)
    expect(defaultScope.trays).not.toContain(tray)
    tray.destroy()
  })

  it('should put instances into the innermost scope and restore the outer one afterwards', () => {
    const { container, elements: [innerElement, outerElement, defaultElement] } = createElements(3)
    let inner, outer, innerScope

    const outerScope = scope(() => {
      innerScope = scope(() => {
        inner = track(new Draggable(innerElement, { container }))
      })
      outer = track(new Draggable(outerElement, { container }))
    })
    const afterwards = track(new Draggable(defaultElement, { container }))

    expect(innerScope.draggables).toEqual([inner])
    expect(outerScope.draggables).toEqual([outer])
    expect(defaultScope.draggables).toContain(afterwards)
  })
})

describe('moving instances between scopes', () => {
  it('should take draggables and trays out of their previous scope when they are added to another one', () => {
    const { container, elements: [element, trayElement] } = createElements(2)
    const draggable = track(new Draggable(element, { container }))
    const tray = new Tray(trayElement, [draggable], { container })
    const board = scope(() => {})

    board.addDraggable(draggable)
    board.addTray(tray)

    expect(board.draggables).toEqual([draggable])
    expect(board.trays).toEqual([tray])
    expect(defaultScope.draggables).not.toContain(draggable)
    expect(defaultScope.trays).not.toContain(tray)
    tray.destroy()
  })

  it('should let a draggable added to a scope later be dropped into that scope\'s tray', () => {
    const { container, elements: [element, trayElement] } = createElements(2)
    const draggable = track(new Draggable(element, { container, position: new Point(100, 100) }))
    let tray
    const board = scope(() => {
      tray = new Tray(trayElement, [draggable], { catchDraggable: () => true })
    })

    board.addDraggable(draggable)
    simulateDrag(draggable, new Point(100, 100), new Point(0, 0))
    endDrag(new Point(0, 0))

    expect(tray.getSortedDraggables()).toContain(draggable)
    tray.destroy()
  })

  it('should put instances into the scope passed with the scope option', () => {
    const { container, elements: [draggableElement, trayElement] } = createElements(2)
    const board = scope(() => {})

    const draggable = track(new Draggable(draggableElement, { container, scope: board }))
    const tray = new Tray(trayElement, [draggable], { container, scope: board })

    expect(board.draggables).toEqual([draggable])
    expect(board.trays).toEqual([tray])
    expect(defaultScope.draggables).not.toContain(draggable)
    expect(defaultScope.trays).not.toContain(tray)
    tray.destroy()
  })
})

describe('a card added to a board later', () => {
  it('should be droppable into any column that accepts it', () => {
    const { container, elements: [element, firstElement, secondElement] } = createElements(3)
    let columns
    const board = scope(() => {
      columns = [
        new Tray(firstElement, [], { catchDraggable: () => false }),
        new Tray(secondElement, [], { catchDraggable: () => true })
      ]
    })
    const card = track(new Draggable(element, { container, scope: board, position: new Point(100, 100) }))

    columns.forEach((column) => column.accept(card))
    simulateDrag(card, new Point(100, 100), new Point(0, 0))
    endDrag(new Point(0, 0))

    expect(columns[0].getSortedDraggables()).not.toContain(card)
    expect(columns[1].getSortedDraggables()).toContain(card)
    columns.forEach((column) => column.destroy())
  })
})

describe('Draggable.destroy', () => {
  it('should remove the draggable from its scope', () => {
    const { container, elements: [element] } = createElements(1)
    let draggable

    const currentScope = scope(() => {
      draggable = new Draggable(element, { container })
    })
    draggable.destroy()

    expect(currentScope.draggables).not.toContain(draggable)
  })
})

describe('Scope positions', () => {
  it('should throw a RangeError when the number of positions does not match the trays', () => {
    const { container, elements: [trayElement] } = createElements(1)
    let tray
    const board = scope(() => {
      tray = new Tray(trayElement, [], { container })
    })

    expect(() => { board.positions = [[], []] }).toThrow(RangeError)
    tray.destroy()
  })
})

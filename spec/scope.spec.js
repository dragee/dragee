import Draggable from '../src/draggable'
import Target from '../src/target'
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
  it('should put draggables and targets created inside it only into the new scope', () => {
    const { container, elements: [draggableElement, targetElement] } = createElements(2)
    let draggable, target

    const currentScope = scope(() => {
      draggable = track(new Draggable(draggableElement, { container }))
      target = new Target(targetElement, [draggable], { container })
    })

    expect(currentScope.draggables).toContain(draggable)
    expect(currentScope.targets).toContain(target)
    expect(defaultScope.draggables).not.toContain(draggable)
    expect(defaultScope.targets).not.toContain(target)
    target.destroy()
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
  it('should take draggables and targets out of their previous scope when they are added to another one', () => {
    const { container, elements: [element, targetElement] } = createElements(2)
    const draggable = track(new Draggable(element, { container }))
    const target = new Target(targetElement, [draggable], { container })
    const board = scope(() => {})

    board.addDraggable(draggable)
    board.addTarget(target)

    expect(board.draggables).toEqual([draggable])
    expect(board.targets).toEqual([target])
    expect(defaultScope.draggables).not.toContain(draggable)
    expect(defaultScope.targets).not.toContain(target)
    target.destroy()
  })

  it('should let a draggable added to a scope later be dropped into that scope\'s target', () => {
    const { container, elements: [element, targetElement] } = createElements(2)
    const draggable = track(new Draggable(element, { container, position: new Point(100, 100) }))
    let target
    const board = scope(() => {
      target = new Target(targetElement, [draggable], { catchDraggable: () => true })
    })

    board.addDraggable(draggable)
    simulateDrag(draggable, new Point(100, 100), new Point(0, 0))
    endDrag(new Point(0, 0))

    expect(target.getSortedDraggables()).toContain(draggable)
    target.destroy()
  })

  it('should put instances into the scope passed with the scope option', () => {
    const { container, elements: [draggableElement, targetElement] } = createElements(2)
    const board = scope(() => {})

    const draggable = track(new Draggable(draggableElement, { container, scope: board }))
    const target = new Target(targetElement, [draggable], { container, scope: board })

    expect(board.draggables).toEqual([draggable])
    expect(board.targets).toEqual([target])
    expect(defaultScope.draggables).not.toContain(draggable)
    expect(defaultScope.targets).not.toContain(target)
    target.destroy()
  })
})

describe('a card added to a board later', () => {
  it('should be droppable into any column that accepts it', () => {
    const { container, elements: [element, firstElement, secondElement] } = createElements(3)
    let columns
    const board = scope(() => {
      columns = [
        new Target(firstElement, [], { catchDraggable: () => false }),
        new Target(secondElement, [], { catchDraggable: () => true })
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

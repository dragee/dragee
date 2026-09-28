import Draggable from '../src/draggable'
import Target from '../src/target'
import { scope, defaultScope } from '../src/scope'
import { createContainer, track, cleanup } from './testing-sdk'

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

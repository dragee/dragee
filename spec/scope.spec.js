import Draggable from '../src/draggable'
import Target from '../src/target'
import { scope, defaultScope } from '../src/scope'
import { createContainer, track, cleanup } from './testing-sdk'

afterEach(cleanup)

describe('scope()', () => {
  it('should put draggables and targets created inside it only into the new scope', () => {
    const container = createContainer()
    const [draggableElement, targetElement] = [document.createElement('div'), document.createElement('div')]
    container.append(draggableElement, targetElement)
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
})

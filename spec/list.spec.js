import Draggable from '../src/draggable'
import List from '../src/List'
import Point from '../src/geometry/point'

describe('list/getSortedDraggables', () => {
  it('should return order based on y position', () => {
    document.body.innerHTML = `<div style="position: relative;">
      <div class='draggable-a'>A</div>
      <div class='draggable-c'>C</div>
      <div class='draggable-b'>B</div>
    </div>
    `

    const draggableA = new Draggable(document.querySelector('.draggable-a'), { position: new Point(0, 0) })
    const draggableB = new Draggable(document.querySelector('.draggable-b'), { position: new Point(20, 0) })
    const draggableC = new Draggable(document.querySelector('.draggable-c'), { position: new Point(10, 0) })

    const list = new List([draggableA, draggableB, draggableC])

    let sorted = list.getSortedDraggables()
    expect(sorted[0]).toBe(draggableA)
    expect(sorted[1]).toBe(draggableC)
    expect(sorted[2]).toBe(draggableB)

    draggableC.move(new Point(40, 0))

    sorted = list.getSortedDraggables()
    expect(sorted[0]).toBe(draggableA)
    expect(sorted[1]).toBe(draggableB)
    expect(sorted[2]).toBe(draggableC)
  })
})

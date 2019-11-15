import Draggable from '../src/draggable'
import Point from '../src/geometry/point'

describe('draggable/move', () => {
  it('should update translate3d property on move', () => {
    document.body.innerHTML = "<div class='draggable'></div>"
    const element = document.querySelector('.draggable')
    const draggable = new Draggable(element)

    expect(element.style.transform).toEqual('translate3d(0px, 0px, 0px)')
    draggable.move(new Point(255, 100))
    expect(element.style.transform).toEqual('translate3d(255px, 100px, 0px)')
    draggable.move(new Point(0, 0))
    expect(element.style.transform).toEqual('translate3d(0px, 0px, 0px)')
  })

  it('should remove translate3d on zero positioning and option present', () => {
    document.body.innerHTML = "<div class='draggable'></div>"
    const element = document.querySelector('.draggable')
    const draggable = new Draggable(element, {
      shouldRemoveZeroTranslate: true
    })

    expect(element.style.transform).toEqual('')
    draggable.move(new Point(255, 100))
    expect(element.style.transform).toEqual('translate3d(255px, 100px, 0px)')
    draggable.move(new Point(1, 0))
    expect(element.style.transform).toEqual('translate3d(1px, 0px, 0px)')
    draggable.move(new Point(0, 0))
    expect(element.style.transform).toEqual('')
  })

  it('should not replace existing transform properties', () => {
    document.body.innerHTML = "<div class='draggable' style='transform: rotate(0.5turn)'></div>"
    const element = document.querySelector('.draggable')
    const draggable = new Draggable(element)

    expect(element.style.transform).toEqual('rotate(0.5turn) translate3d(0px, 0px, 0px)')
    draggable.move(new Point(255, 100))
    expect(element.style.transform).toEqual('rotate(0.5turn) translate3d(255px, 100px, 0px)')
    draggable.move(new Point(0, 0))
    expect(element.style.transform).toEqual('rotate(0.5turn) translate3d(0px, 0px, 0px)')
  })
})

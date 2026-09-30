import Point from '../src/geometry/point'
import { setLayout } from './testing-sdk'

describe('Point', () => {
  it('should perform basic arithmetic', () => {
    const a = new Point(5, 10)
    const b = new Point(2, 3)

    expect(a.add(b).x).toBe(7)
    expect(a.add(b).y).toBe(13)
    expect(a.sub(b).x).toBe(3)
    expect(a.mult(0.5).x).toBe(2.5)
    expect(a.negative().x).toBe(-5)
  })

  it('should compare equality of two points', () => {
    expect(new Point(1, 2).compare(new Point(1, 2))).toBe(true)
    expect(new Point(1, 2).compare(new Point(1, 3))).toBe(false)
    expect(new Point(1, 2).compare(new Point(2, 2))).toBe(false)
  })

  it('should clone into an independent copy', () => {
    const original = new Point(5, 10)
    const copy = original.clone()
    copy.x = 999
    expect(original.x).toBe(5)
  })

  it('should format as {x=N,y=N} string', () => {
    expect(new Point(3, 7).toString()).toBe('{x=3,y=7}')
  })
})

describe('Point.elementOffset', () => {
  function createBox(parentNode, layout) {
    const element = document.createElement('div')
    parentNode.appendChild(element)
    return setLayout(element, layout)
  }

  function createPositionedRoot() {
    return createBox(document.body, { left: 30, top: 30, clientLeft: 7, clientTop: 7 })
  }

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should measure from the offset parent including its border', () => {
    const root = createPositionedRoot()
    const element = createBox(root, { offsetParent: root, left: 82, top: 40 })

    expect(Point.elementOffset(element, root)).toEqual(new Point(89, 47))
  })

  it('should be zero for the element itself', () => {
    const root = createPositionedRoot()
    const element = createBox(root, { offsetParent: root, left: 82, top: 40 })

    expect(Point.elementOffset(element, element)).toEqual(new Point(0, 0))
  })

  it('should subtract the offset of a static container sharing the offset parent', () => {
    const root = createPositionedRoot()
    const container = createBox(root, { offsetParent: root, left: 184, top: 10 })
    const element = createBox(container, { offsetParent: root, left: 184, top: 30 })

    expect(Point.elementOffset(element, container)).toEqual(new Point(0, 20))
  })

  it('should measure an element nested in wrappers inside a static container', () => {
    const root = createPositionedRoot()
    const container = createBox(root, { offsetParent: root, left: 61, top: 20 })
    const wrapper = createBox(container, { offsetParent: root, left: 70, top: 25 })
    const element = createBox(wrapper, { offsetParent: root, left: 82, top: 32 })

    expect(Point.elementOffset(element, container)).toEqual(new Point(21, 12))
  })

  it('should measure an element whose offset parent is a positioned wrapper inside a static container', () => {
    const root = createPositionedRoot()
    const container = createBox(root, { offsetParent: root, left: 61, top: 20 })
    const wrapper = createBox(container, { offsetParent: root, left: 70, top: 25, clientLeft: 2, clientTop: 3 })
    const element = createBox(wrapper, { offsetParent: wrapper, left: 10, top: 5 })

    expect(Point.elementOffset(element, container)).toEqual(new Point(21, 13))
  })

  it('should measure from the outer edge of a static container with a border', () => {
    const root = createPositionedRoot()
    const container = createBox(root, { offsetParent: root, left: 61, top: 20, clientLeft: 5, clientTop: 5 })
    const element = createBox(container, { offsetParent: root, left: 82, top: 40 })

    expect(Point.elementOffset(element, container)).toEqual(new Point(21, 20))
  })
})

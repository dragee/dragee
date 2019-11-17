import {
  BoundToRectangle,
  BoundToLineX,
  BoundToLineY,
  BoundToLine,
  BoundToCircle
} from '../src/bounding'
import Point from '../src/geometry/point'
import Rectangle from '../src/geometry/rectangle'

describe('BoundToRectangle', () => {
  it('should bound point to rectangle', () => {
    const bounding = new BoundToRectangle(new Rectangle(new Point(30, 30), new Point(100, 100)))
    let point = new Point(0, 0)
    let size = new Point(25, 25)

    expect(bounding.bound(point, size).x).toEqual(30)
    expect(bounding.bound(point, size).y).toEqual(30)

    point = new Point(55, 300)
    expect(bounding.bound(point, size).x).toEqual(55)
    expect(bounding.bound(point, size).y).toEqual(105)
  })
})

describe('BoundToLineX', () => {
  it('should bound point to line', () => {
    const bounding = new BoundToLineX(55, 100, 500)
    let point = new Point(0, 0)
    let size = new Point(25, 25)

    expect(bounding.bound(point, size).x).toEqual(55)
    expect(bounding.bound(point, size).y).toEqual(100)

    point = new Point(55, 300)
    expect(bounding.bound(point, size).x).toEqual(55)
    expect(bounding.bound(point, size).y).toEqual(300)

    point = new Point(55, 500)
    expect(bounding.bound(point, size).x).toEqual(55)
    expect(bounding.bound(point, size).y).toEqual(475)
  })
})

describe('BoundToLineY', () => {
  it('should bound point to line', () => {
    const bounding = new BoundToLineY(55, 100, 500)
    let point = new Point(0, 0)
    let size = new Point(25, 25)

    expect(bounding.bound(point, size).x).toEqual(100)
    expect(bounding.bound(point, size).y).toEqual(55)

    point = new Point(300, 300)
    expect(bounding.bound(point, size).x).toEqual(300)
    expect(bounding.bound(point, size).y).toEqual(55)

    point = new Point(500, 500)
    expect(bounding.bound(point, size).x).toEqual(475)
    expect(bounding.bound(point, size).y).toEqual(55)
  })
})

describe('BoundToLine', () => {
  it('should bound point to line', () => {
    const bounding = new BoundToLine(new Point(0, 0), new Point(200, 200))
    let point = new Point(0, 0)
    let size = new Point(25, 25)

    expect(bounding.bound(point, size).x).toEqual(0)
    expect(bounding.bound(point, size).y).toEqual(0)

    point = new Point(10, 50)
    expect(bounding.bound(point, size).x).toEqual(30)
    expect(bounding.bound(point, size).y).toEqual(30)

    point = new Point(100, 180)
    expect(Math.ceil(bounding.bound(point, size).x)).toEqual(140)
    expect(Math.ceil(bounding.bound(point, size).y)).toEqual(140)
  })
})

describe('BoundToCircle', () => {
  it('should bound point on circle', () => {
    const bounding = new BoundToCircle(new Point(100, 100), 70)
    let point = new Point(100, 0)
    let size = new Point(25, 25)

    expect(bounding.bound(point, size).x).toEqual(100)
    expect(bounding.bound(point, size).y).toEqual(30)

    point = new Point(0, 100)
    expect(bounding.bound(point, size).x).toEqual(30)
    expect(bounding.bound(point, size).y).toEqual(100)

    point = new Point(180, 100)
    expect(bounding.bound(point, size).x).toEqual(170)
    expect(bounding.bound(point, size).y).toEqual(100)

  })
})

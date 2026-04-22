import Point from '../src/geometry/point'

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

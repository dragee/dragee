import Rectangle from '../src/geometry/rectangle'
import Point from '../src/geometry/point'

describe('Rectangle', () => {
  it('should expose four corners and center', () => {
    const rect = new Rectangle(new Point(10, 20), new Point(100, 50))

    expect(rect.getP1().compare(new Point(10, 20))).toBe(true)
    expect(rect.getP2().compare(new Point(110, 20))).toBe(true)
    expect(rect.getP3().compare(new Point(110, 70))).toBe(true)
    expect(rect.getP4().compare(new Point(10, 70))).toBe(true)
    expect(rect.getCenter().compare(new Point(60, 45))).toBe(true)
  })

  describe('and (intersection)', () => {
    it('should return intersection of overlapping rects', () => {
      const a = new Rectangle(new Point(0, 0), new Point(100, 100))
      const b = new Rectangle(new Point(50, 50), new Point(100, 100))
      const result = a.and(b)
      expect(result.position.x).toBe(50)
      expect(result.size.x).toBe(50)
    })

    it('should return null for non-overlapping rects', () => {
      const a = new Rectangle(new Point(0, 0), new Point(10, 10))
      const b = new Rectangle(new Point(20, 20), new Point(10, 10))
      expect(a.and(b)).toBeNull()
    })
  })

  it('or (union) should wrap two rectangles', () => {
    const a = new Rectangle(new Point(10, 10), new Point(50, 50))
    const b = new Rectangle(new Point(40, 40), new Point(60, 60))
    const result = a.or(b)
    expect(result.position.compare(new Point(10, 10))).toBe(true)
    expect(result.size.compare(new Point(90, 90))).toBe(true)
  })

  describe('includePoint', () => {
    const rect = new Rectangle(new Point(0, 0), new Point(100, 100))

    it('should detect points inside, on edge, and outside', () => {
      expect(rect.includePoint(new Point(50, 50))).toBe(true)
      expect(rect.includePoint(new Point(0, 0))).toBe(true)     // edge
      expect(rect.includePoint(new Point(100, 100))).toBe(true) // edge
      expect(rect.includePoint(new Point(-1, 50))).toBe(false)
      expect(rect.includePoint(new Point(50, 101))).toBe(false)
    })
  })

  describe('includeRectangle', () => {
    const outer = new Rectangle(new Point(0, 0), new Point(100, 100))

    it('should check full containment', () => {
      expect(outer.includeRectangle(new Rectangle(new Point(10, 10), new Point(20, 20)))).toBe(true)
      expect(outer.includeRectangle(new Rectangle(new Point(90, 90), new Point(20, 20)))).toBe(false)
    })
  })

  describe('moveToBound', () => {
    it('should push overlapping rect outside along shortest axis', () => {
      const fixed = new Rectangle(new Point(0, 0), new Point(100, 100))
      const moving = new Rectangle(new Point(80, 80), new Point(50, 50))
      const result = fixed.moveToBound(moving)
      expect(fixed.and(result)).toBeNull()
    })

    it('should push along specified axis', () => {
      const fixed = new Rectangle(new Point(0, 0), new Point(100, 100))
      const moving = new Rectangle(new Point(50, 50), new Point(80, 80))
      fixed.moveToBound(moving, 'x')
      expect(moving.position.x).toBe(100)
    })
  })

  it('growth should expand centered', () => {
    const rect = new Rectangle(new Point(10, 10), new Point(20, 20))
    rect.growth(new Point(10, 10))
    expect(rect.size.compare(new Point(30, 30))).toBe(true)
    expect(rect.position.compare(new Point(5, 5))).toBe(true)
  })
})

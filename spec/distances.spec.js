import {
  getDistance,
  getXDifference,
  getYDifference,
  transformedSpaceDistanceFactory,
  indexOfNearestPoint
} from '../src/geometry/distances'
import Point from '../src/geometry/point'

describe('distances', () => {
  describe('getDistance', () => {
    it('should return Euclidean distance', () => {
      expect(getDistance(new Point(0, 0), new Point(3, 4))).toBe(5)
    })

    it('should return 0 for same point', () => {
      expect(getDistance(new Point(5, 5), new Point(5, 5))).toBe(0)
    })
  })

  describe('getXDifference', () => {
    it('should return absolute x difference', () => {
      expect(getXDifference(new Point(10, 0), new Point(3, 0))).toBe(7)
      expect(getXDifference(new Point(3, 0), new Point(10, 0))).toBe(7)
    })
  })

  describe('getYDifference', () => {
    it('should return absolute y difference', () => {
      expect(getYDifference(new Point(0, 10), new Point(0, 3))).toBe(7)
      expect(getYDifference(new Point(0, 3), new Point(0, 10))).toBe(7)
    })
  })

  describe('transformedSpaceDistanceFactory', () => {
    it('should return weighted distance function', () => {
      const weightedDist = transformedSpaceDistanceFactory({ x: 1, y: 4 })
      // distance = sqrt((1*|dx|)^2 + (4*|dy|)^2)
      const result = weightedDist(new Point(0, 0), new Point(3, 4))
      expect(result).toBe(Math.sqrt(1 * 9 + 16 * 16))
    })

    it('should return 0 for same point', () => {
      const weightedDist = transformedSpaceDistanceFactory({ x: 2, y: 2 })
      expect(weightedDist(new Point(5, 5), new Point(5, 5))).toBe(0)
    })
  })

  describe('indexOfNearestPoint', () => {
    const points = [
      new Point(0, 0),
      new Point(10, 10),
      new Point(50, 50)
    ]

    it('should return index of nearest point', () => {
      expect(indexOfNearestPoint(points, new Point(9, 9), -1)).toBe(1)
    })

    it('should return -1 for empty array', () => {
      expect(indexOfNearestPoint([], new Point(0, 0), -1)).toBe(-1)
    })

    it('should return -1 when outside radius', () => {
      expect(indexOfNearestPoint(points, new Point(100, 100), 10)).toBe(-1)
    })

    it('should return nearest within radius', () => {
      expect(indexOfNearestPoint(points, new Point(48, 48), 10)).toBe(2)
    })

    it('should use custom distance function', () => {
      const xOnly = (a, b) => Math.abs(a.x - b.x)
      expect(indexOfNearestPoint(points, new Point(11, 100), -1, xOnly)).toBe(1)
    })
  })
})

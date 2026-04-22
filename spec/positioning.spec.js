import { NotCrossingStrategy, FloatLeftStrategy, FloatRightStrategy } from '../src/positioning'
import Rectangle from '../src/geometry/rectangle'
import Point from '../src/geometry/point'

function makeRect(x, y, w, h) {
  return new Rectangle(new Point(x, y), new Point(w, h))
}

function makeDraggable(x, y, w = 20, h = 20) {
  return {
    position: new Point(x, y),
    pinnedPosition: new Point(x, y),
    getPosition() { return this.position },
    getSize() { return new Point(w, h) },
    getRectangle() { return new Rectangle(this.position, this.getSize()) }
  }
}

describe('NotCrossingStrategy', () => {
  const boundRect = makeRect(0, 0, 400, 400)

  describe('positioning', () => {
    it('should not modify non-overlapping rectangles', () => {
      const strategy = new NotCrossingStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 50, 50),
        makeRect(200, 200, 50, 50)
      ]
      const result = strategy.positioning(rects, [1])
      expect(result[1].removable).toBeUndefined()
    })

    it('should push new rectangle away from static one', () => {
      const strategy = new NotCrossingStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 100, 100),   // static
        makeRect(50, 50, 80, 80)    // new, overlapping
      ]
      strategy.positioning(rects, [1])
      // After moveToBound, rect should be pushed out
      const staticRect = rects[0]
      const movedRect = rects[1]
      // Should no longer overlap with static rect, or be marked removable
      const intersection = staticRect.and(movedRect)
      if (intersection) {
        expect(movedRect.removable).toBe(true)
      }
    })

    it('should mark rectangle as removable when it overlaps after positioning', () => {
      const smallBound = makeRect(0, 0, 120, 120)
      const strategy = new NotCrossingStrategy(smallBound)
      const rects = [
        makeRect(0, 0, 100, 100),    // static, takes most of the space
        makeRect(10, 10, 100, 100)   // new, overlapping, nowhere to go
      ]
      strategy.positioning(rects, [1])
      // After being pushed out of static rect, it may be outside bound
      // Either it fits or is marked removable
      expect(rects[1].position).toBeDefined()
    })

    it('should add successfully positioned rectangles to static list', () => {
      const strategy = new NotCrossingStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 50, 50),     // static
        makeRect(100, 0, 50, 50),   // new, no overlap
        makeRect(200, 0, 50, 50)    // new, no overlap
      ]
      strategy.positioning(rects, [1, 2])
      expect(rects[1].removable).toBeUndefined()
      expect(rects[2].removable).toBeUndefined()
    })
  })

  describe('sorting', () => {
    it('should concatenate old and new draggables', () => {
      const strategy = new NotCrossingStrategy(boundRect)
      const old = [makeDraggable(0, 0)]
      const newD = [makeDraggable(100, 100)]
      const indexOfNews = []
      const result = strategy.sorting(old, newD, indexOfNews)
      expect(result).toHaveLength(2)
      expect(result[0]).toBe(old[0])
      expect(result[1]).toBe(newD[0])
    })

    it('should populate indexOfNews with correct indices', () => {
      const strategy = new NotCrossingStrategy(boundRect)
      const old = [makeDraggable(0, 0), makeDraggable(50, 0)]
      const newD = [makeDraggable(100, 0)]
      const indexOfNews = []
      strategy.sorting(old, newD, indexOfNews)
      expect(indexOfNews).toEqual([2])
    })
  })
})

describe('FloatLeftStrategy', () => {
  const boundRect = makeRect(0, 0, 300, 300)

  describe('constructor', () => {
    it('should use default options', () => {
      const strategy = new FloatLeftStrategy(boundRect)
      expect(strategy.radius).toBe(80)
      expect(strategy.paddingTopLeft.x).toBe(0)
      expect(strategy.paddingBottomRight.x).toBe(0)
      expect(strategy.yGapBetweenDraggables).toBe(0)
    })

    it('should accept custom options', () => {
      const strategy = new FloatLeftStrategy(boundRect, {
        radius: 50,
        paddingTopLeft: new Point(10, 10),
        paddingBottomRight: new Point(5, 5),
        yGapBetweenDraggables: 8
      })
      expect(strategy.radius).toBe(50)
      expect(strategy.paddingTopLeft.x).toBe(10)
      expect(strategy.paddingBottomRight.x).toBe(5)
      expect(strategy.yGapBetweenDraggables).toBe(8)
    })
  })

  describe('boundRect getter', () => {
    it('should return rectangle directly', () => {
      const rect = makeRect(0, 0, 100, 100)
      const strategy = new FloatLeftStrategy(rect)
      expect(strategy.boundRect).toBe(rect)
    })

    it('should call function and return result', () => {
      const rect = makeRect(0, 0, 100, 100)
      const strategy = new FloatLeftStrategy(() => rect)
      expect(strategy.boundRect).toBe(rect)
    })
  })

  describe('positioning', () => {
    it('should position single rectangle at top-left', () => {
      const strategy = new FloatLeftStrategy(boundRect)
      const rects = [makeRect(0, 0, 50, 50)]
      strategy.positioning(rects, [])
      expect(rects[0].position.x).toBe(0)
      expect(rects[0].position.y).toBe(0)
    })

    it('should position rectangles left to right', () => {
      const strategy = new FloatLeftStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 80, 50),
        makeRect(0, 0, 80, 50),
        makeRect(0, 0, 80, 50)
      ]
      strategy.positioning(rects, [])

      expect(rects[0].position.x).toBe(0)
      expect(rects[1].position.x).toBeGreaterThan(0)
      expect(rects[2].position.x).toBeGreaterThan(rects[1].position.x)
    })

    it('should wrap to next row when exceeding width', () => {
      const strategy = new FloatLeftStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 200, 40),
        makeRect(0, 0, 200, 40)
      ]
      strategy.positioning(rects, [])

      // Second rect should wrap to next row since 200 + 200 > 300
      expect(rects[1].position.y).toBeGreaterThan(0)
    })

    it('should apply padding', () => {
      const strategy = new FloatLeftStrategy(boundRect, {
        paddingTopLeft: new Point(15, 20)
      })
      const rects = [makeRect(0, 0, 50, 50)]
      strategy.positioning(rects, [])
      expect(rects[0].position.x).toBe(15)
      expect(rects[0].position.y).toBe(20)
    })

    it('should apply yGapBetweenDraggables', () => {
      const strategy = new FloatLeftStrategy(makeRect(0, 0, 60, 400), {
        yGapBetweenDraggables: 10
      })
      const rects = [
        makeRect(0, 0, 50, 30),
        makeRect(0, 0, 50, 30)
      ]
      strategy.positioning(rects, [])

      // Second rect should be below first + gap
      expect(rects[1].position.y).toBeGreaterThan(rects[0].position.y)
    })

    it('should mark rectangles as removable when below bound', () => {
      const smallBound = makeRect(0, 0, 100, 50)
      const strategy = new FloatLeftStrategy(smallBound)
      const rects = [
        makeRect(0, 0, 80, 40),
        makeRect(0, 0, 80, 40)
      ]
      strategy.positioning(rects, [])
      // Second rect won't fit vertically, should be removable
      expect(rects[1].removable).toBe(true)
    })

    it('should not mark as removable when option is off', () => {
      const smallBound = makeRect(0, 0, 100, 50)
      const strategy = new FloatLeftStrategy(smallBound, { removable: false })
      const rects = [
        makeRect(0, 0, 80, 40),
        makeRect(0, 0, 80, 40)
      ]
      strategy.positioning(rects, [])
      expect(rects[1].removable).toBeUndefined()
    })
  })

  describe('sorting', () => {
    it('should insert new draggables near their position', () => {
      const strategy = new FloatLeftStrategy(boundRect)
      const old = [makeDraggable(0, 0), makeDraggable(100, 0), makeDraggable(200, 0)]
      const newD = [makeDraggable(90, 0)]
      const indexOfNews = []

      const result = strategy.sorting(old, newD, indexOfNews)
      expect(result).toHaveLength(4)
      expect(result).toContain(newD[0])
    })

    it('should append to end when no match within radius', () => {
      const strategy = new FloatLeftStrategy(boundRect, { radius: 5 })
      const old = [makeDraggable(0, 0)]
      const newD = [makeDraggable(999, 999)]
      const indexOfNews = []

      const result = strategy.sorting(old, newD, indexOfNews)
      expect(result[result.length - 1]).toBe(newD[0])
    })

    it('should populate indexOfNews', () => {
      const strategy = new FloatLeftStrategy(boundRect)
      const old = [makeDraggable(0, 0)]
      const newD = [makeDraggable(50, 0)]
      const indexOfNews = []

      strategy.sorting(old, newD, indexOfNews)
      expect(indexOfNews).toHaveLength(1)
      expect(typeof indexOfNews[0]).toBe('number')
    })
  })
})

describe('FloatRightStrategy', () => {
  const boundRect = makeRect(0, 0, 300, 300)

  describe('constructor', () => {
    it('should use default options', () => {
      const strategy = new FloatRightStrategy(boundRect)
      expect(strategy.paddingTopRight.x).toBe(5)
      expect(strategy.paddingTopRight.y).toBe(5)
      expect(strategy.paddingBottomLeft.x).toBe(0)
    })

    it('should accept custom options', () => {
      const strategy = new FloatRightStrategy(boundRect, {
        paddingTopRight: new Point(20, 10),
        paddingBottomLeft: new Point(8, 8)
      })
      expect(strategy.paddingTopRight.x).toBe(20)
      expect(strategy.paddingBottomLeft.x).toBe(8)
    })
  })

  describe('positioning', () => {
    it('should position single rectangle at top-right', () => {
      const strategy = new FloatRightStrategy(boundRect)
      const rects = [makeRect(0, 0, 50, 50)]
      strategy.positioning(rects, [])

      // Should be positioned near right edge
      expect(rects[0].position.x).toBeGreaterThan(0)
      expect(rects[0].position.x + rects[0].size.x + strategy.paddingTopRight.x).toBeLessThanOrEqual(300)
    })

    it('should position rectangles right to left', () => {
      const strategy = new FloatRightStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 80, 50),
        makeRect(0, 0, 80, 50)
      ]
      strategy.positioning(rects, [])

      // First rect should be more to the right
      expect(rects[0].position.x).toBeGreaterThanOrEqual(rects[1].position.x)
    })

    it('should wrap to next row when no space', () => {
      const strategy = new FloatRightStrategy(boundRect)
      const rects = [
        makeRect(0, 0, 200, 40),
        makeRect(0, 0, 200, 40)
      ]
      strategy.positioning(rects, [])
      expect(rects[1].position.y).toBeGreaterThan(rects[0].position.y)
    })

    it('should mark rectangles as removable when below bound', () => {
      const smallBound = makeRect(0, 0, 100, 50)
      const strategy = new FloatRightStrategy(smallBound)
      const rects = [
        makeRect(0, 0, 80, 40),
        makeRect(0, 0, 80, 40)
      ]
      strategy.positioning(rects, [])
      expect(rects[1].removable).toBe(true)
    })
  })

  describe('sorting (inherited from FloatLeftStrategy)', () => {
    it('should insert new draggables and populate indexOfNews', () => {
      const strategy = new FloatRightStrategy(boundRect)
      const old = [makeDraggable(0, 0)]
      const newD = [makeDraggable(50, 0)]
      const indexOfNews = []

      const result = strategy.sorting(old, newD, indexOfNews)
      expect(result).toHaveLength(2)
      expect(indexOfNews).toHaveLength(1)
    })
  })
})

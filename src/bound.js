import Point from './geometry/point'
import {
  createRectangleFromElement,
  getPointOnLineByLenght,
  directCrossing,
  boundToLine as boundToLineHelper
} from './geometry/helpers'

import {
  getAngle,
  normalizeAngle,
  boundAngle,
  getPointFromRadialSystem
} from './geometry/angles'

export function boundToRectangle(rectangle) {
  return function(point, size) {
    const calcPoint = point.clone(),
      rectP2 = rectangle.getP3()

    if (rectangle.position.x > calcPoint.x) {
      (calcPoint.x = rectangle.position.x)
    }
    if (rectangle.position.y > calcPoint.y) {
      calcPoint.y = rectangle.position.y
    }
    if (rectP2.x < calcPoint.x + size.x) {
      calcPoint.x = rectP2.x - size.x
    }
    if (rectP2.y < calcPoint.y + size.y) {
      calcPoint.y = rectP2.y - size.y
    }

    return calcPoint
  }
}

export function boundToElement(element, parent) {
  const retFunc = function() {
    return bound.apply(this, arguments)
  }
  let bound

  retFunc.refresh = function() {
    bound = boundToRectangle(createRectangleFromElement(element, parent))
  }

  retFunc.refresh()
  return retFunc
}

export function boundToLineX(x, startY, endY) {
  return function(point, size) {
    const calcPoint = point.clone()
    calcPoint.x = x
    if (startY > calcPoint.y) {
      calcPoint.y = startY
    }
    if (endY < calcPoint.y + size.y) {
      calcPoint.y = endY - size.y
    }

    return calcPoint
  }
}

export function boundToLineY(y, startX, endX) {
  return function(point, size) {
    const calcPoint = point.clone()
    calcPoint.y = y
    if (startX > calcPoint.x) {
      calcPoint.x = startX
    }
    if (endX < calcPoint.x + size.x) {
      calcPoint.x = endX - size.x
    }
    return calcPoint
  }
}

export function boundToLine(start, end) {
  const alpha = Math.atan2(end.y - start.y, end.x - start.x),
    beta = alpha + Math.PI / 2,
    someK = 10,
    cosBeta = Math.cos(beta),
    sinBeta = Math.sin(beta)

  return function(point, size) {
    const point2 = new Point(point.x + someK * cosBeta, point.y + someK * sinBeta)
    const newEnd = getPointOnLineByLenght(end, start, size.x)
    let pointCrossing = directCrossing(start, end, point, point2)

    pointCrossing = boundToLineHelper(start, newEnd, pointCrossing)
    return pointCrossing
  }
}

export function boundToCircle(center, radius) {
  return function(point, _size) {
    const boundedPoint = getPointOnLineByLenght(center, point, radius)
    return boundedPoint
  }
}

export function boundToArc(center, radius, startAgle, endAngle) {
  return function(point, _size) {
    const boundStartAngle = typeof startAgle === 'function' ? startAgle() : startAgle
    const boundEndtAngle = typeof startAgle === 'function' ? endAngle() : endAngle

    let angle = getAngle(center, point)
    angle = normalizeAngle(angle)
    angle = boundAngle(boundStartAngle, boundEndtAngle, angle)
    return getPointFromRadialSystem(angle, radius, center)
  }
}

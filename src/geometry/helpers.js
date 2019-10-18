import Point from './point'
import Rectangle from './rectangle'

export function getDistance(p1, p2) {
  const dx = p1.x - p2.x, dy = p1.y - p2.y
  return Math.sqrt(dx * dx + dy * dy)
}

export function distance(p1, p2) {
  return getDistance(p1, p2)
}

export function getXDifference(p1, p2) {
  return Math.abs(p1.x - p2.x)
}

export function getYDifference(p1, p2) {
  return Math.abs(p1.y - p2.y)
}

export function transformedSpaceDistanceFactory(options) {
  return (p1, p2) => {
    return Math.sqrt(
      Math.pow(options.x * Math.abs(p1.x - p2.x), 2) +
      Math.pow(options.y * Math.abs(p1.y - p2.y), 2)
    )
  }
}

export function indexOfNearestPoint(arr, val, radius, getDistanceFunc) {
  let size, index = 0, i, temp
  getDistanceFunc = getDistanceFunc || getDistance
  if (arr.length === 0) {
    return -1
  }
  size = getDistanceFunc(arr[0], val)
  for (i = 0; i < arr.length; i++) {
    temp = getDistanceFunc(arr[i], val)
    if (temp < size) {
      size = temp
      index = i
    }
  }
  if (radius >= 0 && size > radius) {
    return -1
  }
  return index
}

export function bound(min, max, val) {
  return Math.max(min, Math.min(max, val))
}

export function boundPoint(min, max, val) {
  const x = Math.max(min.x, Math.min(max.x, val.x))
  const y = Math.max(min.y, Math.min(max.y, val.y))
  return new Point(x, y)
}

//Return crossing point of two lines
export function directCrossing(L1P1, L1P2, L2P1, L2P2) {
  let temp, k1, k2, b1, b2, x, y
  if (L2P1.x === L2P2.x) {
    temp = L2P1
    L2P1 = L1P1
    L1P1 = temp
    temp = L2P2
    L2P2 = L1P2
    L1P2 = temp
  }
  if (L1P1.x === L1P2.x) {
    k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x)
    b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x)
    x = L1P1.x
    y = x * k2 + b2
    return new Point(x, y)
  } else {
    k1 = (L1P2.y - L1P1.y) / (L1P2.x - L1P1.x)
    b1 = (L1P2.x * L1P1.y - L1P1.x * L1P2.y) / (L1P2.x - L1P1.x)
    k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x)
    b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x)
    x = (b1 - b2) / (k2 - k1)
    y = x * k1 + b1
    return new Point(x, y)
  }
}

export function boundToSegment(LP1, LP2, P) {
  let x, y
  x = bound(Math.min(LP1.x, LP2.x), Math.max(LP1.x, LP2.x), P.x)
  if (x !== P.x) {
    y = (x === LP1.x) ? LP1.y : LP2.y
    P = new Point(x, y)
  }

  y = bound(Math.min(LP1.y, LP2.y), Math.max(LP1.y, LP2.y), P.y)
  if (y !== P.y) {
    x = (y === LP1.y) ? LP1.x : LP2.x
    P = new Point(x, y)
  }

  return P
}

export function boundToLine(A, B, P) {
  const AP = new Point(P.x - A.x, P.y - A.y),
    AB = new Point(B.x - A.x, B.y - A.y),
    ab2 = AB.x * AB.x + AB.y * AB.y,
    ap_ab = AP.x * AB.x + AP.y * AB.y,
    t = ap_ab / ab2
  return new Point(A.x + AB.x * t, A.y + AB.y * t)
}

export function getPointInLine(LP1, LP2, percent) {
  const dx = LP2.x - LP1.x, dy = LP2.y - LP1.y
  return new Point(LP1.x + percent * dx, LP1.y + percent * dy)
}

export function getPointInLineByLenght(LP1, LP2, lenght) {
  const dx = LP2.x - LP1.x, dy = LP2.y - LP1.y, percent = lenght / distance(LP1, LP2)
  return new Point(LP1.x + percent * dx, LP1.y + percent * dy)
}

export function createRectangleFromElement(el, parent, isContentBoxSize, isConsiderTranslate) {
  const size = getSizeOfElement(el, isContentBoxSize)
  return new Rectangle(getOffset(el, parent || el.parentNode, isConsiderTranslate), size)
}

export function getSumValueOfStyleRule(element, rules) {
  return rules.reduce((sum, rule) => {
    return sum + parseInt(window.getComputedStyle(element)[rule]||0)
  }, 0)
}

export function getSizeOfElement(el, isContentBoxSize) {
  let width = parseInt(window.getComputedStyle(el)['width']), height = parseInt(window.getComputedStyle(el)['height'])
  if (!isContentBoxSize) {
    width += getSumValueOfStyleRule(el, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width'])
    height += getSumValueOfStyleRule(el, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width'])
  }
  return new Point(width, height)
}

export function getOffset(el, parent) {
  const elRect = el.getBoundingClientRect()
  const parentRect = parent.getBoundingClientRect()
  return new Point(
    elRect.left - parentRect.left,
    elRect.top - parentRect.top
  )
}

export function getPointFromRadialSystem(angle, length, center) {
  center = center || new Point(0, 0)
  return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)))
}

export function addPointToBoundPoints(boundpoints, point, isRight) {
  const result = boundpoints.filter((bPoint) => {
    return bPoint.y > point.y || (isRight ? bPoint.x < point.x : bPoint.x > point.x)
  })

  for (let i = 0; i < result.length; i++) {
    if (point.y < result[i].y) {
      result.splice(i, 0, point)
      return result
    }
  }
  result.push(point)
  return result
}

export function getAngle(p1, p2) {
  const diff = p2.sub(p1)
  return normalizeAngle(Math.atan2(diff.y, diff.x))
}

export function toRadian(angle) {
  return ((angle % 360) * Math.PI / 180)
}

export function toDegree(angle) {
  return (angle * 180 / Math.PI) % 360
}

export function boundAngle(min, max, val) {
  let dmin, dmax
  if (min < max && val > min && val < max) {
    return val
  } else if (max < min && (val < max || val > min)) {
    return val
  } else {
    dmin = getAngleDiff(min, val)
    dmax = getAngleDiff(max, val)
    if (dmin < dmax) {
      return min
    } else {
      return max
    }
  }
}

export function getNearestAngle(arr, angle) {
  let i, temp, diff = Math.PI * 2, value
  for (i = 0; i < arr.length;i++) {
    temp = getAngleDiff(arr[i], angle)
    if (diff < temp) {
      diff = temp
      value = arr[i]
    }
  }
  return value
}

export function getAngleDiff(alpha, beta) {
  const minAngle = Math.min(alpha, beta),
    maxAngle =  Math.max(alpha, beta)
  return Math.min(maxAngle - minAngle, minAngle + Math.PI*2 - maxAngle)
}

export function normalizeAngle(val) {
  while (val < 0) {
    val += 2 * Math.PI
  }
  while (val > 2 * Math.PI) {
    val -= 2 * Math.PI
  }
  return val
}

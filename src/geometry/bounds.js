import Point from './point'
import { getDistance } from './distances'

export function clamp(min, max, val) {
  return Math.max(min, Math.min(max, val))
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
  x = clamp(Math.min(LP1.x, LP2.x), Math.max(LP1.x, LP2.x), P.x)
  if (x !== P.x) {
    y = (x === LP1.x) ? LP1.y : LP2.y
    P = new Point(x, y)
  }

  y = clamp(Math.min(LP1.y, LP2.y), Math.max(LP1.y, LP2.y), P.y)
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

export function getPointOnLine(LP1, LP2, percent) {
  const dx = LP2.x - LP1.x, dy = LP2.y - LP1.y
  return new Point(LP1.x + percent * dx, LP1.y + percent * dy)
}

export function getPointOnLineByLenght(LP1, LP2, lenght) {
  const dx = LP2.x - LP1.x
  const dy = LP2.y - LP1.y
  const percent = lenght / getDistance(LP1, LP2)
  return new Point(LP1.x + percent * dx, LP1.y + percent * dy)
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

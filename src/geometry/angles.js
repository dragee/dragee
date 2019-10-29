import Point from './point'

export function getAngleDiff(alpha, beta) {
  const minAngle = Math.min(alpha, beta)
  const maxAngle =  Math.max(alpha, beta)
  return Math.min(maxAngle - minAngle, minAngle + Math.PI*2 - maxAngle)
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

export function normalizeAngle(val) {
  while (val < 0) {
    val += 2 * Math.PI
  }
  while (val > 2 * Math.PI) {
    val -= 2 * Math.PI
  }
  return val
}

export function getPointFromRadialSystem(angle, length, center) {
  center = center || new Point(0, 0)
  return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)))
}

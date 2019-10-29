export function getDistance(p1, p2) {
  const dx = p1.x - p2.x, dy = p1.y - p2.y
  return Math.sqrt(dx * dx + dy * dy)
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

export function indexOfNearestPoint(arr, val, radius, getDistanceFunc=getDistance) {
  let size, index = 0, i, temp
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

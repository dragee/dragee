import Point from './point'

export default class Rectangle {
  constructor(position, size) {
    this.position = position
    this.size = size
  }

  getP1() {
    return this.position
  }

  getP2() {
    return new Point(this.position.x + this.size.x, this.position.y)
  }

  getP3() {
    return this.position.add(this.size)
  }

  getP4() {
    return new Point(this.position.x, this.position.y + this.size.y)
  }

  getCenter() {
    return this.position.add(this.size.mult(0.5))
  }

  or(rect) {
    const position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y))
    const size = (new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y))).sub(position)
    return new Rectangle(position, size)
  }

  and(rect) {
    const position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y))
    const size = (new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y))).sub(position)
    if (size.x <= 0 || size.y <= 0) {
      return null
    }
    return new Rectangle(position, size)
  }

  includePoint(p) {
    return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y)
  }

  includeRectangle(rectangle) {
    return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3())
  }

  moveToBound(rect, axis) {
    let selAxis, crossRectangle
    if (axis) {
      selAxis = axis
    } else {
      crossRectangle = this.and(rect)
      if (!crossRectangle) {
        return rect
      }
      selAxis = crossRectangle.size.x > crossRectangle.size.y ? 'y' : 'x'
    }
    const thisCenter = this.getCenter()
    const rectCenter = rect.getCenter()
    const sign = thisCenter[selAxis] > rectCenter[selAxis] ? -1 : 1
    const offset = sign > 0 ? this.position[selAxis] + this.size[selAxis] - rect.position[selAxis] : this.position[selAxis] - (rect.position[selAxis] + rect.size[selAxis])
    rect.position[selAxis] = rect.position[selAxis] + offset
    return rect
  }

  getSquare() {
    return this.size.x * this.size.y
  }

  styleApply(el) {
    el = el || document.querySelector('ind')
    el.style.left = this.position.x + 'px'
    el.style.top = this.position.y + 'px'
    el.style.width = this.size.x + 'px'
    el.style.height = this.size.y + 'px'
  }

  growth(size) {
    this.size = this.size.add(size)
    this.position = this.position.add(size.mult(-0.5))
  }

  getMinSide() {
    return Math.min(this.size.x, this.size.y)
  }

  static fromElement(element, parent=element.parentNode, isConsiderTranslate=false) {
    const position = isConsiderTranslate
      ? Point.elementBoundingOffset(element, parent)
      : Point.elementOffset(element, parent)
    const size = Point.elementSize(element)
    return new Rectangle(position, size)
  }
}

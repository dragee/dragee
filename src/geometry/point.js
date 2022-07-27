/** Class representing a point. */
export default class Point {
  /**
  * Create a point.
  * @param {number} x - The x value.
  * @param {number} y - The y value.
  */
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(p) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  sub(p) {
    return new Point(this.x - p.x, this.y - p.y)
  }

  mult(k) {
    return new Point(this.x * k, this.y * k)
  }

  negative() {
    return new Point(-this.x, -this.y)
  }

  compare(p) {
    return (this.x === p.x && this.y === p.y)
  }

  clone() {
    return new Point(this.x, this.y)
  }

  toString() {
    return `{x=${this.x},y=${this.y}`
  }

  static elementOffset(element, parent) {
    parent = parent || element.parentNode
    const elementRect = element.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    return new Point(
      elementRect.left - parentRect.left,
      elementRect.top - parentRect.top
    )
  }

  static elementSize(element) {
    const elementRect = element.getBoundingClientRect()
    return new Point(
      elementRect.width,
      elementRect.height
    )
  }
}

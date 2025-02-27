import getParentsChain from '../utils/get-parents-chain'

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
    if (parent === element) {
      return new Point(0, 0);
    } else if (parent === element.offsetParent) {
      return new Point(
        element.offsetLeft + parent.clientLeft,
        element.offsetTop + parent.clientTop
      )
    } else {
      const considerOffsetElements = [element, getParentsChain(element, parent).pop()]
      return new Point(
        considerOffsetElements.reduce((sum, p) => sum + p.offsetLeft, 0) + parent.clientLeft,
        considerOffsetElements.reduce((sum, p) => sum + p.offsetTop, 0) + parent.clientTop
      )
    }
  }

  static elementBoundingOffset(element, parent) {
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

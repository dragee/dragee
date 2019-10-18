export default class Point {
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
}

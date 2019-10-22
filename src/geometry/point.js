function getSumValueOfStyleRules(element, rules) {
  return rules.reduce((sum, rule) => {
    return sum + parseInt(window.getComputedStyle(element)[rule]||0)
  }, 0)
}

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

  static elementOffset(element, parent) {
    parent = parent || element.parentNode
    const elementRect = element.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    return new Point(
      elementRect.left - parentRect.left,
      elementRect.top - parentRect.top
    )
  }

  static elementSize(element, isContentBoxSize=false) {
    let width = parseInt(window.getComputedStyle(element)['width'])
    let height = parseInt(window.getComputedStyle(element)['height'])
    if (!isContentBoxSize) {
      width += getSumValueOfStyleRules(element, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width'])
      height += getSumValueOfStyleRules(element, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width'])
    }
    return new Point(width, height)
  }
}

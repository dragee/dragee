import Point from './geometry/point'
import Rectangle from './geometry/rectangle'
import {
  getPointOnLineByLenght,
  directCrossing,
  boundToLine
} from './geometry/bounds'

import {
  getAngle,
  normalizeAngle,
  boundAngle,
  getPointFromRadialSystem
} from './geometry/angles'

export class Bound {
  constructor () {}

  bound(point, _size) {
    return point
  }

  refresh () {}
}

export class BoundToRectangle extends Bound {
  constructor(rectangle) {
    super()
    this.rectangle = rectangle
  }

  bound(point, size) {
    const calcPoint = point.clone()
    const rectP2 = this.rectangle.getP3()

    if (this.rectangle.position.x > calcPoint.x) {
      (calcPoint.x = this.rectangle.position.x)
    }
    if (this.rectangle.position.y > calcPoint.y) {
      calcPoint.y = this.rectangle.position.y
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

export class BoundToElement extends BoundToRectangle {
  constructor(element, parent) {
    super(Rectangle.fromElement(element, parent))
    this.element = element
    this.parent = parent
  }

  refresh () {
    this.rectangle = Rectangle.fromElement(this.element, this.parent)
  }
}

export class BoundToLineX extends Bound {
  constructor(x, startY, endY) {
    super()
    this.x = x
    this.startY = startY
    this.endY = endY
  }

  bound(point, size) {
    const calcPoint = point.clone()

    calcPoint.x = this.x
    if (this.startY > calcPoint.y) {
      calcPoint.y = this.startY
    }
    if (this.endY < calcPoint.y + size.y) {
      calcPoint.y = this.endY - size.y
    }

    return calcPoint
  }
}

export class BoundToLineY extends Bound {
  constructor(y, startX, endX) {
    super()
    this.y = y
    this.startX = startX
    this.endX = endX
  }

  bound(point, size) {
    const calcPoint = point.clone()
    calcPoint.y = this.y
    if (this.startX > calcPoint.x) {
      calcPoint.x = this.startX
    }
    if (this.endX < calcPoint.x + size.x) {
      calcPoint.x = this.endX - size.x
    }
    return calcPoint
  }
}

export class BoundToLine extends Bound {
  constructor(startPoint, endPoint) {
    super()
    this.startPoint = startPoint
    this.endPoint = endPoint
    const alpha = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x)
    const beta = alpha + Math.PI / 2
    this.someK = 10
    this.cosBeta = Math.cos(beta)
    this.sinBeta = Math.sin(beta)
  }

  bound(point, size) {
    const point2 = new Point(
      point.x + this.someK * this.cosBeta,
      point.y + this.someK * this.sinBeta
    )

    const newEndPoint = getPointOnLineByLenght(this.endPoint, this.startPoint, size.x)
    const pointCrossing = directCrossing(this.startPoint, this.endPoint, point, point2)

    return boundToLine(this.startPoint, newEndPoint, pointCrossing)
  }
}

export class BoundToCircle extends Bound {
  constructor(center, radius) {
    super()
    this.center = center
    this.radius = radius
  }

  bound(point, _size) {
    return getPointOnLineByLenght(this.center, point, this.radius)
  }
}

export class BoundToArc extends BoundToCircle {
  constructor(center, radius, startAngle, endAngle) {
    super(center, radius)
    this._startAngle = startAngle
    this._endAngle = endAngle
  }

  startAngle() {
    return typeof this._startAngle === 'function' ? this._startAngle() : this._startAngle
  }

  endAngle() {
    return typeof this._endAngle === 'function' ? this._endAngle() : this._endAngle
  }

  bound(point, _size) {
    let angle = getAngle(this.center, point)
    angle = normalizeAngle(angle)
    angle = boundAngle(this.startAngle(), this.endAngle(), angle)
    return getPointFromRadialSystem(angle, this.radius, this.center)
  }
}

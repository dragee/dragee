import createCanvas from './utils/create-canvas'
import range from './utils/range'
import { Geometry, Point } from './geometry'
import { Draggable, events } from './draggable'
import { boundToArc } from './bound'

const isTouch = 'ontouchstart' in window

function randomColor() {
  const rnd = function() {
    return Math.round(Math.random()*255)
  }
  const toHexString = function(digit) {
    let str = digit.toString(16)
    while (str.length < 2) {
      str = '0' + str
    }
    return str
  }

  return '#' + toHexString(rnd()) + toHexString(rnd()) + toHexString(rnd())
}

function getArrayWithBoundIndexes(index, length) {
  const retIndexes = []
  if (index !== -1) {
    retIndexes.push(index)
    retIndexes.push((index + 1) % length)
  }

  return retIndexes
}

class Chart {
  constructor (area, elements, options={}) {
    const areaRectangle = Geometry.createRectangleFromElement(area, area)
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      touchRadius: areaRectangle.getMinSide() / 2,
      boundAngle: Math.PI / 9,
      fillStyles: range(0, elements.length).map(() => randomColor()),
      initAngles: range(-90, 270, 360 / elements.length).map((angle) => {
        return Geometry.toRadian(angle)
      }),
      limitImg: null,
      limitImgOffset: new Point(0, 0),
      isSelectable: false
    }, options)

    this.onDraw = this.options.onDraw || function() {}
    this.area = area
    this.areaRectangle = areaRectangle
    this.init(elements)
  }

  init(elements) {
    this.canvas = createCanvas(this.area, this.areaRectangle)
    this.context = this.canvas.getContext('2d')
    this.draggables = elements.map((element, i) => {
      const angle = this.options.initAngles[i]
      const halfSize = Geometry.getSizeOfElement(element).mult(0.5)
      const position = Geometry.getPointFromRadialSystem(
        angle,
        this.options.touchRadius,
        this.options.center.sub(halfSize)
      )
      const bound = boundToArc(
        this.options.center.sub(halfSize),
        this.options.touchRadius,
        this.getBoundAngle(i, false),
        this.getBoundAngle(i, true)
      )

      return new Draggable(element, {
        parent: this.area,
        bound: bound,
        position: position,
        onMove: () => {
          this.draw()
          return true
        }
      })
    })

    this.isInit = true
    if (this.options.isSelectable) {
      this.initSelect()
    }
    this.draw()
  }

  initSelect() {
    this.setActiveArc(-1)

    this.canvas.addEventListener(events.start, (e) => {
      let point = new Point(
        isTouch ? e.changedTouches[0].pageX : e.clientX,
        isTouch ? e.changedTouches[0].pageY : e.clientY
      )

      if (!this.canvasOffset) {
        this.canvasOffset = Geometry.getOffset(this.canvas)
      }

      point = point.sub(this.canvasOffset)
      const index = this.getArcOnPoint(point)
      if (index !== -1) {
        this.setActiveArc((this.activeArcIndex !== index) ? index : -1)
      }
    })
  }

  updateAngles() {
    this.angles = this.draggables.map((draggable) => {
      const halfSize = draggable.getSize().mult(0.5)
      return Geometry.getAngle(this.options.center.sub(halfSize), draggable.position)
    })
  }

  getBoundAngle(index, isClossing) {
    const sign = isClossing ? 1 : -1

    return () => {
      let i = (index + sign) % this.angles.length
      if (i < 0) {
        i += this.angles.length
      }
      return Geometry.normalizeAngle(this.angles[i] - sign * this.options.boundAngle)
    }
  }

  draw() {
    if (!this.isInit) {
      return
    }

    this.updateAngles()
    this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y)
    this.draggables.forEach((_draggable, index) => {
      this.drawArc(this.context, this.options.center, this.options.radius, index)
    })

    this.draggables.forEach((_draggable, index) => {
      let enableIndexes
      if (this.options.isSelectable) {
        enableIndexes = getArrayWithBoundIndexes(this.activeArcIndex, this.draggables.length)
        if (enableIndexes.indexOf(index) !== -1) {
          this.drawLimitImg(index)
        }
      } else {
        this.drawLimitImg(index)
      }
    })
    this.onDraw()
  }

  createClone(element, options = {}) {
    if (!this.isInit) {
      return
    }
    const rectangle = Geometry.createRectangleFromElement(element, element)
    const opts = Object.assign({
      center: rectangle.getCenter(),
      radius: rectangle.getMinSide() / 2,
      fillStyles: this.options.fillStyles
    }, options)

    const canvas = createCanvas(element, rectangle)
    const context = canvas.getContext('2d')
    const cloneObj = {
      draw: () => {
        context.clearRect(0, 0, rectangle.size.x, rectangle.size.y)
        this.draggables.forEach((_draggable, index) => {
          this.drawArc(context, opts.center, opts.radius, index)
        })
      }
    }
    cloneObj.draw()
    return cloneObj
  }

  getFillStyle(index) {
    if (typeof this.options.fillStyles[index] === 'function') {
      this.options.fillStyles[index] = this.options.fillStyles[index].call(this)
    }
    return this.options.fillStyles[index]
  }

  drawArc(context, center, radius, index) {
    const startAngle = this.angles[index]
    const endAngle = this.angles[(index+1) % this.angles.length]
    const color = this.getFillStyle(index)

    context.beginPath()
    context.moveTo(center.x, center.y)
    context.arc(center.x, center.y, radius, startAngle, endAngle, false)
    context.lineTo(center.x, center.y)
    context.closePath()
    context.fillStyle = color
    context.fill()
  }

  drawLimitImg(index) {
    let point, img
    if (this.options.limitImg) {
      img = this.options.limitImg instanceof Array ? this.options.limitImg[index] : this.options.limitImg
    }

    if (img) {
      const angle = Geometry.normalizeAngle(this.angles[index])
      point = new Point(0, -img.height / 2)
      point = point.add(this.options.limitImgOffset)
      this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2)
      this.context.rotate(angle)
      this.context.drawImage(img, point.x, point.y)
      this.context.setTransform(1, 0, 0, 1, 0, 0)
    }
  }

  getAnglesDiff() {
    const angles = this.angles.slice(1)
    let baseAngle = this.angles[0]

    angles.push(baseAngle)
    return angles.map((angle) => {
      const diffAngle = Geometry.normalizeAngle(angle - baseAngle)
      baseAngle = angle
      return diffAngle
    })
  }

  getPercent() {
    return this.getAnglesDiff().map((diffAngle) => diffAngle / (2 * Math.PI))
  }

  getArcBisectrixs() {
    return this.getAnglesDiff().map((diffAngle, i) => {
      return Geometry.normalizeAngle(this.angles[i] + diffAngle / 2)
    })
  }

  getArcOnPoint(point) {
    const angle = Geometry.getAngle(this.options.center, point)
    const radius = Geometry.getDistance(this.options.center, point)

    if (radius > this.options.radius) {
      return -1
    }

    let offset = -1, i, j
    for (i = 0; i < this.angles.length; i++) {
      if (offset === -1 || this.angles[offset] > this.angles[i]) {
        offset = i
      }
    }
    for (i = 0, j = offset; i < this.angles.length; i++, j = (i + offset) % this.angles.length) {
      if (angle < this.angles[j]) {
        break
      }
    }
    if (--j < 0) {
      j += this.angles.length
    }
    return j
  }

  setAngles(angles) {
    this.angles = angles
    this.draggables.forEach((draggable, i) => {
      const angle = this.angles[i]
      const halfSize = draggable.getSize().mult(0.5)
      const position = Geometry.getPointFromRadialSystem(
        angle,
        this.options.touchRadius,
        this.options.center.sub(halfSize)
      )

      draggable.move(position, 0, true, true)
    })
    this.draw()
  }

  setActiveArc(index) {
    const enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length)
    this.activeArcIndex = index
    this.draggables.forEach((draggable, i) => {
      draggable.enable = enableIndexes.indexOf(i) !== -1
    })
    this.draw()
  }
}

export { Chart }

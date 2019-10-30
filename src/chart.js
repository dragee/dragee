import createCanvas from './utils/create-canvas'
import range from './utils/range'
import Point from './geometry/point'
import Rectangle from './geometry/rectangle'

import { getDistance } from './geometry/distances'

import {
  toRadian,
  getPointFromRadialSystem,
  getAngle,
  normalizeAngle
} from './geometry/angles'

import Draggable from './draggable'
import { BoundToArc } from './bounding'
import EventEmitter from './eventEmitter'

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

function randomColor() {
  return `#${toHexString(rnd())}${toHexString(rnd())}${toHexString(rnd())}`
}

function getArrayWithBoundIndexes(index, length) {
  const retIndexes = []
  if (index !== -1) {
    retIndexes.push(index)
    retIndexes.push((index + 1) % length)
  }

  return retIndexes
}

export default class Chart extends EventEmitter {
  constructor (area, elements, options={}) {
    super(undefined, options)
    const areaRectangle = Rectangle.fromElement(area, area)
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      touchRadius: areaRectangle.getMinSide() / 2,
      boundAngle: Math.PI / 9,
      fillStyles: range(0, elements.length).map(() => randomColor()),
      initAngles: range(-90, 270, 360 / elements.length).map((angle) => toRadian(angle)),
      limitImg: null,
      limitImgOffset: new Point(0, 0)
    }, options)

    this.area = area
    this.areaRectangle = areaRectangle
    this.init(elements)
  }

  init(elements) {
    this.canvas = createCanvas(this.area, this.areaRectangle)
    this.context = this.canvas.getContext('2d')
    this.draggables = elements.map((element, i) => {
      const angle = this.options.initAngles[i]
      const halfSize = Point.elementSize(element).mult(0.5)
      const position = getPointFromRadialSystem(
        angle,
        this.options.touchRadius,
        this.options.center.sub(halfSize)
      )

      return new Draggable(element, {
        parent: this.area,
        bounding: new BoundToArc(
          this.options.center.sub(halfSize),
          this.options.touchRadius,
          this.getBoundAngle(i, false),
          this.getBoundAngle(i, true)
        ),
        position: position,
        on: {
          'drag:move': () => this.draw()
        }
      })
    })

    this.isInit = true
    this.draw()
  }

  updateAngles() {
    this.angles = this.draggables.map((draggable) => {
      const halfSize = draggable.getSize().mult(0.5)
      return getAngle(this.options.center.sub(halfSize), draggable.position)
    })
  }

  getBoundAngle(index, isClossing) {
    const sign = isClossing ? 1 : -1

    return () => {
      let i = (index + sign) % this.angles.length
      if (i < 0) {
        i += this.angles.length
      }
      return normalizeAngle(this.angles[i] - sign * this.options.boundAngle)
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
      this.drawLimitImg(index)
    })

    this.emit('chart:draw')
  }

  createClone(element, options = {}) {
    if (!this.isInit) {
      return
    }
    const rectangle = Rectangle.fromElement(element, element)
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
      const angle = normalizeAngle(this.angles[index])
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
      const diffAngle = normalizeAngle(angle - baseAngle)
      baseAngle = angle
      return diffAngle
    })
  }

  getPercent() {
    return this.getAnglesDiff().map((diffAngle) => diffAngle / (2 * Math.PI))
  }

  getArcBisectrixs() {
    return this.getAnglesDiff().map((diffAngle, i) => {
      return normalizeAngle(this.angles[i] + diffAngle / 2)
    })
  }

  getArcOnPoint(point) {
    const angle = getAngle(this.options.center, point)
    const radius = getDistance(this.options.center, point)

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
      const position = getPointFromRadialSystem(
        angle,
        this.options.touchRadius,
        this.options.center.sub(halfSize)
      )

      draggable.moveAndSave(position)
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

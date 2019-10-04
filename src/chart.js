import util from './util'
import { Geometry, Point } from './geometry'
import { Draggable, events } from './draggable'
import { bound } from './bound'

const Dragee = { util, bound, Draggable }//todo remove after refactore

const isTouch = 'ontouchstart' in window
const charts = []

function getArrayWithBoundIndexes(index, length) {
  const retIndexes = []
  if (index !== -1) {
    retIndexes.push(index)
    retIndexes.push((index + 1) % length)
  }

  return retIndexes
}

function Chart(area, elements, options) {
  const areaRectangle = Geometry.createRectangleFromElement(area, area)
  let i
  this.options = {
    center: areaRectangle.getCenter(),
    radius: areaRectangle.getMinSide() / 2,
    touchRadius: areaRectangle.getMinSide() / 2,
    boundAngle: Math.PI/9,
    fillStyles: Dragee.util.range(0, elements.length).map(function() {
      return Dragee.util.randomColor()
    }),
    initAngles: Dragee.util.range(-90, 270, 360 / elements.length).map(function(angle) {
      return Geometry.toRadian(angle)
    }),
    onDraw: function() {},
    limitImg: null,
    limitImgOffset: new Point(0, 0),
    isSelectable: false
  }
  for (i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i]
    }
  }

  charts.push(this)
  this.onDraw = this.options.onDraw
  this.area = area
  this.areaRectangle = areaRectangle
  this.init(elements)
}

Chart.prototype.init = function(elements) {
  const that = this
  this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle)
  this.context = this.canvas.getContext('2d')
  this.draggables = elements.map(function(element, i) {
    const angle = this.options.initAngles[i],
      halfSize = Geometry.getSizeOfElement(element).mult(0.5),
      position = Geometry.getPointFromRadialSystem(
                angle,
                this.options.touchRadius,
                this.options.center.sub(halfSize)
            ),
      bound = Dragee.bound.toArc(
                that.options.center.sub(halfSize),
                that.options.touchRadius,
                that.getBoundAngle(i, false),
                that.getBoundAngle(i, true)
            )

    return new Dragee.Draggable(element, {
      parent: this.area,
      bound: bound,
      position: position,
      onMove: function() {
        that.draw()
        return true
      }
    })
  }, this)

  this.isInit = true
  if (this.options.isSelectable) {
    this.initSelect()
  }
  this.draw()
}

Chart.prototype.initSelect = function() {
  const that = this
  this.setActiveArc(-1)

  this.canvas.addEventListener(events.start, function(e) {
    let point = new Point(
      isTouch ? e.changedTouches[0].pageX : e.clientX,
      isTouch ? e.changedTouches[0].pageY : e.clientY
    )

    if (!that.canvasOffset) {
      that.canvasOffset = Geometry.getOffset(that.canvas)
    }

    point = point.sub(that.canvasOffset)
    const index = that.getArcOnPoint(point)
    if (index !== -1) {
      that.setActiveArc((that.activeArcIndex !== index) ? index : -1)
    }
  })
}

Chart.prototype.updateAngles = function() {
  this.angles = this.draggables.map(function(draggable) {
    const halfSize = draggable.getSize().mult(0.5)
    return Geometry.getAngle(this.options.center.sub(halfSize), draggable.position)
  }, this)
}

Chart.prototype.getBoundAngle = function(index, isClossing) {
  const that = this, sign = isClossing?1:-1

  return function() {
    let i = (index + sign) % that.angles.length
    if (i < 0) {
      i += that.angles.length
    }
    return Geometry.normalizeAngle(that.angles[i] - sign * that.options.boundAngle)
  }
}

Chart.prototype.draw = function() {
  if (!this.isInit) {
    return
  }

  this.updateAngles()
  this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y)
  this.draggables.forEach(function(_draggable, index) {
    this.drawArc(this.context, this.options.center, this.options.radius, index)
  }, this)

  this.draggables.forEach(function(_draggable, index) {
    let enableIndexes
    if (this.options.isSelectable) {
      enableIndexes = getArrayWithBoundIndexes(this.activeArcIndex, this.draggables.length)
      if (enableIndexes.indexOf(index) !== -1) {
        this.drawLimitImg(index)
      }
    } else {
      this.drawLimitImg(index)
    }
  }, this)
  this.onDraw()
}

Chart.prototype.createClone = function(element, options = {}) {
  const that = this
  if (!this.isInit) {
    return
  }
  const rectangle = Geometry.createRectangleFromElement(element, element)
  const opts = Object.assign({
    center: rectangle.getCenter(),
    radius: rectangle.getMinSide() / 2,
    fillStyles: this.options.fillStyles
  }, options)

  const canvas = Dragee.util.createCanvas(element, rectangle)
  const context = canvas.getContext('2d')
  const cloneObj = {
    draw: function() {
      context.clearRect(0, 0, rectangle.size.x, rectangle.size.y)
      that.draggables.forEach(function(_draggable, index) {
        that.drawArc(context, opts.center, opts.radius, index)
      })
    }
  }
  cloneObj.draw()
  return cloneObj
}

Chart.prototype.getFillStyle = function(index) {
  if (typeof this.options.fillStyles[index] === 'function') {
    this.options.fillStyles[index] = this.options.fillStyles[index].call(this)
  }
  return this.options.fillStyles[index]
}

Chart.prototype.drawArc = function(context, center, radius, index) {
  const startAngle = this.angles[index],
    endAngle = this.angles[(index+1)%this.angles.length],
    color = this.getFillStyle(index)

  context.beginPath()
  context.moveTo(center.x, center.y)
  context.arc(center.x, center.y, radius, startAngle, endAngle, false)
  context.lineTo(center.x, center.y)
  context.closePath()
  context.fillStyle = color
  context.fill()
}

Chart.prototype.drawLimitImg = function(index) {
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

Chart.prototype.getAnglesDiff = function() {
  const angles = this.angles.slice(1)
  let baseAngle = this.angles[0]

  angles.push(baseAngle)
  return angles.map(function(angle) {
    const diffAngle = Geometry.normalizeAngle(angle - baseAngle)
    baseAngle = angle
    return diffAngle
  })
}

Chart.prototype.getPercent = function() {
  return this.getAnglesDiff().map(function(diffAngle) {
    return diffAngle / (2 * Math.PI)
  })
}

Chart.prototype.getArcBisectrixs = function() {
  return this.getAnglesDiff().map(function(diffAngle, i) {
    return Geometry.normalizeAngle(this.angles[i] + diffAngle / 2)
  }, this)
}

Chart.prototype.getArcOnPoint = function(point) {
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

Chart.prototype.setAngles = function(angles) {
  this.angles = angles
  this.draggables.forEach(function(draggable, i) {
    const angle = this.angles[i],
      halfSize = draggable.getSize().mult(0.5),
      position = Geometry.getPointFromRadialSystem(
                angle,
                this.options.touchRadius,
                this.options.center.sub(halfSize)
            )

    draggable.move(position, 0, true, true)
  }, this)
  this.draw()
}

Chart.prototype.setActiveArc = function(index) {
  const enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length)
  this.activeArcIndex = index
  this.draggables.forEach(function(draggable, i) {
    draggable.enable = enableIndexes.indexOf(i) !== -1
  })
  this.draw()
}

export { charts, Chart }

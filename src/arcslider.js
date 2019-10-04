import util from './util'
import { Geometry } from './geometry'
import { Draggable } from './draggable'
import { bound } from './bound'

const Dragee = { util, Draggable, bound }//todo remove after refactore

const arcSliders = []

function ArcSlider(area, element, options) {
  const areaRectangle = Geometry.createRectangleFromElement(area, area)
  const halfSize = Geometry.getSizeOfElement(element).mult(0.5)
  let i
  this.options = {
    center: areaRectangle.getCenter(),
    radius: areaRectangle.getMinSide() / 2,
    startAngle: Math.PI,
    endAngle: 0,
    angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
    onChange: function() {},
    time: 500
  }
  for (i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i]
    }
  }
  this.shiftedCenter = this.options.center.sub(halfSize)
  this.onChange = this.options.onChange
  arcSliders.push(this)
  this.area = area
  this.init(element)
}

ArcSlider.prototype.init = function(element) {
  const that = this,
    angle = this.options.startAngle,
    position = Geometry.getPointFromRadialSystem(
            angle,
            this.options.radius,
            this.shiftedCenter
        ),
    bound = Dragee.bound.toArc(
            that.shiftedCenter,
            that.options.radius,
            this.options.startAngle,
            this.options.endAngle
        )

  this.angle = angle
  this.draggable = new Dragee.Draggable(element, {
    parent: this.area,
    bound: bound,
    position: position,
    onMove: function() {
      that.change()
      return true
    }
  })
}

ArcSlider.prototype.updateAngle = function() {
  this.angle = Geometry.getAngle(this.shiftedCenter, this.draggable.position)
}

ArcSlider.prototype.change = function() {
  this.updateAngle()
//      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
//      this.setAngle(angle,this.options.time);
  this.onChange(this.angle)
}

ArcSlider.prototype.setAngle = function(angle, time) {
  const position = Geometry.getPointFromRadialSystem(
    this.angle,
    this.options.radius,
    this.shiftedCenter
  )
  this.angle = Geometry.normalizeAngle(angle, position)
  this.draggable.move(position, time||0, true, true)
  this.onChange(this.angle)
}

export { arcSliders, ArcSlider }

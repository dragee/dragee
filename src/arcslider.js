import { Geometry } from './geometry'
import { Draggable } from './draggable'
import { boundToArc } from './bound'

const arcSliders = []

class ArcSlider {
  constructor(area, element, options={}) {
    const areaRectangle = Geometry.createRectangleFromElement(area, area)
    const halfSize = Geometry.getSizeOfElement(element).mult(0.5)
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      startAngle: Math.PI,
      endAngle: 0,
      angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
      onChange: function() {},
      time: 500
    }, options)

    this.shiftedCenter = this.options.center.sub(halfSize)
    this.onChange = this.options.onChange
    arcSliders.push(this)
    this.area = area
    this.init(element)
  }

  init(element) {
    const angle = this.options.startAngle
    const position = Geometry.getPointFromRadialSystem(
      angle,
      this.options.radius,
      this.shiftedCenter
    )
    const bound = boundToArc(
      this.shiftedCenter,
      this.options.radius,
      this.options.startAngle,
      this.options.endAngle
    )

    this.angle = angle
    this.draggable = new Draggable(element, {
      parent: this.area,
      bound: bound,
      position: position,
      onMove: () => {
        this.change()
        return true
      }
    })
  }

  updateAngle() {
    this.angle = Geometry.getAngle(this.shiftedCenter, this.draggable.position)
  }

  change() {
    this.updateAngle()
    //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
    //      this.setAngle(angle,this.options.time);
    this.onChange(this.angle)
  }

  setAngle(angle, time) {
    const position = Geometry.getPointFromRadialSystem(
      this.angle,
      this.options.radius,
      this.shiftedCenter
    )
    this.angle = Geometry.normalizeAngle(angle, position)
    this.draggable.move(position, time||0, true, true)
    this.onChange(this.angle)
  }
}

export { arcSliders, ArcSlider }

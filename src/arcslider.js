import Draggable from './draggable'
import { BoundToArc } from './bounding'
import EventEmitter from './eventEmitter'

import Rectangle from './geometry/rectangle'
import {
  getPointFromRadialSystem,
  getAngle,
  normalizeAngle
} from './geometry/angles'

export default class ArcSlider extends EventEmitter {
  constructor(area, element, options={}) {
    super(undefined, options)
    const areaRectangle = Rectangle.fromElement(area, area)
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      startAngle: Math.PI,
      endAngle: 0,
      angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
      time: 500
    }, options)

    this.shiftedCenter = this.options.center
    this.area = area
    this.init(element)
  }

  init(element) {
    const angle = this.options.startAngle
    const position = getPointFromRadialSystem(
      angle,
      this.options.radius,
      this.shiftedCenter
    )

    this.angle = angle
    this.draggable = new Draggable(element, {
      container: this.area,
      bound: BoundToArc.bounding(
        this.shiftedCenter,
        this.options.radius,
        this.options.startAngle,
        this.options.endAngle
      ),
      position: position,
      on: {
        'drag:move': () => this.change()
      }
    })
  }

  updateAngle() {
    this.angle = getAngle(this.shiftedCenter, this.draggable.position)
  }

  change() {
    this.updateAngle()
    //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
    //      this.setAngle(angle,this.options.time);
    this.emit('arcslider:change', { angle: this.angle })
  }

  setAngle(angle, time) {
    const position = getPointFromRadialSystem(
      this.angle,
      this.options.radius,
      this.shiftedCenter
    )
    this.angle = normalizeAngle(angle, position)
    this.draggable.pinPosition(position, time||0)
    this.emit('arcslider:change', this.angle)
  }
}

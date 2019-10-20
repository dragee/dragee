import { Draggable } from './draggable'
import { boundToArc } from './bound'
import EventEmitter from './eventEmitter'

import {
  createRectangleFromElement,
  getSizeOfElement
} from './geometry/helpers'

import {
  getPointFromRadialSystem,
  getAngle,
  normalizeAngle
} from './geometry/angles'

class ArcSlider extends EventEmitter {
  constructor(area, element, options={}) {
    super(undefined, options)
    const areaRectangle = createRectangleFromElement(area, area)
    const halfSize = getSizeOfElement(element).mult(0.5)
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      startAngle: Math.PI,
      endAngle: 0,
      angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
      time: 500
    }, options)

    this.shiftedCenter = this.options.center.sub(halfSize)
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
    this.draggable.move(position, time||0, true, true)
    this.emit('arcslider:change', { angle: this.angle })
  }
}

export { ArcSlider }

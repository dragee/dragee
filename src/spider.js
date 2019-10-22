import createCanvas from './utils/create-canvas'
import Point from './geometry/point'
import Rectangle from './geometry/rectangle'

import { getPointFromRadialSystem } from './geometry/angles'
import { BoundToLine } from './bounding'
import Draggable from './draggable'

class Spider {
  constructor(area, elements, options={}) {
    const areaRectangle = Rectangle.fromElement(area, area)
    this.options = Object.assign({
      angle: 0,
      dAngle: 2 * Math.PI / elements.length,
      center: areaRectangle.getCenter(),
      startRadius: 50,
      endRadius: areaRectangle.getMinSide() / 2,
      lineWidth: 2,
      strokeStyle: '#ff5577',
      fillStyle: 'rgba(150,255,50,0.8)'
    }, options)

    this.area = area
    this.areaRectangle = areaRectangle
    this.init(elements)
  }

  init(elements) {
    this.canvas = createCanvas(this.area, this.areaRectangle)
    this.context = this.canvas.getContext('2d')

    this.draggables = elements.map((element, i) => {
      const angle = this.options.angle + i * this.options.dAngle
      const halfSize = Point.elementSize(element).mult(0.5)
      const start = getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize)
      const end = getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize)

      return new Draggable(element, {
        parent: this.area,
        bounding: new BoundToLine(start, end),
        position: start,
        on: {
          'drag:move': () => this.draw()
        }
      })
    })

    this.isInit = true
    this.draw()
  }

  draw() {
    if (!this.isInit) {
      return
    }
    this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y)
    this.context.beginPath()

    let point = this.draggables[0].getCenter()
    this.context.moveTo(point.x, point.y)

    for (let i = 0; i < this.draggables.length; i++) {
      point = this.draggables[i].getCenter()
      this.context.lineTo(point.x, point.y)
    }
    this.context.closePath()
    this.context.lineWidth = this.options.lineWidth
    this.context.strokeStyle = this.options.strokeStyle
    this.context.stroke()
    this.context.fillStyle = this.options.fillStyle
    this.context.fill()
  }
}

export { Spider }

'use strict'

import createCanvas from './createcanvas'
import { Geometry } from './geometry'
import { bound } from './bound'
import { Draggable } from './draggable'

const Dragee = { bound }
const spiders = []

class Spider {
  constructor(area, elements, options={}) {
    const areaRectangle = Geometry.createRectangleFromElement(area, area)
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

    spiders.push(this)
    this.area = area
    this.areaRectangle = areaRectangle
    this.init(elements)
  }

  init(elements) {
    this.canvas = createCanvas(this.area, this.areaRectangle)
    this.context = this.canvas.getContext('2d')

    this.draggables = elements.map((element, i) => {
      const angle = this.options.angle + i * this.options.dAngle
      const halfSize = Geometry.getSizeOfElement(element).mult(0.5)
      const start = Geometry.getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize)
      const end = Geometry.getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize)
      const bound = Dragee.bound.toLine(start, end)

      return new Draggable(element, {
        parent: this.area,
        bound: bound,
        position: start,
        onMove: () => {
          this.draw()
          return true
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

export { spiders, Spider }

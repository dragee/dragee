import Point from './geometry/point'
import { addPointToBoundPoints } from './geometry/bounds'

import {
  indexOfNearestPoint,
  getDistance
} from './geometry/distances'

class BasicStrategy {
  constructor(rectangle, options={}) {
    this.rectangle = rectangle
    this.options = options
  }

  get boundRect () {
    return typeof this.rectangle === 'function' ? this.rectangle() : this.rectangle
  }
}

class NotCrossingStrategy extends BasicStrategy {
  positioning (rectangleList, indexesOfNews) {
    const staticRectangleIndexes = rectangleList.reduce((indexes, _rect, index) => {
      if (indexesOfNews.indexOf(index) === -1) {
        indexes.push(index)
      }
      return indexes
    }, [])

    indexesOfNews.forEach((index) => {
      let rect = rectangleList[index]
      let removable = false

      staticRectangleIndexes.forEach((indexOfStatic) => {
        const staticRect = rectangleList[indexOfStatic]
        rect = staticRect.moveToBound(rect)
      })

      removable = staticRectangleIndexes.some((indexOfStatic) => {
        const staticRect = rectangleList[indexOfStatic]
        return  !!staticRect.and(rect)
      }) || rect.and(this.boundRect).getSquare() !== rect.getSquare()

      if (removable) {
        rect.removable = true
      } else {
        staticRectangleIndexes.push(index)
      }
    })
    return rectangleList
  }

  sorting(odlDraggablesList, newDraggables, indexOfNews) {
    const draggables = odlDraggablesList.concat(newDraggables)
    newDraggables.forEach((draggable) => {
      indexOfNews.push(draggables.indexOf(draggable))
    })
    return draggables
  }
}

class FloatLeftStrategy extends BasicStrategy {
  constructor(rectangle, options={}) {
    super(rectangle, options)
    this.options = Object.assign({
      removable: true
    }, options)

    this.radius = options.radius || 80

    this.paddingTopLeft = options.paddingTopLeft || new Point(0, 0)
    this.paddingBottomRight = options.paddingBottomRight || new Point(0, 0)
    this.yGapBetweenDraggables = options.yGapBetweenDraggables || 0

    this.getDistance = options.getDistance || getDistance
    this.getPosition = options.getPosition || ((draggable) => draggable.position)
  }

  positioning(rectangleList, _indexesOfNews) {
    const boundRect = this.boundRect
    const rectP2 = boundRect.getP2()
    let boundaryPoints = [boundRect.position]

    rectangleList.forEach((rect, rectIndex) => {
      let position, isValid = false
      for (let i = 0; i < boundaryPoints.length; i++) {
        position = new Point(
          boundaryPoints[i].x + this.paddingTopLeft.x,
          i > 0 ? (boundaryPoints[i - 1].y + this.yGapBetweenDraggables) : (boundRect.position.y + this.paddingTopLeft.y)
        )

        isValid = (position.x + rect.size.x < rectP2.x)

        if (isValid) {
          break
        }
      }

      if (!isValid) {
        position = new Point(
          boundRect.position.x + this.paddingTopLeft.x,
          boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? this.yGapBetweenDraggables : this.paddingTopLeft.y)
        )
      }

      rect.position = position
      if (this.options.removable && rect.getP3().y > boundRect.getP3().y) {
        rect.removable = true
      }

      boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP3().add(this.paddingBottomRight))
    })
    return rectangleList
  }

  sorting(odlDraggablesList, newDraggables, indexOfNews) {
    const newList = odlDraggablesList.concat()
    const listOldPosition = odlDraggablesList.map((draggable) => draggable.getPosition())
    newDraggables.forEach((newDraggable) => {
      let index = indexOfNearestPoint(listOldPosition, this.getPosition(newDraggable), this.radius, this.getDistance)
      if (index === -1) {
        index = newList.length
      } else {
        index = newList.indexOf(odlDraggablesList[index])
      }
      newList.splice(index, 0, newDraggable)
    })
    newDraggables.forEach((newDraggable) => {
      indexOfNews.push(newList.indexOf(newDraggable))
    })
    return newList
  }
}

class FloatRightStrategy extends FloatLeftStrategy {
  constructor(rectangle, options={}) {
    super(rectangle, options)

    this.paddingTopRight = options.paddingTopRight || new Point(5, 5)
    this.paddingBottomLeft = options.paddingBottomLeft || new Point(0, 0)
    this.yGapBetweenDraggables = options.yGapBetweenDraggables || 0

    this.paddingBottomNegLeft = new Point(-this.paddingBottomLeft.x, this.paddingBottomLeft.y)
  }

  positioning(rectangleList, _indexesOfNews) {
    const boundRect = this.boundRect
    let boundaryPoints = [boundRect.getP2()]

    rectangleList.forEach((rect, rectIndex) => {
      let position, isValid = false
      for (let i = 0; i < boundaryPoints.length; i++) {
        position = new Point(
          boundaryPoints[i].x - rect.size.x - this.paddingTopRight.x,
          i > 0 ? (boundaryPoints[i - 1].y + this.yGapBetweenDraggables) : (boundRect.position.y + this.paddingTopRight.y)
        )

        isValid = (position.x > rect.position.x)
        if (isValid) {
          break
        }
      }
      if (!isValid) {
        position = new Point(
          boundRect.getP2().x  - rect.size.x - this.paddingTopRight.x,
          boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? this.yGapBetweenDraggables : this.paddingTopRight.y)
        )
      }
      rect.position = position
      if (this.options.removable && rect.getP4().y > boundRect.getP4().y) {
        rect.removable = true
      }
      boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP4().add(this.paddingBottomNegLeft), true)
    })
    return rectangleList
  }
}

export { NotCrossingStrategy, FloatLeftStrategy, FloatRightStrategy }

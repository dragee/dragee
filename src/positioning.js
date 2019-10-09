'use strict'
import { Geometry, Point } from './geometry'

const positionType = {
  notCrossing: 0,
  floatLeft: 1,
  floatRight: 2
}

function positionFactory(type) {
  switch (type) {
  case positionType.notCrossing:
    return function(rectangle, _options) {
      return function(rectangleList, indexesOfNews) {
        const boundRect = typeof rectangle === 'function' ? rectangle() : rectangle,
          staticRectangleIndexes = rectangleList.reduce(function(indexes, _rect, index) {
            if (indexesOfNews.indexOf(index) === -1) {
              indexes.push(index)
            }
            return indexes
          }, [])

        indexesOfNews.forEach(function(index) {
          let rect = rectangleList[index], removable = false
          staticRectangleIndexes.forEach(function(indexOfStatic) {
            const staticRect = rectangleList[indexOfStatic]
            rect = staticRect.moveToBound(rect)
          })
          removable = staticRectangleIndexes.some(function(indexOfStatic) {
            const staticRect = rectangleList[indexOfStatic]
            return  !!staticRect.and(rect)
          }) || rect.and(boundRect).getSquare() !== rect.getSquare()
          if (removable) {
            rect.removable = true
          } else {
            staticRectangleIndexes.push(index)
          }
        })
        return rectangleList
      }
    }
  case positionType.floatLeft:
    return function(rectangle, options) {
      options = Object.assign({
        paddingTopLeft: new Point(0, 0),
        paddingBottomRight: new Point(0, 0),
        yGapBetweenDraggables: 0,
        removable: true
      }, options)

      return function(rectangleList, _indexesOfNews) {
        const boundRect = typeof rectangle === 'function' ? rectangle() : rectangle
        const rectP2 = boundRect.getP2()
        let boundaryPoints = [boundRect.position]
        rectangleList.forEach(function(rect) {
          let position, isValid = false
          for (let i = 0; i < boundaryPoints.length; i++) {
            position = (new Point(boundaryPoints[i].x, i > 0 ? (boundaryPoints[i - 1].y + options.yGapBetweenDraggables) : boundRect.position.y)).add(options.paddingTopLeft)
            isValid = (position.x + rect.size.x < rectP2.x)
            if (isValid) {
              break
            }
          }
          if (!isValid) {
            position = (new Point(boundRect.position.x, boundaryPoints[boundaryPoints.length - 1].y + options.yGapBetweenDraggables)).add(options.paddingTopLeft)
          }
          rect.position = position
          if (options.removable && rect.getP3().y > boundRect.getP3().y) {
            rect.removable = true
          }
          boundaryPoints = Geometry.addPointToBoundPoints(boundaryPoints, rect.getP3().add(options.paddingBottomRight))
        })
        return rectangleList
      }
    }
  case positionType.floatRight:
    return function(rectangle, options) {
      options = Object.assing({
        paddingTopRight: new Point(5, 5),
        paddingBottomLeft: new Point(0, 0),
        removable: true
      }, options)

      const paddingTopNegRight = new Point(-options.paddingTopRight.x, options.paddingTopRight.y)
      const paddingBottomNegLeft = new Point(-options.paddingBottomLeft.x, options.paddingBottomLeft.y)
      return function(rectangleList, _indexesOfNews) {
        const boundRect = typeof rectangle === 'function' ? rectangle() : rectangle
        let boundaryPoints = [boundRect.getRightTopPoint()]
        rectangleList.forEach(function(rect, _index) {
          let position, isValid = false
          for (let i = 0; i < boundaryPoints.length; i++) {
            position = (new Point(boundaryPoints[i].x - rect.size.x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y)).add(paddingTopNegRight)
            isValid = (position.x > rect.position.x)
            if (isValid) {
              break
            }
          }
          if (!isValid) {
            position = new Point(boundRect.getP2().x, boundaryPoints[boundaryPoints.length - 1].y)
          }
          rect.position = position
          if (options.removable && rect.getLeftBottomPoint().y > boundRect.getP4().y) {
            rect.removable = true
          }
          boundaryPoints = Geometry.addPointToBoundPoints(boundaryPoints, rect.getP4().add(paddingBottomNegLeft), true)
        })
        return rectangleList
      }
    }
  }
}

function sortingFactory(type) {
  switch (type) {
  case positionType.notCrossing:
    return function() {
      return function(oldObjsList, newObjs, indexOfNews) {
        const objsList = oldObjsList.concat(newObjs)
        newObjs.forEach(function(obj) {
          indexOfNews.push(objsList.indexOf(obj))
        })
        return objsList
      }
    }
  case positionType.floatLeft:
  case positionType.floatRight:
    return function(radius, getDistance, options) {
      options = Object.assign({
        getPosition: function(obj) {
          return obj.position
        }
      }, options)

      return function(oldObjsList, newObjs, indexOfNews) {
        const newList = oldObjsList.concat()
        const listOldPosition = oldObjsList.map(options.getPosition)
        newObjs.forEach(function(newObj) {
          let index = Geometry.indexOfNearestPoint(listOldPosition, options.getPosition(newObj), radius, getDistance)
          if (index === -1) {
            index = newList.length
          } else {
            index = newList.indexOf(oldObjsList[index])
          }
          newList.splice(index, 0, newObj)
        })
        newObjs.forEach(function(newObj) {
          indexOfNews.push(newList.indexOf(newObj))
        })
        return newList
      }
    }
  }
}

export { positionType, sortingFactory, positionFactory }

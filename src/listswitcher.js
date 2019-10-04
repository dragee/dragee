'use strict'

import { Geometry, Point } from './geometry'
import { Draggable } from './draggable'
import { List } from './list'

const Dragee = { List, Draggable } //todo remove after refactore

const extend = function(Child, Parent) {
  const F = function() { }
  F.prototype = Parent.prototype
  Child.prototype = new F()
  Child.prototype.constructor = Child
  Child.superclass = Parent.prototype
}//todo remove after refacore

function ListSwitcher(draggables, options) {
  options = options || {}
  options.stepOn = options.stepOn || new Point(-50, 0)
  Dragee.List.call(this, draggables, options)
}

extend(ListSwitcher, Dragee.List)

ListSwitcher.prototype.init = function() {
  const that = this
  this.draggables.forEach(function(draggable) {
    draggable.isOn = false
    draggable.onEnd.add(function() {
      that.onEnd(this)
      return true
    })
  })
}

ListSwitcher.prototype.onEnd = function(draggable) {
  const fixPositions = this.getCurrentFixPositionWithOff()
  const currentIndex = this.draggables.indexOf(draggable)
  const excangeIndex = Geometry.indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance)
  if (excangeIndex === -1 || excangeIndex === currentIndex) {
    this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd)
  } else {
    if (this.draggables[excangeIndex].isDragee) {
      this.fixToOff(excangeIndex, fixPositions[currentIndex])
    } else {
      this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange)
    }
    this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd)
    this.onChange.fire()
  }
  return true
}

ListSwitcher.prototype.moveDraggable = function(index, position, fixOffPosition, time) {
  const positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)], isOn = Geometry.indexOfNearPoint(positions, position, -1, Geometry.getXDifference)
  if (this.draggables[index].isOn !== !!isOn) {
    this.draggables[index].isOn = !!isOn
    this.onChange.fire()
  }
  this.draggables[index].move(positions[isOn], time, true)
}

ListSwitcher.prototype.fixToOff = function(index, fixOffPosition) {
  this.draggables[index].isOn = false
  this.draggables[index].fixPosition = fixOffPosition
}

ListSwitcher.prototype.moveDraggableToOff = function(index, fixOffPosition, time) {
  this.draggables[index].isOn = false
  this.draggables[index].move(fixOffPosition, time, true)
}

ListSwitcher.prototype.getCurrentFixPositionWithOff = function() {
  return this.draggables.map(function(draggable) {
    return draggable.isOn ? draggable.fixPosition.sub(this.options.stepOn) : draggable.fixPosition.clone()
  }, this)
}

ListSwitcher.prototype.getSortedDraggables = function() {
  return this.draggables.map(
      function(draggable) {
        return draggable.initPosition
      }).map(function(position) {
        return this.draggables.filter(function(draggable) {
          return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(this.options.stepOn))
        }, this)[0]
      }, this)
}

ListSwitcher.prototype.reset = function() {
  this.draggables.forEach(function(draggable) {
    draggable.move(draggable.initPosition, 0, true, false)
    draggable.isOn = false
  })
}

ListSwitcher.prototype.__defineGetter__('positions', function() {
  return this.draggables.map(function(draggable) {
    const position = draggable.fixPosition.clone()
    position.isOn = draggable.isOn
    return position
  })
})

ListSwitcher.prototype.__defineSetter__('positions', function(positions) {
  const message = 'wrong array length'
  if (positions.length === this.draggables.length) {
    positions.forEach(function(point, i) {
      this.draggables[i].isOn = point.isOn
      this.draggables[i].move(point, 0, true, true)
    }, this)
  } else {
    throw message
  }
})

function listSwitcherFactory(element, draggableElements, options={}) {
  const draggableOptions = options.draggable || {}
  const listOptions = options.list || {}

  draggableOptions.parent = draggableOptions.parent || element
  draggableElements = Array.prototype.slice.call(draggableElements)

  const draggables = draggableElements.map(function(element) {
    return new Dragee.Draggable(element, draggableOptions)
  })
  return new ListSwitcher(draggables, listOptions)
}

export { listSwitcherFactory, ListSwitcher }

'use strict'

function Event(context, options = {}) {
  this.funcs = []
  this.context = context
  this.isReverse = options.isReverse || false
  this.isStopOnTrue = options.isStopOnTrue || false
}

Event.prototype.fire = function() {
  const args = [].slice.call(arguments)
  const fs = this.isReverse ? this.funcs.slice().reverse() : this.funcs
  let retValue

  for (let i = 0; i < fs.length; i++) {
    retValue = fs[i].apply(this.context, args)
    if (this.isStopOnTrue && retValue) {
      return true
    }
  }
  return !this.isStopOnTrue
}

Event.prototype.add = function(f) {
  this.funcs.push(f)
}

Event.prototype.unshift = function(f) {
  this.funcs.unshift(f)
}

Event.prototype.remove = function(f) {
  const index = this.funcs.indexOf(f)
  if (index !== -1) {
    this.funcs.splice(index, 1)
  }
}

Event.prototype.reset = function(_f) {
  this.funcs = []
}

export default Event

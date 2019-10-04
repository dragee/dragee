/************ Array **************/

if (!Array.prototype.removeItem) {
  Array.prototype.removeItem = function(val) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1)
        i--
      }
    }
    return this
  }
}

/*********************** 00P *************************/
const augment = function(receivingClass, givingClass) {
    /* only provide certain methods */
  if (arguments[2]) {
    for (let i=2, len=arguments.length; i<len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]]
    }
  } else {
    for (const methodName in givingClass.prototype) {
            /* check to make sure the receiving class doesn't
               have a method of the same name as the one currently
               being processed */
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName]
      }
    }
  }
}
/**************************************************/
augment(NodeList, Array, 'forEach')

try {
  if (!Object.prototype.__defineGetter__ &&
    Object.defineProperty({}, 'x', { get: function() {
      return true
    } }).x) {
    Object.defineProperty(Object.prototype, '__defineGetter__',
      { enumerable: false, configurable: true,
        value: function(name, func) {
          Object.defineProperty(this, name,
             { get: func, enumerable: true, configurable: true })
        }
      })
    Object.defineProperty(Object.prototype, '__defineSetter__',
      { enumerable: false, configurable: true,
        value: function(name, func) {
          Object.defineProperty(this, name,
             { set: func, enumerable: true, configurable: true })
        }
      })
  }
} catch (_defPropException) { /*Do nothing if an exception occurs*/ }

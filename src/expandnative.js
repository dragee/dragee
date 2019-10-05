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

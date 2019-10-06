'use strict'

function getDefaultParent(element) {
  let parent = element.parentNode
  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode
  }
  return parent
}

function getTouchByID(element, touchId) {
  for (let i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i]
    }
  }
  return false
}

function range(start, stop, step) {
  const result = []
  if (typeof stop === 'undefined') {
    stop = start
    start = 0
  }
  if (typeof step === 'undefined') {
    step = 1
  }
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return []
  }
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i)
  }
  return result
}

function hasClass(element, c) {
  const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
  return (re.test(element.className))
}

function addClass(element, c) {
  if (!hasClass(element, c)) {
    element.className = (element.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
  }
}

function removeClass(element, c) {
  const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
  element.className = element.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
}

function removeItem(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      array.splice(i, 1)
      i--
    }
  }
  return array
}

const util = {
  getDefaultParent,
  getTouchByID,
  range,
  hasClass,
  addClass,
  removeClass,
  removeItem
}

export {
  getDefaultParent,
  getTouchByID,
  range,
  hasClass,
  addClass,
  removeClass,
  removeItem
}

export default util

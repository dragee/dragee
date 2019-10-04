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

function getSumValueOfStyleRule(element, rules) {
  return rules.reduce(function(sum, rule) {
    return sum + parseInt(window.getComputedStyle(element)[rule]||0)
  }, 0)
}

function appendFirstChild(element, node) {
  element.firstChild ? element.insertBefore(node, element.firstChild) : element.appendChild(node)
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

function setStyle(element, style) {
  style = style || {}
  let cssText = ''
  for (const key in style) {
    if (style.hasOwnProperty(key)) {
      cssText += key + ': ' + style[key] + '; '
    }
  }

  element.style.cssText = cssText
}

function randomColor() {
  const rnd = function() {
    return Math.round(Math.random()*255)
  }
  const toHexString = function(digit) {
    let str = digit.toString(16)
    while (str.length < 2) {
      str = '0' + str
    }
    return str
  }

  return '#' + toHexString(rnd()) + toHexString(rnd()) + toHexString(rnd())
}

function createCanvas(area, rectagle) {
  const canvas = document.createElement('canvas')
  if (window.getComputedStyle(area).position === 'static') {
    area.style.position = 'relative'
  }

  canvas.setAttribute('width', rectagle.size.x + 'px')
  canvas.setAttribute('height', rectagle.size.y + 'px')
  setStyle(canvas, {
    position: 'absolute',
    left: rectagle.position.y + 'px',
    top: rectagle.position.y + 'px',
    width: rectagle.size.x + 'px',
    height: rectagle.size.y + 'px'
  })
  appendFirstChild(area, canvas)
  return canvas
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

const util = {
  getDefaultParent,
  getTouchByID,
  getSumValueOfStyleRule,
  appendFirstChild,
  range,
  setStyle,
  randomColor,
  createCanvas,
  hasClass,
  addClass,
  removeClass
}

export {
  getDefaultParent,
  getTouchByID,
  getSumValueOfStyleRule,
  appendFirstChild,
  range,
  setStyle,
  randomColor,
  createCanvas,
  hasClass,
  addClass,
  removeClass
}

export default util

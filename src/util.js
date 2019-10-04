'use strict'

const util = {
  getDefaultParent: function(element) {
    let parent = element.parentNode
    while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
      parent = parent.parentNode
    }
    return parent
  },
  getTouchByID: function(element, touchId) {
    let i
    for (i = 0; i < element.changedTouches.length; i++) {
      if (element.changedTouches[i].identifier === touchId) {
        return element.changedTouches[i]
      }
    }
    return false
  },
  getSumValueOfStyleRule: function(element, rules) {
    return rules.reduce(function(sum, rule) {
      return sum + parseInt(window.getComputedStyle(element)[rule]||0)
    }, 0)
  },
  appendFirstChild: function(element, node) {
    element.firstChild ? element.insertBefore(node, element.firstChild) : element.appendChild(node)
  },
  range: function(start, stop, step) {
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
  },
  setStyle: function(element, style) {
    style = style || {}
    let cssText = '', key
    for (key in style) {
      if (style.hasOwnProperty(key)) {
        cssText += key + ': ' + style[key] + '; '
      }
    }

    element.style.cssText = cssText
  },
  randomColor: function() {
    const rnd = function() {
        return Math.round(Math.random()*255)
      },
      toHexString = function(digit) {
        let str = digit.toString(16)
        while (str.length < 2) {
          str = '0' + str
        }
        return str
      },
      red = rnd(),
      green = rnd(),
      blue = rnd()

    return '#' + toHexString(red) + toHexString(green) + toHexString(blue)
  },
  createCanvas: function(area, rectagle) {
    const canvas = document.createElement('canvas')
    if (window.getComputedStyle(area).position === 'static') {
      area.style.position = 'relative'
    }

    canvas.setAttribute('width', rectagle.size.x + 'px')
    canvas.setAttribute('height', rectagle.size.y + 'px')
    util.setStyle(canvas, {
      position: 'absolute',
      left: rectagle.position.y + 'px',
      top: rectagle.position.y + 'px',
      width: rectagle.size.x + 'px',
      height: rectagle.size.y + 'px'
    })
    util.appendFirstChild(area, canvas)
    return canvas
  },
  hasClass: function(element, c) {
    const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
    return (re.test(element.className))
  },
  addClass: function(element, c) {
    if (!util.hasClass(element, c)) {
      element.className = (element.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
    }
  },
  removeClass: function(element, c) {
    const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
    element.className = element.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
  }
}

export default util

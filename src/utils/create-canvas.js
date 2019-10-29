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

function appendFirstChild(element, node) {
  if (element.firstChild) {
    element.insertBefore(node, element.firstChild)
  } else {
    element.appendChild(node)
  }
}

export default function createCanvas(area, rectagle) {
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

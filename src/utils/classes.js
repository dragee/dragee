export function hasClass(element, c) {
  const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
  return (re.test(element.className))
}

export function addClass(element, c) {
  if (!hasClass(element, c)) {
    element.className = (element.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
  }
}

export function removeClass(element, c) {
  const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
  element.className = element.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
}

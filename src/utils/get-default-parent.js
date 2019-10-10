export default function getDefaultParent(element) {
  let parent = element.parentNode
  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode
  }
  return parent
}

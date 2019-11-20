export default function getDefaultContainer(element) {
  let container = element.parentNode
  while (container.parentNode && window.getComputedStyle(container)['position'] === 'static' && container.tagName !== 'BODY') {
    container = container.parentNode
  }
  return container
}

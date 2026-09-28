export default function dispatchDomEvent(element, eventName, detail, { cancelable = false } = {}) {
  return element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, cancelable, detail }))
}

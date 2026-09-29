import DrageeEvent from './dragee-event'

export default function dispatchDomEvent(element, eventName, detail, { cancelable = false } = {}) {
  return element.dispatchEvent(new DrageeEvent(eventName, detail, { bubbles: true, cancelable }))
}

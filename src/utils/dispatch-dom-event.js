import DrageeEvent from './dragee-event'

export default function dispatchDomEvent(element, eventName, detail, { cancelable = false } = {}) {
  const event = new DrageeEvent(eventName, detail, { bubbles: true, cancelable })
  element.dispatchEvent(event)
  return event
}

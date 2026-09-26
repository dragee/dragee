export default function dispatchDomEvent(element, eventName, detail) {
  element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail }))
}

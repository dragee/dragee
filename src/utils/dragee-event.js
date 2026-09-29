export default class DrageeEvent extends CustomEvent {
  constructor(type, detail, options = {}) {
    super(type, { ...options, detail })
    Object.assign(this, detail)
  }
}

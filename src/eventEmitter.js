export default class EventEmitter {
  constructor (context, options = {}) {
    this.funcs = []
    this.context = context
    this.isReverse = options.isReverse || false
    this.isStopOnTrue = options.isStopOnTrue || false
  }

  fire() {
    const args = [].slice.call(arguments)
    const fs = this.isReverse ? this.funcs.slice().reverse() : this.funcs
    let retValue

    for (let i = 0; i < fs.length; i++) {
      retValue = fs[i].apply(this.context, args)
      if (this.isStopOnTrue && retValue) {
        return true
      }
    }
    return !this.isStopOnTrue
  }

  add(f) {
    this.funcs.push(f)
  }

  unshift(f) {
    this.funcs.unshift(f)
  }

  remove(f) {
    const index = this.funcs.indexOf(f)
    if (index !== -1) {
      this.funcs.splice(index, 1)
    }
  }

  reset() {
    this.funcs = []
  }
}

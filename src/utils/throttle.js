export default function throttle(func, wait) {
  let lastTime = 0

  return function executedFunction() {
    const context = this
    const args = arguments

    const now = Date.now()
    if (now - lastTime >= wait) {
      func.apply(context, args)
      lastTime = now
    }
  }
}

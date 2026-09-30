import EventEmitter from './eventEmitter.js'
import Point from './geometry/point.js'
import Rectangle from './geometry/rectangle.js'
import { scopes, currentScope } from './scope.js'
import throttle from './utils/throttle.js'
import getParentsChain from './utils/get-parents-chain.js'

const throttledDragOver = (callback, duration) => {
  const throttledCallback = throttle((event) => callback(event), duration)
  return (event) => {
    event.preventDefault()
    throttledCallback(event)
  }
}

const formFieldSelector = 'input, textarea, select, [contenteditable]:not([contenteditable="false"])'

const isTouch = navigator.maxTouchPoints > 0
const mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
}
const touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
}
const draggables = []
const startEvents = new WeakSet()
const transformProperty = 'transform'
const transitionProperty = 'transition'

function getTouchByID(element, touchId) {
  for (let i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i]
    }
  }
  return false
}

function preventDoubleInit(draggable) {
  if (draggables.some((existing) => draggable.element === existing.element)) {
    throw new Error('A Draggable already exists for this element')
  }
  draggables.push(draggable)
}

function copyStyles(source, destination) {
  const cs = window.getComputedStyle(source)

  for (let i = 0; i < cs.length; i++) {
    const key = cs[i]
    if ((key.indexOf('transition') < 0) && (key.indexOf('transform') < 0)) {
      destination.style[key] = cs[key]
    }
  }

  for (let i = 0; i < source.children.length; i++) {
    copyStyles(source.children[i], destination.children[i])
  }
}

export default class Draggable extends EventEmitter {
  constructor(element, options={}) {
    super(options)
    this.trays = []
    this.options = options
    this.element = element
    preventDoubleInit(this)
    const scope = options.scope || currentScope()
    scope.addDraggable(this)
    this._enable = true
    this.startBounding()
    this.startPositioning()
    this.startListening()
  }

  startBounding() {
    this.bounding = this.options.bounding || {
      bound: this.options.bound || ((point) => point)
    }
  }

  startPositioning() {
    this._setDefaultTransition()
    this.offset = this.measureOffset()
    this.pinnedPosition = this.offset
    this.position = this.offset
    this.initialPosition = this.options.position || this.offset

    this.pinPosition(this.initialPosition)
    this.refresh()
  }

  remeasure() {
    const isAtInitialPosition = this.position.compare(this.initialPosition)
    this.offset = this.measureOffset()
    this.initialPosition = this.options.position || this.offset

    if (isAtInitialPosition) {
      this.pinPosition(this.initialPosition)
    } else {
      this.setPosition(this.position)
    }
    this.refresh()
  }

  measureOffset() {
    return this.isConsiderTransformOffset
      ? Point.elementBoundingOffset(this.element, this.container).sub(this._transformPosition || new Point(0, 0))
      : Point.elementOffset(this.element, this.container)
  }

  startListening() {
    this.listeners = new AbortController()
    const options = { passive: false, signal: this.listeners.signal }

    this.handler.addEventListener(touchEvents.start, (event) => this.dragStart(event), options)
    this.handler.addEventListener(mouseEvents.start, (event) => this.dragStart(event), options)
  }

  getSize() {
    return Point.elementSize(this.element)
  }

  getPosition() {
    this.position = this.offset.add(this._transformPosition || new Point(0, 0))
    return this.position
  }

  getCenter() {
    return this.position.add(this.getSize().mult(0.5))
  }

  _setDefaultTransition () {
    if (!this.element.style[transitionProperty]) {
      this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty]
    }
  }

  _setTransition(time) {
    let transition = this.element.style[transitionProperty]
    const transitionCss = `transform ${time}ms`

    if (!/transform\s?\d*m?s?/.test(transition)) {
      if (transition) {
        transition += `, ${transitionCss}`
      } else {
        transition = transitionCss
      }
    } else {
      transition = transition.replace(/transform\s?\d*m?s?/g, transitionCss)
    }

    if (this.element.style[transitionProperty] !== transition) {
      this.element.style[transitionProperty] = transition
    }
  }

  _setTranslate(point) {
    this._transformPosition = point
    const translateCss = `translate3d(${point.x}px, ${point.y}px, 0px)`

    let transform = this.element.style[transformProperty]

    if (this.shouldRemoveZeroTranslate && point.x === 0 && point.y === 0) {
      transform = transform.replace(/translate3d\([^)]+\)/, '')
    } else if (!/translate3d\([^)]+\)/.test(transform)) {
      if (transform) {
        transform += ' '
      }
      transform += translateCss
    } else {
      transform = transform.replace(/translate3d\([^)]+\)/, translateCss)
    }

    if (this.element.style[transformProperty] !== transform) {
      this.element.style[transformProperty] = transform
    }
  }

  move(point, { duration = 0, silent = false } = {}) {
    point = point.clone()
    this.position = point

    this._setTransition(duration)
    this._setTranslate(point.sub(this.offset))

    if (!silent) {
      this.emitDragEvent('move')
    }
  }

  pinPosition(point, { duration = 0, silent = true } = {}) {
    this.pinnedPosition = point.clone()
    this.move(this.pinnedPosition, { duration, silent })
  }

  resetPositionToInitial () {
    this.pinPosition(this.initialPosition)
  }

  refreshPosition () {
    this.setPosition(this.getPosition())
  }

  setPosition(point) {
    point = point.clone()
    this.position = point
    this._setTransition(0)
    this._setTranslate(point.sub(this.offset))
  }

  determineDirection(point) {
    this._previousDirectionPosition ||= this._startPosition

    this.leftDirection = (this._previousDirectionPosition.x > point.x)
    this.rightDirection = (this._previousDirectionPosition.x < point.x)
    this.upDirection = (this._previousDirectionPosition.y > point.y)
    this.downDirection = (this._previousDirectionPosition.y < point.y)

    this._previousDirectionPosition = point
  }

  isFormField(target) {
    const field = target instanceof window.Element && target.closest(formFieldSelector)
    return Boolean(field) && this.element.contains(field)
  }

  seemsScrolling() {
    return (+new Date() - this._startTouchTimestamp) < this.touchDraggingThreshold
  }

  shouldUseNativeDragAndDrop() {
    if (this.isTouchEvent) {
      return this.nativeDragAndDrop && this.emulateNativeDragAndDropOnTouch
    } else {
      return this.nativeDragAndDrop
    }
  }

  dragStart(event) {
    if (!this._enable || this.isFormField(event.target) || startEvents.has(event)) {
      return
    }
    startEvents.add(event)

    if (this.stopPropagationOnDragStart) {
      event.stopPropagation()
    }

    this.isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    this.touchPoint = this._startTouchPoint = new Point(
      this.isTouchEvent ? event.changedTouches[0].pageX : event.clientX,
      this.isTouchEvent ? event.changedTouches[0].pageY : event.clientY
    )

    this._startPosition = this.getPosition()
    if (this.isTouchEvent) {
      this._touchId = event.changedTouches[0].identifier
      this._startTouchTimestamp = +new Date()
    }

    this._startWindowScrollPoint = this.windowScrollPoint
    this._startScrollElementsOffset = this.scrollElementsOffset

    this.dragListeners?.abort()
    const { signal } = this.dragListeners = new AbortController()
    const options = { passive: false, signal }

    this._dragStartPending = !this.shouldUseNativeDragAndDrop() && this.dragStartThreshold > 0
    if (!this._dragStartPending) {
      const startEvent = this.emitDragEvent('start', { cancelable: true })
      if (startEvent.canceled || signal.aborted) {
        return
      }
    }

    if (this.shouldUseNativeDragAndDrop()) {
      if (this.isTouchEvent && this.emulateNativeDragAndDropOnTouch) {
        this._startParentsScrollOffset = this.parentsScrollOffset

        const emulateOnFirstMove = (event) => {
          if (this.seemsScrolling()) {
            this.cancelDragging()
          } else {
            this.emulateNativeDragAndDrop(event)
          }
          cancelEmulation()
        }
        const cancelEmulation = () => {
          document.removeEventListener(touchEvents.move, emulateOnFirstMove)
          document.removeEventListener(touchEvents.end, cancelEmulation)
        }

        document.addEventListener(touchEvents.move, emulateOnFirstMove, options)
        document.addEventListener(touchEvents.end, cancelEmulation, options)
      } else {
        this.element.addEventListener('dragstart', (event) => this.nativeDragStart(event), { signal })
        this.element.draggable = true
        document.addEventListener(mouseEvents.end, (event) => this.nativeDragEnd(event), options)
      }
    } else {
      const dragMove = (event) => this.dragMove(event)
      const dragEnd = (event) => this.dragEnd(event)
      document.addEventListener(touchEvents.move, dragMove, options)
      document.addEventListener(mouseEvents.move, dragMove, options)
      document.addEventListener(touchEvents.end, dragEnd, options)
      document.addEventListener(mouseEvents.end, dragEnd, options)
    }

    const onScroll = (event) => this.onScroll(event)
    window.addEventListener('scroll', onScroll, { signal })
    this.scrollElements.forEach((p) => p.addEventListener('scroll', onScroll, { signal }))
  }

  dragMove(event) {
    let touch

    this.isTouchEvent = (isTouch && (event instanceof window.TouchEvent))
    if (this.isTouchEvent) {
      touch = getTouchByID(event, this._touchId)

      if (!touch) {
        return
      }

      if (this.seemsScrolling()) {
        this.cancelDragging()
        return
      }
    }

    this.touchPoint = new Point(
      this.isTouchEvent ? touch.pageX : event.clientX,
      this.isTouchEvent ? touch.pageY : event.clientY
    )

    if (this._dragStartPending) {
      const dx = this.touchPoint.x - this._startTouchPoint.x
      const dy = this.touchPoint.y - this._startTouchPoint.y
      if (Math.sqrt(dx * dx + dy * dy) < this.dragStartThreshold) {
        return
      }
      this._dragStartPending = false
      const startEvent = this.emitDragEvent('start', { cancelable: true })
      if (startEvent.canceled || this.dragListeners.signal.aborted) {
        this.cancelDragging()
        return
      }
    }

    this.isDragging = true
    event.stopPropagation()
    event.preventDefault()

    let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint))
                                   .add(this.windowScrollPoint.sub(this._startWindowScrollPoint))
                                   .add(this.scrollElementsOffset.sub(this._startScrollElementsOffset))

    point = this.bounding.bound(point, this.getSize())
    this.determineDirection(point)
    this.move(point)
    this.element.classList.add('dragee-active')
  }

  dragEnd(event) {
    this.isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    if (this.isTouchEvent && !getTouchByID(event, this._touchId)) {
      return
    }

    if (this._dragStartPending) {
      // threshold never crossed — treat as click, clean up silently
      this._dragStartPending = false
      this.cancelDragging()
      return
    }

    if (this.isDragging) {
      event.stopPropagation()
      event.preventDefault()
    }

    this.release()
    this.emitDragEvent('end')
    this.cancelDragging()

    setTimeout(() => this.element.classList.remove('dragee-active'))
  }

  onScroll(_event) {
    let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint))
                                   .add(this.windowScrollPoint.sub(this._startWindowScrollPoint))
                                   .add(this.scrollElementsOffset.sub(this._startScrollElementsOffset))

    point = this.bounding.bound(point, this.getSize())
    if (!this.nativeDragAndDrop) {
      this.determineDirection(point)
      this.move(point)
    }
  }

  nativeDragStart(event) {
    event.stopPropagation()
    event.dataTransfer.setData('text', 'FireFox fix')
    event.dataTransfer.effectAllowed = 'move'

    const { signal } = this.dragListeners
    document.addEventListener('dragover', throttledDragOver((event) => this.nativeDragOver(event), this.dragOverThrottleDuration), { signal })
    document.addEventListener('dragend', (event) => this.nativeDragEnd(event), { signal })
    document.addEventListener('drop', (event) => this.nativeDrop(event), { signal })
  }

  nativeDragOver(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    this.element.classList.add('dragee-placeholder')
    if (event.clientX === 0 && event.clientY === 0) {
      return
    }

    this.touchPoint = new Point(event.clientX, event.clientY)
    let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint))
                                   .add(this.windowScrollPoint.sub(this._startWindowScrollPoint))
                                   .add(this.scrollElementsOffset.sub(this._startScrollElementsOffset))
    point = this.bounding.bound(point, this.getSize())
    this.determineDirection(point)
    this.position = point
    this.emitDragEvent('move')
  }

  nativeDragEnd(_event) {
    this.element.classList.remove('dragee-placeholder')
    this.release()
    this.emitDragEvent('end')
    this.dragListeners.abort()
    this.isDragging = false
    this.element.removeAttribute('draggable')
    this.element.classList.remove('dragee-active')
  }

  nativeDrop(event) {
    event.stopPropagation()
    event.preventDefault()
  }

  cancelDragging () {
    this.dragListeners?.abort()
    this.isDragging = false
    this._previousDirectionPosition = null
    this.element.removeAttribute('draggable')
  }

  copyStyles(source, destination) {
    if (this.options.copyStyles) {
      this.options.copyStyles(source, destination)
    } else {
      copyStyles(source, destination)
    }
  }

  emulateNativeDragAndDrop(event) {
    const containerRect = this.container.getBoundingClientRect()
    const clonedElement = this.element.cloneNode(true)
    clonedElement.style[transformProperty] = ''
    this.copyStyles(this.element, clonedElement)
    clonedElement.classList.add('dragee-native-emulation')
    clonedElement.style.position = 'absolute'
    document.body.appendChild(clonedElement)
    this.element.classList.add('dragee-placeholder')

    const emulationDraggable = new Draggable(clonedElement, {
      container: document.body,
      touchDraggingThreshold: 0,
      domEvents: false,
      bound(point) {
        return point
      },
      on: {
        'drag:move': () => {
          const containerRectPoint = new Point(containerRect.left, containerRect.top)
          this.position = emulationDraggable.position.sub(containerRectPoint)
                                                     .sub(this._startWindowScrollPoint)
                                                     .add(this._startParentsScrollOffset)

          this.determineDirection(this.position)
          this.emitDragEvent('move')
        },
        'drag:end': () => {
          emulationDraggable.destroy()
          document.body.removeChild(clonedElement)
          this.element.classList.remove('dragee-placeholder')
          this.element.classList.remove('dragee-active')

          this.release()
          this.emitDragEvent('end')
          this.cancelDragging()
        }
      }
    })

    const containerRectPoint = new Point(containerRect.left, containerRect.top)
    emulationDraggable._startWindowScrollPoint = this._startWindowScrollPoint

    emulationDraggable.move(
      this.pinnedPosition.add(containerRectPoint)
                         .add(this.windowScrollPoint)
                         .sub(this.parentsScrollOffset)
    )

    emulationDraggable.dragStart(event)
    event.preventDefault()
  }

  emitDragEvent(type, options) {
    return this.emitWithDomEvent(this.element, `drag:${type}`, `dragee:${type}`, { draggable: this }, options)
  }

  release() {
    const releaseEvent = this.emitDragEvent('release', { cancelable: true })
    if (!releaseEvent.canceled) {
      this.pinPosition(this.position)
    }
  }

  getRectangle() {
    return new Rectangle(this.position, this.getSize())
  }

  refresh() {
    if (this.bounding.refresh) {
      this.bounding.refresh()
    }
  }

  destroy() {
    this.listeners.abort()
    this.dragListeners?.abort()
    scopes.forEach((scope) => scope.releaseDraggable(this))
    this.trays.slice().forEach((tray) => tray.releaseDraggable(this))

    const index = draggables.indexOf(this)
    if (index > -1) {
      draggables.splice(index, 1)
    }
  }

  get container() {
    return (this._container = this._container || this.options.container || this.options.parent || this.element.offsetParent)
  }

  get handler() {
    if (!this._handler) {
      if (typeof this.options.handler === 'string') {
        this._handler = this.element.querySelector(this.options.handler) || this.element
      } else {
        this._handler = this.options.handler || this.element
      }
    }

    return this._handler
  }

  get stopPropagationOnDragStart() {
    return this.options.stopPropagationOnDragStart || false
  }

  get nativeDragAndDrop() {
    return this.options.nativeDragAndDrop || false
  }

  get emulateNativeDragAndDropOnTouch() {
    return this.options.emulateNativeDragAndDropOnTouch || false
  }

  get shouldRemoveZeroTranslate() {
    return this.options.shouldRemoveZeroTranslate || false
  }

  get touchDraggingThreshold() {
    return this.options.touchDraggingThreshold || 0
  }

  get dragStartThreshold() {
    return this.options.dragStartThreshold || 0
  }

  get dragOverThrottleDuration() {
    return this.options.dragOverThrottleDuration || 16
  }

  get isConsiderTransformOffset () {
    return this.options.considerTransformOffset || false
  }

  get windowScrollPoint() {
    return new Point(window.scrollX, window.scrollY)
  }

  get scrollRootContainer() {
    return this.options.scrollRootContainer || this.container
  }

  get scrollElements() {
    return this._cachedScrollElements
      ? this._cachedScrollElements
      : (this._cachedScrollElements = getParentsChain(this.element, this.scrollRootContainer))
  }

  get scrollElementsOffset() {
    return new Point(
      this.scrollElements.reduce((sum, p) => sum + p.scrollLeft, 0),
      this.scrollElements.reduce((sum, p) => sum + p.scrollTop, 0)
    )
  }

  get parents() {
    return this._cachedParents
      ? this._cachedParents
      : (this._cachedParents = getParentsChain(this.element, this.container))
  }

  get parentsScrollOffset() {
    return new Point(
      this.parents.reduce((sum, p) => sum + p.scrollLeft, 0),
      this.parents.reduce((sum, p) => sum + p.scrollTop, 0)
    )
  }

  get enable() {
    return this._enable
  }

  set enable(enable) {
    if (enable) {
      this.element.classList.remove('dragee-disable')
    } else {
      this.element.classList.add('dragee-disable')
    }

    this._enable = enable
  }
}


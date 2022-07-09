import getDefaultContainer from './utils/get-default-container'
import EventEmitter from './eventEmitter'
import getStyleProperty from 'desandro-get-style-property'
import { BoundToElement } from './bounding'
import Point from './geometry/point'
import Rectangle from './geometry/rectangle'
import { defaultScope } from './scope'
import isSupportPassiveEvents from './utils/is-support-passive-events'

const passiveFalse = isSupportPassiveEvents ? { passive: false } : false

const isTouch = 'ontouchstart' in window
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
const transformProperty = getStyleProperty('transform')
const transitionProperty = getStyleProperty('transition')

function getTouchByID(element, touchId) {
  for (let i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i]
    }
  }
  return false
}

function preventDoubleInit(draggable) {
  const message = "for this element Dragee.Draggable is already exist, don't create it twice "
  if (draggables.some((existing) => draggable.element === existing.element)) {
    throw message
  }
  draggables.push(draggable)
}

function addToDefaultScope(draggable) {
  defaultScope.addDraggable(draggable)
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
    this.targets = []
    this.options = options
    this.element = element
    preventDoubleInit(this)
    Draggable.emitter.emit('draggable:create', this)
    this._enable = true
    this.touchDraggingThreshold = ('touchDraggingThreshold' in this.options) ? this.options.touchDraggingThreshold : 0

    this.startBounding()
    this.startPositioning()
    this.startListening()
  }

  startBounding() {
    if (this.options.bound) {
      this.bounding = { bound: this.options.bound }
    } else {
      this.bounding = new BoundToElement(this.container, this.container)
    }
  }

  startPositioning() {
    this._setDefaultTransition()
    this.offset = Point.elementOffset(this.element, this.container, true)
    this.pinnedPosition = this.offset
    this.position = this.offset
    this.initialPosition = this.options.position || this.offset

    this.pinPosition(this.initialPosition)

    if (this.bounding.refresh) {
      this.bounding.refresh()
    }
  }

  startListening() {
    this._dragStart = (event) => this.dragStart(event)
    this._dragMove = (event) => this.dragMove(event)
    this._dragEnd = (event) => this.dragEnd(event)
    this._nativeDragStart = (event) => this.nativeDragStart(event)
    this._nativeDragOver = (event) => this.nativeDragOver(event)
    this._nativeDragEnd = (event) => this.nativeDragEnd(event)
    this._nativeDrop = (event) => this.nativeDrop(event)
    this._scroll = (event) => this.onScroll(event)

    this.handler.addEventListener(touchEvents.start, this._dragStart, passiveFalse)
    this.handler.addEventListener(mouseEvents.start, this._dragStart, passiveFalse)
    this.element.addEventListener('dragstart', this._nativeDragStart)
  }

  getSize() {
    return Point.elementSize(this.element, this.options.isContentBoxSize)
  }

  getPosition() {
    this.position = this.offset.add(this._transformPosition || new Point(0, 0))
    return this.position
  }

  getCenter() {
    return this.position.add(this.getSize().mult(0.5))
  }

  _setDefaultTransition () {
    this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty]
  }

  _setTransition(time) {
    let transition = this.element.style[transitionProperty]
    const transitionCss = `transform ${time}ms`

    if (!/transform \d*m?s/.test(transition)) {
      if (transition) {
        transition += `, ${transitionCss}`
      } else {
        transition = transitionCss
      }
    } else {
      transition = transition.replace(/transform \d*m?s/, transitionCss)
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

  move(point, time=0, isSilent=false) {
    point = point.clone()

    this.determineDirection(point)
    this.position = point

    this._setTransition(time)
    this._setTranslate(point.sub(this.offset))

    if (!isSilent) {
      this.emit('drag:move')
    }
  }

  pinPosition(point, time=0, silent=true) {
    this.pinnedPosition = point.clone()
    this.move(this.pinnedPosition, time, silent)
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
    this.leftDirection = (this.position.x < point.x)
    this.rightDirection = (this.position.x > point.x)
    this.upDirection = (this.position.y > point.y)
    this.downDirection = (this.position.y < point.y)
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
    if (!this._enable) {
      return
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

    this._startScrollPoint = new Point(window.scrollX, window.scrollY)

    if (event.target instanceof window.HTMLInputElement ||
          event.target instanceof window.HTMLInputElement) {
      event.target.focus()
    }

    if (this.shouldUseNativeDragAndDrop()) {
      if ((this.isTouchEvent && this.emulateNativeDragAndDropOnTouch) ||
             this.emulateNativeDragAndDropOnAllDevices) {
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

        document.addEventListener(touchEvents.move, emulateOnFirstMove, passiveFalse)
        document.addEventListener(touchEvents.end, cancelEmulation, passiveFalse)
      } else {
        this.element.draggable = true
        document.addEventListener(mouseEvents.end, this._nativeDragEnd, passiveFalse)
      }
    } else {
      document.addEventListener(touchEvents.move, this._dragMove, passiveFalse)
      document.addEventListener(mouseEvents.move, this._dragMove, passiveFalse)

      document.addEventListener(touchEvents.end, this._dragEnd, passiveFalse)
      document.addEventListener(mouseEvents.end, this._dragEnd, passiveFalse)
    }

    window.addEventListener('scroll', this._scroll)

    this.emit('drag:start')
  }

  dragMove(event) {
    let touch

    this.isDragging = true

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

    event.stopPropagation()
    event.preventDefault()
    this.touchPoint = new Point(
      this.isTouchEvent ? touch.pageX : event.clientX,
      this.isTouchEvent ? touch.pageY : event.clientY
    )

    let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint))
                                   .add(this.scrollPoint.sub(this._startScrollPoint))

    point = this.bounding.bound(point, this.getSize())
    this.move(point)
    this.element.classList.add('dragee-active')
  }

  dragEnd(event) {
    this.isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    if (this.isTouchEvent && !getTouchByID(event, this._touchId)) {
      return
    }

    if (this.isDragging) {
      event.stopPropagation()
      event.preventDefault()
    }

    this.dragEndAction()
    this.emit('drag:end')
    this.cancelDragging()

    setTimeout(() => this.element.classList.remove('dragee-active'))
  }

  onScroll(_event) {
    let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint))
                                   .add(this.scrollPoint.sub(this._startScrollPoint))

    point = this.bounding.bound(point, this.getSize())
    if (!this.nativeDragAndDrop) {
      this.move(point)
    }
  }

  nativeDragStart(event) {
    event.dataTransfer.setData('text', 'FireFox fix')
    event.dataTransfer.effectAllowed = 'move'
    document.addEventListener('dragover', this._nativeDragOver)
    document.addEventListener('dragend', this._nativeDragEnd)
    document.addEventListener('drop', this._nativeDrop)
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
                                   .add(this.scrollPoint.sub(this._startScrollPoint))
    point = this.bounding.bound(point, this.getSize())
    this.position = point
    this.emit('drag:move')
  }

  nativeDragEnd(_event) {
    this.element.classList.remove('dragee-placeholder')
    this.dragEndAction()
    this.emit('drag:end')
    document.removeEventListener('dragover', this._nativeDragOver)
    document.removeEventListener('dragend', this._nativeDragEnd)
    document.removeEventListener(mouseEvents.end, this._nativeDragEnd)
    document.removeEventListener('drop', this._nativeDrop)
    window.removeEventListener('scroll', this._scroll)
    this.isDragging = false
    this.element.removeAttribute('draggable')
    this.element.classList.remove('dragee-active')
  }

  nativeDrop(event) {
    event.stopPropagation()
    event.preventDefault()
  }

  cancelDragging () {
    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)

    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)

    document.removeEventListener(mouseEvents.end, this._nativeDragEnd)

    window.removeEventListener('scroll', this._scroll)

    this.isDragging = false
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
    clonedElement.style.position = 'absolute'
    document.body.appendChild(clonedElement)
    this.element.classList.add('dragee-placeholder')

    const emulationDraggable = new Draggable(clonedElement, {
      container: document.body,
      touchDraggingThreshold: 0,
      bound(point) {
        return point
      },
      on: {
        'drag:move': () => {
          const containerRectPoint = new Point(containerRect.left, containerRect.top)
          this.position = emulationDraggable.position.sub(containerRectPoint)
                                                     .sub(this._startScrollPoint)
          this.emit('drag:move')
        },
        'drag:end': () => {
          emulationDraggable.destroy()
          document.body.removeChild(clonedElement)
          this.element.classList.remove('dragee-placeholder')
          this.element.classList.remove('dragee-active')

          this.emit('drag:end')
          this.dragEndAction()
        }
      }
    })

    const containerRectPoint = new Point(containerRect.left, containerRect.top)
    emulationDraggable._startScrollPoint = this._startScrollPoint

    emulationDraggable.move(
      this.pinnedPosition.add(containerRectPoint).add(new Point(window.scrollX, window.scrollY))
    )

    emulationDraggable.dragStart(event)
    event.preventDefault()
  }

  dragEndAction() {
    this.pinPosition(this.position)
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
    this.handler.removeEventListener(touchEvents.start, this._dragStart)
    this.handler.removeEventListener(mouseEvents.start, this._dragStart)
    this.element.removeEventListener('dragstart', this._nativeDragStart)
    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)
    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)
    document.removeEventListener('dragover', this._nativeDragOver)
    document.removeEventListener('dragend', this._nativeDragEnd)
    document.removeEventListener(mouseEvents.end, this._nativeDragEnd)
    document.removeEventListener('drop', this._nativeDrop)
    this.resetEmitter()

    const index = draggables.indexOf(this)
    if (index > -1) {
      draggables.splice(index, 1)
    }
  }

  get container() {
    return (this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element))
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

  get nativeDragAndDrop() {
    return this.options.nativeDragAndDrop || false
  }

  get emulateNativeDragAndDropOnTouch() {
    return this.options.emulateNativeDragAndDropOnTouch || false
  }

  get emulateNativeDragAndDropOnAllDevices() {
    return this.options.emulateNativeDragAndDropOnAllDevices || false
  }

  get shouldRemoveZeroTranslate() {
    return this.options.shouldRemoveZeroTranslate || false
  }

  get scrollPoint() {
    return new Point(window.scrollX, window.scrollY)
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

Draggable.emitter = new EventEmitter()
Draggable.emitter.on('draggable:create', addToDefaultScope)

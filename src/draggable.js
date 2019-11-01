import { addClass, removeClass } from './utils/classes'
import getDefaultParent from './utils/get-default-parent'
import EventEmitter from './eventEmitter'
import getStyleProperty from 'desandro-get-style-property'
import { BoundToElement } from './bounding'
import Point from './geometry/point'
import Rectangle from './geometry/rectangle'
import { defaultScope } from './scope'
import isSupportPassiveEvents from './utils/is-support-passive-events'

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
    super(undefined, options)
    this.targets = []
    this.options = options
    this.element = element
    preventDoubleInit(this)
    Draggable.emitter.emit('draggable:create', this)
    this._enable = true
    this.startPositioning()
    this.startListening()
  }

  startPositioning() {
    this._setDefaultTransition()
    this.offset = Point.elementOffset(this.element, this.parent, true)
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

    this.handler.addEventListener(touchEvents.start, this._dragStart, isSupportPassiveEvents ? { passive: false } : false)
    this.handler.addEventListener(mouseEvents.start, this._dragStart, isSupportPassiveEvents ? { passive: false } : false)
    this.handler.addEventListener('dragstart', this._nativeDragStart)
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

    this.element.style[transitionProperty] = transition
  }

  _setTranslate(point) {
    this._transformPosition = point

    let transform = this.element.style[transformProperty]
    let translateCss = ` translate3d(${point.x}px, ${point.y}px, 0px)`

    const ua = window.navigator.userAgent
    const msie = ua.indexOf('MSIE ') !== -1

    if (msie) {
      translateCss = ` translate(${point.x}px,${point.y}px)`
      if (!/translate\([^)]+\)/.test(transform)) {
        transform += translateCss
      } else {
        transform = transform.replace(/translate\([^)]+\)/, translateCss)
      }
    } else {
      if (!/translate3d\([^)]+\)/.test(transform)) {
        transform += translateCss
      } else {
        transform = transform.replace(/translate3d\([^)]+\)/, translateCss)
      }
    }

    this.element.style[transformProperty] = transform
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

  dragStart(event) {
    this.currentEvent = event
    if (!this._enable) {
      return
    }

    const isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    this._startTouchPoint = new Point(
      isTouchEvent ? event.changedTouches[0].pageX : event.clientX,
      isTouchEvent ? event.changedTouches[0].pageY : event.clientY
    )

    this._startPosition = this.getPosition()
    if (isTouchEvent) {
      this._touchId = event.changedTouches[0].identifier
    }

    event.stopPropagation()
    if (event.target instanceof window.HTMLInputElement ||
          event.target instanceof window.HTMLInputElement) {
      event.target.focus()
    }

    if (!(this.nativeDragAndDrop ||
            event.target instanceof window.HTMLInputElement ||
            event.target instanceof window.HTMLInputElement)) {
      event.preventDefault()
    }

    if (this.nativeDragAndDrop) {
      const isSafari =/version\/(\d+).+?safari/i.test(window.navigator.userAgent)
      if ((isTouchEvent && this.emulateNativeDragAndDropOnTouch) || isSafari) {
        this.emulateNativeDragAndDrop(event)
      } else {
        this.element.draggable = true
        document.addEventListener(mouseEvents.end, this._nativeDragEnd, isSupportPassiveEvents ? { passive: false } : false)
      }
    } else {
      document.addEventListener(touchEvents.move, this._dragMove, isSupportPassiveEvents ? { passive: false } : false)
      document.addEventListener(mouseEvents.move, this._dragMove, isSupportPassiveEvents ? { passive: false } : false)

      document.addEventListener(touchEvents.end, this._dragEnd, isSupportPassiveEvents ? { passive: false } : false)
      document.addEventListener(mouseEvents.end, this._dragEnd, isSupportPassiveEvents ? { passive: false } : false)
    }

    this.isDragging = true
    this.emit('drag:start')
    addClass(this.element, 'dragee-active')
    this.emit('drag:move')
  }

  stopDragging() {
    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)
    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)
    document.removeEventListener('dragover', this._nativeDragOver)
    document.removeEventListener('dragend', this._nativeDragEnd)
    document.removeEventListener(mouseEvents.end, this._nativeDragEnd)
    document.removeEventListener('drop', this._nativeDrop)
    this.element.draggable = false
    this.isDragging = false
    removeClass(this.element, 'dragee-active')
  }

  dragMove(event) {
    this.currentEvent = event
    let touch

    const isTouchEvent = (isTouch && (event instanceof window.TouchEvent))
    if (isTouchEvent) {
      touch = getTouchByID(event, this._touchId)

      if (!touch) {
        return
      }
    }

    event.stopPropagation()
    event.preventDefault()
    const touchPoint = new Point(
      isTouchEvent ? touch.pageX : event.clientX,
      isTouchEvent ? touch.pageY : event.clientY
    )

    let point = this._startPosition.add(touchPoint.sub(this._startTouchPoint))
    point = this.bounding.bound(point, this.getSize())
    this.touchPoint = touchPoint
    this.move(point)
  }

  dragEnd(event) {
    const isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    if (isTouchEvent && !getTouchByID(event, this._touchId)) {
      return
    }

    event.stopPropagation()
    event.preventDefault()
    this.dragEndAction()
    this.emit('drag:end')

    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)

    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)

    this.isDragging = false
    this.element.removeAttribute('draggable')
    removeClass(this.element, 'dragee-active')
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
    addClass(this.element, 'dragee-placeholder')
    this.currentEvent = event
    if (event.clientX === 0 && event.clientY === 0) {
      return
    }

    const touchPoint = new Point(event.clientX, event.clientY)
    let point = this._startPosition.add(touchPoint.sub(this._startTouchPoint))
    point = this.bounding.bound(point, this.getSize())
    this.touchPoint = touchPoint
    this.position = point
    this.emit('drag:move')
  }

  nativeDragEnd(_event) {
    removeClass(this.element, 'dragee-placeholder')
    this.dragEndAction()
    this.emit('drag:end')
    document.removeEventListener('dragover', this._nativeDragOver)
    document.removeEventListener('dragend', this._nativeDragEnd)
    document.removeEventListener(mouseEvents.end, this._nativeDragEnd)
    document.removeEventListener('drop', this._nativeDrop)
    this.isDragging = false
    this.element.removeAttribute('draggable')
    removeClass(this.element, 'dragee-active')
  }

  nativeDrop(event) {
    event.stopPropagation()
    event.preventDefault()
  }

  emulateNativeDragAndDrop(event) {
    const parentRect = this.parent.getBoundingClientRect()
    const clonedElement = this.element.cloneNode(true)
    clonedElement.style[transformProperty] = ''
    copyStyles(this.element, clonedElement)
    clonedElement.style.position = 'absolute'
    document.body.appendChild(clonedElement)
    addClass(this.element, 'dragee-placeholder')

    const emulationDraggable = new Draggable(clonedElement, {
      parent: document.body,
      on: {
        'drag:move': () => {
          this.position = new Point(
            emulationDraggable.position.x - parentRect.left - window.scrollX,
            emulationDraggable.position.y - parentRect.top - window.scrollY
          )
          this.emit('drag:move')
        },
        'drag:end': () => {
          emulationDraggable.destroy()
          document.body.removeChild(clonedElement)
          removeClass(this.element, 'dragee-placeholder')
          removeClass(this.element, 'dragee-active')
        }
      }
    })

    emulationDraggable.move(new Point(
      this.pinnedPosition.x + parentRect.left + window.scrollX,
      this.pinnedPosition.y + parentRect.top + window.scrollY
    ))

    emulationDraggable.dragStart(event)
  }

  dragEndAction() {
    this.pinPosition(this.position)
  }

  getRectangle() {
    return new Rectangle(this.position, this.getSize())
  }

  refresh() {
    this.getSize(true)
    if (this.bounding.refresh) {
      this.bounding.refresh()
    }
  }

  destroy() {
    this.handler.removeEventListener(touchEvents.start, this._dragStart)
    this.handler.removeEventListener(mouseEvents.start, this._dragStart)
    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)
    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)
    document.removeEventListener('dragstart', this._nativeDragStart)
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

  get parent() {
    return (this._parent = this._parent || this.options.parent || getDefaultParent(this.element))
  }

  get bounding() {
    return (this._bounding = this._bounding || this.options.bounding || new BoundToElement(this.parent, this.parent))
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
    return this.options.emulateNativeDragAndDropOnTouch || true
  }

  get enable() {
    return this._enable
  }

  set enable(enable) {
    if (enable) {
      removeClass(this.element, 'dragee-disable')
    } else {
      addClass(this.element, 'dragee-disable')
    }

    return this._enable = enable
  }
}

Draggable.emitter = new EventEmitter(Draggable)
Draggable.emitter.on('draggable:create', addToDefaultScope)

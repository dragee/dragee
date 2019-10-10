import { addClass, removeClass } from './utils/classes'
import getDefaultParent from './utils/get-default-parent'
import Event from './event'
import getStyleProperty from 'desandro-get-style-property'
import { boundToElement } from './bound'
import { Geometry, Point, Rectangle } from './geometry'
import { defaultScope } from './scope'

const Dragee = { Event } //todo remove after refactore

const isTouch = 'ontouchstart' in window, mouseEvents = {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup'
  }, touchEvents = {
    start: 'touchstart',
    move: 'touchmove',
    end: 'touchend'
  },
  events = isTouch ? touchEvents : mouseEvents,
  draggables = [],
  transformProperty = getStyleProperty('transform'),
  transitionProperty = getStyleProperty('transition')

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

class Draggable {
  constructor(element, options={}) {
    const parent = options.parent || getDefaultParent(element)
    this.targets = []
    this.options = Object.assign({
      parent: parent,
      bound: boundToElement(parent, parent),
      startFilter: false,
      isContentBoxSize: false,
      position: false
    }, options)

    if (typeof options.handler === 'string') {
      this.handler = element.querySelector(options.handler) || element
    } else {
      this.handler = options.handler || element
    }

    this.onEnd = new Dragee.Event(this, { isReverse: true, isStopOnTrue: true })
    this.onMove = new Dragee.Event(this)
    this.onStart = new Dragee.Event(this)

    this.onEnd.add(() => this.move(this.position, 0, true, true))

    if (options.onEnd) {
      this.onEnd.add(options.onEnd)
    }
    if (options.onMove) {
      this.onMove.add(options.onMove)
    }
    if (options.onStart) {
      this.onStart.add(options.onStart)
    }
    this.element = element
    this.bound = this.options.bound
    preventDoubleInit(this)
    Draggable.onCreate.fire(this)
    this.init()
  }

  init() {
    this._enable = true
    this.offset = Geometry.getOffset(this.element, this.options.parent, true)
    this.fixPosition = this.offset
    this.position = this.offset
    if (this.options.position) {
      this.initPosition = this.options.position
      this.move(this.initPosition, 0, true, true)
    } else {
      this.initPosition = this.offset
    }
    this._dragStart = this.dragStart.bind(this)
    this._dragMove = this.dragMove.bind(this)
    this._dragEnd = this.dragEnd.bind(this)

    this.handler.addEventListener(touchEvents.start, this._dragStart)
    this.handler.addEventListener(mouseEvents.start, this._dragStart)

    if (this.bound.refresh) {
      this.bound.refresh()
    }
  }

  reinit() {
    this.offset = Geometry.getOffset(this.element, this.options.parent, true)
    this.fixPosition = this.offset
    this.position = this.offset
    if (this.options.position) {
      this.initPosition = this.options.position
      this.move(this.initPosition, 0, true, true)
    } else {
      this.initPosition = this.offset
    }

    if (this.bound.refresh) {
      this.bound.refresh()
    }
  }

  getSize(_recalulate) {
    return Geometry.getSizeOfElement(this.element, this.options.isContentBoxSize)
  }

  getPosition() {
    this.position = this.offset.add(this._transformPosition || new Point(0, 0))
    return this.position
  }

  getCenter() {
    return this.position.add(this.getSize().mult(0.5))
  }

  _setTranslate(point) {
    this._transformPosition = point

    let transform = this.element.style[transformProperty]
    let translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)'

    const ua = window.navigator.userAgent
    const msie = ua.indexOf('MSIE ')

    if (msie) {
      translateCss = ' translate(' + point.x + 'px,' + point.y + 'px)'
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

  move(point, time=0, isFix=false, isSilent=false) {
    point = point.clone()
    if (isFix) {
      this.fixPosition = point
    }

    this.determineDirection(point)

    this.position = point

    if (transitionProperty) {
      this.element.style[transitionProperty] = time + 'ms'
    }

    this._setTranslate(point.sub(this.offset))
    if (!isSilent) {
      this.onMove.fire()
    }
  }

  refreshPosition () {
    this.setPosition(this.getPosition())
  }

  setPosition(point) {
    point = point.clone()
    this.position = point

    if (transitionProperty) {
      this.element.style[transitionProperty] = '0ms'
    }

    this._setTranslate(point.sub(this.offset))
  }

  setZeroTransition() {
    if (transitionProperty) {
      this.element.style[transitionProperty] = '0ms'
    }
  }

  determineDirection(point) {
    this.leftDirection = (this.position.x < point.x)
    this.rightDirection = (this.position.x > point.x)
    this.upDirection = (this.position.y > point.y)
    this.downDirection = (this.position.y < point.y)
  }

  dragStart(event) {
    this.currentEvent = event
    if (!this._enable || (this.options.startFilter && !this.options.startFilter(event))) {
      return
    }

    const isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    this._startTouchPoint = new Point(isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY)

    this._startPosition = this.getPosition()
    if (isTouchEvent) {
      this._touchId = event.changedTouches[0].identifier
    }
    event.stopPropagation()
    if (!(event.target instanceof window.HTMLInputElement ||
          event.target instanceof window.HTMLInputElement)) {
      event.preventDefault()
    } else {
      event.target.focus()
    }

    document.addEventListener(touchEvents.move, this._dragMove)
    document.addEventListener(mouseEvents.move, this._dragMove)

    document.addEventListener(touchEvents.end, this._dragEnd)
    document.addEventListener(mouseEvents.end, this._dragEnd)

    this.isDragging = true

    this.onStart.fire(event)
    addClass(this.element, 'active')
    this.onMove.fire(event)
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
    const touchPoint = new Point(isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY)
    let point = this._startPosition.add(touchPoint.sub(this._startTouchPoint))
    point = this.bound(point, this.getSize())
    this.touchPoint = touchPoint
    this.move(point, 0)
  }

  dragEnd(event) {
    const isTouchEvent = (isTouch && (event instanceof window.TouchEvent))

    if (isTouchEvent && !getTouchByID(event, this._touchId)) {
      return
    }

    event.stopPropagation()
    event.preventDefault()
    this.onEnd.fire(event)

    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)

    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)

    this.isDragging = false
    removeClass(this.element, 'active')
  }

  getRectangle() {
    return new Rectangle(this.position, this.getSize())
  }

  refresh() {
    this.getSize(true)
    if (this.bound.refresh) {
      this.bound.refresh()
    }
  }

  destroy() {
    this.handler.removeEventListener(touchEvents.start, this._dragStart)
    this.handler.removeEventListener(mouseEvents.start, this._dragStart)
    document.removeEventListener(touchEvents.move, this._dragMove)
    document.removeEventListener(mouseEvents.move, this._dragMove)
    document.removeEventListener(touchEvents.end, this._dragEnd)
    document.removeEventListener(mouseEvents.end, this._dragEnd)

    this.onEnd.reset()
    this.onMove.reset()
  }

  get enable() {
    return this._enable
  }

  set enable(enable) {
    if (enable) {
      removeClass(this.element, 'disable')
    } else {
      addClass(this.element, 'disable')
    }

    return this._enable = enable
  }
}

Draggable.onCreate = new Dragee.Event(Draggable, { isReverse: true, isStopOnTrue: true })
Draggable.onCreate.add(addToDefaultScope)

export { Draggable, events }

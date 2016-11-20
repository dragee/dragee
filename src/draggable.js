'use strict';


import util from './util'
import Event from './event'
import getStyleProperty from 'desandro-get-style-property'
import {boundType, boundFactory} from './bound'
import {mathPoint, Point, Rectangle} from './point'

var Dragee = { util, boundType, boundFactory, Event};//todo remove after refactore

var isTouch = 'ontouchstart' in window, mouseEvents = {
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
onCreateDraggable = function(draggable){
    var message = "for this element Dragee.Draggable is already exist, don't create it twice ";
    if(draggables.some(function(existing){
        return draggable.element === existing.element;
    })){
        throw message;
    }
    draggables.push(draggable);
},
transformProperty = getStyleProperty('transform'),
transitionProperty = getStyleProperty('transition');

//Dragee.events = events;

function Draggable(element, options){
    options = options || {};
    var i, that = this, displayListener, parent = options.parent || Dragee.util.getDefaultParent(element);
    this.options = {
        parent: parent,
        bound: Dragee.boundFactory(Dragee.boundType.element)(parent, parent),
        startFilter: false,
        isContentBoxSize: false,
        position: false
    }
    for(i in options){
        if(options.hasOwnProperty(i)){
            this.options[i] = options[i];
        }
    }
    this.onEnd = new Dragee.Event(this, { isReverse: true, isStopOnTrue: true });
    this.onMove = new Dragee.Event(this);
    this.onStart = new Dragee.Event(this);

    this.onEnd.add(function(){
        this.move(this.position, 0, true, true);
    });

    if(options.onEnd){
        this.onEnd.add(options.onEnd);
    }
    if(options.onMove){
        this.onMove.add(options.onMove);
    }
    if(options.onStart){
        this.onStart.add(options.onStart);
    }
    this.element = element;
    this.bound = this.options.bound;
    onCreateDraggable(this);
    that.init();
}

Draggable.prototype.init = function(){
    this._enable = true;
    this.offset = mathPoint.getOffset(this.element, this.options.parent, true);
    this.fixPosition = this.offset;
    this.position = this.offset;
    if(this.options.position){
        this.initPosition = this.options.position;
        this.move(this.initPosition, 0, true, true);
    } else {
        this.initPosition = this.offset;
    }
    this._dragStart = Dragee.util.bind(this.dragStart, this);
    this._delayedDragStart = Dragee.util.bind(this.delayedDragStart, this);
    this._dragMove = Dragee.util.bind(this.dragMove, this);
    this._dragEnd = Dragee.util.bind(this.dragEnd, this);

    if(this.options.delayedStart) {
        this.element.addEventListener(touchEvents.start, this._delayedDragStart);
        this.element.addEventListener(mouseEvents.start, this._delayedDragStart);
    } else {
        this.element.addEventListener(touchEvents.start, this._dragStart);
        this.element.addEventListener(mouseEvents.start, this._dragStart);
    }

    this.bound.refresh && this.bound.refresh();
};

Draggable.prototype.reinit = function(){
    this.offset = mathPoint.getOffset(this.element, this.options.parent, true);
    this.fixPosition = this.offset;
    this.position = this.offset;
    if(this.options.position){
        this.initPosition = this.options.position;
        this.move(this.initPosition, 0, true, true);
    } else {
        this.initPosition = this.offset;
    }

    this.bound.refresh && this.bound.refresh();
};

Draggable.prototype.getSize = function(recalulate){
    return mathPoint.getSizeOfElement(this.element, this.options.isContentBoxSize);
};

Draggable.prototype.getPosition = function(){
    this.position = this.offset.add(this._transformPosition || new Point(0, 0));
    return this.position;
};

Draggable.prototype.getCenter = function(){
    return this.position.add(this.getSize().mult(0.5));
};

Draggable.prototype._setTranslate = function(point){
    this._transformPosition = point;

    var transform = this.element.style[transformProperty],
        translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)';

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if(msie) {
        translateCss = ' translate(' + point.x + 'px,' + point.y + 'px)';
        if(!/translate\([^)]+\)/.test(transform)){
            transform += translateCss;
        }else{
            transform = transform.replace(/translate\([^)]+\)/, translateCss);
        }
    } else {
        if(!/translate3d\([^)]+\)/.test(transform)){
            transform += translateCss;
        }else{
            transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
        }
    }

    this.element.style[transformProperty] = transform;
};

Draggable.prototype.move = function(point, time, isFix, isSilent){
    var that = this;
    time = time || 0;
    point = point.clone();
    if(isFix){
        this.fixPosition = point;
    }

    this.determineDirection(point);

    this.position = point;

    transitionProperty && (that.element.style[transitionProperty] = time + "ms");
    that._setTranslate(point.sub(that.offset));
    isSilent || that.onMove.fire();
};

Draggable.prototype.refreshPosition = function(){
    this.setPosition(this.getPosition());
};

Draggable.prototype.setPosition = function(point){
    point = point.clone();
    this.position = point;

    transitionProperty && (this.element.style[transitionProperty] = "0ms");
    this._setTranslate(point.sub(this.offset));
};

Draggable.prototype.setZeroTransition = function(){
    transitionProperty && (this.element.style[transitionProperty] = "0ms");
};

Draggable.prototype.determineDirection = function(point){
    this.leftDirection = (this.position.x < point.x);
    this.rightDirection = (this.position.x > point.x);
    this.upDirection = (this.position.y > point.y);
    this.downDirection = (this.position.y < point.y);
};

Draggable.prototype.delayedDragStart = function(delayedEvent){
    var isTouchEvent = (isTouch && (delayedEvent instanceof TouchEvent)),
        startTouchPoint = new Point(
            isTouchEvent ? delayedEvent.changedTouches[0].pageX : delayedEvent.clientX,
            isTouchEvent ? delayedEvent.changedTouches[0].pageY : delayedEvent.clientY
        ),
        that = this;

    if(delayedEvent.shiftKey) return;

    function checkMovement(event){
        var isTouchEvent = (isTouch && (event instanceof TouchEvent)),
            touchPoint = new Point(
                isTouchEvent ? event.changedTouches[0].pageX : event.clientX,
                isTouchEvent ? event.changedTouches[0].pageY : event.clientY
            );

        if(Math.abs(touchPoint.x-startTouchPoint.x) > 5
            || Math.abs(touchPoint.y-startTouchPoint.y) > 5) {

            document.removeEventListener(touchEvents.move, checkMovement);
            document.removeEventListener(mouseEvents.move, checkMovement);

            BlockSelection.startDragSelection(that, delayedEvent);
            that.dragStart(delayedEvent);
        }
    }

    function removeCheckMovement(event){
        document.removeEventListener(touchEvents.move, checkMovement);
        document.removeEventListener(mouseEvents.move, checkMovement);

        document.removeEventListener(touchEvents.end, removeCheckMovement);
        document.removeEventListener(mouseEvents.end, removeCheckMovement);
    }

    document.addEventListener(touchEvents.move, checkMovement);
    document.addEventListener(mouseEvents.move, checkMovement);

    document.addEventListener(touchEvents.end, removeCheckMovement);
    document.addEventListener(mouseEvents.end, removeCheckMovement);
};

Draggable.prototype.dragStart = function(event){
    this.currentEvent = event;
    if(!this._enable || ( this.options.startFilter && !this.options.startFilter(event))){
        return;
    }

    var isTouchEvent = (isTouch && (event instanceof TouchEvent));

    this._startTouchPoint = new Point(isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);

    this._startPosition = this.getPosition();
    if(isTouchEvent){
        this._touchId = event.changedTouches[0].identifier;
    }
    event.stopPropagation();
    if(!(event.target instanceof HTMLInputElement
        || event.target instanceof HTMLInputElement)){
        event.preventDefault();
    }else{
        event.target.focus();
    }

    document.addEventListener(touchEvents.move, this._dragMove);
    document.addEventListener(mouseEvents.move, this._dragMove);

    document.addEventListener(touchEvents.end, this._dragEnd);
    document.addEventListener(mouseEvents.end, this._dragEnd);

    this.isDragee = true;

    this.onStart.fire(event);
    this.element.addClass("active");
    this.onMove.fire(event);
};

Draggable.prototype.dragMove = function(event){
    this.currentEvent = event;

    var touch, touchPoint, point;

    var isTouchEvent = (isTouch && (event instanceof TouchEvent));

    if(isTouchEvent){
        if(!(touch = Dragee.util.getTouchByID(event, this._touchId))){
            return;
        }
    }
    event.stopPropagation();
    event.preventDefault();
    touchPoint = new Point(isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);
    point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));
    point = this.bound(point, this.getSize());
    this.touchPoint = touchPoint;
    this.move(point, 0);
};

Draggable.prototype.dragEnd = function(event){
    var touch;

    var isTouchEvent = (isTouch && (event instanceof TouchEvent));

    if(isTouchEvent){
        if(!(touch = Dragee.util.getTouchByID(event, this._touchId))){
            return;
        }
    }
    event.stopPropagation();
    event.preventDefault();
    this.onEnd.fire(event);

    document.removeEventListener(touchEvents.move, this._dragMove);
    document.removeEventListener(mouseEvents.move, this._dragMove);

    document.removeEventListener(touchEvents.end, this._dragEnd);
    document.removeEventListener(mouseEvents.end, this._dragEnd);

    this.isDragee = false;
    this.element.removeClass("active");
};

Draggable.prototype.getRectangle = function(){
    return new Rectangle(this.position, this.getSize());
};

Draggable.prototype.refresh = function(){
    this.getSize(true);
    this.bound.refresh && this.bound.refresh();
}

Draggable.prototype.destroy = function(){
    this.element.removeEventListener(touchEvents.start, this._dragStart);
    this.element.removeEventListener(mouseEvents.start, this._dragStart);
    this.element.removeEventListener(touchEvents.move, this._dragMove);
    this.element.removeEventListener(mouseEvents.move, this._dragMove);
    this.element.removeEventListener(touchEvents.end, this._dragEnd);
    this.element.removeEventListener(mouseEvents.end, this._dragEnd);

    this.onEnd.reset();
    this.onMove.reset();
};

Draggable.prototype.__defineGetter__("enable", function(){
    return this._enable;
});

Draggable.prototype.__defineSetter__("enable", function(enable) {
    if(enable) {
        this.element.removeClass("disable");
    } else {
        this.element.addClass("disable");
    }

    return this._enable = enable;
});

export {Draggable, draggables, events};

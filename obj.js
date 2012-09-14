(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},
		isTouch = 'ontouchstart' in window, mouseEvents = {
		start: 'mousedown',
		move: 'mousemove',
		end: 'mouseup'
	}, touchEvents = {
		start: 'touchstart',
		move: 'touchmove',
		end: 'touchend'
	}, 
	events = isTouch ? touchEvents : mouseEvents, 
	objs = [], 
	onCreateObj = function(obj){
		var message = "for this element MultiDrag.Obj is already exist, don't create it twice ";
		if(objs.some(function(dObj){
			return obj.el === dObj.el;
		})){
			throw message;
		}
		objs.push(obj);
	};

	function Obj(el, options){
				options = options || {};
				var i, that = this, displayListener, parent = options.parent || MultiDrag.util.getDafaultParent(el);
				this.options = {
					parent: parent,
					bound: MultiDrag.boundFactory(MultiDrag.boundType.element)(parent, parent),
					startFilter: false,
					isReCalculatePosition: false,
					isReCalculateSize: false,
					isContentBoxSize: false,
					position: false
				}
				for(i in options){
					if(options.hasOwnProperty(i)){
						this.options[i] = options[i];
					}
				}
				this.onEnd = MultiDrag.util.triggerFactory({context: this, isReverse: true, isStopOnTrue: true});
				this.onMove = MultiDrag.util.triggerFactory({context: this});

				this.onEnd.add(function(){
					this.move(this.position, 0, true);
				});

				if(options.onEnd){
					this.onEnd.add(options.onEnd);
				}
				if(options.onMove){
					this.onMove.add(options.onMove);
				}
				this.el = el;
				this.bound = this.options.bound;
				onCreateObj(this);
				MultiDrag.util.displayHelper.add(this.options.parent, displayListener = function(){
					that.init();
					MultiDrag.util.displayHelper.remove(that.options.parent, displayListener);
				});
			}

	Obj.prototype.init = function(){
		this._enable = true;
		this.offset = mathPoint.getOffset(this.el, this.options.parent, true);
		this.fixPosition = this.offset;
		this.position = this.offset;
		if(this.options.position){
			this.initPosition = this.options.position;
			this.move(this.initPosition,0,true,true);
		}else{
			this.initPosition = this.offset;
		}
		this._dragStart = MultiDrag.util.bind(this.dragStart, this);
		this._dragMove = MultiDrag.util.bind(this.dragMove, this);
		this._dragEnd = MultiDrag.util.bind(this.dragEnd, this);
		this.el.addEventListener(events.start, this._dragStart);
		this.bound.refresh && this.bound.refresh();
	};

	Obj.prototype.getSize = function(recalulate){
		if(!this._size || this.options.isReCalculateSize || recalulate){
			this._size = mathPoint.getSizeOfElement(this.el, this.options.isContentBoxSize);
		}
		return this._size;
	};

	Obj.prototype.getPosition = function(){
		if(!this.position || this.options.isReCalculatePosition){
			this.position = this.offset.add(this._transformPosition || new Point(0, 0));
		}
		return this.position;
	};

	Obj.prototype.getCenter = function(){
		return this.position.add(this.getSize().mult(0.5));
	};

	Obj.prototype._setTranslate = function(point){
		this._transformPosition = point;
		var webkitTransform = this.el.style.webkitTransform, webkitTranslateCss = 'translate3d(' + point.x + 'px,' + point.y + 'px,0px)';
		if(!/translate3d\([^)]+\)/.test(webkitTransform)){
			webkitTransform += webkitTranslateCss;
		}else{
			webkitTransform = webkitTransform.replace(/translate3d\([^)]+\)/, webkitTranslateCss);
		}
		this.el.style.webkitTransform = webkitTransform;
	};

	Obj.prototype.move = function(point, time, isFix, isSilent){
		time = time || 0;
		point = point.clone();
		if(isFix){
			this.fixPosition = point;
		}
		this.position = point;
		this.el.style.webkitTransitionDuration = time + "ms";
		this._setTranslate(point.sub(this.offset));
		isSilent || this.onMove.fire();
	};

	Obj.prototype.dragStart = function(event){
		if(!this._enable || ( this.options.startFilter && !this.options.startFilter(event))){
			return;
		}
		this._startTouchPoint = new Point(isTouch ? event.changedTouches[0].pageX : event.clientX, isTouch ? event.changedTouches[0].pageY : event.clientY);
		this._startPosition = this.getPosition();
		if(isTouch){
			this._touchId = event.changedTouches[0].identifier;
		}
		event.stopPropagation();
		if(!(event.target instanceof HTMLInputElement || event.target instanceof HTMLInputElement)){
			event.preventDefault();
		}else{
			event.target.focus();
		}
		document.addEventListener(events.move, this._dragMove);
		document.addEventListener(events.end, this._dragEnd);
		this.isMultiDrag = true;
		MultiDrag.util.addClass(this.el, "active");
		this.onMove.fire();
	};

	Obj.prototype.dragMove = function(event){
		var touch, touchPoint, point;
		if(isTouch){
			if(!(touch = MultiDrag.util.getTouchByID(event, this._touchId))){
				return;
			}
		}
		event.stopPropagation();
		event.preventDefault();
		touchPoint = new Point(isTouch ? touch.pageX : event.clientX, isTouch ? touch.pageY : event.clientY);
		point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));
		point = this.bound(point, this.getSize());
		this.move(point, 0);
	};

	Obj.prototype.dragEnd = function(event){
		var touch;
		if(isTouch){
			if(!(touch = MultiDrag.util.getTouchByID(event, this._touchId))){
				return;
			}
		}
		event.stopPropagation();
		event.preventDefault();
		this.onEnd.fire();
		document.removeEventListener(events.move, this._dragMove);
		document.removeEventListener(events.end, this._dragEnd);
		this.isMultiDrag = false;
		MultiDrag.util.removeClass(this.el, "active");
	};

	Obj.prototype.changeHtmlParent = function(el){
		if(!this._initialParent){
			this._initialParent = this.el.parentNode;
		}
		if(this.el.parentNode === el){
			return;
		}
		el.appendChild(this.el);
		MultiDrag.util.waitCall(function(){
			this.offset = mathPoint.getOffset(this.el, this.options.parent, true).sub(this._transformPosition);
			this.move(this.position, 0, false, true);
		}, this)();
	};


	Obj.prototype.getRectangle = function(){
		return new Rectangle(this.position, this.getSize());
	};

	Obj.prototype.refresh = function(){
		this.getSize(true);
//		this.offset = mathPoint.getOffset(this.el, this.options.parent, true);
		this.bound.refresh && this.bound.refresh();
//		console.log("refresh offset", this.offset);
		//this.offset = mathPoint.getOffset(this.el, this.options.parent, true).sub(this._transformPosition || new Point(0,0) );
		//this.move(this.position,0,false,true);
	}

	Obj.prototype.destroy = function(){
		this.el.removeEventListener(events.start, this._dragStart);
		this.onEnd.reset();
		this.onMove.reset();
	};

	Obj.prototype.__defineGetter__("enable", function(){
		return this._enable;
	});

	Obj.prototype.__defineSetter__("enable", function(enable) {
		MultiDrag.util.toggleClass(this.el,"disable",!enable);
		return this._enable = enable;
	});

	MultiDrag.objs = objs;
	MultiDrag.Obj = Obj;
	window.MultiDrag = MultiDrag;
})();
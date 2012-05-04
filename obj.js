(function (global, MultiDrag){
	'use strict';

	var isTouch = 'ontouchstart' in window, mouseEvents = {
		start:'mousedown',
		move:'mousemove',
		end:'mouseup'
	}, touchEvents = {
		start:'touchstart',
		move:'touchmove',
		end:'touchend'
	}, events = isTouch ? touchEvents : mouseEvents, objs = [],

		Obj = function (el, options){
			options = options || {};
			var i, parent = options.parent || MultiDrag.Util.getDafaultParent(el);
			this.options = {
				parent:parent,
				bound:MultiDrag.BoundFactory(MultiDrag.boundType.element)(parent, parent),
				isReCalculatePosition:false,
				isReCalculateSize:false,
				isContentBoxSize:false,
				position:false
			}
			for(i in options){
				this.options[i] = options[i];
			}
			this.onMoves = options && options.onMove ? [options.onMove] : [];
			this.onEnds = options && options.onEnd ? [options.onEnd] : [];
			this.el = el;
			objs.push(this);
			this.init();
		}

	Obj.prototype.init = function (){
		this.offset = mathPoint.getOffset(this.el, this.options.parent, true);
		this.fixPosition = this.offset;
		this.position = this.offset;
		if(this.options.position){
			this.initPosition = this.options.position;
			this.move(this.initPosition);
		}else{
			this.initPosition = this.offset;
		}
		this.el.addEventListener(events.start, MultiDrag.Util.bind(this.MultiDragStart, this));
		this._MultiDragMove = MultiDrag.Util.bind(this.MultiDragMove, this);
		this._MultiDragEnd = MultiDrag.Util.bind(this.MultiDragEnd, this);
	};

	Obj.prototype.getSize = function (){
		if(!this._size || this.options.isReCalculateSize){
			this._size = mathPoint.getSizeOfElement(this.el, this.options.isContentBoxSize);
		}
		return this._size;
	}

	Obj.prototype.getPosition = function (){
		if(!this.position || this.options.isReCalculatePosition){
			this.position = this.offset.add(this._transformPosition || new Point(0, 0));
		}
		return this.position;
	}

	Obj.prototype.getCenter = function (){
		return this.position.add(this.getSize().mult(0.5));
	}

	Obj.prototype._setTranslate = function (point){
		this._transformPosition = point;
		var webkitTransform = this.el.style.webkitTransform, webkitTranslateCss = 'translate3d(' + point.x + 'px,' + point.y + 'px,0px)';
		if(!/translate3d\([^)]+\)/.test(webkitTransform)){
			webkitTransform += webkitTranslateCss;
		}else{
			webkitTransform = webkitTransform.replace(/translate3d\([^)]+\)/, webkitTranslateCss);
		}
		this.el.style.webkitTransform = webkitTransform;
	};

	Obj.prototype.move = function (point, time, isFix, isSilent){
		time = time || 0;
		point = point.clone();
		isFix && (this.fixPosition = point);
		this.position = point;
		this.el.style.webkitTransitionDuration = time + "ms";
		this._setTranslate(point.sub(this.offset));
		isSilent || this.onMove();
	};

	Obj.prototype.MultiDragStart = function (e){
		this._startTouchPoint = new Point(isTouch ? e.changedTouches[0].pageX : e.clientX, isTouch ? e.changedTouches[0].pageY : e.clientY);
		this._startPosition = this.getPosition();
		if(isTouch){
			this._touchId = e.changedTouches[0].identifier;
		}
		e.stopPropagation();
		e.preventDefault();
		document.addEventListener(events.move, this._MultiDragMove);
		document.addEventListener(events.end, this._MultiDragEnd);
		this.isMultiDrag = true;
		MultiDrag.Util.addClass(this.el, "active");
		this.onMove();
	}

	Obj.prototype.MultiDragMove = function (e){
		var touch, touchPoint, point;
		if(isTouch){
			if(!(touch = MultiDrag.Util.getTouchByID(e, this._touchId))){
				return;
			}
		}
		e.stopPropagation();
		e.preventDefault();
		touchPoint = new Point(isTouch ? touch.pageX : e.clientX, isTouch ? touch.pageY : e.clientY);
		point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));
		point = this.options.bound(point, this.getSize());
		this.move(point, 0);
	}

	Obj.prototype.MultiDragEnd = function (e){
		var touch;
		if(isTouch){
			if(!(touch = MultiDrag.Util.getTouchByID(e, this._touchId))){
				return;
			}
		}
		e.stopPropagation();
		e.preventDefault();
		this.onEnd();
		document.removeEventListener(events.move, this._MultiDragMove);
		document.removeEventListener(events.end, this._MultiDragEnd);
		this.isMultiDrag = false;
		MultiDrag.Util.removeClass(this.el, "active");
	}

	Obj.prototype.changeHtmlParent = function (el){
		if(!this._initialParent){
			this._initialParent = this.el.parentNode;
		}
		if(this.el.parentNode === el){
			return;
		}
		el.appendChild(this.el);
		MultiDrag.Util.waitCall(function (){
			this.offset = mathPoint.getOffset(this.el, this.options.parent, true).sub(this._transformPosition);
			this.move(this.position, 0, false, true);
		}, this)();
	}


	Obj.prototype.getRectangle = function (func){
		return new Rectangle(this.position, this.getSize());
	}

	Obj.prototype.addOnEnd = function (func){
		this.onEnds.push(func);
	}

	Obj.prototype.removeOnEnd = function (func){
		MultiDrag.Util.remove(this.onEnds, func);
	}

	Obj.prototype.addOnMove = function (func){
		this.onMoves.push(func);
	}

	Obj.prototype.removeOnMove = function (func){
		MultiDrag.Util.remove(this.onMoves, func);
	}

	Obj.prototype.onEnd = function (){
		var i, isStop = false;
		for(i = this.onEnds.length - 1; i >= 0; i--){
			isStop = this.onEnds[i].call(this);
			if(isStop){
				break;
			}
		}
		if(!isStop){
			this.move(this.position, 0, true);
		}
	}

	Obj.prototype.onMove = function (){
		var i;
		for(i = this.onMoves.length - 1; i >= 0; i--){
			this.onMoves[i].call(this);
		}
	}

	Obj.prototype.refresh = function (){
		this.offset = mathPoint.getOffset(this.el, this.options.parent, true).sub(this._transformPosition);
		//this.move(this.position,0,false,true);
	}

	MultiDrag = MultiDrag || {};
	MultiDrag.objs = objs;
	MultiDrag.Obj = Obj;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);
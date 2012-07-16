(function (global, MultiDrag){
	'use strict';

	var isTouch = 'ontouchstart' in window, mouseEvents = {
		start:'mousedown',
		move:'mousemove',
		end:'mouseup'
	},
	touchEvents = {
		start:'touchstart',
		move:'touchmove',
		end:'touchend'
	},
	events = isTouch ? touchEvents : mouseEvents,
	objs = [],
	onCreateObj = function(obj){
		var message = "for this element MultiDrag.Obj is already exist, don't create it twice ";
		if(objs.some(function(dObj){
			return obj.el === dObj.el;
		})){
			alert(message);
			throw message;
		}
		objs.push(obj);
	},

	Obj = function (el, options){
		options = options || {};
		var i, parent = options.parent || MultiDrag.util.getDafaultParent(el);
		this.options = {
			parent:parent,
			bound:MultiDrag.boundFactory(MultiDrag.boundType.element)(parent, parent),
			isReCalculatePosition:false,
			isReCalculateSize:false,
			isContentBoxSize:false,
			position:false
		}
		for(i in options){
			this.options[i] = options[i];
		}
		this.onEnd = MultiDrag.util.triggerFactory({context:this,isReverse:true,isStopOnTrue:true});
		this.onMove = MultiDrag.util.triggerFactory({context:this});

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
		this.init();
		onCreateObj(this);
	};

	Obj.prototype.init = function (){
		this._enable = true;
		this.offset = mathPoint.getOffset(this.el, this.options.parent, true);
		this.fixPosition = this.offset;
		this.position = this.offset;
		if(this.options.position){
			this.initPosition = this.options.position;
			this.move(this.initPosition);
		}else{
			this.initPosition = this.offset;
		}
		this.el.addEventListener(events.start, MultiDrag.util.bind(this.multiDragStart, this));
		this._MultiDragMove = MultiDrag.util.bind(this.multiDragMove, this);
		this._MultiDragEnd = MultiDrag.util.bind(this.multiDragEnd, this);
	};

	Obj.prototype.getSize = function (){
		if(!this._size || this.options.isReCalculateSize){
			this._size = mathPoint.getSizeOfElement(this.el, this.options.isContentBoxSize);
		}
		return this._size;
	};

	Obj.prototype.getPosition = function (){
		if(!this.position || this.options.isReCalculatePosition){
			this.position = this.offset.add(this._transformPosition || new Point(0, 0));
		}
		return this.position;
	};

	Obj.prototype.getCenter = function (){
		return this.position.add(this.getSize().mult(0.5));
	};

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
		if(isFix){
			this.fixPosition = point;
		}
		this.position = point;
		this.el.style.webkitTransitionDuration = time + "ms";
		this._setTranslate(point.sub(this.offset));
		isSilent || this.onMove.fire();
	};

	Obj.prototype.multiDragStart = function (e){
		if(!this._enable){
			return ;
		}
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
		MultiDrag.util.addClass(this.el, "active");
		this.onMove.fire();
	};

	Obj.prototype.multiDragMove = function (e){
		var touch, touchPoint, point;
		if(isTouch){
			if(!(touch = MultiDrag.util.getTouchByID(e, this._touchId))){
				return;
			}
		}
		e.stopPropagation();
		e.preventDefault();
		touchPoint = new Point(isTouch ? touch.pageX : e.clientX, isTouch ? touch.pageY : e.clientY);
		point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));
		point = this.options.bound(point, this.getSize());
		this.move(point, 0);
	};

	Obj.prototype.multiDragEnd = function (e){
		var touch;
		if(isTouch){
			if(!(touch = MultiDrag.util.getTouchByID(e, this._touchId))){
				return;
			}
		}
		e.stopPropagation();
		e.preventDefault();
		this.onEnd.fire();
		document.removeEventListener(events.move, this._MultiDragMove);
		document.removeEventListener(events.end, this._MultiDragEnd);
		this.isMultiDrag = false;
		MultiDrag.util.removeClass(this.el, "active");
	};

	Obj.prototype.changeHtmlParent = function (el){
		if(!this._initialParent){
			this._initialParent = this.el.parentNode;
		}
		if(this.el.parentNode === el){
			return;
		}
		el.appendChild(this.el);
		MultiDrag.util.waitCall(function (){
			this.offset = mathPoint.getOffset(this.el, this.options.parent, true).sub(this._transformPosition);
			this.move(this.position, 0, false, true);
		}, this)();
	};


	Obj.prototype.getRectangle = function (){
		return new Rectangle(this.position, this.getSize());
	};

	Obj.prototype.refresh = function (){
		this.offset = mathPoint.getOffset(this.el, this.options.parent, true).sub(this._transformPosition || new Point(0,0) );
		//this.move(this.position,0,false,true);
	}

	Obj.prototype.__defineGetter__("enable", function() {
		return this._enable;
	});

	Obj.prototype.__defineSetter__("enable", function(enable) {
		return this._enable = enable;
	});

	MultiDrag = MultiDrag || {};
	MultiDrag.objs = objs;
	MultiDrag.Obj = Obj;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);
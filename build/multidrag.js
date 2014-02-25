(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},DisplayHelper, util;

	DisplayHelper = function(){
		this.init();
	};
	DisplayHelper.prototype.init = function(){
		var that = this;
		this.isListen = false;
		this.elListeners = [];//{el:HTMLElement, listetners:[function(){},....]}
		this.domListener = util.throttle(function(){
			that.check();
		}, 100);
	};
	DisplayHelper.prototype.check = function(){
		console.log("check");
		var calls = [];
		this.elListeners.forEach(function(item){
			var wasDisplay = item.isDisplay, i, isDisplay = util.isDisplayed(item.el);
			item.isDisplay = isDisplay;
			if(!wasDisplay && isDisplay){
				calls = calls.concat(item.listetners);
			}
		});
		setTimeout(function(){
			calls.forEach(function(call){
				call();
			});
		}, 0);
	};
	DisplayHelper.prototype.addListener = function(){
		document.addEventListener("DOMSubtreeModified", this.domListener);
		this.isListen = true;
	};
	DisplayHelper.prototype.removeListener = function(){
		document.removeEventListener("DOMSubtreeModified", this.domListener);
		this.isListen = false;
	}
	DisplayHelper.prototype.add = function(el, callback){
		var isDisplay = util.isDisplayed(el), item = this.elListeners.filter(function(listItem){
			return listItem.el === el;
		})[0];
		if(item){
			item.listetners.push(callback);
		}else{
			item = {el: el, listetners: [callback], isDisplay: isDisplay };
			this.elListeners.push(item);
			if(!this.isListen){
				this.addListener();
			}
		}
		if(isDisplay){
			callback();
		}
	};
	DisplayHelper.prototype.remove = function(el, callback){
		var index, item = this.elListeners.filter(function(item){
			return item.el === el;
		})[0];
		if(item){
			util.remove(item.listetners, callback);
			if(!item.listetners.length){
				util.remove(this.elListeners, item);
				if(!this.elListeners.length){
					this.removeListener();
				}
			}
		}
	};

	util = {
		addClass: function(el, className){
			if(!this.hasClass(el, className)){
				el.className = (el.className + ' ' + className).replace(/\s+/g, ' ').replace(/(^ | $)/g, ' ');
			}
		},
		removeClass: function(el, className){
			var classExist = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
			el.className = el.className.replace(classExist, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
		},
		hasClass: function(el, className){
			var classExist = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
			return classExist.test(el.className);
		},
		toggleClass:function(el, className, isOn){
			var isAdd = arguments.length > 2 ? isOn : !this.hasClass(el,className);
			this[isAdd ? "addClass" : "removeClass"](el, className);
		},
		getDefaultParent:function (el){
			var parent = el.parentNode;
			while(parent.parentNode && window.getComputedStyle(parent)["position"] === "static"){
				parent = parent.parentNode;
			}
			return parent;
		},
		bind: function(func, context){
			return function(){
				return func.apply(context, [].splice.call(arguments, 0));
			};
		},
		getTouchByID: function(el, touchId){
			var i;
			for(i = 0; i < el.changedTouches.length; i++){
				if(el.changedTouches[i].identifier === touchId){
					return el.changedTouches[i];
				}
			}
			return false;
		},
		getSumValueOfStyleRule: function(el, rules){
			return rules.reduce(function(sum, rule){
				return sum + parseInt(window.getComputedStyle(el)[rule]);
			}, 0);
		},
		extend: function(sub, sup){
			var F = function(){
			};
			F.prototype = sup.prototype;
			sub.prototype = new F();
			sub.prototype.constructor = sub;
			sub.superclass = sup.prototype;
			if(sup.prototype.constructor === Object.prototype.constructor){
				sup.prototype.constructor = sup;
			}
		},
		augment: function(receiving, giving){
			var i, methodName;
			if(arguments[2]){
				for(i = 2; i < arguments.length; i++){
					receiving.prototype[arguments[i]] = giving.prototype[arguments[i]];
				}
			}else{
				for(methodName in giving.prototype){
					receiving.prototype[methodName] = giving.prototype[methodName];
				}
			}
		},
		appendFirstChild: function(el, node){
			el.firstChild ? el.insertBefore(node, el.firstChild) : el.appendChild(node);
		},
		range: function(start, stop, step){
			var result = [];
			if(typeof stop === 'undefined'){
				stop = start;
				start = 0;
			}
			if(typeof step === 'undefined'){
				step = 1;
			}
			if((step > 0 && start >= stop) || (step < 0 && start <= stop)){
				return [];
			}
			for(var i = start; step > 0 ? i < stop : i > stop; i += step){
				result.push(i);
			}
			return result;
		},
		remove: function(array, obj){
			var index = array.indexOf(obj);
			if(index != -1){
				array.splice(index, 1);
			}
		},
		waitCall: function(func, context, time){
			return function(){
				var that = context || this, arg = [].splice.call(arguments, 0);
				setTimeout(function(){
					func.apply(that, arg);
				}, time || 0);
			}
		},
		dictionFactory: function(){
			var dictionary = [], getRowIndex = function(key){
				var i, row;
				for(i = 0; i < dictionary.length; i++){
					row = dictionary[i];
					if(row[0] === key){
						return i;
					}
				}
				return -1;
			}
			return {
				setValue: function(key, value){
					var index = getRowIndex(key);
					if(index != -1){
						dictionary[index][1] = value;
					}else{
						dictionary.push([key, value]);
					}
					return value;
				},
				getValue: function(key){
					var index = getRowIndex(key);
					return index != -1 ? dictionary[index][1] : null;
				},
				remove: function(key){
					var index = getRowIndex(key);
					if(index != -1){
						return dictionary.splice(index, 1)[1];
					}
					return null;
				},
				isExist: function(key){
					var index = getRowIndex(key);
					return index != -1;
				}
			};
		},
		setStyle: function(el, style, isOnlyAdd){
			style = style || {};
			var cssText = "", key;
			for(key in style){
				if(style.hasOwnProperty(key)){
					cssText += key + " : " + style[key] + "; ";
				}
			}
			if(isOnlyAdd){
				el.style.cssText += cssText;
			}else{
				el.style.cssText = cssText;
			}
		},
		triggerFactory: function(opts){
			var funcs = [], i, options = {
				isReverse: false,
				isStopOnTrue: false,
				context: window
			};
			for(i in opts){
				if(opts.hasOwnProperty(i)){
					options[i] = opts[i];
				}
			};
			return {
				fire: function(){
					var args = [].slice.call(arguments), i, retValue, fs = options.isReverse ? funcs.slice().reverse() : funcs;
					try{
						for(i = 0; i < fs.length; i++){
							retValue = fs[i].apply(options.context, args);
							if(options.isStopOnTrue && retValue){
								return true;
							}
						}
						return !options.isStopOnTrue;
					}
					catch(t){
						alert(t.message);
					}
				},
				add: function(f){
					funcs.push(f);
				},
				remove: function(f){
					var index = funcs.indexOf(f);
					if(index !== -1){
						funcs.splice(index, 1)
					}
				},
				reset:function(){
					funcs = [];
				}
			}
		},
		throttle: function(callback, time){
			var timerId;
			return function(){
				var arg = [].slice.call(arguments);
				timerId && clearTimeout(timerId);
				timerId = setTimeout(function(){
					callback(arg);
				}, time);
			}
		},
		isDisplayed: function(el){
			return !!el.offsetParent;
		},
		randomColor:function(){
			var rnd = function(){
				return Math.round(Math.random()*255);
			},
			toString = function(digit){
				var str = digit.toString(16);
				while(str.length < 2){
					str = "0" + str;
				}
				return str;
			},
			red = rnd(),green = rnd(),blue = rnd();
			return "#"+toString(red)+toString(green)+toString(blue);
		},
		createCanvas: function(area, rectagle){
			var canvas;
			if(window.getComputedStyle(area).position === "static"){
				area.style.position = "relative";
			}
			canvas = document.createElement("canvas");
			canvas.setAttribute("width", rectagle.size.x + "px");
			canvas.setAttribute("height", rectagle.size.y + "px");
			util.setStyle(canvas, {
				position: "absolute",
				left: rectagle.position.y + "px",
				top: rectagle.position.y + "px",
				width: rectagle.size.x + "px",
				height: rectagle.size.y + "px"
			});
			util.appendFirstChild(area, canvas);
			return canvas;
		}
	};

	util.displayHelper = new DisplayHelper();

	MultiDrag.util = util;
	window.MultiDrag = MultiDrag;
})();;(function(){
	'use strict';
	var mathPoint;

	/*********************/
	function Point(x, y){
		this.x = x;
		this.y = y;
	}

	Point.prototype.toString = function(){
		return '{x=' + this.x + ',y=' + this.y + '}';
	};
	Point.prototype.add = function(p){
		return new Point(this.x + p.x, this.y + p.y);
	};
	Point.prototype.sub = function(p){
		return new Point(this.x - p.x, this.y - p.y);
	};
	Point.prototype.mult = function(k){
		return new Point(this.x * k, this.y * k);
	};
	Point.prototype.negative = function(){
		return new Point(-this.x, -this.y);
	};
	Point.prototype.compare = function(p){
		return (this.x === p.x && this.y === p.y);
	};
	Point.prototype.clone = function(){
		return new Point(this.x, this.y);
	};

	/****************/
	function Rectangle(position, size){
		this.position = position;
		this.size = size;
	}

	Rectangle.prototype.getP1 = function(){
		return this.position;
	};
	Rectangle.prototype.getP2 = function(){
		return new Point(this.position.x + this.size.x, this.position.y);
	};
	Rectangle.prototype.getP3 = function(){
		return this.position.add(this.size);
	};
	Rectangle.prototype.getP4 = function(){
		return new Point(this.position.x, this.position.y + this.size.y);
	};
	Rectangle.prototype.getCenter = function(){
		return this.position.add(this.size.mult(0.5));
	};
	Rectangle.prototype.or = function(rect){
		var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y)), size = (new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y))).sub(position);
		return new Rectangle(position, size);
	};
	Rectangle.prototype.and = function(rect){
		var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y)), size = (new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y))).sub(position);
		if(size.x <= 0 || size.y <= 0){
			return null;
		}
		return new Rectangle(position, size);
	};
	Rectangle.prototype.isOn = function(p){
		return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
	};
	Rectangle.prototype.moveToBound = function(rect, axis){
		var selAxis, crossRectangle, thisCenter, rectCenter, sign, offset;
		if(axis){
			selAxis = axis;
		}else{
			crossRectangle = this.and(rect);
			if(!crossRectangle){
				return rect;
			}
			selAxis = crossRectangle.size.x > crossRectangle.size.y ? "y" : "x";
		}
		thisCenter = this.getCenter();
		rectCenter = rect.getCenter();
		sign = thisCenter[selAxis] > rectCenter[selAxis] ? -1 : 1;
		offset = sign > 0 ? this.position[selAxis] + this.size[selAxis] - rect.position[selAxis] : this.position[selAxis] - (rect.position[selAxis] + rect.size[selAxis]);
		rect.position[selAxis] = rect.position[selAxis] + offset;
		return rect;
	};
	Rectangle.prototype.getSquare = function(){
		return this.size.x * this.size.y;
	};
	Rectangle.prototype.styleApply = function(el){
		el = el || document.querySelector("ind");
		el.style.left = this.position.x + "px";
		el.style.top = this.position.y + "px";
		el.style.width = this.size.x + "px";
		el.style.height = this.size.y + "px";
	};
	Rectangle.prototype.growth = function(size){
		this.size = this.size.add(size);
		this.position = this.position.add(size.mult(-0.5));
	};
	Rectangle.prototype.getMinSide = function(){
		return Math.min(this.size.x, this.size.y);
	};

	/*****************/
	mathPoint = {
		getLength: function(options){
			if(!options || (options.x && options.y && !options.isTransformationSpace)){
				return function(p1, p2){
					var dx = p1.x - p2.x, dy = p1.y - p2.y;
					return Math.sqrt(dx * dx + dy * dy);
				};
			}else{
				if(options.x && options.y && options.isTransformationSpace){
					return function(p1, p2){
						return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
					};
				}else{
					if(options.x){
						return function(p1, p2){
							return Math.abs(p1.x - p2.x);
						};
					}else{
						if(options.y){
							return function(p1, p2){
								return Math.abs(p1.y - p2.y);
							};
						}
					}
				}
			}
		},
		indexOfNearPoint: function(arr, val, radius, getLength){
			var size, index = 0, i, temp;
			getLength = getLength || this.getLength();
			if(arr.length === 0){
				return -1;
			}
			size = getLength(arr[0], val);
			for(i = 0; i < arr.length; i++){
				temp = getLength(arr[i], val);
				if(temp < size){
					size = temp;
					index = i;
				}
			}
			if(radius >= 0 && size > radius){
				return -1;
			}
			return index;
		},
		bound: function(min, max, val){
			return Math.max(min, Math.min(max, val));
		},
		boundPoint: function(min, max, val){
			var x = Math.max(min.x, Math.min(max.x, val.x)), y = Math.max(min.y, Math.min(max.y, val.y));
			return new Point(x, y);
		},
		//Return crossing point of two lines
		directCrossing: function(L1P1, L1P2, L2P1, L2P2){
			var temp, k1, k2, b1, b2, x, y;
			if(L2P1.x === L2P2.x){
				temp = L2P1;
				L2P1 = L1P1;
				L1P1 = temp;
				temp = L2P2;
				L2P2 = L1P2;
				L1P2 = temp;
			}
			if(L1P1.x === L1P2.x){
				k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
				b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
				x = L1P1.x;
				y = x * k2 + b2;
				return new Point(x, y);
			}else{
				k1 = (L1P2.y - L1P1.y) / (L1P2.x - L1P1.x);
				b1 = (L1P2.x * L1P1.y - L1P1.x * L1P2.y) / (L1P2.x - L1P1.x);
				k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
				b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
				x = (b1 - b2) / (k2 - k1);
				y = x * k1 + b1;
				return new Point(x, y);
			}
		},
		//Get point and check that point belong to segment of the line
		// if not - return the nearest point of segment
		boundOnLine: function(LP1, LP2, P){
			var x, y;
			x = mathPoint.bound(Math.min(LP1.x, LP2.x), Math.max(LP1.x, LP2.x), P.x);
			if(x != P.x){
				y = (x === LP1.x) ? LP1.y : LP2.y;
				P = new Point(x, y);
			}
			y = mathPoint.bound(Math.min(LP1.y, LP2.y), Math.max(LP1.y, LP2.y), P.y);
			if(y != P.y){
				x = (y === LP1.y) ? LP1.x : LP2.x;
				P = new Point(x, y);
			}
			return P;
		},
		getPointInLine: function(LP1, LP2, percent){
			var dx = LP2.x - LP1.x, dy = LP2.y - LP1.y;
			return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
		},
		getPointInLineByLenght: function(LP1, LP2, lenght){
			var dx = LP2.x - LP1.x, dy = LP2.y - LP1.y, percent = lenght / this.getLength()(LP1, LP2);
			return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
		},
		createRectangleFromElement: function(el, parent, isContentBoxSize, isConsiderTranslate){
			var size = this.getSizeOfElement(el, isContentBoxSize)
			return new Rectangle(this.getOffset(el, parent || el.parentNode, isConsiderTranslate), size);
		},
		getSizeOfElement: function(el, isContentBoxSize){
			var width = parseInt(window.getComputedStyle(el)['width']), height = parseInt(window.getComputedStyle(el)['height']);
			if(!isContentBoxSize){
				width += MultiDrag.util.getSumValueOfStyleRule(el, ["padding-left", "padding-right", "border-left-width", "border-right-width"]);
				height += MultiDrag.util.getSumValueOfStyleRule(el, ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"]);
			}
			return new Point(width, height);
		},
		getOffset: function(el, parent, isConsiderTranslate){
			var elRect = el.getBoundingClientRect(), parentRect = parent.getBoundingClientRect();
			return new Point(elRect.left - parentRect.left, elRect.top - parentRect.top);
		},
		getPointFromRadialSystem: function(angle, length, center){
			center = center || new Point(0, 0);
			return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)));
		},
		addPointToBoundPoints: function(boundpoints, point, isRight){
			var i, result = boundpoints.filter(function(bPoint){
				return  bPoint.y > point.y || (isRight ? bPoint.x < point.x : bPoint.x > point.x);
			});
			for(i = 0; i < result.length; i++){
				if(point.y < result[i].y){
					result.splice(i, 0, point);
					return result;
				}
			}
			result.push(point);
			return result;
		},
		getAngle: function(p1, p2){
			var diff = p2.sub(p1);
			return this.normalizeAngle(Math.atan2(diff.y, diff.x));
		},
		toRadian: function(angle){
			return ((angle % 360) * Math.PI / 180);
		},
		toDegree: function(angle){
			return (angle * 180 / Math.PI ) % 360;
		},
		boundAngle: function(min, max, val){
			var dmin,dmax;
			if(min < max && val > min && val < max){
				return val;
			}else if(max < min && ( val < max || val > min )){
				return val;
			}else{
				dmin = this.getAngleDiff(min,val);
				dmax = this.getAngleDiff(max,val);
				if(dmin < dmax){
					return min;
				}else{
					return max;
				}
			}
		},
		getNearestAngle:function(arr,angle){
			var i,temp,diff = Math.PI * 2 ,value;
			for(i = 0; i < arr.length;i++){
				temp = mathPoint.getAngleDiff(arr[i],angle);
				if(diff < temp){
					diff = temp;
					value = arr[i];
				}
			}
			return value;
		},
		getAngleDiff:function(alpha,beta){
			var minAngle = Math.min(alpha,beta),
				maxAngle =  Math.max(alpha,beta);
			return Math.min(maxAngle - minAngle,minAngle + Math.PI*2 - maxAngle);
		},
		normalizeAngle: function( val){
			while(val < 0 ){
				val+= 2 * Math.PI;
			}
			while(val > 2 * Math.PI ){
				val-= 2 * Math.PI;
			}
			return val;
		}
	};
	window.Point = Point;
	window.Rectangle = Rectangle;
	window.mathPoint = mathPoint;
})();;(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},
		boundType = {
			element: -1,
			rectangle: 0,
			lineX: 1,
			lineY: 2,
			line: 3,
			unificationOfRectangle: 4,
			circle:5,
			arc:6
		};
	function boundFactory(type){
		switch(type){
			case boundType.element:
				return function(el, parent){
					var bound,
						retFunc = function(){
							return bound.apply(this,arguments);
						};
					retFunc.refresh = function(){
						bound = boundFactory(boundType.rectangle)(mathPoint.createRectangleFromElement(el, parent));
					};
					retFunc.refresh();
					return retFunc;
				};
			case boundType.rectangle:
				return function (rectangle){
					return function (point, size){
						var calcPoint = point.clone(), rectP2 = rectangle.getP3();
						if(rectangle.position.x > calcPoint.x){
							(calcPoint.x = rectangle.position.x);
						}
						if(rectangle.position.y > calcPoint.y){
							calcPoint.y = rectangle.position.y;
						}
						if(rectP2.x < calcPoint.x + size.x){
							calcPoint.x = rectP2.x - size.x;
						}
						if(rectP2.y < calcPoint.y + size.y){
							calcPoint.y = rectP2.y - size.y;
						}
						return calcPoint;
					};
				};
			case boundType.lineX:
				return function (x, startY, endY){
					return function (point, size){
						var calcPoint = point.clone();
						calcPoint.x = x;
						if(startY > calcPoint.y){
							calcPoint.y = startY;
						}
						if(endY < calcPoint.y + size.y){
							calcPoint.y = endY - size.y;
						}
						return calcPoint;
					};
				};
			case boundType.lineY:
				return function (y, startX, endX){
					return function (point, size){
						var calcPoint = point.clone();
						calcPoint.y = y;
						if(startX > calcPoint.x){
							calcPoint.x = startX;
						}
						if(endX < calcPoint.x + size.x){
							calcPoint.x = endX - size.x;
						}
						return calcPoint;
					};
				};
			case boundType.line:
				return function (start, end){
					var alpha = Math.atan2(end.y - start.y, end.x - start.x),
						beta = alpha + Math.PI / 2,
						someK = 10,
						cosBeta = Math.cos(beta),
						sinBeta = Math.sin(beta);
					return function (point, size){
						var point2 = new Point(point.x + someK * cosBeta, point.y + someK * sinBeta),
							pointCrossing = mathPoint.directCrossing(start, end, point, point2),
							newEnd = mathPoint.getPointInLineByLenght(end, start, size.x);
						pointCrossing = mathPoint.boundOnLine(start, newEnd, pointCrossing);
						return pointCrossing;
					};
				};
			//todo add realization
			case boundType.unificationOfRectangle:
				return function (rectangles){
					return function (point, size){
						return point.clone();
					};
				};
			case boundType.circle:
				return function(center,radius){
					return function (point, size){
						var boundedPoint = mathPoint.getPointInLineByLenght(center,point,radius);
						console.log(point.toString(),boundedPoint.toString());
						return boundedPoint;
					};
				};
			case boundType.arc:
				return function(center,radius,startAgle,endAngle){
					return function (point, size){
						var boundStartAngle = typeof startAgle === "function" ? startAgle() : startAgle,
							boundEndtAngle = typeof startAgle === "function" ? endAngle() : endAngle,
							angle = mathPoint.getAngle(center,point);
						angle = mathPoint.normalizeAngle(angle);
						angle = mathPoint.boundAngle(boundStartAngle,boundEndtAngle,angle);
						return mathPoint.getPointFromRadialSystem(angle,radius,center);
					};
				};
		}
	}

	MultiDrag.boundType = boundType;
	MultiDrag.boundFactory = boundFactory;
	window.MultiDrag = MultiDrag;
})();;(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},
		positionType = {
			notCrossing: 0,
			floatLeft: 1,
			floatRight: 2
		};
	function positionFactory(type){
		switch(type){
			case positionType.notCrossing:
				return function(rectangle, options){
					var i, opts = {
						isRemove: true
					}
					for(i in options){
						opts[i] = options[i];
					}
					return function(rectangleList, indexesOfNews){
						var boundRect = typeof rectangle === "function" ? rectangle() : rectangle, staticRectangleIndexes = rectangleList.reduce(function(indexes, rect, index){
							if(indexesOfNews.indexOf(index) === -1){
								indexes.push(index);
							}
							return indexes;
						}, []);
						indexesOfNews.forEach(function(index){
							var rect = rectangleList[index], isRemove = false;
							staticRectangleIndexes.forEach(function(indexOfStatic){
								var staticRect = rectangleList[indexOfStatic];
								rect = staticRect.moveToBound(rect);
							});
							isRemove = staticRectangleIndexes.some(function(indexOfStatic){
								var staticRect = rectangleList[indexOfStatic];
								return  !!staticRect.and(rect);
							}) || rect.and(boundRect).getSquare() !== rect.getSquare();
							if(isRemove){
								rect.isRemove = true;
							}else{
								staticRectangleIndexes.push(index);
							}
						});
						return rectangleList;
					}
				};
			case positionType.floatLeft:
				return function(rectangle, options){
					var i, opts = {
						paddingTopLeft: new Point(5, 5),
						paddingBottomRight: new Point(0, 0),
						isRemove: true
					}
					for(i in options){
						opts[i] = options[i];
					}
					return function(rectangleList, indexesOfNews){
						var boundRect = typeof rectangle === "function" ? rectangle() : rectangle, 
							rectP2 = boundRect.getP2(), i, boundaryPoints = [boundRect.position];
						rectangleList.forEach(function(rect, index){
							var position, isValid = false;
							for(i = 0; i < boundaryPoints.length; i++){
								position = (new Point(boundaryPoints[i].x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y)).add(opts.paddingTopLeft);
								if(isValid = (position.x + rect.size.x < rectP2.x)){
									break;
								}
							}
							if(!isValid){
								position = (new Point(boundRect.position.x, boundaryPoints[boundaryPoints.length - 1].y)).add(opts.paddingTopLeft);
							}
							rect.position = position;
							if(opts.isRemove && rect.getP3().y > boundRect.getP3().y){
								rect.isRemove = true;
							}
							boundaryPoints = mathPoint.addPointToBoundPoints(boundaryPoints, rect.getP3().add(opts.paddingBottomRight));
						});
						return rectangleList;
					};
				};
			case positionType.floatRight:
				return function(rectangle, options){
					var paddingTopNegRight, paddingBottomNegLeft, i, opts = {
						paddingTopRight: new Point(5, 5),
						paddingBottomLeft: new Point(0, 0),
						isRemove: true
					}
					for(i in options){
						opts[i] = options[i];
					}
					paddingTopNegRight = new Point(-opts.paddingTopRight.x, opts.paddingTopRight.y);
					paddingBottomNegLeft = new Point(-opts.paddingBottomLeft.x, opts.paddingBottomLeft.y);
					return function(rectangleList, indexesOfNews){
						var boundRect = typeof rectangle === "function" ? rectangle() : rectangle, i, boundaryPoints = [boundRect.getRightTopPoint()];
						rectangleList.forEach(function(rect, index){
							var position, isValid = false;
							for(i = 0; i < boundaryPoints.length; i++){
								position = (new Point(boundaryPoints[i].x - rect.size.x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y)).add(paddingTopNegRight);
								if(isValid = (position.x > rect.position.x)){
									break;
								}
							}
							if(!isValid){
								position = new Point(boundRect.getP2().x, boundaryPoints[boundaryPoints.length - 1].y);
							}
							rect.position = position;
							if(opts.isRemove && rect.getLeftBottomPoint().y > boundRect.getP4().y){
								rect.isRemove = true;
							}
							boundaryPoints = mathPoint.addPointToBoundPoints(boundaryPoints, rect.getP4().add(paddingBottomNegLeft), true);
						});
						return rectangleList;
					};
				};
		}
	};

	function sortingFactory(type){
		switch(type){
			case positionType.notCrossing:
				return function(){
					return function(oldObjsList, newObjs, indexOfNews){
						var objsList = oldObjsList.concat(newObjs);
						newObjs.forEach(function(obj){
							indexOfNews.push(objsList.indexOf(obj));
						});
						return objsList;
					};
				};
			case positionType.floatLeft:
			case positionType.floatRight:
				return function(radius, getLength, options){
					var i, opts = {
						getPosition: function(obj){
							return obj.position;
						}
					}
					for(i in options){
						opts[i] = options[i];
					}
					return function(oldObjsList, newObjs, indexOfNews){
						var newList = oldObjsList.concat(), listOldPosition;
						listOldPosition = oldObjsList.map(opts.getPosition);
						newObjs.forEach(function(newObj){
							var index = mathPoint.indexOfNearPoint(listOldPosition, opts.getPosition(newObj), radius, getLength);
							if(index === -1){
								index = newList.length;
							}else{
								index = newList.indexOf(oldObjsList[index]);
							}
							newList.splice(index, 0, newObj);
						});
						newObjs.forEach(function(newObj){
							indexOfNews.push(newList.indexOf(newObj));
						});
						return newList;
					};
				};
		}
	};

	MultiDrag.positionType = positionType;
	MultiDrag.sortingFactory = sortingFactory;
	MultiDrag.positionFactory = positionFactory;
	window.MultiDrag = MultiDrag;
})();;(function(){
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
	},
	transformProperty = getStyleProperty('transform'),
	transitionDurationProperty = getStyleProperty('transition-duration');

	function Obj(el, options){
				options = options || {};
				var i, that = this, displayListener, parent = options.parent || MultiDrag.util.getDefaultParent(el);
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

		var transform = this.el.style[transformProperty], 
			translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)';
		if(!/translate3d\([^)]+\)/.test(transform)){
			transform += translateCss;
		}else{
			transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
		}
		this.el.style[transformProperty] = transform;
	};

	Obj.prototype.move = function(point, time, isFix, isSilent){
		var that = this;
		time = time || 0;
		point = point.clone();
		if(isFix){
			this.fixPosition = point;
		}
		this.position = point;
		requestAnimationFrame(function(){
			transitionDurationProperty && (that.el.style[transitionDurationProperty] = time + "ms");
			that._setTranslate(point.sub(that.offset));
			isSilent || that.onMove.fire();
		});
	};

	Obj.prototype.setPosition = function(point){
		point = point.clone();
		this.position = point;

		transitionDurationProperty && (this.el.style[transitionDurationProperty] = "0ms");
		this._setTranslate(point.sub(this.offset));
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
})();;(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},lists = [];

	function List(objs, options){
		var i;
		this.options = {
			timeEnd: 200,
			timeExcange: 400,
			radius: 30,
			getLength: mathPoint.getLength(),
			isDisplacement:false
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.objs = objs;
		lists.push(this);
		this.onChange = MultiDrag.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	}

	List.prototype.init = function(){
		this._enable = true;
		this.objs.forEach(this.initObj,this);
	};

	List.prototype.initObj = function(obj){
		var moveHandler,that = this;
		obj.enable = this._enable;
		if(this.options.isDisplacement){
			moveHandler = function(){
				if(this.isMultiDrag){
					that.onStart(this);
					obj.onMove.remove(moveHandler);
					return true;
				}
			};
			obj.onEnd.add(function(){
				that.onEndDisplaycement(this);
				obj.onMove.add(moveHandler);
				return true;
			});
			obj.onMove.add(moveHandler);
		}else{
			obj.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		}
	};

	List.prototype.moveOrSave = function(obj,position,time){
		if(obj.isMultiDrag){
			obj.fixPosition = position;
		}else{
			obj.move(position, time, true);
		}
	};

	List.prototype.onEnd = function(obj){
		var fixPositions = this.getCurrentFixPosition(), currentIndex, excangeIndex;
		currentIndex = this.objs.indexOf(obj);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			obj.move(obj.fixPosition, this.options.timeEnd, true);
		}else{
			this.moveOrSave(this.objs[excangeIndex],fixPositions[currentIndex],this.options.timeExcange);
			this.objs[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
			this.onChange.fire();
		}
		return true;
	};

	List.prototype.onEndDisplaycement = function(obj){
		var currentIndex,i,targetIndex,
			sortedObjs = this.getSortedObjs(),
			fixPositions = sortedObjs.map(function(obj){
				return obj.fixPosition;
			});
		currentIndex = sortedObjs.indexOf(obj);
		targetIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(targetIndex !==-1){
			if(targetIndex < currentIndex){
				for(i = targetIndex ; i < currentIndex; i++){
					this.moveOrSave(sortedObjs[i],fixPositions[i+1],this.options.timeExcange);
				}
			}else{
				for(i = currentIndex; i < targetIndex; i++){
					this.moveOrSave(sortedObjs[i+1],fixPositions[i],this.options.timeExcange);
				}
			}
			obj.move(fixPositions[targetIndex],this.options.timeEnd, true);
		}else{
			obj.move(obj.fixPosition,this.options.timeEnd, true);
		}
	};

	List.prototype.onStart = function(obj){
		var currentIndex,i,
			sortedObjs = this.getSortedObjs(),
			fixPositions = sortedObjs.map(function(obj){
				return obj.fixPosition;
			});
		currentIndex = sortedObjs.indexOf(obj);
		for(i = currentIndex + 1; i < sortedObjs.length; i++){
			this.moveOrSave(sortedObjs[i],fixPositions[i-1],this.options.timeExcange);
		}
		sortedObjs[currentIndex].fixPosition = fixPositions[i-1];
	};



	List.prototype.getCurrentFixPosition = function(){
		return this.objs.map(function(obj){
			return obj.fixPosition.clone();
		});
	};

	List.prototype.getSortedObjs = function(){
		var sortedObjs,
			initPositions = this.objs.map(function(obj){
				return obj.initPosition;
			});
		sortedObjs = initPositions.map(function(position){
			return this.objs.filter(function(obj){
				return obj.fixPosition.compare(position);
			},this)[0];
		},this);
		return sortedObjs;
	};

	List.prototype.reset = function(){
		this.objs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, false);
		});
	};

	List.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
	};

	List.prototype.add = function(objs){
		var that = this;
		if(!(objs instanceof Array)){
			objs = [objs];
		}
		objs.forEach(this.initObj,this);
		this.objs = this.objs.concat(objs);
	};

	List.prototype.remove = function(objs){
		var j, initPositions = this.objs.map(function(obj){
				return obj.initPosition;
			}),
			list = [],
			sortedObj = this.getSortedObjs();
		if(!(objs instanceof Array)){
			objs = [objs];

		}
		objs.forEach(function(obj){
			obj.onEnd.reset();
			obj.onMove.reset();//todo remove reset in future
			MultiDrag.util.remove(this.objs,obj);
		}, this);
		j = 0;
		sortedObj.forEach(function(obj, i){
			if(this.objs.indexOf(obj) !== -1){
				if(obj.fixPosition !== initPositions[j]){
					obj.move(initPositions[j], this.options.timeExcange, true);
				}
				obj.initPosition = initPositions[j];
				j++;
				list.push(obj);
			}
		}, this);
		this.objs = list;
	};

	List.prototype.clear = function(){
		this.remove(this.objs.slice());
	};

	List.prototype.destroy = function(){
		this.objs.forEach(function(obj){
			obj.destroy();
		});
	};

	List.prototype.__defineGetter__("positions", function(){
		return this.getCurrentFixPosition();
	});

	List.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.objs.length){
			positions.forEach(function(point, i){
				this.objs[i].move(point, 0, true, true);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});

	List.prototype.__defineGetter__("enable", function(){
		return this._enable;
	});

	List.prototype.__defineSetter__("enable", function(value){
		this._enable = value;
		this.objs.forEach(function(obj){
			obj.enable = value;
		});
	});


	function listFactory(el, objsElements, options){
		var objs, objOptions, listOptions;
		options = options || {};
		objOptions = options.obj || {};
		listOptions = options.list || {};
		objOptions.parent = objOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});

		return new List(objs, listOptions);
	}

	MultiDrag.lists = lists;
	MultiDrag.List = List;
	MultiDrag.listFactory = listFactory;
	window.MultiDrag = MultiDrag;
})();;(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {};

	function ListSwitcher(objs, options){
		options = options || {};
		options.stepOn = options.stepOn || new Point(-50, 0);
		MultiDrag.List.call(this, objs, options);
	}
	MultiDrag.util.extend(ListSwitcher, MultiDrag.List);

	ListSwitcher.prototype.init = function(){
		var that = this;
		this.objs.forEach(function(obj){
			obj.isOn = false;
			obj.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		});
	};

	ListSwitcher.prototype.onEnd = function(obj){
		var fixPositions = this.getCurrentFixPositionWithOff(), currentIndex, excangeIndex;
		currentIndex = this.objs.indexOf(obj);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			this.moveObj(currentIndex, obj.position, fixPositions[currentIndex], this.options.timeEnd);
		}else{
			if(this.objs[excangeIndex].isMultiDrag){
				this.fixToOff(excangeIndex, fixPositions[currentIndex]);
			}else{
				this.moveObjToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
			}
			this.moveObj(currentIndex, obj.position, fixPositions[excangeIndex], this.options.timeEnd);
			this.onChange.fire();
		}
		return true;
	};

	ListSwitcher.prototype.moveObj = function(index, position, fixOffPosition, time){
		var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)], isOn = mathPoint.indexOfNearPoint(positions, position, -1, mathPoint.getLength({x: true}));
		if(this.objs[index].isOn !== !!isOn){
			this.objs[index].isOn = !!isOn;
			this.onChange.fire();
		}
		this.objs[index].move(positions[isOn], time, true);
	};

	ListSwitcher.prototype.fixToOff = function(index, fixOffPosition){
		this.objs[index].isOn = false;
		this.objs[index].fixPosition = fixOffPosition;
	};

	ListSwitcher.prototype.moveObjToOff = function(index, fixOffPosition, time){
		this.objs[index].isOn = false;
		this.objs[index].move(fixOffPosition, time, true);
	};

	ListSwitcher.prototype.getCurrentFixPositionWithOff = function(){
		return this.objs.map(function(obj){
			return obj.isOn ? obj.fixPosition.sub(this.options.stepOn) : obj.fixPosition.clone();
		}, this);
	};

	ListSwitcher.prototype.getSortedObjs = function(){
		return this.objs.map(
				function(obj){
					return obj.initPosition;
				}).map(function(position){
					return this.objs.filter(function(obj){
						return obj.fixPosition.compare(position) || obj.fixPosition.compare(position.add(this.options.stepOn));
					}, this)[0];
				}, this);
	};

	ListSwitcher.prototype.reset = function(){
		this.objs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, false);
			obj.isOn = false;
		});
	};

	ListSwitcher.prototype.__defineGetter__("positions", function(){
		return this.objs.map(function(obj){
			var position = obj.fixPosition.clone();
			position.isOn = obj.isOn;
			return position;
		});
	});

	ListSwitcher.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.objs.length){
			positions.forEach(function(point, i){
				this.objs[i].isOn = point.isOn;
				this.objs[i].move(point, 0, true, true);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});


	 function listSwitcherFactory(el, objsElements, options){
		var objs, objOptions, listOptions;
		options = options || {};
		objOptions = options.obj || {};
		listOptions = options.list || {};
		objOptions.parent = objOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});
		return new ListSwitcher(objs, listOptions);
	}

	MultiDrag = MultiDrag || {};
	MultiDrag.ListSwitcher = ListSwitcher;
	MultiDrag.listSwitcherFactory = listSwitcherFactory;
	window.MultiDrag = MultiDrag;
})();;(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},spiders = [];

	function Spider(area, elements, options){
		var i, areaRectangle = mathPoint.createRectangleFromElement(area, area);
		this.options = {
			angle: 0,
			dAngle: 2 * Math.PI / elements.length,
			center: areaRectangle.getCenter(),
			startRadius: 50,
			endRadius: areaRectangle.getMinSide() / 2,
			lineWidth: 2,
			strokeStyle: "#ff5577",
			fillStyle: "rgba(150,255,50,0.8)"
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		spiders.push(this);
		this.area = area;
		this.areaRectangle = areaRectangle;
		this.init(elements);
	}

	Spider.prototype.init = function(elements){
		var that = this;
		this.canvas = MultiDrag.util.createCanvas(this.area,this.areaRectangle);
		this.context = this.canvas.getContext("2d");
		this.objs = elements.map(function (el, i){
			var angle = this.options.angle + i * this.options.dAngle,
				halfSize = mathPoint.getSizeOfElement(el).mult(0.5),
				start = mathPoint.getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
				end = mathPoint.getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
				bound = function(){
					return MultiDrag.boundFactory(MultiDrag.boundType.line)(start, end);
				};
			return new MultiDrag.Obj(el, {parent:this.area, bound:bound, position:start, onMove:function (){
				that.draw();
				return true;
			}});
		}, this);
		this.isInit = true;
		this.draw();
	}

	Spider.prototype.draw = function (){
		var point, i;
		if(!this.isInit){
			return;
		}
		this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
		this.context.beginPath();
		point = this.objs[0].getCenter();
		this.context.moveTo(point.x, point.y);
		for(i = 0; i < this.objs.length; i++){
			point = this.objs[i].getCenter();
			this.context.lineTo(point.x, point.y);
		}
		this.context.closePath();
		this.context.lineWidth = this.options.lineWidth;
		this.context.strokeStyle = this.options.strokeStyle;
		this.context.stroke();
		this.context.fillStyle = this.options.fillStyle;
		this.context.fill();
	}

	MultiDrag.spiders = spiders;
	MultiDrag.Spider = Spider;
	window.MultiDrag = MultiDrag;
})();;(function(){
	'use strict';

	var MultiDrag = window.MultiDrag || {},targets = [];

	function Target(el, objs, options){
		options = options || {};
		var i, parent = options.parent || MultiDrag.util.getDefaultParent(el);
		this.options = {
			timeEnd: 200,
			timeExcange: 400,
			isReCalculateRectangle: false,
			parent: parent,
			isChangeHtmlParent: false,
			sorting: MultiDrag.sortingFactory(MultiDrag.positionType.floatLeft)(80, mathPoint.getLength({x: 1, y: 4, IsTransformationSpace: true})),
			positioning: MultiDrag.positionFactory(MultiDrag.positionType.floatLeft)(MultiDrag.util.bind(this.getRectangle, this), {isRemove: true})
		};
		for(i in options){
			this.options[i] = options[i];
		}
		targets.push(this);
		this.el = el;
		this.objs = objs;
		this.onAdd = MultiDrag.util.triggerFactory({context: this});
		this.onRemove = MultiDrag.util.triggerFactory({context: this});
		if(options.onRemove){
			this.onRemove.add(options.onRemove);
		}
		if(options.onAdd){
			this.onAdd.add(options.onAdd);
		}
		this.init();
	};

	Target.prototype.getRectangle = function(){
		if(!this._rectangle || this.options.isReCalculateRectangle || this.options.isChangeHtmlParent){
			this._rectangle = mathPoint.createRectangleFromElement(this.el, this.options.parent, this.options.isContentBoxSize, true);
		}
		return this._rectangle;
	};

	Target.prototype.init = function(){
		var objsRectagles, indexesOfNew;
		this.objOnMoveDictionary = MultiDrag.util.dictionFactory();
		this.innerObjs = this.objs.filter(function(obj){
			var el = obj.el.parentNode;
			while(el){
				if(el === this.el){
					return true;
				}
				el = el.parentNode;
			}
			return false;
		}, this);
		if(this.innerObjs.length){
			indexesOfNew = MultiDrag.util.range(this.innerObjs.length);
			objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
				return obj.getRectangle();
			}), indexesOfNew);
			this.setPosition(objsRectagles, indexesOfNew);
			this.innerObjs.forEach(function(obj){
				this.onAdd.fire(obj);
			}, this);
		}
	};

	Target.prototype.refresh = function(){
		var objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}), []);
		this.setPosition(objsRectagles, []);
	};

	Target.prototype.onEnd = function(obj){
		var newObjsIndex = [], objsRectagles, isOn = this.getRectangle().isOn(obj.getCenter());
		if(!isOn){
			return false;
		}
		this.innerObjs = this.options.sorting(this.innerObjs, [obj], newObjsIndex);
		objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}), newObjsIndex);

		this.setPosition(objsRectagles, newObjsIndex);
		if(this.innerObjs.indexOf(obj) !== -1){
			this.addRemoveOnMOve(obj);
		}
		return true;
	};

	Target.prototype.setPosition = function(rectangles, indexesOfNew, time){
		this.innerObjs.slice(0).forEach(function(obj, i){
			var rect = rectangles[i], that = this, timeEnd = time || time == 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;
			if(rect.isRemove){
				obj.move(obj.initPosition, timeEnd, true, true);
				MultiDrag.util.remove(this.innerObjs, obj);
				if(this.options.isChangeHtmlParent && obj._initialParent){
					setTimeout(function(){
						obj.changeHtmlParent(obj._initialParent);
					}, time + 10);
				}
				this.onRemove.fire(obj);
			}else{
				obj.move(rect.position, timeEnd, true, true);
				if(this.options.isChangeHtmlParent){
					setTimeout(function(){
						obj.changeHtmlParent(that.el);
					}, time + 10);
				}
			}
		}, this);
	};

	Target.prototype.add = function(obj, time){
		var objsRectagles, newObjsIndex = this.innerObjs.length;
		this.innerObjs.push(obj);
		objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}), newObjsIndex);
		this.setPosition(objsRectagles, [newObjsIndex], time || 0);
		if(this.innerObjs.indexOf(obj) !== -1){
			this.addRemoveOnMOve(obj);
		}
	};

	Target.prototype.addRemoveOnMOve = function(obj){
		var that = this;
		obj.onMove.add(this.objOnMoveDictionary.setValue(obj, function(){
			return that.remove(this);
		}));
		this.onAdd.fire(obj);
	};

	Target.prototype.remove = function(obj){
		var index, objsRectagles;
		obj.onMove.remove(this.objOnMoveDictionary.remove(obj));
		index = this.innerObjs.indexOf(obj);
		if(index === -1){
			return;
		}
		this.innerObjs.splice(index, 1);
		objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}), []);
		this.setPosition(objsRectagles, []);
		this.onRemove.fire(obj);
	};

	Target.prototype.reset = function(){
		this.innerObjs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, true);
			this.onRemove.fire(obj);
		}, this);
		this.innerObjs = [];
	}

	Target.prototype.getSortedObjs = function(){
		this.innerObjs.slice();
	}

	MultiDrag.targets = targets;
	MultiDrag.Target = Target;
	window.MultiDrag = MultiDrag;
})();;(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},targetManagers = [];

	function TargetManager(el, objs, targets, options){
		var i;
		this.el = el;
		this.objs = objs;
		this.targets = targets;
		targetManagers.push(this);
		this.options = {
			isChangeHtmlParent: false,
			timeEnd: 400,
			timeWaitForRefresh: 500
		}
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.onChange = MultiDrag.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	};

	TargetManager.prototype.init = function(){
		var that = this;
		this.objs.forEach(function(obj){
			obj.onEnd.add(function(){
				return that.onEnd(this);
			});
			obj.onMove.add(function(){
				return that.onMove(this);
			});
		});
	};

	TargetManager.prototype.onMove = function(obj){

	};

	TargetManager.prototype.onEnd = function(obj){
		var shotTargets = this.targets.filter(
				function(target){
					return target.objs.indexOf(obj) !== -1;
				}).filter(
				function(target){
					var targetRectangle = target.getRectangle(), objSquare = obj.getRectangle().getSquare();
					return  objSquare < targetRectangle.getSquare() && targetRectangle.isOn(obj.getCenter());
				}).sort(function(a, b){
							return a.getRectangle().getSquare() - b.getRectangle().getSquare();
						})
		if(shotTargets.length){
			shotTargets[0].onEnd(obj);
		}else{
			obj.move(obj.initPosition, this.options.timeEnd, true, true);
			if(this.options.isChangeHtmlParent && obj._initialParent){
				setTimeout(function(){
					obj.changeHtmlParent(obj._initialParent);
				}, this.options.timeEnd + 10);
			}
		}
		this.onChange.fire();
		return true;
	};

	TargetManager.prototype.reset = function(){
		this.targets.forEach(function(target){
			target.reset();
		});
	}

	TargetManager.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
		this.targets.forEach(function(target){
			target.refresh();
		});
	};

	TargetManager.prototype.__defineGetter__("positions", function(){
		return this.targets.map(function(target){
			return target.innerObjs.map(function(obj){
				return this.objs.indexOf(obj);
			}, this);
		}, this);
	});

	TargetManager.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.targets.length){
			this.targets.forEach(function(target){
				target.reset();
			}, this);
			positions.forEach(function(tIndexes, i){
				tIndexes.forEach(function(index){
					this.targets[i].add(this.objs[index]);
				}, this);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});


	function targetManagerFactory(el, objsElements, targetElements, options){
		var objs, targets, objOptions, targetOptions, managerOptions;
		options = options || {};
		objOptions = options.obj || {};
		targetOptions = options.target || {};
		managerOptions = options.manager || {};
		objOptions.parent = objOptions.parent || el;
		targetOptions.parent = targetOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);
		targetElements = Array.prototype.slice.call(targetElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});

		targets = targetElements.map(function(el){
			return new MultiDrag.Target(el, objs, targetOptions);
		});
		return new TargetManager(el, objs, targets, managerOptions);
	}


	MultiDrag.targetManagers = targetManagers;
	MultiDrag.TargetManager = TargetManager;
	MultiDrag.targetManagerFactory = targetManagerFactory;
	window.MultiDrag = MultiDrag;
})();
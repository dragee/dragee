(function (global){
	'use strict';
	var Point,Rectangle,mathPoint;

	Point = function (x, y){
		this.x = x;
		this.y = y;
	}
	Point.prototype = {
		toString:function (){
			return '{x=' + this.x + ',y=' + this.y + '}';
		},
		add:function (p){
			return new Point(this.x + p.x, this.y + p.y);
		},
		sub:function (p){
			return new Point(this.x - p.x, this.y - p.y);
		},
		mult:function (k){
			return new Point(this.x * k, this.y * k);
		},
		negative:function (){
			return new Point(-this.x, -this.y);
		},
		compare:function (obj){
			return (this.x == obj.x && this.y == obj.y);
		},
		clone:function (){
			return new Point(this.x, this.y);
		}
	};

	Rectangle = function (position, size){
		this.position = position;
		this.size = size;
	}
	Rectangle.prototype = {
		getP1:function(){
			return this.position;
		},
		getP2:function(){
			return new Point(this.position.x + this.size.x,this.position.y);
		},
		getP3:function(){
			return this.position.add(this.size);
		},
		getP4:function(){
			return new Point(this.position.x,this.position.y + this.size.y);
		},
		getCenter:function (){
			return this.position.add(this.size.mult(0.5));
		},
		or:function (rect){
			var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y)),
				size = (new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y))).sub(position);
			return new Rectangle(position, size);
		},
		and:function (rect){
			var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y)),
				size = (new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y))).sub(position);
			if(size.x <= 0 || size.y <= 0){
				return null;
			}
			return new Rectangle(position, size);
		},
		isOn:function ( p){
			if(this.position.x > p.x){
				return false;
			}
			if(this.position.x + this.size.x < p.x){
				return false;
			}
			if(this.position.y > p.y){
				return false;
			}
			if(this.position.y + this.size.y < p.y){
				return false;
			}
			return true;
		},
		moveToBound:function (rect, axis){
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
		},
		getSquare:function (){
			return this.size.x * this.size.y;
		},
		styleApply:function (el){
			el = el || document.querySelector("ind");
			el.style.left = this.position.x + "px";
			el.style.top = this.position.y + "px";
			el.style.width = this.size.x + "px";
			el.style.height = this.size.y + "px";
		},
		growth:function (size){
			this.size = this.size.add(size);
			this.position = this.position.add(size.mult(-0.5));
		},
		getMinSide:function(){
			return Math.min(this.size.x,this.size.y);
		}
	};

	mathPoint = {
		getAVG:function (){
			var arg = arguments[0] instanceof  Array ? arguments[0] : [].slice.call(arguments);
			return arg.reduce(
				function (sum, point){
					return sum.add(point);
				}, new Point(0, 0)).mult(1 / arg.length);
		},
		getLength : function (options){
			if(!options || (options.x && options.y && !options.IsTransformationSpace)){
				return function (p1, p2){
					var dx = p1.x - p2.x, dy = p1.y - p2.y;
					return Math.sqrt(dx * dx + dy * dy);
				};
			}else if(options.x && options.y && options.IsTransformationSpace){
				return function (p1, p2){
					return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
				};
			}else if(options.x){
				return function (p1, p2){
					return Math.abs(p1.x - p2.x);
				};
			}else if(options.y){
				return function (p1, p2){
					return Math.abs(p1.y - p2.y);
				};
			}
		},
		indexOfNearPoint:function (arr, val, radius, getLength){
			var delta, index=0, i, temp;
			getLength = getLength || this.getLength();
			if(arr.length === 0){
				return -1;
			}
			delta = getLength(arr[0], val);
			for(i = 0; i < arr.length; i++){
				temp = getLength(arr[i], val);
				if(temp < delta){
					delta = temp;
					index = i;
				}
			}
			if(radius >= 0 && delta > radius){
				return -1;
			}
			return index;
		},
		bound:function (min, max, val){
			return Math.max(min, Math.min(max, val));
		},
		boundPoint:function (min, max, val){
			var x = Math.max(min.x, Math.min(max.x, val.x)), y = Math.max(min.y, Math.min(max.y, val.y));
			return new Point(x, y);
		},
		directCrossing:function (L1P1, L1P2, L2P1, L2P2){
			var temp, k1, k2, b1, b2, x, y;
			if(L2P1.x == L2P2.x){
				temp = L2P1;
				L2P1 = L1P1;
				L1P1 = temp;
				temp = L2P2;
				L2P2 = L1P2;
				L1P2 = temp;
			}
			if(L1P1.x == L1P2.x){
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
		boundOnLine:function (LP1, LP2, P){
			var x, y;
			x = mathPoint.bound(Math.min(LP1.x, LP2.x), Math.max(LP1.x, LP2.x), P.x);
			if(x != P.x){
				y = (x == LP1.x) ? LP1.y : LP2.y;
				P = new Point(x, y);
			}
			y = mathPoint.bound(Math.min(LP1.y, LP2.y), Math.max(LP1.y, LP2.y), P.y);
			if(y != P.y){
				x = (y == LP1.y) ? LP1.x : LP2.x;
				P = new Point(x, y);
			}
			return P;
		},
		getPointInLine:function (LP1, LP2, percent){
			var dx = LP2.x - LP1.x, dy = LP2.y - LP1.y;
			return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
		},
		getPointInLineByLenght:function (LP1, LP2, lenght){
			var dx = LP2.x - LP1.x, dy = LP2.y - LP1.y, percent = lenght / this.getLength()(LP1, LP2);
			return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
		},
		createRectangleFromElement:function (el,parent,isContentBoxSize,isConsiderTranslate){
			var size = this.getSizeOfElement(el,isContentBoxSize)
			return new Rectangle(this.getOffset(el,parent||el.parentNode,isConsiderTranslate), size);
		},
		getSizeOfElement:function (el,isContentBoxSize){
			var width = parseInt(window.getComputedStyle(el)['width']),
				height = parseInt(window.getComputedStyle(el)['height']);
			if(!isContentBoxSize){
				width += MultiDrag.util.getSumValueOfStyleRule(el,["padding-left","padding-right","border-left-width","border-right-width"]);
				height += MultiDrag.util.getSumValueOfStyleRule(el,["padding-top","padding-bottom","border-top-width","border-bottom-width"]);
			}
			return new Point(width, height);
		},
		getOffset:function(element,parent,isConsiderTranslate){
			var offset = new Point(0,0),matrix,node=element,matrixValues,offsetParent=element;
			while(node && node!==parent){
				if(offsetParent === node){
					offset = offset.add(new Point(node.offsetLeft||0,node.offsetTop||0));
					offsetParent = node.offsetParent;
				}
				node = node.parentNode;
			}
			if(isConsiderTranslate){
				node=element;
				while(node && node !== parent){
					matrix = window.getComputedStyle(node)["webkitTransform"];
					if(matrix && matrix !== "none" ){
						matrixValues = matrix.match(/\-?\d+(\.\d+)?/gi);
						if(matrixValues.length === 6){//matrix(...)
							offset = offset.add(new Point(parseInt(matrixValues[4]),parseInt(matrixValues[5])));
						}else if(matrixValues.length === 17){//matrix3d(...)
							offset = offset.add(new Point(parseInt(matrixValues[13]),parseInt(matrixValues[14])));
						}else{
							throw "transform matrix has unrecognized format";
						}
					}
					node = node.parentNode;
				}
			}
			return offset;
		},
		getPointFromRadialSystem:function(angle,length,center){
			center = center || new Point(0,0);
			return center.add(new Point(length*Math.cos(angle),length*Math.sin(angle)));
		},
		addPointToBoundPoints:function(boundpoints,point,isRight){
			var i,result = boundpoints.filter(function(bPoint){
				return  bPoint.y > point.y || (isRight ? bPoint.x < point.x:bPoint.x > point.x);
			});
			for(i=0;i<result.length;i++){
				if(point.y < result[i].y){
					result.splice(i,0,point);
					return result;
				}
			}
			result.push(point);
			return result;
		}
	};
	global.Point = Point;
	global.Rectangle = Rectangle;
	global.mathPoint = mathPoint;
})(window);
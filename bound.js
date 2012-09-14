(function(){
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
							calcPoint.x = rectP2.x - size.x
						};
						if(rectP2.y < calcPoint.y + size.y){
							calcPoint.y = rectP2.y - size.y
						};
						return calcPoint;
					};
				};
			case boundType.lineX:
				return function (x, startY, endY){
					return function (point, size){
						var calcPoint = point.clone();
						calcPoint.x = x;
						if(startY > calcPoint.y){
							calcPoint.y = startY
						}
						if(endY < calcPoint.y + size.y){
							calcPoint.y = endY - size.y
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
							calcPoint.x = startX
						}
						if(endX < calcPoint.x + size.x){
							calcPoint.x = endX - size.x
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
						return	 point.clone();
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
	};
	MultiDrag.boundType = boundType;
	MultiDrag.boundFactory = boundFactory;
	window.MultiDrag = MultiDrag;
})();
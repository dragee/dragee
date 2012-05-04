(function (global, MultiDrag){
	//'use strict';
	var boundType = {
		element:-1,
		rectangle:0,
		lineX:1,
		lineY:2,
		line:3,
		unificationOfRectangle:4
	},
	BoundFactory = function (type){
		switch(type){
			case boundType.element:
				return function (element, parent){
					return BoundFactory(boundType.rectangle)(mathPoint.createRectangleFromElement(element, parent));
				};
			case boundType.rectangle:
				return function (rectangle){
					return function (point, size){
						var calcPoint = point.clone(), rectP2 = rectangle.getP3();
						rectangle.position.x > calcPoint.x && (calcPoint.x = rectangle.position.x);
						rectangle.position.y > calcPoint.y && (calcPoint.y = rectangle.position.y);
						rectP2.x < calcPoint.x + size.x && (calcPoint.x = rectP2.x - size.x);
						rectP2.y < calcPoint.y + size.y && (calcPoint.y = rectP2.y - size.y);
						return calcPoint;
					};
				};
			case boundType.lineX:
				return function (x, startY, endY){
					return function (point, size){
						var calcPoint = point.clone();
						calcPoint.x = x;
						startY > calcPoint.y && (calcPoint.y = startY);
						endY < calcPoint.y + size.y && (calcPoint.y = endY - size.y);
						return calcPoint;
					};
				};
			case boundType.lineY:
				return function (y, startX, endX){
					return function (point, size){
						var calcPoint = point.clone();
						calcPoint.y = y;
						startX > calcPoint.x && (calcPoint.x = startX);
						endX < calcPoint.x + size.x && (calcPoint.x = endX - size.x);
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
		}
	};
	MultiDrag = MultiDrag || {};
	MultiDrag.boundType = boundType;
	MultiDrag.BoundFactory = BoundFactory;
	global.MultiDrag = MultiDrag;
})(window, MultiDrag);
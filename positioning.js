(function (global, MultiDrag){
	'use strict';
	var positionType = {
		notCrossing:0,
		floatLeft:1,
		floatRight:2
	},

	positionFactory = function (type){
		switch(type){
			case positionType.notCrossing:
				return function (rectangle){
					return function (rectangleList, indexesOfNews){
						var staticRectangleIndexes = MultiDrag.util.range(rectangleList).filter(function (index){
							return indexesOfNews.indexOf(index) === -1;
						});
						indexesOfNews.forEach(function (index){
							var rect = rectangleList[index], isRemove = false;
							staticRectangleIndexes.forEach(function (indexOfStatic){
								var staticRect = rectangleList[indexOfStatic];
								rect = staticRect.moveToBound(rect);
							});
							isRemove = staticRectangleIndexes.some(function (indexOfStatic){
								var staticRect = rectangleList[indexOfStatic];
								return  !!staticRect.and(rect);
							});
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
				return function (rectangle,options){
					var i,opts={
						paddingTopLeft:new Point(5,5),
						paddingBottomRight:new Point(0,0),
						isRemove:true
					}
					for (i in options){
						opts[i] = options[i];
					}
					return function (rectangleList, indexesOfNews){
						var boundRect = typeof rectangle === "function" ? rectangle() : rectangle,
							rectP2 = boundRect.getP2(), i, boundaryPoints = [boundRect.position];
						rectangleList.forEach(function (rect,index){
							var position,isValid = false;
							for(i = 0; i < boundaryPoints.length; i++){
								position = (new Point(boundaryPoints[i].x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y)).add(opts.paddingTopLeft);
								if( isValid = (position.x + rect.size.x < rectP2.x) ){
									break;
								}
							}
							if(!isValid){
								position = (new Point(boundRect.position.x,boundaryPoints[boundaryPoints.length-1].y)).add(opts.paddingTopLeft);
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
				return function (rectangle,options){
					var paddingTopNegRight,paddingBottomNegLeft,i,opts={
						paddingTopRight:new Point(5,5),
						paddingBottomLeft:new Point(0,0),
						isRemove:true
					}
					for (i in options) opts[i] = options[i];
					paddingTopNegRight = new Point(-opts.paddingTopRight.x,opts.paddingTopRight.y);
					paddingBottomNegLeft = new Point(-opts.paddingBottomLeft.x,opts.paddingBottomLeft.y);
					return function (rectangleList, indexesOfNews){
						var boundRect = typeof rectangle === "function" ? rectangle() : rectangle,
							i, boundaryPoints = [boundRect.getP2()];
						rectangleList.forEach(function (rect,index){
							var position,isValid = false;
							for(i = 0; i < boundaryPoints.length; i++){
								position = (new Point(boundaryPoints[i].x - rect.size.x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y)).add(paddingTopNegRight);
								if( isValid = (position.x > rect.position.x)){
									break;
								}
							}
							if(!isValid){
								position = new Point(boundRect.getP2().x,boundaryPoints[boundaryPoints.length-1].y);
							}
							rect.position = position;
							if(opts.isRemove && rect.getP4().y > boundRect.getP4().y){
								rect.isRemove = true;
							}
							boundaryPoints = mathPoint.addPointToBoundPoints(boundaryPoints, rect.getP4().add(paddingBottomNegLeft), true);
						});
						return rectangleList;
					};
				};
		}
	},

	SortingFactory = function (type){
		switch(type){
			case positionType.notCrossing:
				return function (){
					return function (oldObjsList,newObjs,indexOfNews ){
						return oldObjsList.concat(newObjs);
						utils.range(oldObjsList.length,newObjs.length)
					};
				};
			case positionType.floatLeft:
			case positionType.floatRight:
				return function(radius,getLength,options){
					var i,opts={
						getPosition:function(obj){ return obj.position;}
					}
					for (i in options) opts[i] = options[i];
					return function (oldObjsList,newObjs,indexOfNews){
						var newList = oldObjsList.concat(),listOldPosition;
						listOldPosition = oldObjsList.map(opts.getPosition);
						newObjs.forEach(function(newObj){
							var index = mathPoint.indexOfNearPoint(listOldPosition,opts.getPosition(newObj),radius,getLength);
							if(index == -1){
								index = newList.length;
							}else{
								index = newList.indexOf(oldObjsList[index]);
							}
							newList.splice(index,0,newObj);
						});
						newObjs.forEach(function(newObj){
							indexOfNews.push(newList.indexOf(newObj));
						});
						return newList;
					};
				};
		}
	};

	MultiDrag = MultiDrag || {};
	MultiDrag.positionType = positionType;
	MultiDrag.SortingFactory = SortingFactory;
	MultiDrag.positionFactory = positionFactory;
	window.MultiDrag = MultiDrag;
})(window, window.MultiDrag);
'use strict';
import {mathPoint} from './point'

function boundToRectangle(rectangle) {
    return function (point, size){
        var calcPoint = point.clone(),
            rectP2 = rectangle.getP3();

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
}

function boundToElement(element, parent) {
    var bound,
        retFunc = function(){
            return bound.apply(this, arguments)
        };

    retFunc.refresh = function(){
        bound = boundToRectangle(mathPoint.createRectangleFromElement(element, parent))
    }
    retFunc.refresh();
    return retFunc;
}

function boundToLineX(x, startY, endY) {
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
}

function boundToLineY(y, startX, endX) {
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
}

function boundToLine(start, end) {
    var alpha = Math.atan2(end.y - start.y, end.x - start.x),
        beta = alpha + Math.PI / 2,
        someK = 10,
        cosBeta = Math.cos(beta),
        sinBeta = Math.sin(beta);

    return function (point, size){
        var point2 = new Point(point.x + someK * cosBeta, point.y + someK * sinBeta),
            pointCrossing = mathPoint.directCrossing(start, end, point, point2),
            newEnd = mathPoint.getPointInLineByLenght(end, start, size.x);

        pointCrossing = mathPoint.boundToLine(start, newEnd, pointCrossing);
        return pointCrossing;
    };
}

function boundToCircle(center, radius){
    return function (point, size){
        var boundedPoint = mathPoint.getPointInLineByLenght(center, point, radius);
        return boundedPoint;
    };
};

function boundToArc(center, radius, startAgle, endAngle) {
    return function (point, size){
        var boundStartAngle = typeof startAgle === "function" ? startAgle() : startAgle,
            boundEndtAngle = typeof startAgle === "function" ? endAngle() : endAngle,
            angle = mathPoint.getAngle(center, point);

        angle = mathPoint.normalizeAngle(angle);
        angle = mathPoint.boundAngle(boundStartAngle, boundEndtAngle, angle);
        return mathPoint.getPointFromRadialSystem(angle, radius, center);
    };
}

bound = {
    toRectangle: boundToRectangle,
    toElement: boundToElement,
    toLineX: boundToLineX,
    toLineY: boundToLineY,
    toLine: boundToLine,
    toCircle: boundToCircle,
    toArc: boundToArc
}

export {bound};

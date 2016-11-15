/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

'use strict';

var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );
;(function(){
    'use strict';
    var Dragee = window.Dragee || {}, util;

    util = {
        getDefaultParent: function (element){
            var parent = element.parentNode;
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
        getTouchByID: function(element, touchId){
            var i;
            for(i = 0; i < element.changedTouches.length; i++){
                if(element.changedTouches[i].identifier === touchId){
                    return element.changedTouches[i];
                }
            }
            return false;
        },
        getSumValueOfStyleRule: function(element, rules){
            return rules.reduce(function(sum, rule){
                return sum + parseInt(window.getComputedStyle(element)[rule]||0);
            }, 0);
        },
        appendFirstChild: function(element, node){
            element.firstChild ? element.insertBefore(node, element.firstChild) : element.appendChild(node);
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
        setStyle: function(element, style){
            style = style || {};
            var cssText = "", key;
            for(key in style){
                if(style.hasOwnProperty(key)){
                    cssText += key + ": " + style[key] + "; ";
                }
            }

            element.style.cssText = cssText;
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
                    var args = [].slice.call(arguments), 
                        i, retValue, fs = options.isReverse ? funcs.slice().reverse() : funcs;

                    for(i = 0; i < fs.length; i++){
                        retValue = fs[i].apply(options.context, args);
                        if(options.isStopOnTrue && retValue){
                            return true;
                        }
                    }
                    return !options.isStopOnTrue;
                },
                add: function(f){
                    funcs.push(f);
                },
                unshift: function(f){
                    funcs.unshift(f);
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
        randomColor:function(){
            var rnd = function(){
                    return Math.round(Math.random()*255);
                },
                toHexString = function(digit){
                    var str = digit.toString(16);
                    while(str.length < 2){
                        str = "0" + str;
                    }
                    return str;
                },
                red = rnd(),
                green = rnd(),
                blue = rnd();

            return "#" + toHexString(red) + toHexString(green) + toHexString(blue);
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

    Dragee.util = util;
    window.Dragee = Dragee;
})();;clone = function (o) {
    function c(o) {
        for (var i in o) {
            this[i] = o[i];
        }
    }
    return new c(o);
}


/************ Array **************/

if (!Array.prototype.forEach){
    Array.prototype.forEach = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t)
                fun.call(thisp, t[i], i, t);
        }
    };
}

if (!Array.prototype.filter){
    Array.prototype.filter = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t){
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }
        return res;
    };
}

if (!Array.prototype.every){
        Array.prototype.every = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
        throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t && !fun.call(thisp, t[i], i, t))
                return false;
        }
        return true;
    };
}

if (!Array.prototype.map){
    Array.prototype.map = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = new Array(len);
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t)
                res[i] = fun.call(thisp, t[i], i, t);
        }
        return res;
    };
}

if (!Array.prototype.some){
    Array.prototype.some = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t && fun.call(thisp, t[i], i, t))
                return true;
        }
        return false;
    };
}

if (!Array.prototype.removeItem){
    Array.prototype.removeItem = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === val) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    }
}

/*********** HTMLElement ***************/
Element.prototype.hasClass = function(c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    return (re.test(this.className));
}
    
Element.prototype.addClass = function(c){
    if (this.hasClass(c)) return this;
    this.className = (this.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    return this;
}

Element.prototype.removeClass = function(c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    this.className = this.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    return this;
}

HTMLElement.prototype.appbeginChild = function(node) {
    this.firstChild ? this.insertBefore(node, this.firstChild) : this.appendChild(node);
}

HTMLElement.prototype.exchange = function(refNode) {
    var tempParentNode = refNode.parentNode;
    var tempBeforeNode = refNode.nextElementSibling;
    this.parentNode.insertBefore(refNode,this);
    if(tempBeforeNode)
        tempParentNode.insertBefore(this,tempBeforeNode);
    else
        tempParentNode.appendChild(this);
    
    return refNode;
}

var fullOffset = function(element, axis, parent_id){    
    var tor = 0;
    while((element) && (element.id!=parent_id)){  //&& (element!="")
        if( axis == "x" )
        {
            if(element.offsetLeft)
                tor += element.offsetLeft;
        }
        if( axis == "y" )
        {
            if(element.offsetTop)
                tor += element.offsetTop;
        }
            element = element.parentNode;
    }
    return tor;
}

/*********************** 00P *************************/
var extend = function(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

var augment = function(receivingClass, givingClass) {
    /* only provide certain methods */
    if (arguments[2]) {
        for (var i=2, len=arguments.length; i<len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    /* provide all methods*/
    else {
        for (methodName in givingClass.prototype) {
            /* check to make sure the receiving class doesn't
               have a method of the same name as the one currently
               being processed */
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
/**************************************************/
augment(NodeList,Array,'forEach');

/**************************************************/
Math.getNearIndex = function(arr, val){
    var delta = Math.abs(arr[0] - val);
    var index = 0;
    for(var i=0; i<arr.length; i++){
        var temp = Math.abs(arr[i] - val);
        if(temp<delta){
            delta = temp;
            index = i;
        }
    }
    return index; 
}

Math.getNearIndexWithCaptureRadius = function(arr, radius, val){
    var delta=Math.abs(arr[0]-val);
    var index=0;
    for(var i=0;i<arr.length;i++){
        var temp=Math.abs(arr[i]-val);
        if(temp<delta){
            delta=temp;
            index=i;
        }
    }
    if(delta>radius){
        return -1;
    }
    return index; 
}

Math.bound = function(min, max, val){
    //console.log(min,max,val)
    return Math.max(min,Math.min(max,val)); 
}
Math.boundPoint = function(min, max, val){
    var x = Math.max(min.x, Math.min(max.x, val.x)); 
    var y = Math.max(min.y, Math.min(max.y, val.y)); 
    return new Point(x, y);
}
Math.getLength = function(p1, p2){
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;    
    return Math.sqrt(dx*dx + dy*dy);
}

Math.toRadian = function(angle){
    return ((angle % 361) * Math.PI / 180);
}
/********************************************/

String.prototype.substrend = function(length) {
    return this.substr(0, this.length - length);
}
/********************************************/

function XmlHttpRequest() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp == null) {
        alert("Your browser does not support XMLHTTP.");
    }
    return xmlhttp;
}

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

try {
    if(!Object.prototype.__defineGetter__ &&
    Object.defineProperty({}, "x", { get: function() { return true } }).x) {
        Object.defineProperty(Object.prototype, "__defineGetter__",
     { enumerable: false, configurable: true,
        value: function(name, func) {
            Object.defineProperty(this, name,
             { get: func, enumerable: true, configurable: true });
        } 
     });
        Object.defineProperty(Object.prototype, "__defineSetter__",
     { enumerable: false, configurable: true,
        value: function(name, func) {
            Object.defineProperty(this, name,
             { set: func, enumerable: true, configurable: true });
        } 
     });
    }
} catch(defPropException) { /*Do nothing if an exception occurs*/ };;(function(){
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
	Rectangle.prototype.includePoint = function(p){
		return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
	};
	Rectangle.prototype.includeRectangle = function(rectangle){
		return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
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
        boundOnSegment: function(LP1, LP2, P){
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
        boundOnLine: function(A, B, P){
            var AP = new Point(P.x - A.x, P.y - A.y),
                AB = new Point(B.x - A.x, B.y - A.y),
                ab2 = AB.x * AB.x + AB.y * AB.y,
                ap_ab = AP.x * AB.x + AP.y * AB.y,
                t = ap_ab/ab2;
            return new Point(A.x + AB.x * t, A.y + AB.y * t);
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
                width += Dragee.util.getSumValueOfStyleRule(el, ["padding-left", "padding-right", "border-left-width", "border-right-width"]);
                height += Dragee.util.getSumValueOfStyleRule(el, ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"]);
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
        },
        distance: function(P1, P2){
          var xs = 0;
          var ys = 0;

          xs = P2.x - P1.x;
          xs = xs * xs;

          ys = P2.y - P1.y;
          ys = ys * ys;

          return Math.sqrt( xs + ys );
        }
    };
    window.Point = Point;
    window.Rectangle = Rectangle;
    window.mathPoint = mathPoint;
})();;(function(){
	'use strict';
	var Dragee = window.Dragee || {},
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
				return function(element, parent){
					var bound,
						retFunc = function(){
							return bound.apply(this, arguments);
						};

					retFunc.refresh = function(){
						bound = boundFactory(boundType.rectangle)(
							mathPoint.createRectangleFromElement(element, parent)
						);
					};

					retFunc.refresh();
					return retFunc;
				};
			case boundType.rectangle:
				return function (rectangle){
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
			case boundType.circle:
				return function(center, radius){
					return function (point, size){
						var boundedPoint = mathPoint.getPointInLineByLenght(center,point,radius);
						return boundedPoint;
					};
				};
			case boundType.arc:
				return function(center, radius, startAgle, endAngle){
					return function (point, size){
						var boundStartAngle = typeof startAgle === "function" ? startAgle() : startAgle,
							boundEndtAngle = typeof startAgle === "function" ? endAngle() : endAngle,
							angle = mathPoint.getAngle(center, point);

						angle = mathPoint.normalizeAngle(angle);
						angle = mathPoint.boundAngle(boundStartAngle, boundEndtAngle, angle);
						return mathPoint.getPointFromRadialSystem(angle, radius, center);
					};
				};
		}
	}

	Dragee.boundType = boundType;
	Dragee.boundFactory = boundFactory;
	window.Dragee = Dragee;
})();;(function(){
	'use strict';
	var Dragee = window.Dragee || {},
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
						removable: true
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
							var rect = rectangleList[index], removable = false;
							staticRectangleIndexes.forEach(function(indexOfStatic){
								var staticRect = rectangleList[indexOfStatic];
								rect = staticRect.moveToBound(rect);
							});
							removable = staticRectangleIndexes.some(function(indexOfStatic){
								var staticRect = rectangleList[indexOfStatic];
								return  !!staticRect.and(rect);
							}) || rect.and(boundRect).getSquare() !== rect.getSquare();
							if(removable){
								rect.removable = true;
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
						paddingTopLeft: new Point(0, 0),
						paddingBottomRight: new Point(0, 0),
						yGapBetweenDraggables: 0,
						removable: true
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
								position = (new Point(boundaryPoints[i].x, i > 0 ? (boundaryPoints[i - 1].y + opts.yGapBetweenDraggables) : boundRect.position.y)).add(opts.paddingTopLeft);
								if(isValid = (position.x + rect.size.x < rectP2.x)){
									break;
								}
							}
							if(!isValid){
								position = (new Point(boundRect.position.x, boundaryPoints[boundaryPoints.length - 1].y + opts.yGapBetweenDraggables)).add(opts.paddingTopLeft);
							}
							rect.position = position;
							if(opts.removable && rect.getP3().y > boundRect.getP3().y){
								rect.removable = true;
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
						removable: true
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
							if(opts.removable && rect.getLeftBottomPoint().y > boundRect.getP4().y){
								rect.removable = true;
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
							} else {
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

	Dragee.positionType = positionType;
	Dragee.sortingFactory = sortingFactory;
	Dragee.positionFactory = positionFactory;
	window.Dragee = Dragee;
})();;(function(){
    'use strict';
    var Dragee = window.Dragee || {},
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

    Dragee.events = events;

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
        this.onEnd = Dragee.util.triggerFactory({
            context: this, isReverse: true, isStopOnTrue: true
        });
        this.onMove = Dragee.util.triggerFactory({context: this});
        this.onStart = Dragee.util.triggerFactory({context: this});

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

    Dragee.draggables = draggables;
    Dragee.Draggable = Draggable;
    window.Dragee = Dragee;
})();;(function(){
	'use strict';
	var Dragee = window.Dragee || {}, lists = [];

	function List(draggables, options){
		var i;
		this.options = {
			timeEnd: 200,
			timeExcange: 400,
			radius: 30,
			getLength: mathPoint.getLength(),
			isDisplacement: false
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.draggables = draggables;
		lists.push(this);
		this.onChange = Dragee.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	}

	List.prototype.init = function(){
		this._enable = true;
		this.draggables.forEach(this.initDraggable, this);
	};

	List.prototype.initDraggable = function(draggable){
		var moveHandler, that = this;
		draggable.enable = this._enable;
		if(this.options.isDisplacement){
			moveHandler = function(){
				if(this.isDragee){
					that.onStart(this);
					draggable.onMove.remove(moveHandler);
					return true;
				}
			};
			draggable.onEnd.add(function(){
				that.onEndDisplaycement(this);
				draggable.onMove.add(moveHandler);
				return true;
			});
			draggable.onMove.add(moveHandler);
		}else{
			draggable.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		}
	};

	List.prototype.moveOrSave = function(draggable, position, time){
		if(draggable.isDragee){
			draggable.fixPosition = position;
		}else{
			draggable.move(position, time, true);
		}
	};

	List.prototype.onEnd = function(draggable){
		var fixPositions = this.getCurrentFixPosition(), currentIndex, excangeIndex;
		currentIndex = this.draggables.indexOf(draggable);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			draggable.move(draggable.fixPosition, this.options.timeEnd, true);
		}else{
			this.moveOrSave(this.draggables[excangeIndex], fixPositions[currentIndex], this.options.timeExcange);
			this.draggables[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
			this.onChange.fire();
		}
		return true;
	};

	List.prototype.onEndDisplaycement = function(draggable){
		var currentIndex, i, targetIndex,
			sortedDraggables = this.getSortedDraggables(),
			fixPositions = sortedDraggables.map(function(draggable){
				return draggable.fixPosition;
			});
		currentIndex = sortedDraggables.indexOf(draggable);
		targetIndex = mathPoint.indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getLength);
		if(targetIndex !==-1){
			if(targetIndex < currentIndex){
				for(i=targetIndex; i<currentIndex; i++){
					this.moveOrSave(sortedDraggables[i], fixPositions[i+1], this.options.timeExcange);
				}
			} else {
				for(i=currentIndex; i<targetIndex; i++){
					this.moveOrSave(sortedDraggables[i+1], fixPositions[i], this.options.timeExcange);
				}
			}
			draggable.move(fixPositions[targetIndex], this.options.timeEnd, true);
		} else {
			draggable.move(draggable.fixPosition, this.options.timeEnd, true);
		}
	};

	List.prototype.onStart = function(draggable){
		var currentIndex,i,
			sortedDraggables = this.getSortedDraggables(),
			fixPositions = sortedDraggables.map(function(draggable){
				return draggable.fixPosition;
			});

		currentIndex = sortedDraggables.indexOf(draggable);
		for(i = currentIndex + 1; i < sortedDraggables.length; i++){
			this.moveOrSave(sortedDraggables[i],fixPositions[i-1],this.options.timeExcange);
		}
		sortedDraggables[currentIndex].fixPosition = fixPositions[i-1];
	};



	List.prototype.getCurrentFixPosition = function(){
		return this.draggables.map(function(draggable){
			return draggable.fixPosition.clone();
		});
	};

	List.prototype.getSortedDraggables = function(){
		var sortedDraggables,
			initPositions = this.draggables.map(function(draggable){
				return draggable.initPosition;
			});
		sortedDraggables = initPositions.map(function(position){
			return this.draggables.filter(function(draggable){
				return draggable.fixPosition.compare(position);
			},this)[0];
		},this);
		return sortedDraggables;
	};

	List.prototype.reset = function(){
		this.draggables.forEach(function(draggable){
			draggable.move(draggable.initPosition, 0, true, false);
		});
	};

	List.prototype.refresh = function(){
		this.draggables.forEach(function(draggable){
			draggable.refresh();
		});
	};

	List.prototype.add = function(draggables){
		var that = this;
		if(!(draggables instanceof Array)){
			draggables = [draggables];
		}
		draggables.forEach(this.initDraggable, this);
		this.draggables = this.draggables.concat(draggables);
	};

	List.prototype.remove = function(draggables){
		var j, initPositions = this.draggables.map(function(draggable){
				return draggable.initPosition;
			}),
			list = [],
			sortedDraggables = this.getSortedDraggables();
		if(!(draggables instanceof Array)){
			draggables = [draggables];

		}
		draggables.forEach(function(draggable){
			draggable.onEnd.reset();
			draggable.onMove.reset();//todo remove reset in future
			this.draggables.removeItem(draggable);
			Dragee.util.remove(this.draggables, draggable);
		}, this);
		j = 0;
		sortedDraggables.forEach(function(draggable, i){
			if(this.draggables.indexOf(draggable) !== -1){
				if(draggable.fixPosition !== initPositions[j]){
					draggable.move(initPositions[j], this.options.timeExcange, true);
				}
				draggable.initPosition = initPositions[j];
				j++;
				list.push(draggable);
			}
		}, this);
		this.draggables = list;
	};

	List.prototype.clear = function(){
		this.remove(this.draggables.slice());
	};

	List.prototype.destroy = function(){
		this.draggables.forEach(function(draggable){
			draggable.destroy();
		});
	};

	List.prototype.__defineGetter__("positions", function(){
		return this.getCurrentFixPosition();
	});

	List.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.draggables.length){
			positions.forEach(function(point, i){
				this.draggables[i].move(point, 0, true, true);
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
		this.draggables.forEach(function(draggable){
			draggable.enable = value;
		});
	});


	function listFactory(parentElement, elements, options){
		var draggables, draggableOptions, listOptions;
		options = options || {};
		draggableOptions = options.draggable || {};
		listOptions = options.list || {};
		draggableOptions.parent = draggableOptions.parent || parentElement;
		elements = Array.prototype.slice.call(elements);

		draggables = elements.map(function(element){
			return new Dragee.Draggable(element, draggableOptions);
		});

		return new List(draggables, listOptions);
	}

	Dragee.lists = lists;
	Dragee.List = List;
	Dragee.listFactory = listFactory;
	window.Dragee = Dragee;
})();;(function(){
	'use strict';
	var Dragee = window.Dragee || {};

	function ListSwitcher(draggables, options){
		options = options || {};
		options.stepOn = options.stepOn || new Point(-50, 0);
		Dragee.List.call(this, draggables, options);
	}

	extend(ListSwitcher, Dragee.List);

	ListSwitcher.prototype.init = function(){
		var that = this;
		this.draggables.forEach(function(draggable){
			draggable.isOn = false;
			draggable.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		});
	};

	ListSwitcher.prototype.onEnd = function(draggable){
		var fixPositions = this.getCurrentFixPositionWithOff(), currentIndex, excangeIndex;
		currentIndex = this.draggables.indexOf(draggable);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd);
		} else {
			if(this.draggables[excangeIndex].isDragee){
				this.fixToOff(excangeIndex, fixPositions[currentIndex]);
			} else {
				this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
			}
			this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd);
			this.onChange.fire();
		}
		return true;
	};

	ListSwitcher.prototype.moveDraggable = function(index, position, fixOffPosition, time){
		var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)], isOn = mathPoint.indexOfNearPoint(positions, position, -1, mathPoint.getLength({x: true}));
		if(this.draggables[index].isOn !== !!isOn){
			this.draggables[index].isOn = !!isOn;
			this.onChange.fire();
		}
		this.draggables[index].move(positions[isOn], time, true);
	};

	ListSwitcher.prototype.fixToOff = function(index, fixOffPosition){
		this.draggables[index].isOn = false;
		this.draggables[index].fixPosition = fixOffPosition;
	};

	ListSwitcher.prototype.moveDraggableToOff = function(index, fixOffPosition, time){
		this.draggables[index].isOn = false;
		this.draggables[index].move(fixOffPosition, time, true);
	};

	ListSwitcher.prototype.getCurrentFixPositionWithOff = function(){
		return this.draggables.map(function(draggable){
			return draggable.isOn ? draggable.fixPosition.sub(this.options.stepOn) : draggable.fixPosition.clone();
		}, this);
	};

	ListSwitcher.prototype.getSortedDraggables = function(){
		return this.draggables.map(
				function(draggable){
					return draggable.initPosition;
				}).map(function(position){
					return this.draggables.filter(function(draggable){
						return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(this.options.stepOn));
					}, this)[0];
				}, this);
	};

	ListSwitcher.prototype.reset = function(){
		this.draggables.forEach(function(draggable){
			draggable.move(draggable.initPosition, 0, true, false);
			draggable.isOn = false;
		});
	};

	ListSwitcher.prototype.__defineGetter__("positions", function(){
		return this.draggables.map(function(draggable){
			var position = draggable.fixPosition.clone();
			position.isOn = draggable.isOn;
			return position;
		});
	});

	ListSwitcher.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.draggables.length){
			positions.forEach(function(point, i){
				this.draggables[i].isOn = point.isOn;
				this.draggables[i].move(point, 0, true, true);
			}, this);
		} else {
			alert(message);
			throw message;
		}
	});


	 function listSwitcherFactory(element, draggableElements, options){
		var draggables, draggableOptions, listOptions;
		options = options || {};
		draggableOptions = options.draggable || {};
		listOptions = options.list || {};
		draggableOptions.parent = draggableOptions.parent || element;
		draggableElements = Array.prototype.slice.call(draggableElements);

		draggables = draggableElements.map(function(element){
			return new Dragee.Draggable(element, draggableOptions);
		});
		return new ListSwitcher(draggables, listOptions);
	}

	Dragee = Dragee || {};
	Dragee.ListSwitcher = ListSwitcher;
	Dragee.listSwitcherFactory = listSwitcherFactory;
	window.Dragee = Dragee;
})();;(function(){
	'use strict';
	var Dragee = window.Dragee || {},
		spiders = [];

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
		this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle);
		this.context = this.canvas.getContext("2d");

		this.draggables = elements.map(function (element, i){
			var angle = this.options.angle + i * this.options.dAngle,
				halfSize = mathPoint.getSizeOfElement(element).mult(0.5),
				start = mathPoint.getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
				end = mathPoint.getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
				bound = Dragee.boundFactory(Dragee.boundType.line)(start, end);

			return new Dragee.Draggable(element, {
				parent: this.area, 
				bound: bound, 
				position: start, 
				onMove:function (){
					that.draw();
					return true;
				}
			});

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
		point = this.draggables[0].getCenter();
		this.context.moveTo(point.x, point.y);
		for(i = 0; i < this.draggables.length; i++){
			point = this.draggables[i].getCenter();
			this.context.lineTo(point.x, point.y);
		}
		this.context.closePath();
		this.context.lineWidth = this.options.lineWidth;
		this.context.strokeStyle = this.options.strokeStyle;
		this.context.stroke();
		this.context.fillStyle = this.options.fillStyle;
		this.context.fill();
	}

	Dragee.spiders = spiders;
	Dragee.Spider = Spider;
	window.Dragee = Dragee;
})();;(function(){
	'use strict';

	var Dragee = window.Dragee || {}, targets = [];

	function Target(element, draggables, options){
		options = options || {};
		var i, parent = options.parent || Dragee.util.getDefaultParent(element);
		this.options = {
			timeEnd: 200,
			timeExcange: 400,
			parent: parent,
			sorting: Dragee.sortingFactory(Dragee.positionType.floatLeft)(80, mathPoint.getLength({x: 1, y: 4, isTransformationSpace: true})),
			positioning: Dragee.positionFactory(Dragee.positionType.floatLeft)(this.getRectangle.bind(this), {removable: true})
		};
		for(i in options){
			this.options[i] = options[i];
		}
		targets.push(this);
		this.element = element;
		this.draggables = draggables;
		this.onAdd = Dragee.util.triggerFactory({context: this});
		this.beforeAdd = Dragee.util.triggerFactory({context: this});
		this.onRemove = Dragee.util.triggerFactory({context: this});

		options.onRemove && this.onRemove.add(options.onRemove);
		options.onAdd && this.onAdd.add(options.onAdd);
		options.beforeAdd && this.beforeAdd.add(options.beforeAdd);

		this.init();
	};

	Target.prototype.getRectangle = function(){
		return mathPoint.createRectangleFromElement(
			this.element, 
			this.options.parent, 
			this.options.isContentBoxSize, 
			true
		);
	};

	Target.prototype.catchDraggable = function(draggable){
		if(this.options.catchDraggable) {
			return this.options.catchDraggable(this, draggable);
		} else {
			var targetRectangle = this.getRectangle(), 
				draggableSquare = draggable.getRectangle().getSquare();

			return draggableSquare < targetRectangle.getSquare() 
				&& targetRectangle.includePoint(draggable.getCenter());
		}
	};

	Target.prototype.getPosition = function(){
		return this.getRectangle().position;
	};

	Target.prototype.getSize = function(){
		return this.getRectangle().size;
	};

	Target.prototype.init = function(){
		var rectangles, indexesOfNew;

		this.innerDraggables = this.draggables.filter(function(draggable){
			var element = draggable.element.parentNode;
			while(element){
				if(element === this.element){
					return true;
				}
				element = element.parentNode;
			}
			return false;
		}, this);

		if(this.innerDraggables.length){
			indexesOfNew = Dragee.util.range(this.innerDraggables.length);
			rectangles = this.options.positioning(this.innerDraggables.map(function(draggable){
				return draggable.getRectangle();
			}), indexesOfNew);
			this.setPosition(rectangles, indexesOfNew);
			this.innerDraggables.forEach(function(draggable){
				this.onAdd.fire(draggable);
			}, this);
		}
	};

	Target.prototype.destroy = function(){
		Dragee.targetManagers.forEach(function(targetManager){
			targetManager.targets.removeItem(this);
		}, this);
	}

	Target.prototype.refresh = function(){
		var rectangles = this.options.positioning(this.innerDraggables.map(function(draggable){
			return draggable.getRectangle();
		}), []);
		this.setPosition(rectangles, [], 0);
	};

	Target.prototype.onEnd = function(draggable){
		var newDraggablesIndex = [], 
			rectangles, 
			includePoint = this.getRectangle().includePoint(draggable.getPosition());

		if(!includePoint){
			if(this.getRectangle().includePoint(draggable.getCenter())) {
				draggable.position = draggable.getCenter().clone();
			} else {
				return false;	
			}	
		}

		this.beforeAdd.fire(draggable);

		this.innerDraggables = this.options.sorting(this.innerDraggables, [draggable], newDraggablesIndex);
		rectangles = this.options.positioning(this.innerDraggables.map(function(draggable){
			return draggable.getRectangle();
		}), newDraggablesIndex, draggable);

		this.setPosition(rectangles, newDraggablesIndex);
		if(this.innerDraggables.indexOf(draggable) !== -1){
			this.addRemoveOnMove(draggable);
		}
		return true;
	};

	Target.prototype.setPosition = function(rectangles, indexesOfNew, time){
		this.innerDraggables.slice(0).forEach(function(draggable, i){
			var rect = rectangles[i], 
				that = this, 
				timeEnd = time || time == 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;

			if(rect.removable){
				draggable.move(draggable.initPosition, timeEnd, true, true);
				this.innerDraggables.removeItem(draggable);
				
				this.onRemove.fire(draggable);
			} else {
				draggable.move(rect.position, timeEnd, true, true);
			}
		}, this);
	};

	Target.prototype.add = function(draggable, time){
		var rectangles, newDraggablesIndex = this.innerDraggables.length;

		this.beforeAdd.fire(draggable);

		this.pushInnerDraggable(draggable);
		rectangles = this.options.positioning(this.innerDraggables.map(function(draggable){
			return draggable.getRectangle();
		}), newDraggablesIndex, draggable);
		this.setPosition(rectangles, [newDraggablesIndex], time || 0);
		if(this.innerDraggables.indexOf(draggable) !== -1){
			this.addRemoveOnMove(draggable);
		}
	};

	Target.prototype.pushInnerDraggable = function(draggable){
		if(this.innerDraggables.indexOf(draggable)===-1){
			this.innerDraggables.push(draggable);
		}
	};

	Target.prototype.addRemoveOnMove = function(draggable){
		var that = this;

		draggable.onMove.add(this.removeHandler = function(){
			that.remove(draggable)
		});

		this.onAdd.fire(draggable);
	};

	Target.prototype.remove = function(draggable){
		var index, rectangles;
		draggable.onMove.remove(this.removeHandler);

		index = this.innerDraggables.indexOf(draggable);
		if(index === -1){
			return;
		}

		this.innerDraggables.splice(index, 1);

		rectangles = this.options.positioning(this.innerDraggables.map(function(draggable){
			return draggable.getRectangle();
		}), []);

		this.setPosition(rectangles, []);
		this.onRemove.fire(draggable);
	};

	Target.prototype.reset = function(){
		this.innerDraggables.forEach(function(draggable){
			draggable.move(draggable.initPosition, 0, true, true);
			this.onRemove.fire(draggable);
		}, this);
		this.innerDraggables = [];
	};

	Target.prototype.getSortedDraggables = function(){
		this.innerDraggables.slice();
	}

	Dragee.targets = targets;
	Dragee.Target = Target;
	window.Dragee = Dragee;
})();;(function(){
	'use strict';
	var Dragee = window.Dragee || {},
		targetManagers = [];

	function TargetManager(element, draggables, targets, options){
		var i;
		this.element = element;
		this.draggables = draggables;
		this.targets = targets;
		targetManagers.push(this);
		this.options = {
			timeEnd: 400,
			timeWaitForRefresh: 500
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.onChange = Dragee.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	}

	TargetManager.prototype.init = function(){
		var that = this;
		this.draggables.forEach(function(draggable){
			draggable.onEnd.add(function(){
				return that.onEnd(this);
			});
		});
	};

	TargetManager.prototype.addDraggable = function(draggable){
		var that = this;

		this.draggables.push(draggable);
		draggable.onEnd.unshift(function(){
			return that.onEnd(this);
		});
	};

	TargetManager.prototype.onEnd = function(draggable){
		var shotTargets = this.targets.filter(function(target){
			return target.draggables.indexOf(draggable) !== -1;
		}).filter(function(target){
			return target.catchDraggable(draggable);
		}).sort(function(a, b){
			return a.getRectangle().getSquare() - b.getRectangle().getSquare();
		});

		if(shotTargets.length){
			shotTargets[0].onEnd(draggable);
		}else{
			draggable.move(draggable.initPosition, this.options.timeEnd, true, true);
		}
		this.onChange.fire();
		return true;
	};

	TargetManager.prototype.reset = function(){
		this.targets.forEach(function(target){
			target.reset();
		});
	};

	TargetManager.prototype.refresh = function(){
		this.draggables.forEach(function(draggable){
			draggable.refresh();
		});
		this.targets.forEach(function(target){
			target.refresh();
		});
	};

	TargetManager.prototype.__defineGetter__("positions", function(){
		return this.targets.map(function(target){
			return target.innerDraggables.map(function(draggable){
				return this.draggables.indexOf(draggable);
			}, this);
		}, this);
	});

	TargetManager.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.targets.length){
			this.targets.forEach(function(target){
				target.reset();
			}, this);
			positions.forEach(function(targetIndexes, i){
				targetIndexes.forEach(function(index){
					this.targets[i].add(this.draggables[index]);
				}, this);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});

	function targetManagerFactory(element, draggableElements, targetElements, options){
		var draggables, targets, draggableOptions, targetOptions, managerOptions;
		options = options || {};
		draggableOptions = options.draggable || {};
		targetOptions = options.target || {};
		managerOptions = options.manager || {};
		draggableOptions.parent = draggableOptions.parent || element;
		targetOptions.parent = targetOptions.parent || element;
		draggableElements = Array.prototype.slice.call(draggableElements);
		targetElements = Array.prototype.slice.call(targetElements);

		draggables = draggableElements.map(function(element){
			return new Dragee.Draggable(element, draggableOptions);
		});

		targets = targetElements.map(function(el){
			return new Dragee.Target(element, draggables, targetOptions);
		});
		return new TargetManager(element, draggables, targets, managerOptions);
	}

	Dragee.targetManagers = targetManagers;
	Dragee.TargetManager = TargetManager;
	Dragee.targetManagerFactory = targetManagerFactory;
	window.Dragee = Dragee;
})();
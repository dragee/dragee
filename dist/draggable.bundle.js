(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Dragee", [], factory);
	else if(typeof exports === 'object')
		exports["Dragee"] = factory();
	else
		root["Dragee"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/draggable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/desandro-get-style-property/get-style-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/desandro-get-style-property/get-style-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
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
if ( true ) {
  // AMD
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return getStyleProperty;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})( window );


/***/ }),

/***/ "./src/bound.js":
/*!**********************!*\
  !*** ./src/bound.js ***!
  \**********************/
/*! exports provided: bound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound", function() { return bound; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");





function boundToRectangle(rectangle) {
  return function (point, size) {
    var calcPoint = point.clone(),
        rectP2 = rectangle.getP3();

    if (rectangle.position.x > calcPoint.x) {
      calcPoint.x = rectangle.position.x;
    }

    if (rectangle.position.y > calcPoint.y) {
      calcPoint.y = rectangle.position.y;
    }

    if (rectP2.x < calcPoint.x + size.x) {
      calcPoint.x = rectP2.x - size.x;
    }

    if (rectP2.y < calcPoint.y + size.y) {
      calcPoint.y = rectP2.y - size.y;
    }

    return calcPoint;
  };
}

function boundToElement(element, parent) {
  var retFunc = function retFunc() {
    return bound.apply(this, arguments);
  };

  var bound;

  retFunc.refresh = function () {
    bound = boundToRectangle(_geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].createRectangleFromElement(element, parent));
  };

  retFunc.refresh();
  return retFunc;
}

function boundToLineX(x, startY, endY) {
  return function (point, size) {
    var calcPoint = point.clone();
    calcPoint.x = x;

    if (startY > calcPoint.y) {
      calcPoint.y = startY;
    }

    if (endY < calcPoint.y + size.y) {
      calcPoint.y = endY - size.y;
    }

    return calcPoint;
  };
}

function boundToLineY(y, startX, endX) {
  return function (point, size) {
    var calcPoint = point.clone();
    calcPoint.y = y;

    if (startX > calcPoint.x) {
      calcPoint.x = startX;
    }

    if (endX < calcPoint.x + size.x) {
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
  return function (point, size) {
    var point2 = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](point.x + someK * cosBeta, point.y + someK * sinBeta),
        newEnd = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointInLineByLenght(end, start, size.x);
    var pointCrossing = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].directCrossing(start, end, point, point2);
    pointCrossing = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].boundToLine(start, newEnd, pointCrossing);
    return pointCrossing;
  };
}

function boundToCircle(center, radius) {
  return function (point, _size) {
    var boundedPoint = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointInLineByLenght(center, point, radius);
    return boundedPoint;
  };
}

function boundToArc(center, radius, startAgle, endAngle) {
  return function (point, _size) {
    var boundStartAngle = typeof startAgle === 'function' ? startAgle() : startAgle;
    var boundEndtAngle = typeof startAgle === 'function' ? endAngle() : endAngle;
    var angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getAngle(center, point);
    angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].normalizeAngle(angle);
    angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].boundAngle(boundStartAngle, boundEndtAngle, angle);
    return _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointFromRadialSystem(angle, radius, center);
  };
}

var bound = {
  toRectangle: boundToRectangle,
  toElement: boundToElement,
  toLineX: boundToLineX,
  toLineY: boundToLineY,
  toLine: boundToLine,
  toCircle: boundToCircle,
  toArc: boundToArc
};


/***/ }),

/***/ "./src/draggable.js":
/*!**************************!*\
  !*** ./src/draggable.js ***!
  \**************************/
/*! exports provided: Draggable, draggables, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggables", function() { return draggables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! desandro-get-style-property */ "./node_modules/desandro-get-style-property/get-style-property.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scope */ "./src/scope.js");








var Dragee = {
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var isTouch = 'ontouchstart' in window,
    mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
},
    touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
},
    events = isTouch ? touchEvents : mouseEvents,
    draggables = [],
    preventDoubleInit = function preventDoubleInit(draggable) {
  var message = "for this element Dragee.Draggable is already exist, don't create it twice ";

  if (draggables.some(function (existing) {
    return draggable.element === existing.element;
  })) {
    throw message;
  }

  draggables.push(draggable);
},
    addToDefaultScope = function addToDefaultScope(draggable) {
  _scope__WEBPACK_IMPORTED_MODULE_5__["defaultScope"].addDraggable(draggable);
},
    transformProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transform'),
    transitionProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transition');

function Draggable(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var that = this;
  var parent = options.parent || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDefaultParent"])(element);
  this.targets = [];
  this.options = Object.assign({
    parent: parent,
    bound: Dragee.bound.toElement(parent, parent),
    startFilter: false,
    isContentBoxSize: false,
    position: false
  }, options);
  this.onEnd = new Dragee.Event(this, {
    isReverse: true,
    isStopOnTrue: true
  });
  this.onMove = new Dragee.Event(this);
  this.onStart = new Dragee.Event(this);
  this.onEnd.add(function () {
    this.move(this.position, 0, true, true);
  });

  if (options.onEnd) {
    this.onEnd.add(options.onEnd);
  }

  if (options.onMove) {
    this.onMove.add(options.onMove);
  }

  if (options.onStart) {
    this.onStart.add(options.onStart);
  }

  this.element = element;
  this.bound = this.options.bound;
  preventDoubleInit(this);
  Draggable.onCreate.fire(this);
  that.init();
}

Draggable.onCreate = new Dragee.Event(Draggable, {
  isReverse: true,
  isStopOnTrue: true
});
Draggable.onCreate.add(addToDefaultScope);

Draggable.prototype.init = function () {
  this._enable = true;
  this.offset = _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getOffset(this.element, this.options.parent, true);
  this.fixPosition = this.offset;
  this.position = this.offset;

  if (this.options.position) {
    this.initPosition = this.options.position;
    this.move(this.initPosition, 0, true, true);
  } else {
    this.initPosition = this.offset;
  }

  this._dragStart = this.dragStart.bind(this);
  this._dragMove = this.dragMove.bind(this);
  this._dragEnd = this.dragEnd.bind(this);
  this.element.addEventListener(touchEvents.start, this._dragStart);
  this.element.addEventListener(mouseEvents.start, this._dragStart);

  if (this.bound.refresh) {
    this.bound.refresh();
  }
};

Draggable.prototype.reinit = function () {
  this.offset = _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getOffset(this.element, this.options.parent, true);
  this.fixPosition = this.offset;
  this.position = this.offset;

  if (this.options.position) {
    this.initPosition = this.options.position;
    this.move(this.initPosition, 0, true, true);
  } else {
    this.initPosition = this.offset;
  }

  if (this.bound.refresh) {
    this.bound.refresh();
  }
};

Draggable.prototype.getSize = function (_recalulate) {
  return _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getSizeOfElement(this.element, this.options.isContentBoxSize);
};

Draggable.prototype.getPosition = function () {
  this.position = this.offset.add(this._transformPosition || new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](0, 0));
  return this.position;
};

Draggable.prototype.getCenter = function () {
  return this.position.add(this.getSize().mult(0.5));
};

Draggable.prototype._setTranslate = function (point) {
  this._transformPosition = point;
  var transform = this.element.style[transformProperty],
      translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)';
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie) {
    translateCss = ' translate(' + point.x + 'px,' + point.y + 'px)';

    if (!/translate\([^)]+\)/.test(transform)) {
      transform += translateCss;
    } else {
      transform = transform.replace(/translate\([^)]+\)/, translateCss);
    }
  } else {
    if (!/translate3d\([^)]+\)/.test(transform)) {
      transform += translateCss;
    } else {
      transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
    }
  }

  this.element.style[transformProperty] = transform;
};

Draggable.prototype.move = function (point, time, isFix, isSilent) {
  time = time || 0;
  point = point.clone();

  if (isFix) {
    this.fixPosition = point;
  }

  this.determineDirection(point);
  this.position = point;

  if (transitionProperty) {
    this.element.style[transitionProperty] = time + 'ms';
  }

  this._setTranslate(point.sub(this.offset));

  if (!isSilent) {
    this.onMove.fire();
  }
};

Draggable.prototype.refreshPosition = function () {
  this.setPosition(this.getPosition());
};

Draggable.prototype.setPosition = function (point) {
  point = point.clone();
  this.position = point;

  if (transitionProperty) {
    this.element.style[transitionProperty] = '0ms';
  }

  this._setTranslate(point.sub(this.offset));
};

Draggable.prototype.setZeroTransition = function () {
  if (transitionProperty) {
    this.element.style[transitionProperty] = '0ms';
  }
};

Draggable.prototype.determineDirection = function (point) {
  this.leftDirection = this.position.x < point.x;
  this.rightDirection = this.position.x > point.x;
  this.upDirection = this.position.y > point.y;
  this.downDirection = this.position.y < point.y;
};

Draggable.prototype.dragStart = function (event) {
  this.currentEvent = event;

  if (!this._enable || this.options.startFilter && !this.options.startFilter(event)) {
    return;
  }

  var isTouchEvent = isTouch && event instanceof window.TouchEvent;
  this._startTouchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
  this._startPosition = this.getPosition();

  if (isTouchEvent) {
    this._touchId = event.changedTouches[0].identifier;
  }

  event.stopPropagation();

  if (!(event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement)) {
    event.preventDefault();
  } else {
    event.target.focus();
  }

  document.addEventListener(touchEvents.move, this._dragMove);
  document.addEventListener(mouseEvents.move, this._dragMove);
  document.addEventListener(touchEvents.end, this._dragEnd);
  document.addEventListener(mouseEvents.end, this._dragEnd);
  this.isDragee = true;
  this.onStart.fire(event);
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'active');
  this.onMove.fire(event);
};

Draggable.prototype.dragMove = function (event) {
  this.currentEvent = event;
  var touch;
  var isTouchEvent = isTouch && event instanceof window.TouchEvent;

  if (isTouchEvent) {
    touch = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTouchByID"])(event, this._touchId);

    if (!touch) {
      return;
    }
  }

  event.stopPropagation();
  event.preventDefault();
  var touchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

  var point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));

  point = this.bound(point, this.getSize());
  this.touchPoint = touchPoint;
  this.move(point, 0);
};

Draggable.prototype.dragEnd = function (event) {
  var isTouchEvent = isTouch && event instanceof window.TouchEvent;
  var touch;

  if (isTouchEvent && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTouchByID"])(event, this._touchId)) {
    return;
  }

  event.stopPropagation();
  event.preventDefault();
  this.onEnd.fire(event);
  document.removeEventListener(touchEvents.move, this._dragMove);
  document.removeEventListener(mouseEvents.move, this._dragMove);
  document.removeEventListener(touchEvents.end, this._dragEnd);
  document.removeEventListener(mouseEvents.end, this._dragEnd);
  this.isDragee = false;
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'active');
};

Draggable.prototype.getRectangle = function () {
  return new _geometry__WEBPACK_IMPORTED_MODULE_4__["Rectangle"](this.position, this.getSize());
};

Draggable.prototype.refresh = function () {
  this.getSize(true);

  if (this.bound.refresh) {
    this.bound.refresh();
  }
};

Draggable.prototype.destroy = function () {
  this.element.removeEventListener(touchEvents.start, this._dragStart);
  this.element.removeEventListener(mouseEvents.start, this._dragStart);
  this.element.removeEventListener(touchEvents.move, this._dragMove);
  this.element.removeEventListener(mouseEvents.move, this._dragMove);
  this.element.removeEventListener(touchEvents.end, this._dragEnd);
  this.element.removeEventListener(mouseEvents.end, this._dragEnd);
  this.onEnd.reset();
  this.onMove.reset();
};

Draggable.prototype.__defineGetter__('enable', function () {
  return this._enable;
});

Draggable.prototype.__defineSetter__('enable', function (enable) {
  if (enable) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'disable');
  } else {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'disable');
  }

  return this._enable = enable;
});



/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function Event(context) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.funcs = [];
  this.context = context;
  this.isReverse = options.isReverse || false;
  this.isStopOnTrue = options.isStopOnTrue || false;
}

Event.prototype.fire = function () {
  var args = [].slice.call(arguments);
  var fs = this.isReverse ? this.funcs.slice().reverse() : this.funcs;
  var retValue;

  for (var i = 0; i < fs.length; i++) {
    retValue = fs[i].apply(this.context, args);

    if (this.isStopOnTrue && retValue) {
      return true;
    }
  }

  return !this.isStopOnTrue;
};

Event.prototype.add = function (f) {
  this.funcs.push(f);
};

Event.prototype.unshift = function (f) {
  this.funcs.unshift(f);
};

Event.prototype.remove = function (f) {
  var index = this.funcs.indexOf(f);

  if (index !== -1) {
    this.funcs.splice(index, 1);
  }
};

Event.prototype.reset = function (_f) {
  this.funcs = [];
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/geometry.js":
/*!*************************!*\
  !*** ./src/geometry.js ***!
  \*************************/
/*! exports provided: Point, Rectangle, Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");



/*********************/

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '{x=' + this.x + ',y=' + this.y + '}';
};

Point.prototype.add = function (p) {
  return new Point(this.x + p.x, this.y + p.y);
};

Point.prototype.sub = function (p) {
  return new Point(this.x - p.x, this.y - p.y);
};

Point.prototype.mult = function (k) {
  return new Point(this.x * k, this.y * k);
};

Point.prototype.negative = function () {
  return new Point(-this.x, -this.y);
};

Point.prototype.compare = function (p) {
  return this.x === p.x && this.y === p.y;
};

Point.prototype.clone = function () {
  return new Point(this.x, this.y);
};
/****************/


function Rectangle(position, size) {
  this.position = position;
  this.size = size;
}

Rectangle.prototype.getP1 = function () {
  return this.position;
};

Rectangle.prototype.getP2 = function () {
  return new Point(this.position.x + this.size.x, this.position.y);
};

Rectangle.prototype.getP3 = function () {
  return this.position.add(this.size);
};

Rectangle.prototype.getP4 = function () {
  return new Point(this.position.x, this.position.y + this.size.y);
};

Rectangle.prototype.getCenter = function () {
  return this.position.add(this.size.mult(0.5));
};

Rectangle.prototype.or = function (rect) {
  var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y)),
      size = new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
  return new Rectangle(position, size);
};

Rectangle.prototype.and = function (rect) {
  var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y)),
      size = new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);

  if (size.x <= 0 || size.y <= 0) {
    return null;
  }

  return new Rectangle(position, size);
};

Rectangle.prototype.includePoint = function (p) {
  return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
};

Rectangle.prototype.includeRectangle = function (rectangle) {
  return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
};

Rectangle.prototype.moveToBound = function (rect, axis) {
  var selAxis, crossRectangle;

  if (axis) {
    selAxis = axis;
  } else {
    crossRectangle = this.and(rect);

    if (!crossRectangle) {
      return rect;
    }

    selAxis = crossRectangle.size.x > crossRectangle.size.y ? 'y' : 'x';
  }

  var thisCenter = this.getCenter();
  var rectCenter = rect.getCenter();
  var sign = thisCenter[selAxis] > rectCenter[selAxis] ? -1 : 1;
  var offset = sign > 0 ? this.position[selAxis] + this.size[selAxis] - rect.position[selAxis] : this.position[selAxis] - (rect.position[selAxis] + rect.size[selAxis]);
  rect.position[selAxis] = rect.position[selAxis] + offset;
  return rect;
};

Rectangle.prototype.getSquare = function () {
  return this.size.x * this.size.y;
};

Rectangle.prototype.styleApply = function (el) {
  el = el || document.querySelector('ind');
  el.style.left = this.position.x + 'px';
  el.style.top = this.position.y + 'px';
  el.style.width = this.size.x + 'px';
  el.style.height = this.size.y + 'px';
};

Rectangle.prototype.growth = function (size) {
  this.size = this.size.add(size);
  this.position = this.position.add(size.mult(-0.5));
};

Rectangle.prototype.getMinSide = function () {
  return Math.min(this.size.x, this.size.y);
};
/*****************/


var Geometry = {
  getDistance: function getDistance(p1, p2) {
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  },
  distance: function distance(p1, p2) {
    return Geometry.getDistance(p1, p2);
  },
  getXDifference: function getXDifference(p1, p2) {
    return Math.abs(p1.x - p2.x);
  },
  getYDifference: function getYDifference(p1, p2) {
    return Math.abs(p1.y - p2.y);
  },
  transformedSpaceDistanceFactory: function transformedSpaceDistanceFactory(options) {
    return function (p1, p2) {
      return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
    };
  },
  indexOfNearPoint: function indexOfNearPoint(arr, val, radius, getDistance) {
    var size,
        index = 0,
        i,
        temp;
    getDistance = getDistance || Geometry.getDistance;

    if (arr.length === 0) {
      return -1;
    }

    size = getDistance(arr[0], val);

    for (i = 0; i < arr.length; i++) {
      temp = getDistance(arr[i], val);

      if (temp < size) {
        size = temp;
        index = i;
      }
    }

    if (radius >= 0 && size > radius) {
      return -1;
    }

    return index;
  },
  bound: function bound(min, max, val) {
    return Math.max(min, Math.min(max, val));
  },
  boundPoint: function boundPoint(min, max, val) {
    var x = Math.max(min.x, Math.min(max.x, val.x));
    var y = Math.max(min.y, Math.min(max.y, val.y));
    return new Point(x, y);
  },
  //Return crossing point of two lines
  directCrossing: function directCrossing(L1P1, L1P2, L2P1, L2P2) {
    var temp, k1, k2, b1, b2, x, y;

    if (L2P1.x === L2P2.x) {
      temp = L2P1;
      L2P1 = L1P1;
      L1P1 = temp;
      temp = L2P2;
      L2P2 = L1P2;
      L1P2 = temp;
    }

    if (L1P1.x === L1P2.x) {
      k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
      b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
      x = L1P1.x;
      y = x * k2 + b2;
      return new Point(x, y);
    } else {
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
  boundToSegment: function boundToSegment(LP1, LP2, P) {
    var x, y;
    x = Geometry.bound(Math.min(LP1.x, LP2.x), Math.max(LP1.x, LP2.x), P.x);

    if (x !== P.x) {
      y = x === LP1.x ? LP1.y : LP2.y;
      P = new Point(x, y);
    }

    y = Geometry.bound(Math.min(LP1.y, LP2.y), Math.max(LP1.y, LP2.y), P.y);

    if (y !== P.y) {
      x = y === LP1.y ? LP1.x : LP2.x;
      P = new Point(x, y);
    }

    return P;
  },
  boundToLine: function boundToLine(A, B, P) {
    var AP = new Point(P.x - A.x, P.y - A.y),
        AB = new Point(B.x - A.x, B.y - A.y),
        ab2 = AB.x * AB.x + AB.y * AB.y,
        ap_ab = AP.x * AB.x + AP.y * AB.y,
        t = ap_ab / ab2;
    return new Point(A.x + AB.x * t, A.y + AB.y * t);
  },
  getPointInLine: function getPointInLine(LP1, LP2, percent) {
    var dx = LP2.x - LP1.x,
        dy = LP2.y - LP1.y;
    return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
  },
  getPointInLineByLenght: function getPointInLineByLenght(LP1, LP2, lenght) {
    var dx = LP2.x - LP1.x,
        dy = LP2.y - LP1.y,
        percent = lenght / Geometry.distance(LP1, LP2);
    return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
  },
  createRectangleFromElement: function createRectangleFromElement(el, parent, isContentBoxSize, isConsiderTranslate) {
    var size = this.getSizeOfElement(el, isContentBoxSize);
    return new Rectangle(this.getOffset(el, parent || el.parentNode, isConsiderTranslate), size);
  },
  getSizeOfElement: function getSizeOfElement(el, isContentBoxSize) {
    var width = parseInt(window.getComputedStyle(el)['width']),
        height = parseInt(window.getComputedStyle(el)['height']);

    if (!isContentBoxSize) {
      width += _util__WEBPACK_IMPORTED_MODULE_0__["default"].getSumValueOfStyleRule(el, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width']);
      height += _util__WEBPACK_IMPORTED_MODULE_0__["default"].getSumValueOfStyleRule(el, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']);
    }

    return new Point(width, height);
  },
  getOffset: function getOffset(el, parent) {
    var elRect = el.getBoundingClientRect(),
        parentRect = parent.getBoundingClientRect();
    return new Point(elRect.left - parentRect.left, elRect.top - parentRect.top);
  },
  getPointFromRadialSystem: function getPointFromRadialSystem(angle, length, center) {
    center = center || new Point(0, 0);
    return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)));
  },
  addPointToBoundPoints: function addPointToBoundPoints(boundpoints, point, isRight) {
    var result = boundpoints.filter(function (bPoint) {
      return bPoint.y > point.y || (isRight ? bPoint.x < point.x : bPoint.x > point.x);
    });

    for (var i = 0; i < result.length; i++) {
      if (point.y < result[i].y) {
        result.splice(i, 0, point);
        return result;
      }
    }

    result.push(point);
    return result;
  },
  getAngle: function getAngle(p1, p2) {
    var diff = p2.sub(p1);
    return this.normalizeAngle(Math.atan2(diff.y, diff.x));
  },
  toRadian: function toRadian(angle) {
    return angle % 360 * Math.PI / 180;
  },
  toDegree: function toDegree(angle) {
    return angle * 180 / Math.PI % 360;
  },
  boundAngle: function boundAngle(min, max, val) {
    var dmin, dmax;

    if (min < max && val > min && val < max) {
      return val;
    } else if (max < min && (val < max || val > min)) {
      return val;
    } else {
      dmin = this.getAngleDiff(min, val);
      dmax = this.getAngleDiff(max, val);

      if (dmin < dmax) {
        return min;
      } else {
        return max;
      }
    }
  },
  getNearestAngle: function getNearestAngle(arr, angle) {
    var i,
        temp,
        diff = Math.PI * 2,
        value;

    for (i = 0; i < arr.length; i++) {
      temp = Geometry.getAngleDiff(arr[i], angle);

      if (diff < temp) {
        diff = temp;
        value = arr[i];
      }
    }

    return value;
  },
  getAngleDiff: function getAngleDiff(alpha, beta) {
    var minAngle = Math.min(alpha, beta),
        maxAngle = Math.max(alpha, beta);
    return Math.min(maxAngle - minAngle, minAngle + Math.PI * 2 - maxAngle);
  },
  normalizeAngle: function normalizeAngle(val) {
    while (val < 0) {
      val += 2 * Math.PI;
    }

    while (val > 2 * Math.PI) {
      val -= 2 * Math.PI;
    }

    return val;
  }
};


/***/ }),

/***/ "./src/positioning.js":
/*!****************************!*\
  !*** ./src/positioning.js ***!
  \****************************/
/*! exports provided: positionType, sortingFactory, positionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionType", function() { return positionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortingFactory", function() { return sortingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionFactory", function() { return positionFactory; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");



var positionType = {
  notCrossing: 0,
  floatLeft: 1,
  floatRight: 2
};

function positionFactory(type) {
  switch (type) {
    case positionType.notCrossing:
      return function (rectangle, _options) {
        return function (rectangleList, indexesOfNews) {
          var boundRect = typeof rectangle === 'function' ? rectangle() : rectangle,
              staticRectangleIndexes = rectangleList.reduce(function (indexes, _rect, index) {
            if (indexesOfNews.indexOf(index) === -1) {
              indexes.push(index);
            }

            return indexes;
          }, []);
          indexesOfNews.forEach(function (index) {
            var rect = rectangleList[index],
                removable = false;
            staticRectangleIndexes.forEach(function (indexOfStatic) {
              var staticRect = rectangleList[indexOfStatic];
              rect = staticRect.moveToBound(rect);
            });
            removable = staticRectangleIndexes.some(function (indexOfStatic) {
              var staticRect = rectangleList[indexOfStatic];
              return !!staticRect.and(rect);
            }) || rect.and(boundRect).getSquare() !== rect.getSquare();

            if (removable) {
              rect.removable = true;
            } else {
              staticRectangleIndexes.push(index);
            }
          });
          return rectangleList;
        };
      };

    case positionType.floatLeft:
      return function (rectangle, options) {
        options = Object.assign({
          paddingTopLeft: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0),
          paddingBottomRight: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0),
          yGapBetweenDraggables: 0,
          removable: true
        }, options);
        return function (rectangleList, _indexesOfNews) {
          var boundRect = typeof rectangle === 'function' ? rectangle() : rectangle;
          var rectP2 = boundRect.getP2();
          var boundaryPoints = [boundRect.position];
          rectangleList.forEach(function (rect) {
            var position,
                isValid = false;

            for (var i = 0; i < boundaryPoints.length; i++) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundaryPoints[i].x, i > 0 ? boundaryPoints[i - 1].y + options.yGapBetweenDraggables : boundRect.position.y).add(options.paddingTopLeft);
              isValid = position.x + rect.size.x < rectP2.x;

              if (isValid) {
                break;
              }
            }

            if (!isValid) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundRect.position.x, boundaryPoints[boundaryPoints.length - 1].y + options.yGapBetweenDraggables).add(options.paddingTopLeft);
            }

            rect.position = position;

            if (options.removable && rect.getP3().y > boundRect.getP3().y) {
              rect.removable = true;
            }

            boundaryPoints = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].addPointToBoundPoints(boundaryPoints, rect.getP3().add(options.paddingBottomRight));
          });
          return rectangleList;
        };
      };

    case positionType.floatRight:
      return function (rectangle, options) {
        options = Object.assing({
          paddingTopRight: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](5, 5),
          paddingBottomLeft: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0),
          removable: true
        }, options);
        var paddingTopNegRight = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-options.paddingTopRight.x, options.paddingTopRight.y);
        var paddingBottomNegLeft = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-options.paddingBottomLeft.x, options.paddingBottomLeft.y);
        return function (rectangleList, _indexesOfNews) {
          var boundRect = typeof rectangle === 'function' ? rectangle() : rectangle;
          var boundaryPoints = [boundRect.getRightTopPoint()];
          rectangleList.forEach(function (rect, _index) {
            var position,
                isValid = false;

            for (var i = 0; i < boundaryPoints.length; i++) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundaryPoints[i].x - rect.size.x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y).add(paddingTopNegRight);
              isValid = position.x > rect.position.x;

              if (isValid) {
                break;
              }
            }

            if (!isValid) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundRect.getP2().x, boundaryPoints[boundaryPoints.length - 1].y);
            }

            rect.position = position;

            if (options.removable && rect.getLeftBottomPoint().y > boundRect.getP4().y) {
              rect.removable = true;
            }

            boundaryPoints = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].addPointToBoundPoints(boundaryPoints, rect.getP4().add(paddingBottomNegLeft), true);
          });
          return rectangleList;
        };
      };
  }
}

function sortingFactory(type) {
  switch (type) {
    case positionType.notCrossing:
      return function () {
        return function (oldObjsList, newObjs, indexOfNews) {
          var objsList = oldObjsList.concat(newObjs);
          newObjs.forEach(function (obj) {
            indexOfNews.push(objsList.indexOf(obj));
          });
          return objsList;
        };
      };

    case positionType.floatLeft:
    case positionType.floatRight:
      return function (radius, getDistance, options) {
        options = Object.assign({
          getPosition: function getPosition(obj) {
            return obj.position;
          }
        }, options);
        return function (oldObjsList, newObjs, indexOfNews) {
          var newList = oldObjsList.concat();
          var listOldPosition = oldObjsList.map(options.getPosition);
          newObjs.forEach(function (newObj) {
            var index = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(listOldPosition, options.getPosition(newObj), radius, getDistance);

            if (index === -1) {
              index = newList.length;
            } else {
              index = newList.indexOf(oldObjsList[index]);
            }

            newList.splice(index, 0, newObj);
          });
          newObjs.forEach(function (newObj) {
            indexOfNews.push(newList.indexOf(newObj));
          });
          return newList;
        };
      };
  }
}



/***/ }),

/***/ "./src/scope.js":
/*!**********************!*\
  !*** ./src/scope.js ***!
  \**********************/
/*! exports provided: scopes, defaultScope, Scope, scopeFactory, scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopes", function() { return scopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultScope", function() { return defaultScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeFactory", function() { return scopeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return scope; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./target */ "./src/target.js");




var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"],
  Target: _target__WEBPACK_IMPORTED_MODULE_3__["Target"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var scopes = [];

function Scope(draggables, targets, options) {
  scopes.forEach(function (scope) {
    if (draggables) {
      draggables.forEach(function (draggable) {
        scope.draggables.removeItem(draggable);
      });
    }

    if (targets) {
      targets.forEach(function (target) {
        scope.targets.removeItem(target);
      });
    }
  });
  this.draggables = draggables || [];
  this.targets = targets || [];
  scopes.push(this);
  this.options = {
    timeEnd: options && options.timeEnd || 400
  };
  this.onChange = new Dragee.Event(this);

  if (options && options.onChange) {
    this.onChange.add(options.onChange);
  }

  this.init();
}

Scope.prototype.init = function () {
  var that = this;
  this.draggables.forEach(function (draggable) {
    draggable.onEnd.add(function () {
      return that.onEnd(this);
    });
  });
};

Scope.prototype.addDraggable = function (draggable) {
  var that = this;
  this.draggables.push(draggable);
  draggable.onEnd.unshift(function () {
    return that.onEnd(this);
  });
};

Scope.prototype.addTarget = function (target) {
  this.targets.push(target);
};

Scope.prototype.onEnd = function (draggable) {
  var shotTargets = this.targets.filter(function (target) {
    return target.draggables.indexOf(draggable) !== -1;
  }).filter(function (target) {
    return target.catchDraggable(draggable);
  }).sort(function (a, b) {
    return a.getRectangle().getSquare() - b.getRectangle().getSquare();
  });

  if (shotTargets.length) {
    shotTargets[0].onEnd(draggable);
  } else if (draggable.targets.length) {
    draggable.move(draggable.initPosition, this.options.timeEnd, true, true);
  }

  this.onChange.fire();
  return true;
};

Scope.prototype.reset = function () {
  this.targets.forEach(function (target) {
    target.reset();
  });
};

Scope.prototype.refresh = function () {
  this.draggables.forEach(function (draggable) {
    draggable.refresh();
  });
  this.targets.forEach(function (target) {
    target.refresh();
  });
};

Scope.prototype.__defineGetter__('positions', function () {
  return this.targets.map(function (target) {
    return target.innerDraggables.map(function (draggable) {
      return this.draggables.indexOf(draggable);
    }, this);
  }, this);
});

Scope.prototype.__defineSetter__('positions', function (positions) {
  var message = 'wrong array length';

  if (positions.length === this.targets.length) {
    this.targets.forEach(function (target) {
      target.reset();
    }, this);
    positions.forEach(function (targetIndexes, i) {
      targetIndexes.forEach(function (index) {
        this.targets[i].add(this.draggables[index]);
      }, this);
    }, this);
  } else {
    throw message;
  }
});

var defaultScope = new Scope();

function scope(fn) {
  var currentScope = new Scope(),
      addDraggableToScope = function addDraggableToScope(draggable) {
    currentScope.addDraggable(draggable);
    return true;
  },
      addTargetToScope = function addTargetToScope(target) {
    currentScope.addTarget(target);
    return true;
  };

  _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"].onCreate.add(addDraggableToScope);
  _target__WEBPACK_IMPORTED_MODULE_3__["Target"].onCreate.add(addTargetToScope);
  fn.call();
  _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"].onCreate.remove(addDraggableToScope);
  _target__WEBPACK_IMPORTED_MODULE_3__["Target"].onCreate.remove(addTargetToScope);
  return currentScope;
}

function scopeFactory(parentElement, draggableElements, targetElements) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var draggableOptions = options.draggable || {};
  var targetOptions = options.target || {};
  var scopeOptions = options.scope || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  targetOptions.parent = targetOptions.parent || parentElement;
  draggableElements = Array.prototype.slice.call(draggableElements);
  targetElements = Array.prototype.slice.call(targetElements);
  var draggables = draggableElements.map(function (element) {
    return new Dragee.Draggable(element, draggableOptions);
  });
  var targets = targetElements.map(function (element) {
    return new Dragee.Target(element, draggables, targetOptions);
  });
  return new Scope(draggables, targets, scopeOptions);
}



/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! exports provided: targets, Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targets", function() { return targets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope */ "./src/scope.js");







var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  positionType: _positioning__WEBPACK_IMPORTED_MODULE_3__["positionType"],
  positionFactory: _positioning__WEBPACK_IMPORTED_MODULE_3__["positionFactory"],
  sortingFactory: _positioning__WEBPACK_IMPORTED_MODULE_3__["sortingFactory"],
  scopes: _scope__WEBPACK_IMPORTED_MODULE_4__["scopes"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var targets = [],
    addToDefaultScope = function addToDefaultScope(target) {
  _scope__WEBPACK_IMPORTED_MODULE_4__["defaultScope"].addTarget(target);
};

function Target(element, draggables) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var target = this;
  var parent = options.parent || Dragee.util.getDefaultParent(element);
  this.options = Object.assign({
    timeEnd: 200,
    timeExcange: 400,
    parent: parent,
    sorting: Dragee.sortingFactory(Dragee.positionType.floatLeft)(80, _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].transformedSpaceDistanceFactory({
      x: 1,
      y: 4
    })),
    positioning: Dragee.positionFactory(Dragee.positionType.floatLeft)(this.getRectangle.bind(this), {
      removable: true
    })
  }, options);
  targets.push(this);
  this.element = element;
  draggables.forEach(function (draggable) {
    draggable.targets.push(target);
  });
  this.draggables = draggables;
  this.onAdd = new Dragee.Event(this);
  this.beforeAdd = new Dragee.Event(this);
  this.onRemove = new Dragee.Event(this);

  if (options.onRemove) {
    this.onRemove.add(options.onRemove);
  }

  if (options.onAdd) {
    this.onAdd.add(options.onAdd);
  }

  if (options.beforeAdd) {
    this.beforeAdd.add(options.beforeAdd);
  }

  Target.onCreate.fire(this);
  this.init();
}

Target.onCreate = new Dragee.Event(Target, {
  isReverse: true,
  isStopOnTrue: true
});
Target.onCreate.add(addToDefaultScope);

Target.prototype.getRectangle = function () {
  return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
};

Target.prototype.catchDraggable = function (draggable) {
  if (this.options.catchDraggable) {
    return this.options.catchDraggable(this, draggable);
  } else {
    var targetRectangle = this.getRectangle(),
        draggableSquare = draggable.getRectangle().getSquare();
    return draggableSquare < targetRectangle.getSquare() && targetRectangle.includePoint(draggable.getCenter());
  }
};

Target.prototype.getPosition = function () {
  return this.getRectangle().position;
};

Target.prototype.getSize = function () {
  return this.getRectangle().size;
};

Target.prototype.init = function () {
  var rectangles, indexesOfNew;
  this.innerDraggables = this.draggables.filter(function (draggable) {
    var element = draggable.element.parentNode;

    while (element) {
      if (element === this.element) {
        return true;
      }

      element = element.parentNode;
    }

    return false;
  }, this);

  if (this.innerDraggables.length) {
    indexesOfNew = Dragee.util.range(this.innerDraggables.length);
    rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
      return draggable.getRectangle();
    }), indexesOfNew);
    this.setPosition(rectangles, indexesOfNew);
    this.innerDraggables.forEach(function (draggable) {
      this.onAdd.fire(draggable);
    }, this);
  }
};

Target.prototype.destroy = function () {
  Dragee.scopes.forEach(function (scope) {
    scope.targets.removeItem(this);
  }, this);
};

Target.prototype.refresh = function () {
  var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
    return draggable.getRectangle();
  }), []);
  this.setPosition(rectangles, [], 0);
};

Target.prototype.onEnd = function (draggable) {
  var newDraggablesIndex = [];
  var includePoint = this.getRectangle().includePoint(draggable.getPosition());

  if (!includePoint) {
    if (this.getRectangle().includePoint(draggable.getCenter())) {
      draggable.position = draggable.getCenter().clone();
    } else {
      return false;
    }
  }

  this.beforeAdd.fire(draggable);
  this.innerDraggables = this.options.sorting(this.innerDraggables, [draggable], newDraggablesIndex);
  var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
    return draggable.getRectangle();
  }), newDraggablesIndex, draggable);
  this.setPosition(rectangles, newDraggablesIndex);

  if (this.innerDraggables.indexOf(draggable) !== -1) {
    this.addRemoveOnMove(draggable);
  }

  return true;
};

Target.prototype.setPosition = function (rectangles, indexesOfNew, time) {
  this.innerDraggables.slice(0).forEach(function (draggable, i) {
    var rect = rectangles[i],
        timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;

    if (rect.removable) {
      draggable.move(draggable.initPosition, timeEnd, true, true);
      this.innerDraggables.removeItem(draggable);
      this.onRemove.fire(draggable);
    } else {
      draggable.move(rect.position, timeEnd, true, true);
    }
  }, this);
};

Target.prototype.add = function (draggable, time) {
  var newDraggablesIndex = this.innerDraggables.length;
  this.beforeAdd.fire(draggable);
  this.pushInnerDraggable(draggable);
  var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
    return draggable.getRectangle();
  }), newDraggablesIndex, draggable);
  this.setPosition(rectangles, [newDraggablesIndex], time || 0);

  if (this.innerDraggables.indexOf(draggable) !== -1) {
    this.addRemoveOnMove(draggable);
  }
};

Target.prototype.pushInnerDraggable = function (draggable) {
  if (this.innerDraggables.indexOf(draggable) === -1) {
    this.innerDraggables.push(draggable);
  }
};

Target.prototype.addRemoveOnMove = function (draggable) {
  var that = this;
  draggable.onMove.add(this.removeHandler = function () {
    that.remove(draggable);
  });
  this.onAdd.fire(draggable);
};

Target.prototype.remove = function (draggable) {
  draggable.onMove.remove(this.removeHandler);
  var index = this.innerDraggables.indexOf(draggable);

  if (index === -1) {
    return;
  }

  this.innerDraggables.splice(index, 1);
  var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
    return draggable.getRectangle();
  }), []);
  this.setPosition(rectangles, []);
  this.onRemove.fire(draggable);
};

Target.prototype.reset = function () {
  this.innerDraggables.forEach(function (draggable) {
    draggable.move(draggable.initPosition, 0, true, true);
    this.onRemove.fire(draggable);
  }, this);
  this.innerDraggables = [];
};

Target.prototype.getSortedDraggables = function () {
  this.innerDraggables.slice();
};



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getDefaultParent, getTouchByID, getSumValueOfStyleRule, appendFirstChild, range, setStyle, randomColor, createCanvas, hasClass, addClass, removeClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultParent", function() { return getDefaultParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchByID", function() { return getTouchByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSumValueOfStyleRule", function() { return getSumValueOfStyleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFirstChild", function() { return appendFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });


function getDefaultParent(element) {
  var parent = element.parentNode;

  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode;
  }

  return parent;
}

function getTouchByID(element, touchId) {
  for (var i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i];
    }
  }

  return false;
}

function getSumValueOfStyleRule(element, rules) {
  return rules.reduce(function (sum, rule) {
    return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
  }, 0);
}

function appendFirstChild(element, node) {
  element.firstChild ? element.insertBefore(node, element.firstChild) : element.appendChild(node);
}

function range(start, stop, step) {
  var result = [];

  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  }

  if (typeof step === 'undefined') {
    step = 1;
  }

  if (step > 0 && start >= stop || step < 0 && start <= stop) {
    return [];
  }

  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
}

function setStyle(element, style) {
  style = style || {};
  var cssText = '';

  for (var key in style) {
    if (style.hasOwnProperty(key)) {
      cssText += key + ': ' + style[key] + '; ';
    }
  }

  element.style.cssText = cssText;
}

function randomColor() {
  var rnd = function rnd() {
    return Math.round(Math.random() * 255);
  };

  var toHexString = function toHexString(digit) {
    var str = digit.toString(16);

    while (str.length < 2) {
      str = '0' + str;
    }

    return str;
  };

  return '#' + toHexString(rnd()) + toHexString(rnd()) + toHexString(rnd());
}

function createCanvas(area, rectagle) {
  var canvas = document.createElement('canvas');

  if (window.getComputedStyle(area).position === 'static') {
    area.style.position = 'relative';
  }

  canvas.setAttribute('width', rectagle.size.x + 'px');
  canvas.setAttribute('height', rectagle.size.y + 'px');
  setStyle(canvas, {
    position: 'absolute',
    left: rectagle.position.y + 'px',
    top: rectagle.position.y + 'px',
    width: rectagle.size.x + 'px',
    height: rectagle.size.y + 'px'
  });
  appendFirstChild(area, canvas);
  return canvas;
}

function hasClass(element, c) {
  var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
  return re.test(element.className);
}

function addClass(element, c) {
  if (!hasClass(element, c)) {
    element.className = (element.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
  }
}

function removeClass(element, c) {
  var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
  element.className = element.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}

var util = {
  getDefaultParent: getDefaultParent,
  getTouchByID: getTouchByID,
  getSumValueOfStyleRule: getSumValueOfStyleRule,
  appendFirstChild: appendFirstChild,
  range: range,
  setStyle: setStyle,
  randomColor: randomColor,
  createCanvas: createCanvas,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwidG9SZWN0YW5nbGUiLCJ0b0VsZW1lbnQiLCJ0b0xpbmVYIiwidG9MaW5lWSIsInRvTGluZSIsInRvQ2lyY2xlIiwidG9BcmMiLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsIm1vdmUiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJwcmV2ZW50RG91YmxlSW5pdCIsImRyYWdnYWJsZSIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJwdXNoIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJEcmFnZ2FibGUiLCJvcHRpb25zIiwidGhhdCIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvbk1vdmUiLCJvblN0YXJ0IiwiYWRkIiwib25DcmVhdGUiLCJmaXJlIiwiaW5pdCIsInByb3RvdHlwZSIsIl9lbmFibGUiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVpbml0IiwiZ2V0U2l6ZSIsIl9yZWNhbHVsYXRlIiwiZ2V0U2l6ZU9mRWxlbWVudCIsImdldFBvc2l0aW9uIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0Q2VudGVyIiwibXVsdCIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJ0ZXN0IiwicmVwbGFjZSIsInRpbWUiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwic3ViIiwicmVmcmVzaFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJzZXRaZXJvVHJhbnNpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2VlIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJnZXRSZWN0YW5nbGUiLCJSZWN0YW5nbGUiLCJkZXN0cm95IiwicmVzZXQiLCJfX2RlZmluZUdldHRlcl9fIiwiX19kZWZpbmVTZXR0ZXJfXyIsImVuYWJsZSIsImNvbnRleHQiLCJmdW5jcyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImkiLCJsZW5ndGgiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsImluZGV4Iiwic3BsaWNlIiwiX2YiLCJ0b1N0cmluZyIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0Iiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJ1dGlsIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsIlRhcmdldCIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwiYWRkVGFyZ2V0Iiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImlubmVyRHJhZ2dhYmxlcyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIkFycmF5IiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJ0b3VjaElkIiwicnVsZXMiLCJzdW0iLCJydWxlIiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdG9wIiwic3RlcCIsInNldFN0eWxlIiwiY3NzVGV4dCIsImtleSIsImhhc093blByb3BlcnR5IiwicmFuZG9tQ29sb3IiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFD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QUF0QkEsc0JBSFc7QUFJWCtHLGtCQUFnQixFQUFoQkEsZ0JBSlc7QUFLWFYsT0FBSyxFQUFMQSxLQUxXO0FBTVhpQixVQUFRLEVBQVJBLFFBTlc7QUFPWEksYUFBVyxFQUFYQSxXQVBXO0FBUVhPLGNBQVksRUFBWkEsWUFSVztBQVNYTSxVQUFRLEVBQVJBLFFBVFc7QUFVWGhQLFVBQVEsRUFBUkEsUUFWVztBQVdYSyxhQUFXLEVBQVhBO0FBWFcsQ0FBYjtBQWNBO0FBY2VtRyxtRUFBZixFIiwiZmlsZSI6ImRyYWdnYWJsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kcmFnZ2FibGUuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuXG5jb25zdCBib3VuZCA9IHtcbiAgdG9SZWN0YW5nbGU6IGJvdW5kVG9SZWN0YW5nbGUsXG4gIHRvRWxlbWVudDogYm91bmRUb0VsZW1lbnQsXG4gIHRvTGluZVg6IGJvdW5kVG9MaW5lWCxcbiAgdG9MaW5lWTogYm91bmRUb0xpbmVZLFxuICB0b0xpbmU6IGJvdW5kVG9MaW5lLFxuICB0b0NpcmNsZTogYm91bmRUb0NpcmNsZSxcbiAgdG9BcmM6IGJvdW5kVG9BcmNcbn1cblxuZXhwb3J0IHsgYm91bmQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IGJvdW5kLCBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICBwcmV2ZW50RG91YmxlSW5pdCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgICBpZiAoZHJhZ2dhYmxlcy5zb21lKGZ1bmN0aW9uKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnRcbiAgICB9KSkge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICB9LFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9LFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gRHJhZ2dhYmxlKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICB0aGlzLnRhcmdldHMgPSBbXVxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBib3VuZDogRHJhZ2VlLmJvdW5kLnRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBmYWxzZVxuICB9LCBvcHRpb25zKVxuXG4gIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICB0aGlzLm9uRW5kLmFkZChmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgfSlcblxuICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gIH1cbiAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICB9XG4gIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgfVxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgdGhhdC5pbml0KClcbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICB9XG4gIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgfVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKF9yZWNhbHVsYXRlKSB7XG4gIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gIHJldHVybiB0aGlzLnBvc2l0aW9uXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuX3NldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSxcbiAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICBpZiAobXNpZSkge1xuICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbn1cblxuRHJhZ2dhYmxlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24ocG9pbnQsIHRpbWUsIGlzRml4LCBpc1NpbGVudCkge1xuICB0aW1lID0gdGltZSB8fCAwXG4gIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICBpZiAoaXNGaXgpIHtcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gIH1cblxuICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgaWYgKCFpc1NpbGVudCkge1xuICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUucmVmcmVzaFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gIH1cblxuICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbn1cblxuRHJhZ2dhYmxlLnByb3RvdHlwZS5zZXRaZXJvVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZGV0ZXJtaW5lRGlyZWN0aW9uID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbn1cblxuRHJhZ2dhYmxlLnByb3RvdHlwZS5kcmFnU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gIH1cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgfHwgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9IGVsc2Uge1xuICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICB0aGlzLmlzRHJhZ2VlID0gdHJ1ZVxuXG4gIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLmRyYWdNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICBsZXQgdG91Y2hcblxuICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgIGlmICghdG91Y2gpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICB0aGlzLm1vdmUocG9pbnQsIDApXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZHJhZ0VuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgbGV0IHRvdWNoXG5cbiAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgdGhpcy5pc0RyYWdlZSA9IGZhbHNlXG4gIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0UmVjdGFuZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRTaXplKHRydWUpXG4gIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gIHRoaXMub25FbmQucmVzZXQoKVxuICB0aGlzLm9uTW92ZS5yZXNldCgpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXygnZW5hYmxlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9lbmFibGVcbn0pXG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXygnZW5hYmxlJywgZnVuY3Rpb24oZW5hYmxlKSB7XG4gIGlmIChlbmFibGUpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbn0pXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZHJhZ2dhYmxlcywgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gIHRoaXMueCA9IHhcbiAgdGhpcy55ID0geVxufVxuXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICd7eD0nICsgdGhpcy54ICsgJyx5PScgKyB0aGlzLnkgKyAnfSdcbn1cblxuUG9pbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLm11bHQgPSBmdW5jdGlvbihrKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbn1cblxuUG9pbnQucHJvdG90eXBlLm5lZ2F0aXZlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxufVxuXG4vKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSkge1xuICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgdGhpcy5zaXplID0gc2l6ZVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAxID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUG9pbnQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVJlY3RhbmdsZSA9IGZ1bmN0aW9uKHJlY3RhbmdsZSkge1xuICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5tb3ZlVG9Cb3VuZCA9IGZ1bmN0aW9uKHJlY3QsIGF4aXMpIHtcbiAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gIGlmIChheGlzKSB7XG4gICAgc2VsQXhpcyA9IGF4aXNcbiAgfSBlbHNlIHtcbiAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9XG4gICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICB9XG4gIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICByZXR1cm4gcmVjdFxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFNxdWFyZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLnN0eWxlQXBwbHkgPSBmdW5jdGlvbihlbCkge1xuICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ3Jvd3RoID0gZnVuY3Rpb24oc2l6ZSkge1xuICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0TWluU2lkZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxuICB9LFxuICBkaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbiAgfSxcbiAgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgICAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyUG9pbnQ6IGZ1bmN0aW9uKGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlKSB7XG4gICAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICAgIGdldERpc3RhbmNlID0gZ2V0RGlzdGFuY2UgfHwgR2VvbWV0cnkuZ2V0RGlzdGFuY2VcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHNpemUgPSBnZXREaXN0YW5jZShhcnJbMF0sIHZhbClcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wID0gZ2V0RGlzdGFuY2UoYXJyW2ldLCB2YWwpXG4gICAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgICAgaW5kZXggPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4XG4gIH0sXG4gIGJvdW5kOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50OiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nOiBmdW5jdGlvbihMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gICAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gICAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgICB0ZW1wID0gTDJQMVxuICAgICAgTDJQMSA9IEwxUDFcbiAgICAgIEwxUDEgPSB0ZW1wXG4gICAgICB0ZW1wID0gTDJQMlxuICAgICAgTDJQMiA9IEwxUDJcbiAgICAgIEwxUDIgPSB0ZW1wXG4gICAgfVxuICAgIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIHggPSBMMVAxLnhcbiAgICAgIHkgPSB4ICogazIgKyBiMlxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICAgIH0gZWxzZSB7XG4gICAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICAgIHkgPSB4ICogazEgKyBiMVxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICAgIH1cbiAgfSxcbiAgICAvL0dldCBwb2ludCBhbmQgY2hlY2sgdGhhdCBwb2ludCBiZWxvbmcgdG8gc2VnbWVudCBvZiB0aGUgbGluZVxuICAgIC8vIGlmIG5vdCAtIHJldHVybiB0aGUgbmVhcmVzdCBwb2ludCBvZiBzZWdtZW50XG4gIGJvdW5kVG9TZWdtZW50OiBmdW5jdGlvbihMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lOiBmdW5jdGlvbihBLCBCLCBQKSB7XG4gICAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICAgIHQgPSBhcF9hYiAvIGFiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxuICB9LFxuICBnZXRQb2ludEluTGluZTogZnVuY3Rpb24oTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0OiBmdW5jdGlvbihMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQsIGlzQ29udGVudEJveFNpemUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplT2ZFbGVtZW50KGVsLCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMuZ2V0T2Zmc2V0KGVsLCBwYXJlbnQgfHwgZWwucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZSksIHNpemUpXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpWyd3aWR0aCddKSwgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJ10pXG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9pbnQod2lkdGgsIGhlaWdodClcbiAgfSxcbiAgZ2V0T2Zmc2V0OiBmdW5jdGlvbihlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbTogZnVuY3Rpb24oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50czogZnVuY3Rpb24oYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKGZ1bmN0aW9uKGJQb2ludCkge1xuICAgICAgcmV0dXJuICBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gICAgfSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnB1c2gocG9pbnQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICBnZXRBbmdsZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW46IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWU6IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG4gIH0sXG4gIGJvdW5kQW5nbGU6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlOiBmdW5jdGlvbihhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmOiBmdW5jdGlvbihhbHBoYSwgYmV0YSkge1xuICAgIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpLFxuICAgICAgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gICAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG4gIH0sXG4gIG5vcm1hbGl6ZUFuZ2xlOiBmdW5jdGlvbih2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgRHJhZ2dhYmxlLCAgVGFyZ2V0LCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuZnVuY3Rpb24gU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucykge1xuICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbihzY29wZSkge1xuICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICAgIHNjb3BlLmRyYWdnYWJsZXMucmVtb3ZlSXRlbShkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICB0YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHNjb3BlLnRhcmdldHMucmVtb3ZlSXRlbSh0YXJnZXQpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgc2NvcGVzLnB1c2godGhpcylcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHRpbWVFbmQ6IChvcHRpb25zICYmIG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gIH1cblxuICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgfVxuICB0aGlzLmluaXQoKVxufVxuXG5TY29wZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25FbmQuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoYXQub25FbmQodGhpcylcbiAgICB9KVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUuYWRkRHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG5cbiAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICBkcmFnZ2FibGUub25FbmQudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhhdC5vbkVuZCh0aGlzKVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbn1cblxuU2NvcGUucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICB9KS5maWx0ZXIoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICB9KVxuXG4gIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gIH1cbiAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgcmV0dXJuIHRydWVcbn1cblxuU2NvcGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHRhcmdldC5yZXNldCgpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5yZWZyZXNoKClcbiAgfSlcbiAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlZnJlc2goKVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXygncG9zaXRpb25zJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRhcmdldHMubWFwKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgfSwgdGhpcylcbiAgfSwgdGhpcylcbn0pXG5cblNjb3BlLnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKCdwb3NpdGlvbnMnLCBmdW5jdGlvbihwb3NpdGlvbnMpIHtcbiAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVzZXQoKVxuICAgIH0sIHRoaXMpXG4gICAgcG9zaXRpb25zLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0SW5kZXhlcywgaSkge1xuICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbn0pXG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpLFxuICAgIGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBwb3NpdGlvblR5cGUsICBwb3NpdGlvbkZhY3RvcnksIHNvcnRpbmdGYWN0b3J5LCBzY29wZXMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCB0YXJnZXRzID0gW10sXG4gIGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gIH1cblxuZnVuY3Rpb24gVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IERyYWdlZS51dGlsLmdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcblxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICB0aW1lRW5kOiAyMDAsXG4gICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgcG9zaXRpb25pbmc6IERyYWdlZS5wb3NpdGlvbkZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksIHsgcmVtb3ZhYmxlOiB0cnVlIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9KVxuICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMuYmVmb3JlQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgdGhpcy5vblJlbW92ZS5hZGQob3B0aW9ucy5vblJlbW92ZSlcbiAgfVxuICBpZiAob3B0aW9ucy5vbkFkZCkge1xuICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gIH1cbiAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICB9XG5cbiAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICB0aGlzLmluaXQoKVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRSZWN0YW5nbGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmNhdGNoRHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpLFxuICAgICAgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG59XG5cblRhcmdldC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9LCB0aGlzKVxuXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICBpbmRleGVzT2ZOZXcgPSBEcmFnZWUudXRpbC5yYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgICB9LCB0aGlzKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBEcmFnZWUuc2NvcGVzLmZvckVhY2goZnVuY3Rpb24oc2NvcGUpIHtcbiAgICBzY29wZS50YXJnZXRzLnJlbW92ZUl0ZW0odGhpcylcbiAgfSwgdGhpcylcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIFtdKVxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlLCBpKSB7XG4gICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5yZW1vdmVJdGVtKGRyYWdnYWJsZSlcblxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gIH0sIHRoaXMpXG59XG5cblRhcmdldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZHJhZ2dhYmxlLCB0aW1lKSB7XG4gIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5wdXNoSW5uZXJEcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5hZGRSZW1vdmVPbk1vdmUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcblxuICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGF0LnJlbW92ZShkcmFnZ2FibGUpXG4gIH0pXG5cbiAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBbXSlcblxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9LCB0aGlzKVxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0U29ydGVkRHJhZ2dhYmxlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG59XG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBydWxlKSB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgZWxlbWVudC5maXJzdENoaWxkID8gZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKSA6IGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbn1cblxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChsZXQga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG4gIH1cbiAgY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICAgIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0clxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICByZXR1cm4gJyMnICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuXG5jb25zdCB1dGlsID0ge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIGFwcGVuZEZpcnN0Q2hpbGQsXG4gIHJhbmdlLFxuICBzZXRTdHlsZSxcbiAgcmFuZG9tQ29sb3IsXG4gIGNyZWF0ZUNhbnZhcyxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzc1xufVxuXG5leHBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIGFwcGVuZEZpcnN0Q2hpbGQsXG4gIHJhbmdlLFxuICBzZXRTdHlsZSxcbiAgcmFuZG9tQ29sb3IsXG4gIGNyZWF0ZUNhbnZhcyxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzc1xufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iXSwic291cmNlUm9vdCI6IiJ9
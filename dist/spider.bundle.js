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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/spider.js");
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
/*! exports provided: boundToRectangle, boundToElement, boundToLineX, boundToLineY, boundToLine, boundToCircle, boundToArc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToRectangle", function() { return boundToRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToElement", function() { return boundToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToLineX", function() { return boundToLineX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToLineY", function() { return boundToLineY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToLine", function() { return boundToLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToCircle", function() { return boundToCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToArc", function() { return boundToArc; });
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Dragee = {
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
    transformProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transform'),
    transitionProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transition');

function preventDoubleInit(draggable) {
  var message = "for this element Dragee.Draggable is already exist, don't create it twice ";

  if (draggables.some(function (existing) {
    return draggable.element === existing.element;
  })) {
    throw message;
  }

  draggables.push(draggable);
}

function addToDefaultScope(draggable) {
  _scope__WEBPACK_IMPORTED_MODULE_5__["defaultScope"].addDraggable(draggable);
}

var Draggable =
/*#__PURE__*/
function () {
  function Draggable(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Draggable);

    var parent = options.parent || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDefaultParent"])(element);
    this.targets = [];
    this.options = Object.assign({
      parent: parent,
      bound: Object(_bound__WEBPACK_IMPORTED_MODULE_3__["boundToElement"])(parent, parent),
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
      return _this.move(_this.position, 0, true, true);
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
    this.init();
  }

  _createClass(Draggable, [{
    key: "init",
    value: function init() {
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
    }
  }, {
    key: "reinit",
    value: function reinit() {
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
    }
  }, {
    key: "getSize",
    value: function getSize(_recalulate) {
      return _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getSizeOfElement(this.element, this.options.isContentBoxSize);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      this.position = this.offset.add(this._transformPosition || new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](0, 0));
      return this.position;
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.position.add(this.getSize().mult(0.5));
    }
  }, {
    key: "_setTranslate",
    value: function _setTranslate(point) {
      this._transformPosition = point;
      var transform = this.element.style[transformProperty];
      var translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)';
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
    }
  }, {
    key: "move",
    value: function move(point) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var isFix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isSilent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
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
    }
  }, {
    key: "refreshPosition",
    value: function refreshPosition() {
      this.setPosition(this.getPosition());
    }
  }, {
    key: "setPosition",
    value: function setPosition(point) {
      point = point.clone();
      this.position = point;

      if (transitionProperty) {
        this.element.style[transitionProperty] = '0ms';
      }

      this._setTranslate(point.sub(this.offset));
    }
  }, {
    key: "setZeroTransition",
    value: function setZeroTransition() {
      if (transitionProperty) {
        this.element.style[transitionProperty] = '0ms';
      }
    }
  }, {
    key: "determineDirection",
    value: function determineDirection(point) {
      this.leftDirection = this.position.x < point.x;
      this.rightDirection = this.position.x > point.x;
      this.upDirection = this.position.y > point.y;
      this.downDirection = this.position.y < point.y;
    }
  }, {
    key: "dragStart",
    value: function dragStart(event) {
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
      this.isDragging = true;
      this.onStart.fire(event);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'active');
      this.onMove.fire(event);
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
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
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

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
      this.isDragging = false;
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'active');
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return new _geometry__WEBPACK_IMPORTED_MODULE_4__["Rectangle"](this.position, this.getSize());
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.getSize(true);

      if (this.bound.refresh) {
        this.bound.refresh();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener(touchEvents.start, this._dragStart);
      this.element.removeEventListener(mouseEvents.start, this._dragStart);
      this.element.removeEventListener(touchEvents.move, this._dragMove);
      this.element.removeEventListener(mouseEvents.move, this._dragMove);
      this.element.removeEventListener(touchEvents.end, this._dragEnd);
      this.element.removeEventListener(mouseEvents.end, this._dragEnd);
      this.onEnd.reset();
      this.onMove.reset();
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(enable) {
      if (enable) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'disable');
      } else {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'disable');
      }

      return this._enable = enable;
    }
  }]);

  return Draggable;
}();

Draggable.onCreate = new Dragee.Event(Draggable, {
  isReverse: true,
  isStopOnTrue: true
});
Draggable.onCreate.add(addToDefaultScope);


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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var scopes = [];

var Scope =
/*#__PURE__*/
function () {
  function Scope(draggables, targets) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Scope);

    scopes.forEach(function (scope) {
      if (draggables) {
        draggables.forEach(function (draggable) {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.draggables, draggable);
        });
      }

      if (targets) {
        targets.forEach(function (target) {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.targets, target);
        });
      }
    });
    this.draggables = draggables || [];
    this.targets = targets || [];
    scopes.push(this);
    this.options = {
      timeEnd: options.timeEnd || 400
    };
    this.onChange = new Dragee.Event(this);

    if (options.onChange) {
      this.onChange.add(options.onChange);
    }

    this.init();
  }

  _createClass(Scope, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.draggables.forEach(function (draggable) {
        draggable.onEnd.add(function () {
          return _this.onEnd(draggable);
        });
      });
    }
  }, {
    key: "addDraggable",
    value: function addDraggable(draggable) {
      var _this2 = this;

      this.draggables.push(draggable);
      draggable.onEnd.unshift(function () {
        return _this2.onEnd(draggable);
      });
    }
  }, {
    key: "addTarget",
    value: function addTarget(target) {
      this.targets.push(target);
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
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
    }
  }, {
    key: "reset",
    value: function reset() {
      this.targets.forEach(function (target) {
        return target.reset();
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.draggables.forEach(function (draggable) {
        return draggable.refresh();
      });
      this.targets.forEach(function (target) {
        return target.refresh();
      });
    }
  }, {
    key: "positions",
    get: function get() {
      var _this3 = this;

      return this.targets.map(function (target) {
        return target.innerDraggables.map(function (draggable) {
          return _this3.draggables.indexOf(draggable);
        });
      });
    },
    set: function set(positions) {
      var _this4 = this;

      var message = 'wrong array length';

      if (positions.length === this.targets.length) {
        this.targets.forEach(function (target) {
          return target.reset();
        });
        positions.forEach(function (targetIndexes, i) {
          targetIndexes.forEach(function (index) {
            _this4.targets[i].add(_this4.draggables[index]);
          });
        });
      } else {
        throw message;
      }
    }
  }]);

  return Scope;
}();

var defaultScope = new Scope();

function scope(fn) {
  var currentScope = new Scope();

  var addDraggableToScope = function addDraggableToScope(draggable) {
    currentScope.addDraggable(draggable);
    return true;
  };

  var addTargetToScope = function addTargetToScope(target) {
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
    return new _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"](element, draggableOptions);
  });
  var targets = targetElements.map(function (element) {
    return new _target__WEBPACK_IMPORTED_MODULE_3__["Target"](element, draggables, targetOptions);
  });
  return new Scope(draggables, targets, scopeOptions);
}



/***/ }),

/***/ "./src/spider.js":
/*!***********************!*\
  !*** ./src/spider.js ***!
  \***********************/
/*! exports provided: spiders, Spider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spiders", function() { return spiders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return Spider; });
/* harmony import */ var _utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createcanvas */ "./src/utils/createcanvas.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var spiders = [];

var Spider =
/*#__PURE__*/
function () {
  function Spider(area, elements) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Spider);

    var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(area, area);
    this.options = Object.assign({
      angle: 0,
      dAngle: 2 * Math.PI / elements.length,
      center: areaRectangle.getCenter(),
      startRadius: 50,
      endRadius: areaRectangle.getMinSide() / 2,
      lineWidth: 2,
      strokeStyle: '#ff5577',
      fillStyle: 'rgba(150,255,50,0.8)'
    }, options);
    spiders.push(this);
    this.area = area;
    this.areaRectangle = areaRectangle;
    this.init(elements);
  }

  _createClass(Spider, [{
    key: "init",
    value: function init(elements) {
      var _this = this;

      this.canvas = Object(_utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.area, this.areaRectangle);
      this.context = this.canvas.getContext('2d');
      this.draggables = elements.map(function (element, i) {
        var angle = _this.options.angle + i * _this.options.dAngle;
        var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5);
        var start = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, _this.options.startRadius, _this.options.center).sub(halfSize);
        var end = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, _this.options.endRadius, _this.options.center).sub(halfSize);
        var bound = Object(_bound__WEBPACK_IMPORTED_MODULE_2__["boundToLine"])(start, end);
        return new _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"](element, {
          parent: _this.area,
          bound: bound,
          position: start,
          onMove: function onMove() {
            _this.draw();

            return true;
          }
        });
      });
      this.isInit = true;
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      if (!this.isInit) {
        return;
      }

      this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
      this.context.beginPath();
      var point = this.draggables[0].getCenter();
      this.context.moveTo(point.x, point.y);

      for (var i = 0; i < this.draggables.length; i++) {
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
  }]);

  return Spider;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Dragee = {
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

var Target =
/*#__PURE__*/
function () {
  function Target(element, draggables) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Target);

    var target = this;
    var parent = options.parent || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDefaultParent"])(element);
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
      return draggable.targets.push(target);
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

  _createClass(Target, [{
    key: "init",
    value: function init() {
      var _this = this;

      var rectangles, indexesOfNew;
      this.innerDraggables = this.draggables.filter(function (draggable) {
        var element = draggable.element.parentNode;

        while (element) {
          if (element === _this.element) {
            return true;
          }

          element = element.parentNode;
        }

        return false;
      });

      if (this.innerDraggables.length) {
        indexesOfNew = Object(_util__WEBPACK_IMPORTED_MODULE_0__["range"])(this.innerDraggables.length);
        rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
          return draggable.getRectangle();
        }), indexesOfNew);
        this.setPosition(rectangles, indexesOfNew);
        this.innerDraggables.forEach(function (draggable) {
          return _this.onAdd.fire(draggable);
        });
      }
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
    }
  }, {
    key: "catchDraggable",
    value: function catchDraggable(draggable) {
      if (this.options.catchDraggable) {
        return this.options.catchDraggable(this, draggable);
      } else {
        var targetRectangle = this.getRectangle();
        var draggableSquare = draggable.getRectangle().getSquare();
        return draggableSquare < targetRectangle.getSquare() && targetRectangle.includePoint(draggable.getCenter());
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.getRectangle().position;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.getRectangle().size;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      Dragee.scopes.forEach(function (scope) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.targets, _this2);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, [], 0);
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
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
    }
  }, {
    key: "setPosition",
    value: function setPosition(rectangles, indexesOfNew, time) {
      var _this3 = this;

      this.innerDraggables.slice(0).forEach(function (draggable, i) {
        var rect = rectangles[i],
            timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? _this3.options.timeEnd : _this3.options.timeExcange;

        if (rect.removable) {
          draggable.move(draggable.initPosition, timeEnd, true, true);
          Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(_this3.innerDraggables, draggable);

          _this3.onRemove.fire(draggable);
        } else {
          draggable.move(rect.position, timeEnd, true, true);
        }
      });
    }
  }, {
    key: "add",
    value: function add(draggable, time) {
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
    }
  }, {
    key: "pushInnerDraggable",
    value: function pushInnerDraggable(draggable) {
      if (this.innerDraggables.indexOf(draggable) === -1) {
        this.innerDraggables.push(draggable);
      }
    }
  }, {
    key: "addRemoveOnMove",
    value: function addRemoveOnMove(draggable) {
      var _this4 = this;

      draggable.onMove.add(this.removeHandler = function () {
        _this4.remove(draggable);
      });
      this.onAdd.fire(draggable);
    }
  }, {
    key: "remove",
    value: function remove(draggable) {
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
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this5 = this;

      this.innerDraggables.forEach(function (draggable) {
        draggable.move(draggable.initPosition, 0, true, true);

        _this5.onRemove.fire(draggable);
      });
      this.innerDraggables = [];
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      this.innerDraggables.slice();
    }
  }]);

  return Target;
}();

Target.onCreate = new Dragee.Event(Target, {
  isReverse: true,
  isStopOnTrue: true
});
Target.onCreate.add(addToDefaultScope);


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getDefaultParent, getTouchByID, getSumValueOfStyleRule, range, hasClass, addClass, removeClass, removeItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultParent", function() { return getDefaultParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchByID", function() { return getTouchByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSumValueOfStyleRule", function() { return getSumValueOfStyleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });


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

function removeItem(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
}

var util = {
  getDefaultParent: getDefaultParent,
  getTouchByID: getTouchByID,
  getSumValueOfStyleRule: getSumValueOfStyleRule,
  range: range,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  removeItem: removeItem
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./src/utils/createcanvas.js":
/*!***********************************!*\
  !*** ./src/utils/createcanvas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCanvas; });
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

function appendFirstChild(element, node) {
  if (element.firstChild) {
    element.insertBefore(node, element.firstChild);
  } else {
    element.appendChild(node);
  }
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3NwaWRlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jcmVhdGVjYW52YXMuanMiXSwibmFtZXMiOlsiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJwb3NpdGlvbiIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJlbGVtZW50IiwicGFyZW50IiwicmV0RnVuYyIsImJvdW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiTWF0aCIsImF0YW4yIiwiYmV0YSIsIlBJIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJlbmRBbmdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYW5nbGUiLCJnZXRBbmdsZSIsIm5vcm1hbGl6ZUFuZ2xlIiwiYm91bmRBbmdsZSIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsIkRyYWdlZSIsIkV2ZW50IiwiaXNUb3VjaCIsIndpbmRvdyIsIm1vdXNlRXZlbnRzIiwibW92ZSIsInRvdWNoRXZlbnRzIiwiZXZlbnRzIiwiZHJhZ2dhYmxlcyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInByZXZlbnREb3VibGVJbml0IiwiZHJhZ2dhYmxlIiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsInB1c2giLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsIm9wdGlvbnMiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25Nb3ZlIiwib25TdGFydCIsImFkZCIsIm9uQ3JlYXRlIiwiZmlyZSIsImluaXQiLCJfZW5hYmxlIiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWNhbHVsYXRlIiwiZ2V0U2l6ZU9mRWxlbWVudCIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsImdldFNpemUiLCJtdWx0IiwidHJhbnNmb3JtIiwic3R5bGUiLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJpbmRleE9mIiwidGVzdCIsInJlcGxhY2UiLCJ0aW1lIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzdWIiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsImlkZW50aWZpZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJlbmFibGUiLCJjb250ZXh0IiwiZnVuY3MiLCJwcm90b3R5cGUiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiZnMiLCJyZXZlcnNlIiwicmV0VmFsdWUiLCJpIiwibGVuZ3RoIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJpbmRleCIsInNwbGljZSIsIl9mIiwidG9TdHJpbmciLCJwIiwiayIsIm5lZ2F0aXZlIiwiY29tcGFyZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQNCIsImdldENlbnRlciIsIm9yIiwicmVjdCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZ3Jvd3RoIiwiZ2V0TWluU2lkZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyUG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwidXRpbCIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvUmFkaWFuIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsInBvc2l0aW9uVHlwZSIsIm5vdENyb3NzaW5nIiwiZmxvYXRMZWZ0IiwiZmxvYXRSaWdodCIsInBvc2l0aW9uRmFjdG9yeSIsInR5cGUiLCJfb3B0aW9ucyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwiYm91bmRSZWN0Iiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsImNvbmNhdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwicmVtb3ZlSXRlbSIsInRpbWVFbmQiLCJvbkNoYW5nZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJwb3NpdGlvbnMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVFbGVtZW50cyIsInRhcmdldEVsZW1lbnRzIiwiZHJhZ2dhYmxlT3B0aW9ucyIsInRhcmdldE9wdGlvbnMiLCJzY29wZU9wdGlvbnMiLCJBcnJheSIsInNwaWRlcnMiLCJTcGlkZXIiLCJhcmVhIiwiZWxlbWVudHMiLCJhcmVhUmVjdGFuZ2xlIiwiZEFuZ2xlIiwic3RhcnRSYWRpdXMiLCJlbmRSYWRpdXMiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJoYWxmU2l6ZSIsImRyYXciLCJpc0luaXQiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJmaWxsIiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInRvdWNoSWQiLCJydWxlcyIsInN1bSIsInJ1bGUiLCJzdG9wIiwic3RlcCIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwiYXJyYXkiLCJzZXRTdHlsZSIsImNzc1RleHQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwicmVjdGFnbGUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoi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Q0EsU0FBT0EsTUFBUDtBQUNELEMiLCJmaWxlIjoic3BpZGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NwaWRlci5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LCBtb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfSwgdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfSxcbiAgZXZlbnRzID0gaXNUb3VjaCA/IHRvdWNoRXZlbnRzIDogbW91c2VFdmVudHMsXG4gIGRyYWdnYWJsZXMgPSBbXSxcbiAgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBzcGlkZXJzID0gW11cblxuY2xhc3MgU3BpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBzcGlkZXJzLnB1c2godGhpcylcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGVcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHN0YXJ0ID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGVuZCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvTGluZShzdGFydCwgZW5kKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzWzBdLmdldENlbnRlcigpXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzW2ldLmdldENlbnRlcigpXG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLm9wdGlvbnMubGluZVdpZHRoXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gIH1cbn1cblxuZXhwb3J0IHsgc3BpZGVycywgU3BpZGVyIH1cbiIsImltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIHJlbW92ZUl0ZW0sXG4gIHJhbmdlXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBydWxlKSB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
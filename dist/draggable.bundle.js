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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiRHJhZ2VlIiwiRXZlbnQiLCJpc1RvdWNoIiwid2luZG93IiwibW91c2VFdmVudHMiLCJtb3ZlIiwidG91Y2hFdmVudHMiLCJldmVudHMiLCJkcmFnZ2FibGVzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwicHJldmVudERvdWJsZUluaXQiLCJkcmFnZ2FibGUiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwicHVzaCIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwib3B0aW9ucyIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvbk1vdmUiLCJvblN0YXJ0IiwiYWRkIiwib25DcmVhdGUiLCJmaXJlIiwiaW5pdCIsIl9lbmFibGUiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlY2FsdWxhdGUiLCJnZXRTaXplT2ZFbGVtZW50IiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0U2l6ZSIsIm11bHQiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJ0ZXN0IiwicmVwbGFjZSIsInRpbWUiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInN1YiIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwiaWRlbnRpZmllciIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiZG9jdW1lbnQiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImVuYWJsZSIsImNvbnRleHQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImkiLCJsZW5ndGgiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsImluZGV4Iiwic3BsaWNlIiwiX2YiLCJ0b1N0cmluZyIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJ1dGlsIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIkFycmF5IiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInRvdWNoSWQiLCJydWxlcyIsInN1bSIsInJ1bGUiLCJzdG9wIiwic3RlcCIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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ZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZHJhZ2dhYmxlLmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsImltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGFkZENsYXNzLCByZW1vdmVDbGFzc1xufSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsImltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIHJlbW92ZUl0ZW0sXG4gIHJhbmdlXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBydWxlKSB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iXSwic291cmNlUm9vdCI6IiJ9
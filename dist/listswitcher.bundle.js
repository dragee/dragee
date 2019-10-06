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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/listswitcher.js");
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

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: lists, List, listFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lists", function() { return lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFactory", function() { return listFactory; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lists = [];




var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var List =
/*#__PURE__*/
function () {
  function List(draggables) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, List);

    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30,
      getDistance: _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getDistance,
      isDisplacement: false
    }, options);
    this.draggables = draggables;
    lists.push(this);
    this.onChange = new Dragee.Event(this);

    if (options.onChange) {
      this.onChange.add(options.onChange);
    }

    this.init();
  }

  _createClass(List, [{
    key: "init",
    value: function init() {
      this._enable = true;
      this.draggables.forEach(this.initDraggable, this);
    }
  }, {
    key: "initDraggable",
    value: function initDraggable(draggable) {
      var _this = this;

      var _moveHandler;

      var list = this;
      draggable.enable = this._enable;

      if (this.options.isDisplacement) {
        _moveHandler = function moveHandler() {
          if (draggable.isDragging) {
            list.onStart(draggable);
            draggable.onMove.remove(_moveHandler);
            return true;
          }
        };

        draggable.onEnd.add(function () {
          _this.onEndDisplaycement(draggable);

          draggable.onMove.add(_moveHandler);
          return true;
        });
        draggable.onMove.add(_moveHandler);
      } else {
        draggable.onEnd.add(function () {
          _this.onEnd(draggable);

          return true;
        });
      }
    }
  }, {
    key: "moveOrSave",
    value: function moveOrSave(draggable, position, time) {
      if (draggable.isDragging) {
        draggable.fixPosition = position;
      } else {
        draggable.move(position, time, true);
      }
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      var fixPositions = this.getCurrentFixPosition();
      var currentIndex = this.draggables.indexOf(draggable);
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

      if (excangeIndex === -1 || excangeIndex === currentIndex) {
        draggable.move(draggable.fixPosition, this.options.timeEnd, true);
      } else {
        this.moveOrSave(this.draggables[excangeIndex], fixPositions[currentIndex], this.options.timeExcange);
        this.draggables[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
        this.onChange.fire();
      }

      return true;
    }
  }, {
    key: "onEndDisplaycement",
    value: function onEndDisplaycement(draggable) {
      var sortedDraggables = this.getSortedDraggables();
      var fixPositions = sortedDraggables.map(function (draggable) {
        return draggable.fixPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);
      var targetIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

      if (targetIndex !== -1) {
        if (targetIndex < currentIndex) {
          for (var i = targetIndex; i < currentIndex; i++) {
            this.moveOrSave(sortedDraggables[i], fixPositions[i + 1], this.options.timeExcange);
          }
        } else {
          for (var _i = currentIndex; _i < targetIndex; _i++) {
            this.moveOrSave(sortedDraggables[_i + 1], fixPositions[_i], this.options.timeExcange);
          }
        }

        draggable.move(fixPositions[targetIndex], this.options.timeEnd, true);
      } else {
        draggable.move(draggable.fixPosition, this.options.timeEnd, true);
      }
    }
  }, {
    key: "onStart",
    value: function onStart(draggable) {
      var i;
      var sortedDraggables = this.getSortedDraggables();
      var fixPositions = sortedDraggables.map(function (draggable) {
        return draggable.fixPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);

      for (i = currentIndex + 1; i < sortedDraggables.length; i++) {
        this.moveOrSave(sortedDraggables[i], fixPositions[i - 1], this.options.timeExcange);
      }

      sortedDraggables[currentIndex].fixPosition = fixPositions[i - 1];
    }
  }, {
    key: "getCurrentFixPosition",
    value: function getCurrentFixPosition() {
      return this.draggables.map(function (draggable) {
        return draggable.fixPosition.clone();
      });
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      var _this2 = this;

      var initPositions = this.draggables.map(function (draggable) {
        return draggable.initPosition;
      });
      var sortedDraggables = initPositions.map(function (position) {
        return _this2.draggables.filter(function (draggable) {
          return draggable.fixPosition.compare(position);
        })[0];
      });
      return sortedDraggables;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.draggables.forEach(function (draggable) {
        draggable.move(draggable.initPosition, 0, true, false);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.draggables.forEach(function (draggable) {
        draggable.refresh();
      });
    }
  }, {
    key: "add",
    value: function add(draggables) {
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }

      draggables.forEach(this.initDraggable, this);
      this.draggables = this.draggables.concat(draggables);
    }
  }, {
    key: "remove",
    value: function remove(draggables) {
      var _this3 = this;

      var initPositions = this.draggables.map(function (draggable) {
        return draggable.initPosition;
      });
      var list = [];
      var sortedDraggables = this.getSortedDraggables();

      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }

      draggables.forEach(function (draggable) {
        draggable.onEnd.reset();
        draggable.onMove.reset(); //todo remove reset in future

        Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(_this3.draggables, draggable);
      });
      var j = 0;
      sortedDraggables.forEach(function (draggable) {
        if (_this3.draggables.indexOf(draggable) !== -1) {
          if (draggable.fixPosition !== initPositions[j]) {
            draggable.move(initPositions[j], _this3.options.timeExcange, true);
          }

          draggable.initPosition = initPositions[j];
          j++;
          list.push(draggable);
        }
      });
      this.draggables = list;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.remove(this.draggables.slice());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.draggables.forEach(function (draggable) {
        return draggable.destroy();
      });
    }
  }, {
    key: "positions",
    get: function get() {
      return this.getCurrentFixPosition();
    },
    set: function set(positions) {
      var _this4 = this;

      var message = 'wrong array length';

      if (positions.length === this.draggables.length) {
        positions.forEach(function (point, i) {
          _this4.draggables[i].move(point, 0, true, true);
        }, this);
      } else {
        throw message;
      }
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(enable) {
      this._enable = enable;
      this.draggables.forEach(function (draggable) {
        draggable.enable = enable;
      });
    }
  }]);

  return List;
}();

function listFactory(parentElement, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  elements = Array.prototype.slice.call(elements);
  var draggables = elements.map(function (element) {
    return new _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"](element, draggableOptions);
  });
  return new List(draggables, listOptions);
}



/***/ }),

/***/ "./src/listswitcher.js":
/*!*****************************!*\
  !*** ./src/listswitcher.js ***!
  \*****************************/
/*! exports provided: listSwitcherFactory, ListSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return listSwitcherFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return ListSwitcher; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ListSwitcher =
/*#__PURE__*/
function (_List) {
  _inherits(ListSwitcher, _List);

  function ListSwitcher(draggables) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ListSwitcher);

    options.stepOn = options.stepOn || new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-50, 0);
    return _possibleConstructorReturn(this, _getPrototypeOf(ListSwitcher).call(this, draggables, options));
  }

  _createClass(ListSwitcher, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.draggables.forEach(function (draggable) {
        draggable.isOn = false;
        draggable.onEnd.add(function () {
          _this.onEnd(draggable);

          return true;
        });
      });
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      var fixPositions = this.getCurrentFixPositionWithOff();
      var currentIndex = this.draggables.indexOf(draggable);
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

      if (excangeIndex === -1 || excangeIndex === currentIndex) {
        this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd);
      } else {
        if (this.draggables[excangeIndex].isDragging) {
          this.fixToOff(excangeIndex, fixPositions[currentIndex]);
        } else {
          this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
        }

        this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd);
        this.onChange.fire();
      }

      return true;
    }
  }, {
    key: "moveDraggable",
    value: function moveDraggable(index, position, fixOffPosition, time) {
      var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)];
      var isOn = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(positions, position, -1, _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getXDifference);

      if (this.draggables[index].isOn !== !!isOn) {
        this.draggables[index].isOn = !!isOn;
        this.onChange.fire();
      }

      this.draggables[index].move(positions[isOn], time, true);
    }
  }, {
    key: "fixToOff",
    value: function fixToOff(index, fixOffPosition) {
      this.draggables[index].isOn = false;
      this.draggables[index].fixPosition = fixOffPosition;
    }
  }, {
    key: "moveDraggableToOff",
    value: function moveDraggableToOff(index, fixOffPosition, time) {
      this.draggables[index].isOn = false;
      this.draggables[index].move(fixOffPosition, time, true);
    }
  }, {
    key: "getCurrentFixPositionWithOff",
    value: function getCurrentFixPositionWithOff() {
      var _this2 = this;

      return this.draggables.map(function (draggable) {
        return draggable.isOn ? draggable.fixPosition.sub(_this2.options.stepOn) : draggable.fixPosition.clone();
      }, this);
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      var _this3 = this;

      return this.draggables.map(function (draggable) {
        return draggable.initPosition;
      }).map(function (position) {
        return _this3.draggables.filter(function (draggable) {
          return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(_this3.options.stepOn));
        }, _this3)[0];
      }, this);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.draggables.forEach(function (draggable) {
        draggable.move(draggable.initPosition, 0, true, false);
        draggable.isOn = false;
      });
    }
  }, {
    key: "positions",
    get: function get() {
      return this.draggables.map(function (draggable) {
        var position = draggable.fixPosition.clone();
        position.isOn = draggable.isOn;
        return position;
      });
    },
    set: function set(positions) {
      var _this4 = this;

      var message = 'wrong array length';

      if (positions.length === this.draggables.length) {
        positions.forEach(function (point, i) {
          _this4.draggables[i].isOn = point.isOn;

          _this4.draggables[i].move(point, 0, true, true);
        }, this);
      } else {
        throw message;
      }
    }
  }]);

  return ListSwitcher;
}(_list__WEBPACK_IMPORTED_MODULE_2__["List"]);

function listSwitcherFactory(element, draggableElements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || element;
  draggableElements = Array.prototype.slice.call(draggableElements);
  var draggables = draggableElements.map(function (element) {
    return new _draggable__WEBPACK_IMPORTED_MODULE_1__["Draggable"](element, draggableOptions);
  });
  return new ListSwitcher(draggables, listOptions);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImJvdW5kVG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJwb2ludCIsInNpemUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsImdldFAzIiwicG9zaXRpb24iLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwiZWxlbWVudCIsInBhcmVudCIsInJldEZ1bmMiLCJib3VuZCIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJib3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiYm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsImJvdW5kVG9MaW5lIiwic3RhcnQiLCJlbmQiLCJhbHBoYSIsIk1hdGgiLCJhdGFuMiIsImJldGEiLCJQSSIsInNvbWVLIiwiY29zQmV0YSIsImNvcyIsInNpbkJldGEiLCJzaW4iLCJwb2ludDIiLCJQb2ludCIsIm5ld0VuZCIsImdldFBvaW50SW5MaW5lQnlMZW5naHQiLCJwb2ludENyb3NzaW5nIiwiZGlyZWN0Q3Jvc3NpbmciLCJib3VuZFRvQ2lyY2xlIiwiY2VudGVyIiwicmFkaXVzIiwiX3NpemUiLCJib3VuZGVkUG9pbnQiLCJib3VuZFRvQXJjIiwic3RhcnRBZ2xlIiwiZW5kQW5nbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImFuZ2xlIiwiZ2V0QW5nbGUiLCJub3JtYWxpemVBbmdsZSIsImJvdW5kQW5nbGUiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsIm1vdmUiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJwcmV2ZW50RG91YmxlSW5pdCIsImRyYWdnYWJsZSIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJwdXNoIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJvcHRpb25zIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uTW92ZSIsIm9uU3RhcnQiLCJhZGQiLCJvbkNyZWF0ZSIsImZpcmUiLCJpbml0IiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsImdldFNpemVPZkVsZW1lbnQiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwibXVsdCIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic3ViIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZW5hYmxlIiwiY29udGV4dCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiaSIsImxlbmd0aCIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwiaW5kZXgiLCJzcGxpY2UiLCJfZiIsInRvU3RyaW5nIiwicCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDQiLCJnZXRDZW50ZXIiLCJvciIsInJlY3QiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdyb3d0aCIsImdldE1pblNpZGUiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhclBvaW50IiwiYXJyIiwidmFsIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInV0aWwiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b1JhZGlhbiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJsaXN0cyIsIkxpc3QiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJpc0Rpc3BsYWNlbWVudCIsIm9uQ2hhbmdlIiwiZm9yRWFjaCIsImluaXREcmFnZ2FibGUiLCJtb3ZlSGFuZGxlciIsImxpc3QiLCJvbkVuZERpc3BsYXljZW1lbnQiLCJmaXhQb3NpdGlvbnMiLCJnZXRDdXJyZW50Rml4UG9zaXRpb24iLCJjdXJyZW50SW5kZXgiLCJleGNhbmdlSW5kZXgiLCJtb3ZlT3JTYXZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJtYXAiLCJ0YXJnZXRJbmRleCIsImluaXRQb3NpdGlvbnMiLCJBcnJheSIsImNvbmNhdCIsInJlbW92ZUl0ZW0iLCJqIiwiZGVzdHJveSIsInBvc2l0aW9ucyIsImxpc3RGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRzIiwiZHJhZ2dhYmxlT3B0aW9ucyIsImxpc3RPcHRpb25zIiwiTGlzdFN3aXRjaGVyIiwic3RlcE9uIiwiaXNPbiIsImdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYiLCJtb3ZlRHJhZ2dhYmxlIiwiZml4VG9PZmYiLCJtb3ZlRHJhZ2dhYmxlVG9PZmYiLCJmaXhPZmZQb3NpdGlvbiIsImxpc3RTd2l0Y2hlckZhY3RvcnkiLCJkcmFnZ2FibGVFbGVtZW50cyIsInBvc2l0aW9uVHlwZSIsIm5vdENyb3NzaW5nIiwiZmxvYXRMZWZ0IiwiZmxvYXRSaWdodCIsInBvc2l0aW9uRmFjdG9yeSIsInR5cGUiLCJfb3B0aW9ucyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwiYm91bmRSZWN0Iiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwiaW5uZXJEcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJzY29wZUZhY3RvcnkiLCJ0YXJnZXRFbGVtZW50cyIsInRhcmdldE9wdGlvbnMiLCJzY29wZU9wdGlvbnMiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInRvdWNoSWQiLCJydWxlcyIsInN1bSIsInJ1bGUiLCJzdG9wIiwic3RlcCIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1l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QUE2RSxFQUE3RSxDQUFwQjtBQUNEOztBQUVELFNBQVNtTCxVQUFULENBQW9CeUcsS0FBcEIsRUFBMkJsTCxHQUEzQixFQUFnQztBQUM5QixPQUFLLElBQUl2RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeU8sS0FBSyxDQUFDeE8sTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSXlPLEtBQUssQ0FBQ3pPLENBQUQsQ0FBTCxLQUFhdUQsR0FBakIsRUFBc0I7QUFDcEJrTCxXQUFLLENBQUNuTyxNQUFOLENBQWFOLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQUEsT0FBQztBQUNGO0FBQ0Y7O0FBQ0QsU0FBT3lPLEtBQVA7QUFDRDs7QUFFRCxJQUFNckosSUFBSSxHQUFHO0FBQ1hqTCxrQkFBZ0IsRUFBaEJBLGdCQURXO0FBRVg2RSxjQUFZLEVBQVpBLFlBRlc7QUFHWHFHLHdCQUFzQixFQUF0QkEsc0JBSFc7QUFJWGtJLE9BQUssRUFBTEEsS0FKVztBQUtYYSxVQUFRLEVBQVJBLFFBTFc7QUFNWHRQLFVBQVEsRUFBUkEsUUFOVztBQU9YSyxhQUFXLEVBQVhBLFdBUFc7QUFRWDZJLFlBQVUsRUFBVkE7QUFSVyxDQUFiO0FBV0E7QUFXZTVDLG1FQUFmLEUiLCJmaWxlIjoibGlzdHN3aXRjaGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpc3Rzd2l0Y2hlci5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LCBtb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfSwgdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfSxcbiAgZXZlbnRzID0gaXNUb3VjaCA/IHRvdWNoRXZlbnRzIDogbW91c2VFdmVudHMsXG4gIGRyYWdnYWJsZXMgPSBbXSxcbiAgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgICAgaXNEaXNwbGFjZW1lbnQ6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICBsaXN0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IG1vdmVIYW5kbGVyXG4gICAgY29uc3QgbGlzdCA9IHRoaXNcblxuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRGlzcGxhY2VtZW50KSB7XG4gICAgICBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICBsaXN0Lm9uU3RhcnQoZHJhZ2dhYmxlKVxuICAgICAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKG1vdmVIYW5kbGVyKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSlcbiAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtb3ZlT3JTYXZlKGRyYWdnYWJsZSwgcG9zaXRpb24sIHRpbWUpIHtcbiAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZSh0aGlzLmRyYWdnYWJsZXNbZXhjYW5nZUluZGV4XSwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLm1vdmUoZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2krMV0sIGZpeFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkcmFnZ2FibGUubW92ZShmaXhQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KGRyYWdnYWJsZSkge1xuICAgIGxldCBpXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBmb3IgKGkgPSBjdXJyZW50SW5kZXggKyAxOyBpIDwgc29ydGVkRHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpIC0gMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICB9XG4gICAgc29ydGVkRHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLmZpeFBvc2l0aW9uID0gZml4UG9zaXRpb25zW2kgLSAxXVxuICB9XG5cbiAgZ2V0Q3VycmVudEZpeFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IGluaXRQb3NpdGlvbnMubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pKVswXVxuICAgIH0pXG5cbiAgICByZXR1cm4gc29ydGVkRHJhZ2dhYmxlc1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5yZXNldCgpXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlc2V0KCkgLy90b2RvIHJlbW92ZSByZXNldCBpbiBmdXR1cmVcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0cywgTGlzdCwgbGlzdEZhY3RvcnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL2xpc3QnXG5cbmNsYXNzIExpc3RTd2l0Y2hlciBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgb3B0aW9ucy5zdGVwT24gPSBvcHRpb25zLnN0ZXBPbiB8fCBuZXcgUG9pbnQoLTUwLCAwKVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5pc09uID0gZmFsc2VcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5maXhUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlVG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbW92ZURyYWdnYWJsZShpbmRleCwgcG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW2ZpeE9mZlBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbildXG4gICAgY29uc3QgaXNPbiA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQocG9zaXRpb25zLCBwb3NpdGlvbiwgLTEsIEdlb21ldHJ5LmdldFhEaWZmZXJlbmNlKVxuXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiAhPT0gISFpc09uKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSAhIWlzT25cbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKHBvc2l0aW9uc1tpc09uXSwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGZpeFRvT2ZmKGluZGV4LCBmaXhPZmZQb3NpdGlvbikge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5maXhQb3NpdGlvbiA9IGZpeE9mZlBvc2l0aW9uXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlVG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUoZml4T2ZmUG9zaXRpb24sIHRpbWUsIHRydWUpXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuaXNPbiA/IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5zdWIodGhpcy5vcHRpb25zLnN0ZXBPbikgOiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgIH0sIHRoaXMpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSB8fCBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICAgIHBvc2l0aW9uLmlzT24gPSBkcmFnZ2FibGUuaXNPblxuICAgICAgcmV0dXJuIHBvc2l0aW9uXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0uaXNPbiA9IHBvaW50LmlzT25cbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RTd2l0Y2hlckZhY3RvcnkoZWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IGxpc3RPcHRpb25zID0gb3B0aW9ucy5saXN0IHx8IHt9XG5cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBlbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgTGlzdFN3aXRjaGVyKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsImltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIHJlbW92ZUl0ZW0sXG4gIHJhbmdlXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBydWxlKSB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iXSwic291cmNlUm9vdCI6IiJ9
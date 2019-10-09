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

/***/ "./node_modules/remove-array-items/dist/remove-array-items.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/remove-array-items/dist/remove-array-items.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
function removeItems (arr, startIdx, removeCount) {
  var i, length = arr.length;

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);

  var len = length - removeCount;

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }

  arr.length = len;
}

/* harmony default export */ __webpack_exports__["default"] = (removeItems);


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
/*! exports provided: Draggable, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _utils_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/classes */ "./src/utils/classes.js");
/* harmony import */ var _utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getdefaultparent */ "./src/utils/getdefaultparent.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! desandro-get-style-property */ "./node_modules/desandro-get-style-property/get-style-property.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    transformProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3___default()('transform'),
    transitionProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3___default()('transition');

function getTouchByID(element, touchId) {
  for (var i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i];
    }
  }

  return false;
}

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
  _scope__WEBPACK_IMPORTED_MODULE_6__["defaultScope"].addDraggable(draggable);
}

var Draggable =
/*#__PURE__*/
function () {
  function Draggable(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Draggable);

    var parent = options.parent || Object(_utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
    this.targets = [];
    this.options = Object.assign({
      parent: parent,
      bound: Object(_bound__WEBPACK_IMPORTED_MODULE_4__["boundToElement"])(parent, parent),
      startFilter: false,
      isContentBoxSize: false,
      position: false
    }, options);

    if (typeof options.handler === 'string') {
      this.handler = element.querySelector(options.handler) || element;
    } else {
      this.handler = options.handler || element;
    }

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
      this.offset = _geometry__WEBPACK_IMPORTED_MODULE_5__["Geometry"].getOffset(this.element, this.options.parent, true);
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
      this.handler.addEventListener(touchEvents.start, this._dragStart);
      this.handler.addEventListener(mouseEvents.start, this._dragStart);

      if (this.bound.refresh) {
        this.bound.refresh();
      }
    }
  }, {
    key: "reinit",
    value: function reinit() {
      this.offset = _geometry__WEBPACK_IMPORTED_MODULE_5__["Geometry"].getOffset(this.element, this.options.parent, true);
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
      return _geometry__WEBPACK_IMPORTED_MODULE_5__["Geometry"].getSizeOfElement(this.element, this.options.isContentBoxSize);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      this.position = this.offset.add(this._transformPosition || new _geometry__WEBPACK_IMPORTED_MODULE_5__["Point"](0, 0));
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
      this._startTouchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_5__["Point"](isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
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
      Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'active');
      this.onMove.fire(event);
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
      this.currentEvent = event;
      var touch;
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

      if (isTouchEvent) {
        touch = getTouchByID(event, this._touchId);

        if (!touch) {
          return;
        }
      }

      event.stopPropagation();
      event.preventDefault();
      var touchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_5__["Point"](isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

      var point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));

      point = this.bound(point, this.getSize());
      this.touchPoint = touchPoint;
      this.move(point, 0);
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

      if (isTouchEvent && !getTouchByID(event, this._touchId)) {
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
      Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'active');
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return new _geometry__WEBPACK_IMPORTED_MODULE_5__["Rectangle"](this.position, this.getSize());
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
      this.handler.removeEventListener(touchEvents.start, this._dragStart);
      this.handler.removeEventListener(mouseEvents.start, this._dragStart);
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
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
        Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'disable');
      } else {
        Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'disable');
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "add",
    value: function add(p) {
      return new Point(this.x + p.x, this.y + p.y);
    }
  }, {
    key: "sub",
    value: function sub(p) {
      return new Point(this.x - p.x, this.y - p.y);
    }
  }, {
    key: "mult",
    value: function mult(k) {
      return new Point(this.x * k, this.y * k);
    }
  }, {
    key: "negative",
    value: function negative() {
      return new Point(-this.x, -this.y);
    }
  }, {
    key: "compare",
    value: function compare(p) {
      return this.x === p.x && this.y === p.y;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "{x=".concat(this.x, ",y=").concat(this.y);
    }
  }]);

  return Point;
}();

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(position, size) {
    _classCallCheck(this, Rectangle);

    this.position = position;
    this.size = size;
  }

  _createClass(Rectangle, [{
    key: "getP1",
    value: function getP1() {
      return this.position;
    }
  }, {
    key: "getP2",
    value: function getP2() {
      return new Point(this.position.x + this.size.x, this.position.y);
    }
  }, {
    key: "getP3",
    value: function getP3() {
      return this.position.add(this.size);
    }
  }, {
    key: "getP4",
    value: function getP4() {
      return new Point(this.position.x, this.position.y + this.size.y);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.position.add(this.size.mult(0.5));
    }
  }, {
    key: "or",
    value: function or(rect) {
      var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y));
      var size = new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
      return new Rectangle(position, size);
    }
  }, {
    key: "and",
    value: function and(rect) {
      var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y));
      var size = new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);

      if (size.x <= 0 || size.y <= 0) {
        return null;
      }

      return new Rectangle(position, size);
    }
  }, {
    key: "includePoint",
    value: function includePoint(p) {
      return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
    }
  }, {
    key: "includeRectangle",
    value: function includeRectangle(rectangle) {
      return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
    }
  }, {
    key: "moveToBound",
    value: function moveToBound(rect, axis) {
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
    }
  }, {
    key: "getSquare",
    value: function getSquare() {
      return this.size.x * this.size.y;
    }
  }, {
    key: "styleApply",
    value: function styleApply(el) {
      el = el || document.querySelector('ind');
      el.style.left = this.position.x + 'px';
      el.style.top = this.position.y + 'px';
      el.style.width = this.size.x + 'px';
      el.style.height = this.size.y + 'px';
    }
  }, {
    key: "growth",
    value: function growth(size) {
      this.size = this.size.add(size);
      this.position = this.position.add(size.mult(-0.5));
    }
  }, {
    key: "getMinSide",
    value: function getMinSide() {
      return Math.min(this.size.x, this.size.y);
    }
  }]);

  return Rectangle;
}();
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
  indexOfNearestPoint: function indexOfNearestPoint(arr, val, radius, getDistance) {
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
  getSumValueOfStyleRule: function getSumValueOfStyleRule(element, rules) {
    return rules.reduce(function (sum, rule) {
      return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
    }, 0);
  },
  getSizeOfElement: function getSizeOfElement(el, isContentBoxSize) {
    var width = parseInt(window.getComputedStyle(el)['width']),
        height = parseInt(window.getComputedStyle(el)['height']);

    if (!isContentBoxSize) {
      width += this.getSumValueOfStyleRule(el, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width']);
      height += this.getSumValueOfStyleRule(el, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']);
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
            var index = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearestPoint(listOldPosition, options.getPosition(newObj), radius, getDistance);

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
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
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
          Object(remove_array_items__WEBPACK_IMPORTED_MODULE_0__["default"])(scope.draggables, draggable);
        });
      }

      if (targets) {
        targets.forEach(function (target) {
          Object(remove_array_items__WEBPACK_IMPORTED_MODULE_0__["default"])(scope.targets, target);
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
/*! exports provided: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
/* harmony import */ var _utils_range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/range.js */ "./src/utils/range.js");
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
/* harmony import */ var _utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getdefaultparent */ "./src/utils/getdefaultparent.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Dragee = {
  positionType: _positioning__WEBPACK_IMPORTED_MODULE_5__["positionType"],
  positionFactory: _positioning__WEBPACK_IMPORTED_MODULE_5__["positionFactory"],
  sortingFactory: _positioning__WEBPACK_IMPORTED_MODULE_5__["sortingFactory"],
  scopes: _scope__WEBPACK_IMPORTED_MODULE_6__["scopes"],
  Event: _event__WEBPACK_IMPORTED_MODULE_3__["default"]
}; //todo remove after refactore

var addToDefaultScope = function addToDefaultScope(target) {
  _scope__WEBPACK_IMPORTED_MODULE_6__["defaultScope"].addTarget(target);
};

var Target =
/*#__PURE__*/
function () {
  function Target(element, draggables) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Target);

    var target = this;
    var parent = options.parent || Object(_utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      parent: parent,
      sorting: Dragee.sortingFactory(Dragee.positionType.floatLeft)(80, _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].transformedSpaceDistanceFactory({
        x: 1,
        y: 4
      })),
      positioning: Dragee.positionFactory(Dragee.positionType.floatLeft)(this.getRectangle.bind(this), {
        removable: true
      })
    }, options);
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
        indexesOfNew = Object(_utils_range_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.innerDraggables.length);
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
      return _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].createRectangleFromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
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
        return Object(remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(scope.targets, _this2);
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
          Object(remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.innerDraggables, draggable);

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

/***/ "./src/utils/classes.js":
/*!******************************!*\
  !*** ./src/utils/classes.js ***!
  \******************************/
/*! exports provided: hasClass, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
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

/***/ }),

/***/ "./src/utils/getdefaultparent.js":
/*!***************************************!*\
  !*** ./src/utils/getdefaultparent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDefaultParent; });
function getDefaultParent(element) {
  var parent = element.parentNode;

  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode;
  }

  return parent;
}

/***/ }),

/***/ "./src/utils/range.js":
/*!****************************!*\
  !*** ./src/utils/range.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvcmFuZ2UuanMiXSwibmFtZXMiOlsiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJwb3NpdGlvbiIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJlbGVtZW50IiwicGFyZW50IiwicmV0RnVuYyIsImJvdW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiTWF0aCIsImF0YW4yIiwiYmV0YSIsIlBJIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJlbmRBbmdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYW5nbGUiLCJnZXRBbmdsZSIsIm5vcm1hbGl6ZUFuZ2xlIiwiYm91bmRBbmdsZSIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsIkRyYWdlZSIsIkV2ZW50IiwiaXNUb3VjaCIsIndpbmRvdyIsIm1vdXNlRXZlbnRzIiwibW92ZSIsInRvdWNoRXZlbnRzIiwiZXZlbnRzIiwiZHJhZ2dhYmxlcyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJpIiwiY2hhbmdlZFRvdWNoZXMiLCJsZW5ndGgiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJkcmFnZ2FibGUiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwicHVzaCIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwib3B0aW9ucyIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwiaGFuZGxlciIsInF1ZXJ5U2VsZWN0b3IiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uTW92ZSIsIm9uU3RhcnQiLCJhZGQiLCJvbkNyZWF0ZSIsImZpcmUiLCJpbml0IiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsImdldFNpemVPZkVsZW1lbnQiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwibXVsdCIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic3ViIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZW5hYmxlIiwiY29udGV4dCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJpbmRleCIsInNwbGljZSIsIl9mIiwicCIsImsiLCJyZWN0IiwibWluIiwibWF4IiwiaW5jbHVkZVBvaW50IiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImVsIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b1JhZGlhbiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsImdldFNxdWFyZSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50IiwiZ2V0UDQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJjb25jYXQiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInJlbW92ZUl0ZW1zIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIkFycmF5IiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic3RvcCIsInN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtR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TSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxPQUFPNEcsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHclYsS0FBUDtBQUNBQSxTQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELE1BQUksT0FBT3NWLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBS0EsSUFBSSxHQUFHLENBQVAsSUFBWXRWLEtBQUssSUFBSXFWLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZdFYsS0FBSyxJQUFJcVYsSUFBekQsRUFBZ0U7QUFDOUQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJdFMsQ0FBQyxHQUFHL0MsS0FBYixFQUFvQnNWLElBQUksR0FBRyxDQUFQLEdBQVd2UyxDQUFDLEdBQUdzUyxJQUFmLEdBQXNCdFMsQ0FBQyxHQUFHc1MsSUFBOUMsRUFBb0R0UyxDQUFDLElBQUl1UyxJQUF6RCxFQUErRDtBQUM3RDdHLFVBQU0sQ0FBQ2pMLElBQVAsQ0FBWVQsQ0FBWjtBQUNEOztBQUNELFNBQU8wTCxNQUFQO0FBQ0QsQyIsImZpbGUiOiJkcmFnZ2FibGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZHJhZ2dhYmxlLmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgdmFyIGksIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0SWR4ID49IGxlbmd0aCB8fCByZW1vdmVDb3VudCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQ291bnQgPSAoc3RhcnRJZHggKyByZW1vdmVDb3VudCA+IGxlbmd0aCA/IGxlbmd0aCAtIHN0YXJ0SWR4IDogcmVtb3ZlQ291bnQpO1xuXG4gIHZhciBsZW4gPSBsZW5ndGggLSByZW1vdmVDb3VudDtcblxuICBmb3IgKGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKSB7XG4gICAgYXJyW2ldID0gYXJyW2kgKyByZW1vdmVDb3VudF07XG4gIH1cblxuICBhcnIubGVuZ3RoID0gbGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVJdGVtcztcbiIsImltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaGFuZGxlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmhhbmRsZXIpIHx8IGVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVyID0gb3B0aW9ucy5oYW5kbGVyIHx8IGVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsImNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG59XG5cbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlKHAxLCBwMikge1xuICAgIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxuICB9LFxuICBkaXN0YW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbiAgfSxcbiAgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlKSB7XG4gICAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICAgIGdldERpc3RhbmNlID0gZ2V0RGlzdGFuY2UgfHwgR2VvbWV0cnkuZ2V0RGlzdGFuY2VcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHNpemUgPSBnZXREaXN0YW5jZShhcnJbMF0sIHZhbClcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wID0gZ2V0RGlzdGFuY2UoYXJyW2ldLCB2YWwpXG4gICAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgICAgaW5kZXggPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4XG4gIH0sXG4gIGJvdW5kKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQobWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gICAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gICAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgICB0ZW1wID0gTDJQMVxuICAgICAgTDJQMSA9IEwxUDFcbiAgICAgIEwxUDEgPSB0ZW1wXG4gICAgICB0ZW1wID0gTDJQMlxuICAgICAgTDJQMiA9IEwxUDJcbiAgICAgIEwxUDIgPSB0ZW1wXG4gICAgfVxuICAgIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIHggPSBMMVAxLnhcbiAgICAgIHkgPSB4ICogazIgKyBiMlxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICAgIH0gZWxzZSB7XG4gICAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICAgIHkgPSB4ICogazEgKyBiMVxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICAgIH1cbiAgfSxcbiAgYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gICAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICAgIHQgPSBhcF9hYiAvIGFiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxuICB9LFxuICBnZXRQb2ludEluTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsLCBwYXJlbnQsIGlzQ29udGVudEJveFNpemUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplT2ZFbGVtZW50KGVsLCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMuZ2V0T2Zmc2V0KGVsLCBwYXJlbnQgfHwgZWwucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZSksIHNpemUpXG4gIH0sXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgICB9LCAwKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50KGVsLCBpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpWyd3aWR0aCddKSwgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IHRoaXMuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJ10pXG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9pbnQod2lkdGgsIGhlaWdodClcbiAgfSxcbiAgZ2V0T2Zmc2V0KGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKGZ1bmN0aW9uKGJQb2ludCkge1xuICAgICAgcmV0dXJuICBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gICAgfSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnB1c2gocG9pbnQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICBnZXRBbmdsZShwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlKGFuZ2xlKSB7XG4gICAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG4gIH0sXG4gIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICAgIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpLFxuICAgICAgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gICAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG4gIH0sXG4gIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbXMoc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBwb3NpdGlvblR5cGUsICBwb3NpdGlvbkZhY3RvcnksIHNvcnRpbmdGYWN0b3J5LCBzY29wZXMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc29ydGluZzogRHJhZ2VlLnNvcnRpbmdGYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSg4MCwgR2VvbWV0cnkudHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSkpLFxuICAgICAgcG9zaXRpb25pbmc6IERyYWdlZS5wb3NpdGlvbkZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksIHsgcmVtb3ZhYmxlOiB0cnVlIH0pXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMuYmVmb3JlQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICBpZiAob3B0aW9ucy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5vblJlbW92ZS5hZGQob3B0aW9ucy5vblJlbW92ZSlcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5vbkFkZCkge1xuICAgICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICAgIHRoaXMuYmVmb3JlQWRkLmFkZChvcHRpb25zLmJlZm9yZUFkZClcbiAgICB9XG5cbiAgICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIERyYWdlZS5zY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW1zKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuICAgIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtcyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IFRhcmdldCB9XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
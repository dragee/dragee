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
/*! exports provided: Draggable, draggables, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggables", function() { return draggables; });
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
      this.element.addEventListener(touchEvents.start, this._dragStart);
      this.element.addEventListener(mouseEvents.start, this._dragStart);

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

var targets = [],
    addToDefaultScope = function addToDefaultScope(target) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3NwaWRlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jcmVhdGVjYW52YXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL3JhbmdlLmpzIl0sIm5hbWVzIjpbImJvdW5kVG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJwb2ludCIsInNpemUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsImdldFAzIiwicG9zaXRpb24iLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwiZWxlbWVudCIsInBhcmVudCIsInJldEZ1bmMiLCJib3VuZCIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJib3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiYm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsImJvdW5kVG9MaW5lIiwic3RhcnQiLCJlbmQiLCJhbHBoYSIsIk1hdGgiLCJhdGFuMiIsImJldGEiLCJQSSIsInNvbWVLIiwiY29zQmV0YSIsImNvcyIsInNpbkJldGEiLCJzaW4iLCJwb2ludDIiLCJQb2ludCIsIm5ld0VuZCIsImdldFBvaW50SW5MaW5lQnlMZW5naHQiLCJwb2ludENyb3NzaW5nIiwiZGlyZWN0Q3Jvc3NpbmciLCJib3VuZFRvQ2lyY2xlIiwiY2VudGVyIiwicmFkaXVzIiwiX3NpemUiLCJib3VuZGVkUG9pbnQiLCJib3VuZFRvQXJjIiwic3RhcnRBZ2xlIiwiZW5kQW5nbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImFuZ2xlIiwiZ2V0QW5nbGUiLCJub3JtYWxpemVBbmdsZSIsImJvdW5kQW5nbGUiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsIm1vdmUiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiaSIsImNoYW5nZWRUb3VjaGVzIiwibGVuZ3RoIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZHJhZ2dhYmxlIiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsInB1c2giLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsIm9wdGlvbnMiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25Nb3ZlIiwib25TdGFydCIsImFkZCIsIm9uQ3JlYXRlIiwiZmlyZSIsImluaXQiLCJfZW5hYmxlIiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWNhbHVsYXRlIiwiZ2V0U2l6ZU9mRWxlbWVudCIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsImdldFNpemUiLCJtdWx0IiwidHJhbnNmb3JtIiwic3R5bGUiLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJpbmRleE9mIiwidGVzdCIsInJlcGxhY2UiLCJ0aW1lIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzdWIiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJlbmFibGUiLCJjb250ZXh0IiwiZnVuY3MiLCJwcm90b3R5cGUiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiZnMiLCJyZXZlcnNlIiwicmV0VmFsdWUiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsImluZGV4Iiwic3BsaWNlIiwiX2YiLCJwIiwiayIsInJlY3QiLCJtaW4iLCJtYXgiLCJpbmNsdWRlUG9pbnQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b1JhZGlhbiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsImdldFNxdWFyZSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50IiwiZ2V0UDQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJjb25jYXQiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInJlbW92ZUl0ZW1zIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIkFycmF5Iiwic3BpZGVycyIsIlNwaWRlciIsImFyZWEiLCJlbGVtZW50cyIsImFyZWFSZWN0YW5nbGUiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImdldE1pblNpZGUiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJoYWxmU2l6ZSIsImRyYXciLCJpc0luaXQiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJmaWxsIiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUEwQztBQUMvQztBQUNBLEVBQUUsbUNBQVE7QUFDVjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLENBQUMsTUFBTSxFQU1O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QUcsQ0FBUjtBQUNEOztBQUNELE1BQUksT0FBTzBYLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBS0EsSUFBSSxHQUFHLENBQVAsSUFBWTFYLEtBQUssSUFBSXlYLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZMVgsS0FBSyxJQUFJeVgsSUFBekQsRUFBZ0U7QUFDOUQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJMVUsQ0FBQyxHQUFHL0MsS0FBYixFQUFvQjBYLElBQUksR0FBRyxDQUFQLEdBQVczVSxDQUFDLEdBQUcwVSxJQUFmLEdBQXNCMVUsQ0FBQyxHQUFHMFUsSUFBOUMsRUFBb0QxVSxDQUFDLElBQUkyVSxJQUF6RCxFQUErRDtBQUM3RGxKLFVBQU0sQ0FBQ2hMLElBQVAsQ0FBWVQsQ0FBWjtBQUNEOztBQUNELFNBQU95TCxNQUFQO0FBQ0QsQyIsImZpbGUiOiJzcGlkZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc3BpZGVyLmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgdmFyIGksIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0SWR4ID49IGxlbmd0aCB8fCByZW1vdmVDb3VudCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQ291bnQgPSAoc3RhcnRJZHggKyByZW1vdmVDb3VudCA+IGxlbmd0aCA/IGxlbmd0aCAtIHN0YXJ0SWR4IDogcmVtb3ZlQ291bnQpO1xuXG4gIHZhciBsZW4gPSBsZW5ndGggLSByZW1vdmVDb3VudDtcblxuICBmb3IgKGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKSB7XG4gICAgYXJyW2ldID0gYXJyW2kgKyByZW1vdmVDb3VudF07XG4gIH1cblxuICBhcnIubGVuZ3RoID0gbGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVJdGVtcztcbiIsImltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBzcGlkZXJzID0gW11cblxuY2xhc3MgU3BpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBzcGlkZXJzLnB1c2godGhpcylcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGVcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHN0YXJ0ID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGVuZCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvTGluZShzdGFydCwgZW5kKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzWzBdLmdldENlbnRlcigpXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzW2ldLmdldENlbnRlcigpXG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLm9wdGlvbnMubGluZVdpZHRoXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gIH1cbn1cblxuZXhwb3J0IHsgc3BpZGVycywgU3BpZGVyIH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBwb3NpdGlvblR5cGUsICBwb3NpdGlvbkZhY3RvcnksIHNvcnRpbmdGYWN0b3J5LCBzY29wZXMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCB0YXJnZXRzID0gW10sXG4gIGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gIH1cblxuY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc29ydGluZzogRHJhZ2VlLnNvcnRpbmdGYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSg4MCwgR2VvbWV0cnkudHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSkpLFxuICAgICAgcG9zaXRpb25pbmc6IERyYWdlZS5wb3NpdGlvbkZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksIHsgcmVtb3ZhYmxlOiB0cnVlIH0pXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRhcmdldHMucHVzaCh0aGlzKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMuYmVmb3JlQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICBpZiAob3B0aW9ucy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5vblJlbW92ZS5hZGQob3B0aW9ucy5vblJlbW92ZSlcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5vbkFkZCkge1xuICAgICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICAgIHRoaXMuYmVmb3JlQWRkLmFkZChvcHRpb25zLmJlZm9yZUFkZClcbiAgICB9XG5cbiAgICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIERyYWdlZS5zY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW1zKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuICAgIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtcyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
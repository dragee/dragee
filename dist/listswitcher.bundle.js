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
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
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
      isDisplacement: false,
      isSortable: true
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
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

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
    key: "sortIfPossible",
    value: function sortIfPossible(draggable) {
      var fixPosition = draggable.fixPosition;
      var currentIndex = this.draggables.indexOf(draggable);
      var nextDraggable = this.draggables[currentIndex + 1];
      var prevDraggable = this.draggables[currentIndex - 1];

      if (draggable.downDirection && nextDraggable) {
        var distance = this.options.getDistance(draggable.position, nextDraggable.position);

        if (distance < this.options.radius) {
          draggable.fixPosition = nextDraggable.fixPosition;
          this.moveOrSave(nextDraggable, fixPosition, this.options.timeExcange);
          var _ref = [this.draggables[currentIndex + 1], this.draggables[currentIndex]];
          this.draggables[currentIndex] = _ref[0];
          this.draggables[currentIndex + 1] = _ref[1];
          this.sortIfPossible(draggable);
        }
      }

      if (draggable.upDirection && prevDraggable) {
        var _distance = this.options.getDistance(draggable.position, prevDraggable.position);

        if (_distance < this.options.radius) {
          draggable.fixPosition = prevDraggable.fixPosition;
          this.moveOrSave(prevDraggable, fixPosition, this.options.timeExcange);
          var _ref2 = [this.draggables[currentIndex - 1], this.draggables[currentIndex]];
          this.draggables[currentIndex] = _ref2[0];
          this.draggables[currentIndex - 1] = _ref2[1];
          this.sortIfPossible(draggable);
        }
      }
    }
  }, {
    key: "onEndDisplaycement",
    value: function onEndDisplaycement(draggable) {
      var sortedDraggables = this.getSortedDraggables();
      var fixPositions = sortedDraggables.map(function (draggable) {
        return draggable.fixPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);
      var targetIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

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

        Object(remove_array_items__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.draggables, draggable);
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
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

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
      var isOn = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearestPoint(positions, position, -1, _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getXDifference);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9nZXRkZWZhdWx0cGFyZW50LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9yYW5nZS5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiRHJhZ2VlIiwiRXZlbnQiLCJpc1RvdWNoIiwid2luZG93IiwibW91c2VFdmVudHMiLCJtb3ZlIiwidG91Y2hFdmVudHMiLCJldmVudHMiLCJkcmFnZ2FibGVzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImkiLCJjaGFuZ2VkVG91Y2hlcyIsImxlbmd0aCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImRyYWdnYWJsZSIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJwdXNoIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJvcHRpb25zIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uTW92ZSIsIm9uU3RhcnQiLCJhZGQiLCJvbkNyZWF0ZSIsImZpcmUiLCJpbml0IiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsImdldFNpemVPZkVsZW1lbnQiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwibXVsdCIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic3ViIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZW5hYmxlIiwiY29udGV4dCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJpbmRleCIsInNwbGljZSIsIl9mIiwicCIsImsiLCJyZWN0IiwibWluIiwibWF4IiwiaW5jbHVkZVBvaW50IiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwibGlzdHMiLCJMaXN0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwiaXNEaXNwbGFjZW1lbnQiLCJpc1NvcnRhYmxlIiwib25DaGFuZ2UiLCJmb3JFYWNoIiwiaW5pdERyYWdnYWJsZSIsIm1vdmVIYW5kbGVyIiwibGlzdCIsIm9uRW5kRGlzcGxheWNlbWVudCIsImZpeFBvc2l0aW9ucyIsImdldEN1cnJlbnRGaXhQb3NpdGlvbiIsImN1cnJlbnRJbmRleCIsImV4Y2FuZ2VJbmRleCIsIm1vdmVPclNhdmUiLCJuZXh0RHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsInNvcnRJZlBvc3NpYmxlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJtYXAiLCJ0YXJnZXRJbmRleCIsImluaXRQb3NpdGlvbnMiLCJjb21wYXJlIiwiQXJyYXkiLCJjb25jYXQiLCJyZW1vdmVJdGVtcyIsImoiLCJkZXN0cm95IiwicG9zaXRpb25zIiwibGlzdEZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJMaXN0U3dpdGNoZXIiLCJzdGVwT24iLCJpc09uIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZiIsIm1vdmVEcmFnZ2FibGUiLCJmaXhUb09mZiIsIm1vdmVEcmFnZ2FibGVUb09mZiIsImZpeE9mZlBvc2l0aW9uIiwibGlzdFN3aXRjaGVyRmFjdG9yeSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsImdldFNxdWFyZSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50IiwiZ2V0UDQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwicmFuZ2UiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJzdG9wIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBMEM7QUFDL0M7QUFDQSxFQUFFLG1DQUFRO0FBQ1Y7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixDQUFDLE1BQU0sRUFNTjs7QUFFRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEREO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUIzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxTQUExQixFQUFxQztBQUMxQyxTQUFPLFVBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzNCLFFBQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLEVBQWxCO0FBQUEsUUFDRUMsTUFBTSxHQUFHTCxTQUFTLENBQUNNLEtBQVYsRUFEWDs7QUFHQSxRQUFJTixTQUFTLENBQUNPLFFBQVYsQ0FBbUJDLENBQW5CLEdBQXVCTCxTQUFTLENBQUNLLENBQXJDLEVBQXdDO0FBQ3JDTCxlQUFTLENBQUNLLENBQVYsR0FBY1IsU0FBUyxDQUFDTyxRQUFWLENBQW1CQyxDQUFsQztBQUNEOztBQUNELFFBQUlSLFNBQVMsQ0FBQ08sUUFBVixDQUFtQkUsQ0FBbkIsR0FBdUJOLFNBQVMsQ0FBQ00sQ0FBckMsRUFBd0M7QUFDdENOLGVBQVMsQ0FBQ00sQ0FBVixHQUFjVCxTQUFTLENBQUNPLFFBQVYsQ0FBbUJFLENBQWpDO0FBQ0Q7O0FBQ0QsUUFBSUosTUFBTSxDQUFDRyxDQUFQLEdBQVdMLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjTixJQUFJLENBQUNNLENBQWxDLEVBQXFDO0FBQ25DTCxlQUFTLENBQUNLLENBQVYsR0FBY0gsTUFBTSxDQUFDRyxDQUFQLEdBQVdOLElBQUksQ0FBQ00sQ0FBOUI7QUFDRDs7QUFDRCxRQUFJSCxNQUFNLENBQUNJLENBQVAsR0FBV04sU0FBUyxDQUFDTSxDQUFWLEdBQWNQLElBQUksQ0FBQ08sQ0FBbEMsRUFBcUM7QUFDbkNOLGVBQVMsQ0FBQ00sQ0FBVixHQUFjSixNQUFNLENBQUNJLENBQVAsR0FBV1AsSUFBSSxDQUFDTyxDQUE5QjtBQUNEOztBQUVELFdBQU9OLFNBQVA7QUFDRCxHQWxCRDtBQW1CRDtBQUVNLFNBQVNPLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxNQUFqQyxFQUF5QztBQUM5QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFXO0FBQ3pCLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JDLFNBQWxCLENBQVA7QUFDRCxHQUZEOztBQUdBLE1BQUlGLEtBQUo7O0FBRUFELFNBQU8sQ0FBQ0ksT0FBUixHQUFrQixZQUFXO0FBQzNCSCxTQUFLLEdBQUdmLGdCQUFnQixDQUFDbUIsa0RBQVEsQ0FBQ0MsMEJBQVQsQ0FBb0NSLE9BQXBDLEVBQTZDQyxNQUE3QyxDQUFELENBQXhCO0FBQ0QsR0FGRDs7QUFJQUMsU0FBTyxDQUFDSSxPQUFSO0FBQ0EsU0FBT0osT0FBUDtBQUNEO0FBRU0sU0FBU08sWUFBVCxDQUFzQlosQ0FBdEIsRUFBeUJhLE1BQXpCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUM1QyxTQUFPLFVBQVNyQixLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMzQixRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixFQUFsQjtBQUNBRCxhQUFTLENBQUNLLENBQVYsR0FBY0EsQ0FBZDs7QUFDQSxRQUFJYSxNQUFNLEdBQUdsQixTQUFTLENBQUNNLENBQXZCLEVBQTBCO0FBQ3hCTixlQUFTLENBQUNNLENBQVYsR0FBY1ksTUFBZDtBQUNEOztBQUNELFFBQUlDLElBQUksR0FBR25CLFNBQVMsQ0FBQ00sQ0FBVixHQUFjUCxJQUFJLENBQUNPLENBQTlCLEVBQWlDO0FBQy9CTixlQUFTLENBQUNNLENBQVYsR0FBY2EsSUFBSSxHQUFHcEIsSUFBSSxDQUFDTyxDQUExQjtBQUNEOztBQUVELFdBQU9OLFNBQVA7QUFDRCxHQVhEO0FBWUQ7QUFFTSxTQUFTb0IsWUFBVCxDQUFzQmQsQ0FBdEIsRUFBeUJlLE1BQXpCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUM1QyxTQUFPLFVBQVN4QixLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMzQixRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixFQUFsQjtBQUNBRCxhQUFTLENBQUNNLENBQVYsR0FBY0EsQ0FBZDs7QUFDQSxRQUFJZSxNQUFNLEdBQUdyQixTQUFTLENBQUNLLENBQXZCLEVBQTBCO0FBQ3hCTCxlQUFTLENBQUNLLENBQVYsR0FBY2dCLE1BQWQ7QUFDRDs7QUFDRCxRQUFJQyxJQUFJLEdBQUd0QixTQUFTLENBQUNLLENBQVYsR0FBY04sSUFBSSxDQUFDTSxDQUE5QixFQUFpQztBQUMvQkwsZUFBUyxDQUFDSyxDQUFWLEdBQWNpQixJQUFJLEdBQUd2QixJQUFJLENBQUNNLENBQTFCO0FBQ0Q7O0FBQ0QsV0FBT0wsU0FBUDtBQUNELEdBVkQ7QUFXRDtBQUVNLFNBQVN1QixXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDdEMsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBRyxDQUFDbkIsQ0FBSixHQUFRa0IsS0FBSyxDQUFDbEIsQ0FBekIsRUFBNEJtQixHQUFHLENBQUNwQixDQUFKLEdBQVFtQixLQUFLLENBQUNuQixDQUExQyxDQUFkO0FBQUEsTUFDRXdCLElBQUksR0FBR0gsS0FBSyxHQUFHQyxJQUFJLENBQUNHLEVBQUwsR0FBVSxDQUQzQjtBQUFBLE1BRUVDLEtBQUssR0FBRyxFQUZWO0FBQUEsTUFHRUMsT0FBTyxHQUFHTCxJQUFJLENBQUNNLEdBQUwsQ0FBU0osSUFBVCxDQUhaO0FBQUEsTUFJRUssT0FBTyxHQUFHUCxJQUFJLENBQUNRLEdBQUwsQ0FBU04sSUFBVCxDQUpaO0FBTUEsU0FBTyxVQUFTL0IsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsUUFBTXFDLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUFVdkMsS0FBSyxDQUFDTyxDQUFOLEdBQVUwQixLQUFLLEdBQUdDLE9BQTVCLEVBQXFDbEMsS0FBSyxDQUFDUSxDQUFOLEdBQVV5QixLQUFLLEdBQUdHLE9BQXZELENBQWY7QUFBQSxRQUNFSSxNQUFNLEdBQUd2QixrREFBUSxDQUFDd0Isc0JBQVQsQ0FBZ0NkLEdBQWhDLEVBQXFDRCxLQUFyQyxFQUE0Q3pCLElBQUksQ0FBQ00sQ0FBakQsQ0FEWDtBQUVBLFFBQUltQyxhQUFhLEdBQUd6QixrREFBUSxDQUFDMEIsY0FBVCxDQUF3QmpCLEtBQXhCLEVBQStCQyxHQUEvQixFQUFvQzNCLEtBQXBDLEVBQTJDc0MsTUFBM0MsQ0FBcEI7QUFFQUksaUJBQWEsR0FBR3pCLGtEQUFRLENBQUNRLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCYyxNQUE1QixFQUFvQ0UsYUFBcEMsQ0FBaEI7QUFDQSxXQUFPQSxhQUFQO0FBQ0QsR0FQRDtBQVFEO0FBRU0sU0FBU0UsYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQzVDLFNBQU8sVUFBUzlDLEtBQVQsRUFBZ0IrQyxLQUFoQixFQUF1QjtBQUM1QixRQUFNQyxZQUFZLEdBQUcvQixrREFBUSxDQUFDd0Isc0JBQVQsQ0FBZ0NJLE1BQWhDLEVBQXdDN0MsS0FBeEMsRUFBK0M4QyxNQUEvQyxDQUFyQjtBQUNBLFdBQU9FLFlBQVA7QUFDRCxHQUhEO0FBSUQ7QUFFTSxTQUFTQyxVQUFULENBQW9CSixNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NJLFNBQXBDLEVBQStDQyxRQUEvQyxFQUF5RDtBQUM5RCxTQUFPLFVBQVNuRCxLQUFULEVBQWdCK0MsS0FBaEIsRUFBdUI7QUFDNUIsUUFBTUssZUFBZSxHQUFHLE9BQU9GLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQXhFO0FBQ0EsUUFBTUcsY0FBYyxHQUFHLE9BQU9ILFNBQVAsS0FBcUIsVUFBckIsR0FBa0NDLFFBQVEsRUFBMUMsR0FBK0NBLFFBQXRFO0FBRUEsUUFBSUcsS0FBSyxHQUFHckMsa0RBQVEsQ0FBQ3NDLFFBQVQsQ0FBa0JWLE1BQWxCLEVBQTBCN0MsS0FBMUIsQ0FBWjtBQUNBc0QsU0FBSyxHQUFHckMsa0RBQVEsQ0FBQ3VDLGNBQVQsQ0FBd0JGLEtBQXhCLENBQVI7QUFDQUEsU0FBSyxHQUFHckMsa0RBQVEsQ0FBQ3dDLFVBQVQsQ0FBb0JMLGVBQXBCLEVBQXFDQyxjQUFyQyxFQUFxREMsS0FBckQsQ0FBUjtBQUNBLFdBQU9yQyxrREFBUSxDQUFDeUMsd0JBQVQsQ0FBa0NKLEtBQWxDLEVBQXlDUixNQUF6QyxFQUFpREQsTUFBakQsQ0FBUDtBQUNELEdBUkQ7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNYyxNQUFNLEdBQUc7QUFBRUMsT0FBSyxFQUFMQSw4Q0FBS0E7QUFBUCxDQUFmLEMsQ0FBeUI7O0FBRXpCLElBQU1DLE9BQU8sR0FBRyxrQkFBa0JDLE1BQWxDO0FBQUEsSUFBMENDLFdBQVcsR0FBRztBQUNwRHJDLE9BQUssRUFBRSxXQUQ2QztBQUVwRHNDLE1BQUksRUFBRSxXQUY4QztBQUdwRHJDLEtBQUcsRUFBRTtBQUgrQyxDQUF4RDtBQUFBLElBSUtzQyxXQUFXLEdBQUc7QUFDZnZDLE9BQUssRUFBRSxZQURRO0FBRWZzQyxNQUFJLEVBQUUsV0FGUztBQUdmckMsS0FBRyxFQUFFO0FBSFUsQ0FKbkI7QUFBQSxJQVNFdUMsTUFBTSxHQUFHTCxPQUFPLEdBQUdJLFdBQUgsR0FBaUJGLFdBVG5DO0FBQUEsSUFVRUksVUFBVSxHQUFHLEVBVmY7QUFBQSxJQVdFQyxpQkFBaUIsR0FBR0Msa0VBQWdCLENBQUMsV0FBRCxDQVh0QztBQUFBLElBWUVDLGtCQUFrQixHQUFHRCxrRUFBZ0IsQ0FBQyxZQUFELENBWnZDOztBQWNBLFNBQVNFLFlBQVQsQ0FBc0I3RCxPQUF0QixFQUErQjhELE9BQS9CLEVBQXdDO0FBQ3RDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9ELE9BQU8sQ0FBQ2dFLGNBQVIsQ0FBdUJDLE1BQTNDLEVBQW1ERixDQUFDLEVBQXBELEVBQXdEO0FBQ3RELFFBQUkvRCxPQUFPLENBQUNnRSxjQUFSLENBQXVCRCxDQUF2QixFQUEwQkcsVUFBMUIsS0FBeUNKLE9BQTdDLEVBQXNEO0FBQ3BELGFBQU85RCxPQUFPLENBQUNnRSxjQUFSLENBQXVCRCxDQUF2QixDQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFTSSxpQkFBVCxDQUEyQkMsU0FBM0IsRUFBc0M7QUFDcEMsTUFBTUMsT0FBTyxHQUFHLDRFQUFoQjs7QUFDQSxNQUFJWixVQUFVLENBQUNhLElBQVgsQ0FBZ0IsVUFBQ0MsUUFBRDtBQUFBLFdBQWNILFNBQVMsQ0FBQ3BFLE9BQVYsS0FBc0J1RSxRQUFRLENBQUN2RSxPQUE3QztBQUFBLEdBQWhCLENBQUosRUFBMkU7QUFDekUsVUFBTXFFLE9BQU47QUFDRDs7QUFDRFosWUFBVSxDQUFDZSxJQUFYLENBQWdCSixTQUFoQjtBQUNEOztBQUVELFNBQVNLLGlCQUFULENBQTJCTCxTQUEzQixFQUFzQztBQUNwQ00scURBQVksQ0FBQ0MsWUFBYixDQUEwQlAsU0FBMUI7QUFDRDs7SUFFS1EsUzs7O0FBQ0oscUJBQVk1RSxPQUFaLEVBQWlDO0FBQUE7O0FBQUEsUUFBWjZFLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDL0IsUUFBTTVFLE1BQU0sR0FBRzRFLE9BQU8sQ0FBQzVFLE1BQVIsSUFBa0I2RSx1RUFBZ0IsQ0FBQzlFLE9BQUQsQ0FBakQ7QUFDQSxTQUFLK0UsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLRixPQUFMLEdBQWVHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCaEYsWUFBTSxFQUFFQSxNQURtQjtBQUUzQkUsV0FBSyxFQUFFSiw2REFBYyxDQUFDRSxNQUFELEVBQVNBLE1BQVQsQ0FGTTtBQUczQmlGLGlCQUFXLEVBQUUsS0FIYztBQUkzQkMsc0JBQWdCLEVBQUUsS0FKUztBQUszQnZGLGNBQVEsRUFBRTtBQUxpQixLQUFkLEVBTVppRixPQU5ZLENBQWY7QUFRQSxTQUFLTyxLQUFMLEdBQWEsSUFBSW5DLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixFQUF1QjtBQUFFbUMsZUFBUyxFQUFFLElBQWI7QUFBbUJDLGtCQUFZLEVBQUU7QUFBakMsS0FBdkIsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJdEMsTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWQ7QUFDQSxTQUFLc0MsT0FBTCxHQUFlLElBQUl2QyxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBZjtBQUVBLFNBQUtrQyxLQUFMLENBQVdLLEdBQVgsQ0FBZTtBQUFBLGFBQU0sS0FBSSxDQUFDbkMsSUFBTCxDQUFVLEtBQUksQ0FBQzFELFFBQWYsRUFBeUIsQ0FBekIsRUFBNEIsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBTjtBQUFBLEtBQWY7O0FBRUEsUUFBSWlGLE9BQU8sQ0FBQ08sS0FBWixFQUFtQjtBQUNqQixXQUFLQSxLQUFMLENBQVdLLEdBQVgsQ0FBZVosT0FBTyxDQUFDTyxLQUF2QjtBQUNEOztBQUNELFFBQUlQLE9BQU8sQ0FBQ1UsTUFBWixFQUFvQjtBQUNsQixXQUFLQSxNQUFMLENBQVlFLEdBQVosQ0FBZ0JaLE9BQU8sQ0FBQ1UsTUFBeEI7QUFDRDs7QUFDRCxRQUFJVixPQUFPLENBQUNXLE9BQVosRUFBcUI7QUFDbkIsV0FBS0EsT0FBTCxDQUFhQyxHQUFiLENBQWlCWixPQUFPLENBQUNXLE9BQXpCO0FBQ0Q7O0FBQ0QsU0FBS3hGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxLQUFLMEUsT0FBTCxDQUFhMUUsS0FBMUI7QUFDQWdFLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQVMsYUFBUyxDQUFDYyxRQUFWLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtBQUNBLFNBQUtDLElBQUw7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0MsTUFBTCxHQUFjdkYsa0RBQVEsQ0FBQ3dGLFNBQVQsQ0FBbUIsS0FBSy9GLE9BQXhCLEVBQWlDLEtBQUs2RSxPQUFMLENBQWE1RSxNQUE5QyxFQUFzRCxJQUF0RCxDQUFkO0FBQ0EsV0FBSytGLFdBQUwsR0FBbUIsS0FBS0YsTUFBeEI7QUFDQSxXQUFLbEcsUUFBTCxHQUFnQixLQUFLa0csTUFBckI7O0FBQ0EsVUFBSSxLQUFLakIsT0FBTCxDQUFhakYsUUFBakIsRUFBMkI7QUFDekIsYUFBS3FHLFlBQUwsR0FBb0IsS0FBS3BCLE9BQUwsQ0FBYWpGLFFBQWpDO0FBQ0EsYUFBSzBELElBQUwsQ0FBVSxLQUFLMkMsWUFBZixFQUE2QixDQUE3QixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QztBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLFlBQUwsR0FBb0IsS0FBS0gsTUFBekI7QUFDRDs7QUFDRCxXQUFLSSxVQUFMLEdBQWtCLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQ0EsV0FBS0csUUFBTCxHQUFnQixLQUFLQyxPQUFMLENBQWFKLElBQWIsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFFQSxXQUFLcEcsT0FBTCxDQUFheUcsZ0JBQWIsQ0FBOEJsRCxXQUFXLENBQUN2QyxLQUExQyxFQUFpRCxLQUFLa0YsVUFBdEQ7QUFDQSxXQUFLbEcsT0FBTCxDQUFheUcsZ0JBQWIsQ0FBOEJwRCxXQUFXLENBQUNyQyxLQUExQyxFQUFpRCxLQUFLa0YsVUFBdEQ7O0FBRUEsVUFBSSxLQUFLL0YsS0FBTCxDQUFXRyxPQUFmLEVBQXdCO0FBQ3RCLGFBQUtILEtBQUwsQ0FBV0csT0FBWDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFdBQUt3RixNQUFMLEdBQWN2RixrREFBUSxDQUFDd0YsU0FBVCxDQUFtQixLQUFLL0YsT0FBeEIsRUFBaUMsS0FBSzZFLE9BQUwsQ0FBYTVFLE1BQTlDLEVBQXNELElBQXRELENBQWQ7QUFDQSxXQUFLK0YsV0FBTCxHQUFtQixLQUFLRixNQUF4QjtBQUNBLFdBQUtsRyxRQUFMLEdBQWdCLEtBQUtrRyxNQUFyQjs7QUFDQSxVQUFJLEtBQUtqQixPQUFMLENBQWFqRixRQUFqQixFQUEyQjtBQUN6QixhQUFLcUcsWUFBTCxHQUFvQixLQUFLcEIsT0FBTCxDQUFhakYsUUFBakM7QUFDQSxhQUFLMEQsSUFBTCxDQUFVLEtBQUsyQyxZQUFmLEVBQTZCLENBQTdCLEVBQWdDLElBQWhDLEVBQXNDLElBQXRDO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0EsWUFBTCxHQUFvQixLQUFLSCxNQUF6QjtBQUNEOztBQUVELFVBQUksS0FBSzNGLEtBQUwsQ0FBV0csT0FBZixFQUF3QjtBQUN0QixhQUFLSCxLQUFMLENBQVdHLE9BQVg7QUFDRDtBQUNGOzs7NEJBRU9vRyxXLEVBQWE7QUFDbkIsYUFBT25HLGtEQUFRLENBQUNvRyxnQkFBVCxDQUEwQixLQUFLM0csT0FBL0IsRUFBd0MsS0FBSzZFLE9BQUwsQ0FBYU0sZ0JBQXJELENBQVA7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS3ZGLFFBQUwsR0FBZ0IsS0FBS2tHLE1BQUwsQ0FBWUwsR0FBWixDQUFnQixLQUFLbUIsa0JBQUwsSUFBMkIsSUFBSS9FLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBM0MsQ0FBaEI7QUFDQSxhQUFPLEtBQUtqQyxRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsUUFBTCxDQUFjNkYsR0FBZCxDQUFrQixLQUFLb0IsT0FBTCxHQUFlQyxJQUFmLENBQW9CLEdBQXBCLENBQWxCLENBQVA7QUFDRDs7O2tDQUVheEgsSyxFQUFPO0FBQ25CLFdBQUtzSCxrQkFBTCxHQUEwQnRILEtBQTFCO0FBRUEsVUFBSXlILFNBQVMsR0FBRyxLQUFLL0csT0FBTCxDQUFhZ0gsS0FBYixDQUFtQnRELGlCQUFuQixDQUFoQjtBQUNBLFVBQUl1RCxZQUFZLEdBQUcsa0JBQWtCM0gsS0FBSyxDQUFDTyxDQUF4QixHQUE0QixLQUE1QixHQUFvQ1AsS0FBSyxDQUFDUSxDQUExQyxHQUE4QyxVQUFqRTtBQUVBLFVBQU1vSCxFQUFFLEdBQUc5RCxNQUFNLENBQUMrRCxTQUFQLENBQWlCQyxTQUE1QjtBQUNBLFVBQU1DLElBQUksR0FBR0gsRUFBRSxDQUFDSSxPQUFILENBQVcsT0FBWCxDQUFiOztBQUVBLFVBQUlELElBQUosRUFBVTtBQUNSSixvQkFBWSxHQUFHLGdCQUFnQjNILEtBQUssQ0FBQ08sQ0FBdEIsR0FBMEIsS0FBMUIsR0FBa0NQLEtBQUssQ0FBQ1EsQ0FBeEMsR0FBNEMsS0FBM0Q7O0FBQ0EsWUFBSSxDQUFDLHFCQUFxQnlILElBQXJCLENBQTBCUixTQUExQixDQUFMLEVBQTJDO0FBQ3pDQSxtQkFBUyxJQUFJRSxZQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQixvQkFBbEIsRUFBd0NQLFlBQXhDLENBQVo7QUFDRDtBQUNGLE9BUEQsTUFPTztBQUNMLFlBQUksQ0FBQyx1QkFBdUJNLElBQXZCLENBQTRCUixTQUE1QixDQUFMLEVBQTZDO0FBQzNDQSxtQkFBUyxJQUFJRSxZQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQixzQkFBbEIsRUFBMENQLFlBQTFDLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQUtqSCxPQUFMLENBQWFnSCxLQUFiLENBQW1CdEQsaUJBQW5CLElBQXdDcUQsU0FBeEM7QUFDRDs7O3lCQUVJekgsSyxFQUE0QztBQUFBLFVBQXJDbUksSUFBcUMsdUVBQWhDLENBQWdDO0FBQUEsVUFBN0JDLEtBQTZCLHVFQUF2QixLQUF1QjtBQUFBLFVBQWhCQyxRQUFnQix1RUFBUCxLQUFPO0FBQy9DckksV0FBSyxHQUFHQSxLQUFLLENBQUNHLEtBQU4sRUFBUjs7QUFDQSxVQUFJaUksS0FBSixFQUFXO0FBQ1QsYUFBSzFCLFdBQUwsR0FBbUIxRyxLQUFuQjtBQUNEOztBQUVELFdBQUtzSSxrQkFBTCxDQUF3QnRJLEtBQXhCO0FBRUEsV0FBS00sUUFBTCxHQUFnQk4sS0FBaEI7O0FBRUEsVUFBSXNFLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUs1RCxPQUFMLENBQWFnSCxLQUFiLENBQW1CcEQsa0JBQW5CLElBQXlDNkQsSUFBSSxHQUFHLElBQWhEO0FBQ0Q7O0FBRUQsV0FBS0ksYUFBTCxDQUFtQnZJLEtBQUssQ0FBQ3dJLEdBQU4sQ0FBVSxLQUFLaEMsTUFBZixDQUFuQjs7QUFDQSxVQUFJLENBQUM2QixRQUFMLEVBQWU7QUFDYixhQUFLcEMsTUFBTCxDQUFZSSxJQUFaO0FBQ0Q7QUFDRjs7O3NDQUVrQjtBQUNqQixXQUFLb0MsV0FBTCxDQUFpQixLQUFLQyxXQUFMLEVBQWpCO0FBQ0Q7OztnQ0FFVzFJLEssRUFBTztBQUNqQkEsV0FBSyxHQUFHQSxLQUFLLENBQUNHLEtBQU4sRUFBUjtBQUNBLFdBQUtHLFFBQUwsR0FBZ0JOLEtBQWhCOztBQUVBLFVBQUlzRSxrQkFBSixFQUF3QjtBQUN0QixhQUFLNUQsT0FBTCxDQUFhZ0gsS0FBYixDQUFtQnBELGtCQUFuQixJQUF5QyxLQUF6QztBQUNEOztBQUVELFdBQUtpRSxhQUFMLENBQW1CdkksS0FBSyxDQUFDd0ksR0FBTixDQUFVLEtBQUtoQyxNQUFmLENBQW5CO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBSWxDLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUs1RCxPQUFMLENBQWFnSCxLQUFiLENBQW1CcEQsa0JBQW5CLElBQXlDLEtBQXpDO0FBQ0Q7QUFDRjs7O3VDQUVrQnRFLEssRUFBTztBQUN4QixXQUFLMkksYUFBTCxHQUFzQixLQUFLckksUUFBTCxDQUFjQyxDQUFkLEdBQWtCUCxLQUFLLENBQUNPLENBQTlDO0FBQ0EsV0FBS3FJLGNBQUwsR0FBdUIsS0FBS3RJLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQlAsS0FBSyxDQUFDTyxDQUEvQztBQUNBLFdBQUtzSSxXQUFMLEdBQW9CLEtBQUt2SSxRQUFMLENBQWNFLENBQWQsR0FBa0JSLEtBQUssQ0FBQ1EsQ0FBNUM7QUFDQSxXQUFLc0ksYUFBTCxHQUFzQixLQUFLeEksUUFBTCxDQUFjRSxDQUFkLEdBQWtCUixLQUFLLENBQUNRLENBQTlDO0FBQ0Q7Ozs4QkFFU3VJLEssRUFBTztBQUNmLFdBQUtDLFlBQUwsR0FBb0JELEtBQXBCOztBQUNBLFVBQUksQ0FBQyxLQUFLeEMsT0FBTixJQUFrQixLQUFLaEIsT0FBTCxDQUFhSyxXQUFiLElBQTRCLENBQUMsS0FBS0wsT0FBTCxDQUFhSyxXQUFiLENBQXlCbUQsS0FBekIsQ0FBbkQsRUFBcUY7QUFDbkY7QUFDRDs7QUFFRCxVQUFNRSxZQUFZLEdBQUlwRixPQUFPLElBQUtrRixLQUFLLFlBQVlqRixNQUFNLENBQUNvRixVQUExRDtBQUVBLFdBQUtDLGdCQUFMLEdBQXdCLElBQUk1RywrQ0FBSixDQUFVMEcsWUFBWSxHQUFHRixLQUFLLENBQUNyRSxjQUFOLENBQXFCLENBQXJCLEVBQXdCMEUsS0FBM0IsR0FBbUNMLEtBQUssQ0FBQ00sT0FBL0QsRUFBd0VKLFlBQVksR0FBR0YsS0FBSyxDQUFDckUsY0FBTixDQUFxQixDQUFyQixFQUF3QjRFLEtBQTNCLEdBQW1DUCxLQUFLLENBQUNRLE9BQTdILENBQXhCO0FBRUEsV0FBS0MsY0FBTCxHQUFzQixLQUFLZCxXQUFMLEVBQXRCOztBQUNBLFVBQUlPLFlBQUosRUFBa0I7QUFDaEIsYUFBS1EsUUFBTCxHQUFnQlYsS0FBSyxDQUFDckUsY0FBTixDQUFxQixDQUFyQixFQUF3QkUsVUFBeEM7QUFDRDs7QUFDRG1FLFdBQUssQ0FBQ1csZUFBTjs7QUFDQSxVQUFJLEVBQUVYLEtBQUssQ0FBQ1ksTUFBTixZQUF3QjdGLE1BQU0sQ0FBQzhGLGdCQUEvQixJQUNBYixLQUFLLENBQUNZLE1BQU4sWUFBd0I3RixNQUFNLENBQUM4RixnQkFEakMsQ0FBSixFQUN3RDtBQUN0RGIsYUFBSyxDQUFDYyxjQUFOO0FBQ0QsT0FIRCxNQUdPO0FBQ0xkLGFBQUssQ0FBQ1ksTUFBTixDQUFhRyxLQUFiO0FBQ0Q7O0FBRURDLGNBQVEsQ0FBQzVDLGdCQUFULENBQTBCbEQsV0FBVyxDQUFDRCxJQUF0QyxFQUE0QyxLQUFLK0MsU0FBakQ7QUFDQWdELGNBQVEsQ0FBQzVDLGdCQUFULENBQTBCcEQsV0FBVyxDQUFDQyxJQUF0QyxFQUE0QyxLQUFLK0MsU0FBakQ7QUFFQWdELGNBQVEsQ0FBQzVDLGdCQUFULENBQTBCbEQsV0FBVyxDQUFDdEMsR0FBdEMsRUFBMkMsS0FBS3NGLFFBQWhEO0FBQ0E4QyxjQUFRLENBQUM1QyxnQkFBVCxDQUEwQnBELFdBQVcsQ0FBQ3BDLEdBQXRDLEVBQTJDLEtBQUtzRixRQUFoRDtBQUVBLFdBQUsrQyxVQUFMLEdBQWtCLElBQWxCO0FBRUEsV0FBSzlELE9BQUwsQ0FBYUcsSUFBYixDQUFrQjBDLEtBQWxCO0FBQ0FrQixxRUFBUSxDQUFDLEtBQUt2SixPQUFOLEVBQWUsUUFBZixDQUFSO0FBQ0EsV0FBS3VGLE1BQUwsQ0FBWUksSUFBWixDQUFpQjBDLEtBQWpCO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0MsWUFBTCxHQUFvQkQsS0FBcEI7QUFDQSxVQUFJbUIsS0FBSjtBQUVBLFVBQU1qQixZQUFZLEdBQUlwRixPQUFPLElBQUtrRixLQUFLLFlBQVlqRixNQUFNLENBQUNvRixVQUExRDs7QUFDQSxVQUFJRCxZQUFKLEVBQWtCO0FBQ2hCaUIsYUFBSyxHQUFHM0YsWUFBWSxDQUFDd0UsS0FBRCxFQUFRLEtBQUtVLFFBQWIsQ0FBcEI7O0FBRUEsWUFBSSxDQUFDUyxLQUFMLEVBQVk7QUFDVjtBQUNEO0FBQ0Y7O0FBRURuQixXQUFLLENBQUNXLGVBQU47QUFDQVgsV0FBSyxDQUFDYyxjQUFOO0FBQ0EsVUFBTU0sVUFBVSxHQUFHLElBQUk1SCwrQ0FBSixDQUFVMEcsWUFBWSxHQUFHaUIsS0FBSyxDQUFDZCxLQUFULEdBQWlCTCxLQUFLLENBQUNNLE9BQTdDLEVBQXNESixZQUFZLEdBQUdpQixLQUFLLENBQUNaLEtBQVQsR0FBaUJQLEtBQUssQ0FBQ1EsT0FBekYsQ0FBbkI7O0FBQ0EsVUFBSXZKLEtBQUssR0FBRyxLQUFLd0osY0FBTCxDQUFvQnJELEdBQXBCLENBQXdCZ0UsVUFBVSxDQUFDM0IsR0FBWCxDQUFlLEtBQUtXLGdCQUFwQixDQUF4QixDQUFaOztBQUNBbkosV0FBSyxHQUFHLEtBQUthLEtBQUwsQ0FBV2IsS0FBWCxFQUFrQixLQUFLdUgsT0FBTCxFQUFsQixDQUFSO0FBQ0EsV0FBSzRDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsV0FBS25HLElBQUwsQ0FBVWhFLEtBQVYsRUFBaUIsQ0FBakI7QUFDRDs7OzRCQUVPK0ksSyxFQUFPO0FBQ2IsVUFBTUUsWUFBWSxHQUFJcEYsT0FBTyxJQUFLa0YsS0FBSyxZQUFZakYsTUFBTSxDQUFDb0YsVUFBMUQ7O0FBRUEsVUFBSUQsWUFBWSxJQUFJLENBQUMxRSxZQUFZLENBQUN3RSxLQUFELEVBQVEsS0FBS1UsUUFBYixDQUFqQyxFQUF5RDtBQUN2RDtBQUNEOztBQUVEVixXQUFLLENBQUNXLGVBQU47QUFDQVgsV0FBSyxDQUFDYyxjQUFOO0FBQ0EsV0FBSy9ELEtBQUwsQ0FBV08sSUFBWCxDQUFnQjBDLEtBQWhCO0FBRUFnQixjQUFRLENBQUNLLG1CQUFULENBQTZCbkcsV0FBVyxDQUFDRCxJQUF6QyxFQUErQyxLQUFLK0MsU0FBcEQ7QUFDQWdELGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkJyRyxXQUFXLENBQUNDLElBQXpDLEVBQStDLEtBQUsrQyxTQUFwRDtBQUVBZ0QsY0FBUSxDQUFDSyxtQkFBVCxDQUE2Qm5HLFdBQVcsQ0FBQ3RDLEdBQXpDLEVBQThDLEtBQUtzRixRQUFuRDtBQUNBOEMsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QnJHLFdBQVcsQ0FBQ3BDLEdBQXpDLEVBQThDLEtBQUtzRixRQUFuRDtBQUVBLFdBQUsrQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0FLLHdFQUFXLENBQUMsS0FBSzNKLE9BQU4sRUFBZSxRQUFmLENBQVg7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxJQUFJNEosbURBQUosQ0FBYyxLQUFLaEssUUFBbkIsRUFBNkIsS0FBS2lILE9BQUwsRUFBN0IsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixXQUFLQSxPQUFMLENBQWEsSUFBYjs7QUFDQSxVQUFJLEtBQUsxRyxLQUFMLENBQVdHLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0gsS0FBTCxDQUFXRyxPQUFYO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsV0FBS04sT0FBTCxDQUFhMEosbUJBQWIsQ0FBaUNuRyxXQUFXLENBQUN2QyxLQUE3QyxFQUFvRCxLQUFLa0YsVUFBekQ7QUFDQSxXQUFLbEcsT0FBTCxDQUFhMEosbUJBQWIsQ0FBaUNyRyxXQUFXLENBQUNyQyxLQUE3QyxFQUFvRCxLQUFLa0YsVUFBekQ7QUFDQSxXQUFLbEcsT0FBTCxDQUFhMEosbUJBQWIsQ0FBaUNuRyxXQUFXLENBQUNELElBQTdDLEVBQW1ELEtBQUsrQyxTQUF4RDtBQUNBLFdBQUtyRyxPQUFMLENBQWEwSixtQkFBYixDQUFpQ3JHLFdBQVcsQ0FBQ0MsSUFBN0MsRUFBbUQsS0FBSytDLFNBQXhEO0FBQ0EsV0FBS3JHLE9BQUwsQ0FBYTBKLG1CQUFiLENBQWlDbkcsV0FBVyxDQUFDdEMsR0FBN0MsRUFBa0QsS0FBS3NGLFFBQXZEO0FBQ0EsV0FBS3ZHLE9BQUwsQ0FBYTBKLG1CQUFiLENBQWlDckcsV0FBVyxDQUFDcEMsR0FBN0MsRUFBa0QsS0FBS3NGLFFBQXZEO0FBRUEsV0FBS25CLEtBQUwsQ0FBV3lFLEtBQVg7QUFDQSxXQUFLdEUsTUFBTCxDQUFZc0UsS0FBWjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtoRSxPQUFaO0FBQ0QsSztzQkFFVWlFLE0sRUFBUTtBQUNqQixVQUFJQSxNQUFKLEVBQVk7QUFDVkgsMEVBQVcsQ0FBQyxLQUFLM0osT0FBTixFQUFlLFNBQWYsQ0FBWDtBQUNELE9BRkQsTUFFTztBQUNMdUosdUVBQVEsQ0FBQyxLQUFLdkosT0FBTixFQUFlLFNBQWYsQ0FBUjtBQUNEOztBQUVELGFBQU8sS0FBSzZGLE9BQUwsR0FBZWlFLE1BQXRCO0FBQ0Q7Ozs7OztBQUdIbEYsU0FBUyxDQUFDYyxRQUFWLEdBQXFCLElBQUl6QyxNQUFNLENBQUNDLEtBQVgsQ0FBaUIwQixTQUFqQixFQUE0QjtBQUFFUyxXQUFTLEVBQUUsSUFBYjtBQUFtQkMsY0FBWSxFQUFFO0FBQWpDLENBQTVCLENBQXJCO0FBQ0FWLFNBQVMsQ0FBQ2MsUUFBVixDQUFtQkQsR0FBbkIsQ0FBdUJoQixpQkFBdkI7Ozs7Ozs7Ozs7Ozs7QUNuVUE7QUFBQTs7QUFFQSxTQUFTdkIsS0FBVCxDQUFlNkcsT0FBZixFQUFzQztBQUFBLE1BQWRsRixPQUFjLHVFQUFKLEVBQUk7QUFDcEMsT0FBS21GLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBSzFFLFNBQUwsR0FBaUJSLE9BQU8sQ0FBQ1EsU0FBUixJQUFxQixLQUF0QztBQUNBLE9BQUtDLFlBQUwsR0FBb0JULE9BQU8sQ0FBQ1MsWUFBUixJQUF3QixLQUE1QztBQUNEOztBQUVEcEMsS0FBSyxDQUFDK0csU0FBTixDQUFnQnRFLElBQWhCLEdBQXVCLFlBQVc7QUFDaEMsTUFBTXVFLElBQUksR0FBRyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBYy9KLFNBQWQsQ0FBYjtBQUNBLE1BQU1nSyxFQUFFLEdBQUcsS0FBS2hGLFNBQUwsR0FBaUIsS0FBSzJFLEtBQUwsQ0FBV0csS0FBWCxHQUFtQkcsT0FBbkIsRUFBakIsR0FBZ0QsS0FBS04sS0FBaEU7QUFDQSxNQUFJTyxRQUFKOztBQUVBLE9BQUssSUFBSXhHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRyxFQUFFLENBQUNwRyxNQUF2QixFQUErQkYsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQ3dHLFlBQVEsR0FBR0YsRUFBRSxDQUFDdEcsQ0FBRCxDQUFGLENBQU0zRCxLQUFOLENBQVksS0FBSzJKLE9BQWpCLEVBQTBCRyxJQUExQixDQUFYOztBQUNBLFFBQUksS0FBSzVFLFlBQUwsSUFBcUJpRixRQUF6QixFQUFtQztBQUNqQyxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sQ0FBQyxLQUFLakYsWUFBYjtBQUNELENBWkQ7O0FBY0FwQyxLQUFLLENBQUMrRyxTQUFOLENBQWdCeEUsR0FBaEIsR0FBc0IsVUFBUytFLENBQVQsRUFBWTtBQUNoQyxPQUFLUixLQUFMLENBQVd4RixJQUFYLENBQWdCZ0csQ0FBaEI7QUFDRCxDQUZEOztBQUlBdEgsS0FBSyxDQUFDK0csU0FBTixDQUFnQlEsT0FBaEIsR0FBMEIsVUFBU0QsQ0FBVCxFQUFZO0FBQ3BDLE9BQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkQsQ0FBbkI7QUFDRCxDQUZEOztBQUlBdEgsS0FBSyxDQUFDK0csU0FBTixDQUFnQlMsTUFBaEIsR0FBeUIsVUFBU0YsQ0FBVCxFQUFZO0FBQ25DLE1BQU1HLEtBQUssR0FBRyxLQUFLWCxLQUFMLENBQVcxQyxPQUFYLENBQW1Ca0QsQ0FBbkIsQ0FBZDs7QUFDQSxNQUFJRyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLFNBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkQsS0FBbEIsRUFBeUIsQ0FBekI7QUFDRDtBQUNGLENBTEQ7O0FBT0F6SCxLQUFLLENBQUMrRyxTQUFOLENBQWdCSixLQUFoQixHQUF3QixVQUFTZ0IsRUFBVCxFQUFhO0FBQ25DLE9BQUtiLEtBQUwsR0FBYSxFQUFiO0FBQ0QsQ0FGRDs7QUFJZTlHLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMxQ01yQixLOzs7QUFDSixpQkFBWWhDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7Ozt3QkFFR2dMLEMsRUFBRztBQUNMLGFBQU8sSUFBSWpKLEtBQUosQ0FBVSxLQUFLaEMsQ0FBTCxHQUFTaUwsQ0FBQyxDQUFDakwsQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTZ0wsQ0FBQyxDQUFDaEwsQ0FBbkMsQ0FBUDtBQUNEOzs7d0JBRUdnTCxDLEVBQUc7QUFDTCxhQUFPLElBQUlqSixLQUFKLENBQVUsS0FBS2hDLENBQUwsR0FBU2lMLENBQUMsQ0FBQ2pMLENBQXJCLEVBQXdCLEtBQUtDLENBQUwsR0FBU2dMLENBQUMsQ0FBQ2hMLENBQW5DLENBQVA7QUFDRDs7O3lCQUVJaUwsQyxFQUFHO0FBQ04sYUFBTyxJQUFJbEosS0FBSixDQUFVLEtBQUtoQyxDQUFMLEdBQVNrTCxDQUFuQixFQUFzQixLQUFLakwsQ0FBTCxHQUFTaUwsQ0FBL0IsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLElBQUlsSixLQUFKLENBQVUsQ0FBQyxLQUFLaEMsQ0FBaEIsRUFBbUIsQ0FBQyxLQUFLQyxDQUF6QixDQUFQO0FBQ0Q7Ozs0QkFFT2dMLEMsRUFBRztBQUNULGFBQVEsS0FBS2pMLENBQUwsS0FBV2lMLENBQUMsQ0FBQ2pMLENBQWIsSUFBa0IsS0FBS0MsQ0FBTCxLQUFXZ0wsQ0FBQyxDQUFDaEwsQ0FBdkM7QUFDRDs7OzRCQUVPO0FBQ04sYUFBTyxJQUFJK0IsS0FBSixDQUFVLEtBQUtoQyxDQUFmLEVBQWtCLEtBQUtDLENBQXZCLENBQVA7QUFDRDs7OytCQUVVO0FBQ1QsMEJBQWEsS0FBS0QsQ0FBbEIsZ0JBQXlCLEtBQUtDLENBQTlCO0FBQ0Q7Ozs7OztJQUdHOEosUzs7O0FBQ0oscUJBQVloSyxRQUFaLEVBQXNCTCxJQUF0QixFQUE0QjtBQUFBOztBQUMxQixTQUFLSyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzRCQUVPO0FBQ04sYUFBTyxLQUFLSyxRQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sSUFBSWlDLEtBQUosQ0FBVSxLQUFLakMsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBdEMsRUFBeUMsS0FBS0QsUUFBTCxDQUFjRSxDQUF2RCxDQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sS0FBS0YsUUFBTCxDQUFjNkYsR0FBZCxDQUFrQixLQUFLbEcsSUFBdkIsQ0FBUDtBQUNEOzs7NEJBRU87QUFDTixhQUFPLElBQUlzQyxLQUFKLENBQVUsS0FBS2pDLFFBQUwsQ0FBY0MsQ0FBeEIsRUFBMkIsS0FBS0QsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtQLElBQUwsQ0FBVU8sQ0FBdkQsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLFFBQUwsQ0FBYzZGLEdBQWQsQ0FBa0IsS0FBS2xHLElBQUwsQ0FBVXVILElBQVYsQ0FBZSxHQUFmLENBQWxCLENBQVA7QUFDRDs7O3VCQUVFa0UsSSxFQUFNO0FBQ1AsVUFBTXBMLFFBQVEsR0FBRyxJQUFJaUMsS0FBSixDQUFVVixJQUFJLENBQUM4SixHQUFMLENBQVMsS0FBS3JMLFFBQUwsQ0FBY0MsQ0FBdkIsRUFBMEJtTCxJQUFJLENBQUNwTCxRQUFMLENBQWNDLENBQXhDLENBQVYsRUFBc0RzQixJQUFJLENBQUM4SixHQUFMLENBQVMsS0FBS3JMLFFBQUwsQ0FBY0UsQ0FBdkIsRUFBMEJrTCxJQUFJLENBQUNwTCxRQUFMLENBQWNFLENBQXhDLENBQXRELENBQWpCO0FBQ0EsVUFBTVAsSUFBSSxHQUFJLElBQUlzQyxLQUFKLENBQVVWLElBQUksQ0FBQytKLEdBQUwsQ0FBUyxLQUFLdEwsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBckMsRUFBd0NtTCxJQUFJLENBQUNwTCxRQUFMLENBQWNDLENBQWQsR0FBa0JtTCxJQUFJLENBQUN6TCxJQUFMLENBQVVNLENBQXBFLENBQVYsRUFBa0ZzQixJQUFJLENBQUMrSixHQUFMLENBQVMsS0FBS3RMLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLUCxJQUFMLENBQVVPLENBQXJDLEVBQXdDa0wsSUFBSSxDQUFDcEwsUUFBTCxDQUFjRSxDQUFkLEdBQWtCa0wsSUFBSSxDQUFDekwsSUFBTCxDQUFVTyxDQUFwRSxDQUFsRixDQUFELENBQTRKZ0ksR0FBNUosQ0FBZ0tsSSxRQUFoSyxDQUFiO0FBQ0EsYUFBTyxJQUFJZ0ssU0FBSixDQUFjaEssUUFBZCxFQUF3QkwsSUFBeEIsQ0FBUDtBQUNEOzs7d0JBRUd5TCxJLEVBQU07QUFDUixVQUFNcEwsUUFBUSxHQUFHLElBQUlpQyxLQUFKLENBQVVWLElBQUksQ0FBQytKLEdBQUwsQ0FBUyxLQUFLdEwsUUFBTCxDQUFjQyxDQUF2QixFQUEwQm1MLElBQUksQ0FBQ3BMLFFBQUwsQ0FBY0MsQ0FBeEMsQ0FBVixFQUFzRHNCLElBQUksQ0FBQytKLEdBQUwsQ0FBUyxLQUFLdEwsUUFBTCxDQUFjRSxDQUF2QixFQUEwQmtMLElBQUksQ0FBQ3BMLFFBQUwsQ0FBY0UsQ0FBeEMsQ0FBdEQsQ0FBakI7QUFDQSxVQUFNUCxJQUFJLEdBQUksSUFBSXNDLEtBQUosQ0FBVVYsSUFBSSxDQUFDOEosR0FBTCxDQUFTLEtBQUtyTCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxDQUFyQyxFQUF3Q21MLElBQUksQ0FBQ3BMLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQm1MLElBQUksQ0FBQ3pMLElBQUwsQ0FBVU0sQ0FBcEUsQ0FBVixFQUFrRnNCLElBQUksQ0FBQzhKLEdBQUwsQ0FBUyxLQUFLckwsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtQLElBQUwsQ0FBVU8sQ0FBckMsRUFBd0NrTCxJQUFJLENBQUNwTCxRQUFMLENBQWNFLENBQWQsR0FBa0JrTCxJQUFJLENBQUN6TCxJQUFMLENBQVVPLENBQXBFLENBQWxGLENBQUQsQ0FBNEpnSSxHQUE1SixDQUFnS2xJLFFBQWhLLENBQWI7O0FBQ0EsVUFBSUwsSUFBSSxDQUFDTSxDQUFMLElBQVUsQ0FBVixJQUFlTixJQUFJLENBQUNPLENBQUwsSUFBVSxDQUE3QixFQUFnQztBQUM5QixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLElBQUk4SixTQUFKLENBQWNoSyxRQUFkLEVBQXdCTCxJQUF4QixDQUFQO0FBQ0Q7OztpQ0FFWXVMLEMsRUFBRztBQUNkLGFBQU8sRUFBRSxLQUFLbEwsUUFBTCxDQUFjQyxDQUFkLEdBQWtCaUwsQ0FBQyxDQUFDakwsQ0FBcEIsSUFBeUIsS0FBS0QsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBNUIsR0FBZ0NpTCxDQUFDLENBQUNqTCxDQUEzRCxJQUFnRSxLQUFLRCxRQUFMLENBQWNFLENBQWQsR0FBa0JnTCxDQUFDLENBQUNoTCxDQUFwRixJQUF5RixLQUFLRixRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS1AsSUFBTCxDQUFVTyxDQUE1QixHQUFnQ2dMLENBQUMsQ0FBQ2hMLENBQTdILENBQVA7QUFDRDs7O3FDQUVnQlQsUyxFQUFXO0FBQzFCLGFBQU8sS0FBSzhMLFlBQUwsQ0FBa0I5TCxTQUFTLENBQUNPLFFBQTVCLEtBQXlDLEtBQUt1TCxZQUFMLENBQWtCOUwsU0FBUyxDQUFDTSxLQUFWLEVBQWxCLENBQWhEO0FBQ0Q7OztnQ0FFV3FMLEksRUFBTUksSSxFQUFNO0FBQ3RCLFVBQUlDLE9BQUosRUFBYUMsY0FBYjs7QUFDQSxVQUFJRixJQUFKLEVBQVU7QUFDUkMsZUFBTyxHQUFHRCxJQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xFLHNCQUFjLEdBQUcsS0FBS0MsR0FBTCxDQUFTUCxJQUFULENBQWpCOztBQUNBLFlBQUksQ0FBQ00sY0FBTCxFQUFxQjtBQUNuQixpQkFBT04sSUFBUDtBQUNEOztBQUNESyxlQUFPLEdBQUdDLGNBQWMsQ0FBQy9MLElBQWYsQ0FBb0JNLENBQXBCLEdBQXdCeUwsY0FBYyxDQUFDL0wsSUFBZixDQUFvQk8sQ0FBNUMsR0FBZ0QsR0FBaEQsR0FBc0QsR0FBaEU7QUFDRDs7QUFDRCxVQUFNMEwsVUFBVSxHQUFHLEtBQUtDLFNBQUwsRUFBbkI7QUFDQSxVQUFNQyxVQUFVLEdBQUdWLElBQUksQ0FBQ1MsU0FBTCxFQUFuQjtBQUNBLFVBQU1FLElBQUksR0FBR0gsVUFBVSxDQUFDSCxPQUFELENBQVYsR0FBc0JLLFVBQVUsQ0FBQ0wsT0FBRCxDQUFoQyxHQUE0QyxDQUFDLENBQTdDLEdBQWlELENBQTlEO0FBQ0EsVUFBTXZGLE1BQU0sR0FBRzZGLElBQUksR0FBRyxDQUFQLEdBQVcsS0FBSy9MLFFBQUwsQ0FBY3lMLE9BQWQsSUFBeUIsS0FBSzlMLElBQUwsQ0FBVThMLE9BQVYsQ0FBekIsR0FBOENMLElBQUksQ0FBQ3BMLFFBQUwsQ0FBY3lMLE9BQWQsQ0FBekQsR0FBa0YsS0FBS3pMLFFBQUwsQ0FBY3lMLE9BQWQsS0FBMEJMLElBQUksQ0FBQ3BMLFFBQUwsQ0FBY3lMLE9BQWQsSUFBeUJMLElBQUksQ0FBQ3pMLElBQUwsQ0FBVThMLE9BQVYsQ0FBbkQsQ0FBakc7QUFDQUwsVUFBSSxDQUFDcEwsUUFBTCxDQUFjeUwsT0FBZCxJQUF5QkwsSUFBSSxDQUFDcEwsUUFBTCxDQUFjeUwsT0FBZCxJQUF5QnZGLE1BQWxEO0FBQ0EsYUFBT2tGLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLekwsSUFBTCxDQUFVTSxDQUFWLEdBQWMsS0FBS04sSUFBTCxDQUFVTyxDQUEvQjtBQUNEOzs7K0JBRVU4TCxFLEVBQUk7QUFDYkEsUUFBRSxHQUFHQSxFQUFFLElBQUl2QyxRQUFRLENBQUN3QyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQUQsUUFBRSxDQUFDNUUsS0FBSCxDQUFTOEUsSUFBVCxHQUFnQixLQUFLbE0sUUFBTCxDQUFjQyxDQUFkLEdBQWtCLElBQWxDO0FBQ0ErTCxRQUFFLENBQUM1RSxLQUFILENBQVMrRSxHQUFULEdBQWUsS0FBS25NLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixJQUFqQztBQUNBOEwsUUFBRSxDQUFDNUUsS0FBSCxDQUFTZ0YsS0FBVCxHQUFpQixLQUFLek0sSUFBTCxDQUFVTSxDQUFWLEdBQWMsSUFBL0I7QUFDQStMLFFBQUUsQ0FBQzVFLEtBQUgsQ0FBU2lGLE1BQVQsR0FBa0IsS0FBSzFNLElBQUwsQ0FBVU8sQ0FBVixHQUFjLElBQWhDO0FBQ0Q7OzsyQkFFTVAsSSxFQUFNO0FBQ1gsV0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVWtHLEdBQVYsQ0FBY2xHLElBQWQsQ0FBWjtBQUNBLFdBQUtLLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjNkYsR0FBZCxDQUFrQmxHLElBQUksQ0FBQ3VILElBQUwsQ0FBVSxDQUFDLEdBQVgsQ0FBbEIsQ0FBaEI7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTzNGLElBQUksQ0FBQzhKLEdBQUwsQ0FBUyxLQUFLMUwsSUFBTCxDQUFVTSxDQUFuQixFQUFzQixLQUFLTixJQUFMLENBQVVPLENBQWhDLENBQVA7QUFDRDs7Ozs7QUFHSDs7O0FBQ0EsSUFBTVMsUUFBUSxHQUFHO0FBQ2YyTCxhQURlLHVCQUNIQyxFQURHLEVBQ0NDLEVBREQsRUFDSztBQUNsQixRQUFNQyxFQUFFLEdBQUdGLEVBQUUsQ0FBQ3RNLENBQUgsR0FBT3VNLEVBQUUsQ0FBQ3ZNLENBQXJCO0FBQUEsUUFBd0J5TSxFQUFFLEdBQUdILEVBQUUsQ0FBQ3JNLENBQUgsR0FBT3NNLEVBQUUsQ0FBQ3RNLENBQXZDO0FBQ0EsV0FBT3FCLElBQUksQ0FBQ29MLElBQUwsQ0FBVUYsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUDtBQUNELEdBSmM7QUFLZkUsVUFMZSxvQkFLTkwsRUFMTSxFQUtGQyxFQUxFLEVBS0U7QUFDZixXQUFPN0wsUUFBUSxDQUFDMkwsV0FBVCxDQUFxQkMsRUFBckIsRUFBeUJDLEVBQXpCLENBQVA7QUFDRCxHQVBjO0FBUWZLLGdCQVJlLDBCQVFBTixFQVJBLEVBUUlDLEVBUkosRUFRUTtBQUNyQixXQUFPakwsSUFBSSxDQUFDdUwsR0FBTCxDQUFTUCxFQUFFLENBQUN0TSxDQUFILEdBQU91TSxFQUFFLENBQUN2TSxDQUFuQixDQUFQO0FBQ0QsR0FWYztBQVdmOE0sZ0JBWGUsMEJBV0FSLEVBWEEsRUFXSUMsRUFYSixFQVdRO0FBQ3JCLFdBQU9qTCxJQUFJLENBQUN1TCxHQUFMLENBQVNQLEVBQUUsQ0FBQ3JNLENBQUgsR0FBT3NNLEVBQUUsQ0FBQ3RNLENBQW5CLENBQVA7QUFDRCxHQWJjO0FBY2Y4TSxpQ0FkZSwyQ0FjaUIvSCxPQWRqQixFQWMwQjtBQUN2QyxXQUFPLFVBQUNzSCxFQUFELEVBQUtDLEVBQUwsRUFBWTtBQUNqQixhQUFPakwsSUFBSSxDQUFDb0wsSUFBTCxDQUNMcEwsSUFBSSxDQUFDMEwsR0FBTCxDQUFTaEksT0FBTyxDQUFDaEYsQ0FBUixHQUFZc0IsSUFBSSxDQUFDdUwsR0FBTCxDQUFTUCxFQUFFLENBQUN0TSxDQUFILEdBQU91TSxFQUFFLENBQUN2TSxDQUFuQixDQUFyQixFQUE0QyxDQUE1QyxJQUNBc0IsSUFBSSxDQUFDMEwsR0FBTCxDQUFTaEksT0FBTyxDQUFDL0UsQ0FBUixHQUFZcUIsSUFBSSxDQUFDdUwsR0FBTCxDQUFTUCxFQUFFLENBQUNyTSxDQUFILEdBQU9zTSxFQUFFLENBQUN0TSxDQUFuQixDQUFyQixFQUE0QyxDQUE1QyxDQUZLLENBQVA7QUFJRCxLQUxEO0FBTUQsR0FyQmM7QUFzQmZnTixxQkF0QmUsK0JBc0JLQyxHQXRCTCxFQXNCVUMsR0F0QlYsRUFzQmU1SyxNQXRCZixFQXNCdUI4SixXQXRCdkIsRUFzQm9DO0FBQ2pELFFBQUkzTSxJQUFKO0FBQUEsUUFBVW9MLEtBQUssR0FBRyxDQUFsQjtBQUFBLFFBQXFCNUcsQ0FBckI7QUFBQSxRQUF3QmtKLElBQXhCO0FBQ0FmLGVBQVcsR0FBR0EsV0FBVyxJQUFJM0wsUUFBUSxDQUFDMkwsV0FBdEM7O0FBQ0EsUUFBSWEsR0FBRyxDQUFDOUksTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QxRSxRQUFJLEdBQUcyTSxXQUFXLENBQUNhLEdBQUcsQ0FBQyxDQUFELENBQUosRUFBU0MsR0FBVCxDQUFsQjs7QUFDQSxTQUFLakosQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZ0osR0FBRyxDQUFDOUksTUFBcEIsRUFBNEJGLENBQUMsRUFBN0IsRUFBaUM7QUFDL0JrSixVQUFJLEdBQUdmLFdBQVcsQ0FBQ2EsR0FBRyxDQUFDaEosQ0FBRCxDQUFKLEVBQVNpSixHQUFULENBQWxCOztBQUNBLFVBQUlDLElBQUksR0FBRzFOLElBQVgsRUFBaUI7QUFDZkEsWUFBSSxHQUFHME4sSUFBUDtBQUNBdEMsYUFBSyxHQUFHNUcsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSTNCLE1BQU0sSUFBSSxDQUFWLElBQWU3QyxJQUFJLEdBQUc2QyxNQUExQixFQUFrQztBQUNoQyxhQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNELFdBQU91SSxLQUFQO0FBQ0QsR0F4Q2M7QUF5Q2Z4SyxPQXpDZSxpQkF5Q1Q4SyxHQXpDUyxFQXlDSkMsR0F6Q0ksRUF5Q0M4QixHQXpDRCxFQXlDTTtBQUNuQixXQUFPN0wsSUFBSSxDQUFDK0osR0FBTCxDQUFTRCxHQUFULEVBQWM5SixJQUFJLENBQUM4SixHQUFMLENBQVNDLEdBQVQsRUFBYzhCLEdBQWQsQ0FBZCxDQUFQO0FBQ0QsR0EzQ2M7QUE0Q2ZFLFlBNUNlLHNCQTRDSmpDLEdBNUNJLEVBNENDQyxHQTVDRCxFQTRDTThCLEdBNUNOLEVBNENXO0FBQ3hCLFFBQU1uTixDQUFDLEdBQUdzQixJQUFJLENBQUMrSixHQUFMLENBQVNELEdBQUcsQ0FBQ3BMLENBQWIsRUFBZ0JzQixJQUFJLENBQUM4SixHQUFMLENBQVNDLEdBQUcsQ0FBQ3JMLENBQWIsRUFBZ0JtTixHQUFHLENBQUNuTixDQUFwQixDQUFoQixDQUFWO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDK0osR0FBTCxDQUFTRCxHQUFHLENBQUNuTCxDQUFiLEVBQWdCcUIsSUFBSSxDQUFDOEosR0FBTCxDQUFTQyxHQUFHLENBQUNwTCxDQUFiLEVBQWdCa04sR0FBRyxDQUFDbE4sQ0FBcEIsQ0FBaEIsQ0FBVjtBQUNBLFdBQU8sSUFBSStCLEtBQUosQ0FBVWhDLENBQVYsRUFBYUMsQ0FBYixDQUFQO0FBQ0QsR0FoRGM7QUFpRGI7QUFDRm1DLGdCQWxEZSwwQkFrREFrTCxJQWxEQSxFQWtETUMsSUFsRE4sRUFrRFlDLElBbERaLEVBa0RrQkMsSUFsRGxCLEVBa0R3QjtBQUNyQyxRQUFJTCxJQUFKLEVBQVVNLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCN04sQ0FBMUIsRUFBNkJDLENBQTdCOztBQUNBLFFBQUl1TixJQUFJLENBQUN4TixDQUFMLEtBQVd5TixJQUFJLENBQUN6TixDQUFwQixFQUF1QjtBQUNyQm9OLFVBQUksR0FBR0ksSUFBUDtBQUNBQSxVQUFJLEdBQUdGLElBQVA7QUFDQUEsVUFBSSxHQUFHRixJQUFQO0FBQ0FBLFVBQUksR0FBR0ssSUFBUDtBQUNBQSxVQUFJLEdBQUdGLElBQVA7QUFDQUEsVUFBSSxHQUFHSCxJQUFQO0FBQ0Q7O0FBQ0QsUUFBSUUsSUFBSSxDQUFDdE4sQ0FBTCxLQUFXdU4sSUFBSSxDQUFDdk4sQ0FBcEIsRUFBdUI7QUFDckIyTixRQUFFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDeE4sQ0FBTCxHQUFTdU4sSUFBSSxDQUFDdk4sQ0FBZixLQUFxQndOLElBQUksQ0FBQ3pOLENBQUwsR0FBU3dOLElBQUksQ0FBQ3hOLENBQW5DLENBQUw7QUFDQTZOLFFBQUUsR0FBRyxDQUFDSixJQUFJLENBQUN6TixDQUFMLEdBQVN3TixJQUFJLENBQUN2TixDQUFkLEdBQWtCdU4sSUFBSSxDQUFDeE4sQ0FBTCxHQUFTeU4sSUFBSSxDQUFDeE4sQ0FBakMsS0FBdUN3TixJQUFJLENBQUN6TixDQUFMLEdBQVN3TixJQUFJLENBQUN4TixDQUFyRCxDQUFMO0FBQ0FBLE9BQUMsR0FBR3NOLElBQUksQ0FBQ3ROLENBQVQ7QUFDQUMsT0FBQyxHQUFHRCxDQUFDLEdBQUcyTixFQUFKLEdBQVNFLEVBQWI7QUFDQSxhQUFPLElBQUk3TCxLQUFKLENBQVVoQyxDQUFWLEVBQWFDLENBQWIsQ0FBUDtBQUNELEtBTkQsTUFNTztBQUNMeU4sUUFBRSxHQUFHLENBQUNILElBQUksQ0FBQ3ROLENBQUwsR0FBU3FOLElBQUksQ0FBQ3JOLENBQWYsS0FBcUJzTixJQUFJLENBQUN2TixDQUFMLEdBQVNzTixJQUFJLENBQUN0TixDQUFuQyxDQUFMO0FBQ0E0TixRQUFFLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDdk4sQ0FBTCxHQUFTc04sSUFBSSxDQUFDck4sQ0FBZCxHQUFrQnFOLElBQUksQ0FBQ3ROLENBQUwsR0FBU3VOLElBQUksQ0FBQ3ROLENBQWpDLEtBQXVDc04sSUFBSSxDQUFDdk4sQ0FBTCxHQUFTc04sSUFBSSxDQUFDdE4sQ0FBckQsQ0FBTDtBQUNBMk4sUUFBRSxHQUFHLENBQUNGLElBQUksQ0FBQ3hOLENBQUwsR0FBU3VOLElBQUksQ0FBQ3ZOLENBQWYsS0FBcUJ3TixJQUFJLENBQUN6TixDQUFMLEdBQVN3TixJQUFJLENBQUN4TixDQUFuQyxDQUFMO0FBQ0E2TixRQUFFLEdBQUcsQ0FBQ0osSUFBSSxDQUFDek4sQ0FBTCxHQUFTd04sSUFBSSxDQUFDdk4sQ0FBZCxHQUFrQnVOLElBQUksQ0FBQ3hOLENBQUwsR0FBU3lOLElBQUksQ0FBQ3hOLENBQWpDLEtBQXVDd04sSUFBSSxDQUFDek4sQ0FBTCxHQUFTd04sSUFBSSxDQUFDeE4sQ0FBckQsQ0FBTDtBQUNBQSxPQUFDLEdBQUcsQ0FBQzROLEVBQUUsR0FBR0MsRUFBTixLQUFhRixFQUFFLEdBQUdELEVBQWxCLENBQUo7QUFDQXpOLE9BQUMsR0FBR0QsQ0FBQyxHQUFHME4sRUFBSixHQUFTRSxFQUFiO0FBQ0EsYUFBTyxJQUFJNUwsS0FBSixDQUFVaEMsQ0FBVixFQUFhQyxDQUFiLENBQVA7QUFDRDtBQUNGLEdBM0VjO0FBNEVmNk4sZ0JBNUVlLDBCQTRFQUMsR0E1RUEsRUE0RUtDLEdBNUVMLEVBNEVVQyxDQTVFVixFQTRFYTtBQUMxQixRQUFJak8sQ0FBSixFQUFPQyxDQUFQO0FBQ0FELEtBQUMsR0FBR1UsUUFBUSxDQUFDSixLQUFULENBQWVnQixJQUFJLENBQUM4SixHQUFMLENBQVMyQyxHQUFHLENBQUMvTixDQUFiLEVBQWdCZ08sR0FBRyxDQUFDaE8sQ0FBcEIsQ0FBZixFQUF1Q3NCLElBQUksQ0FBQytKLEdBQUwsQ0FBUzBDLEdBQUcsQ0FBQy9OLENBQWIsRUFBZ0JnTyxHQUFHLENBQUNoTyxDQUFwQixDQUF2QyxFQUErRGlPLENBQUMsQ0FBQ2pPLENBQWpFLENBQUo7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLaU8sQ0FBQyxDQUFDak8sQ0FBWixFQUFlO0FBQ2JDLE9BQUMsR0FBSUQsQ0FBQyxLQUFLK04sR0FBRyxDQUFDL04sQ0FBWCxHQUFnQitOLEdBQUcsQ0FBQzlOLENBQXBCLEdBQXdCK04sR0FBRyxDQUFDL04sQ0FBaEM7QUFDQWdPLE9BQUMsR0FBRyxJQUFJak0sS0FBSixDQUFVaEMsQ0FBVixFQUFhQyxDQUFiLENBQUo7QUFDRDs7QUFFREEsS0FBQyxHQUFHUyxRQUFRLENBQUNKLEtBQVQsQ0FBZWdCLElBQUksQ0FBQzhKLEdBQUwsQ0FBUzJDLEdBQUcsQ0FBQzlOLENBQWIsRUFBZ0IrTixHQUFHLENBQUMvTixDQUFwQixDQUFmLEVBQXVDcUIsSUFBSSxDQUFDK0osR0FBTCxDQUFTMEMsR0FBRyxDQUFDOU4sQ0FBYixFQUFnQitOLEdBQUcsQ0FBQy9OLENBQXBCLENBQXZDLEVBQStEZ08sQ0FBQyxDQUFDaE8sQ0FBakUsQ0FBSjs7QUFDQSxRQUFJQSxDQUFDLEtBQUtnTyxDQUFDLENBQUNoTyxDQUFaLEVBQWU7QUFDYkQsT0FBQyxHQUFJQyxDQUFDLEtBQUs4TixHQUFHLENBQUM5TixDQUFYLEdBQWdCOE4sR0FBRyxDQUFDL04sQ0FBcEIsR0FBd0JnTyxHQUFHLENBQUNoTyxDQUFoQztBQUNBaU8sT0FBQyxHQUFHLElBQUlqTSxLQUFKLENBQVVoQyxDQUFWLEVBQWFDLENBQWIsQ0FBSjtBQUNEOztBQUVELFdBQU9nTyxDQUFQO0FBQ0QsR0EzRmM7QUE0RmYvTSxhQTVGZSx1QkE0RkhnTixDQTVGRyxFQTRGQUMsQ0E1RkEsRUE0RkdGLENBNUZILEVBNEZNO0FBQ25CLFFBQU1HLEVBQUUsR0FBRyxJQUFJcE0sS0FBSixDQUFVaU0sQ0FBQyxDQUFDak8sQ0FBRixHQUFNa08sQ0FBQyxDQUFDbE8sQ0FBbEIsRUFBcUJpTyxDQUFDLENBQUNoTyxDQUFGLEdBQU1pTyxDQUFDLENBQUNqTyxDQUE3QixDQUFYO0FBQUEsUUFDRW9PLEVBQUUsR0FBRyxJQUFJck0sS0FBSixDQUFVbU0sQ0FBQyxDQUFDbk8sQ0FBRixHQUFNa08sQ0FBQyxDQUFDbE8sQ0FBbEIsRUFBcUJtTyxDQUFDLENBQUNsTyxDQUFGLEdBQU1pTyxDQUFDLENBQUNqTyxDQUE3QixDQURQO0FBQUEsUUFFRXFPLEdBQUcsR0FBR0QsRUFBRSxDQUFDck8sQ0FBSCxHQUFPcU8sRUFBRSxDQUFDck8sQ0FBVixHQUFjcU8sRUFBRSxDQUFDcE8sQ0FBSCxHQUFPb08sRUFBRSxDQUFDcE8sQ0FGaEM7QUFBQSxRQUdFc08sS0FBSyxHQUFHSCxFQUFFLENBQUNwTyxDQUFILEdBQU9xTyxFQUFFLENBQUNyTyxDQUFWLEdBQWNvTyxFQUFFLENBQUNuTyxDQUFILEdBQU9vTyxFQUFFLENBQUNwTyxDQUhsQztBQUFBLFFBSUV1TyxDQUFDLEdBQUdELEtBQUssR0FBR0QsR0FKZDtBQUtBLFdBQU8sSUFBSXRNLEtBQUosQ0FBVWtNLENBQUMsQ0FBQ2xPLENBQUYsR0FBTXFPLEVBQUUsQ0FBQ3JPLENBQUgsR0FBT3dPLENBQXZCLEVBQTBCTixDQUFDLENBQUNqTyxDQUFGLEdBQU1vTyxFQUFFLENBQUNwTyxDQUFILEdBQU91TyxDQUF2QyxDQUFQO0FBQ0QsR0FuR2M7QUFvR2ZDLGdCQXBHZSwwQkFvR0FWLEdBcEdBLEVBb0dLQyxHQXBHTCxFQW9HVVUsT0FwR1YsRUFvR21CO0FBQ2hDLFFBQU1sQyxFQUFFLEdBQUd3QixHQUFHLENBQUNoTyxDQUFKLEdBQVErTixHQUFHLENBQUMvTixDQUF2QjtBQUFBLFFBQTBCeU0sRUFBRSxHQUFHdUIsR0FBRyxDQUFDL04sQ0FBSixHQUFROE4sR0FBRyxDQUFDOU4sQ0FBM0M7QUFDQSxXQUFPLElBQUkrQixLQUFKLENBQVUrTCxHQUFHLENBQUMvTixDQUFKLEdBQVEwTyxPQUFPLEdBQUdsQyxFQUE1QixFQUFnQ3VCLEdBQUcsQ0FBQzlOLENBQUosR0FBUXlPLE9BQU8sR0FBR2pDLEVBQWxELENBQVA7QUFDRCxHQXZHYztBQXdHZnZLLHdCQXhHZSxrQ0F3R1E2TCxHQXhHUixFQXdHYUMsR0F4R2IsRUF3R2tCVyxNQXhHbEIsRUF3RzBCO0FBQ3ZDLFFBQU1uQyxFQUFFLEdBQUd3QixHQUFHLENBQUNoTyxDQUFKLEdBQVErTixHQUFHLENBQUMvTixDQUF2QjtBQUFBLFFBQTBCeU0sRUFBRSxHQUFHdUIsR0FBRyxDQUFDL04sQ0FBSixHQUFROE4sR0FBRyxDQUFDOU4sQ0FBM0M7QUFBQSxRQUE4Q3lPLE9BQU8sR0FBR0MsTUFBTSxHQUFHak8sUUFBUSxDQUFDaU0sUUFBVCxDQUFrQm9CLEdBQWxCLEVBQXVCQyxHQUF2QixDQUFqRTtBQUNBLFdBQU8sSUFBSWhNLEtBQUosQ0FBVStMLEdBQUcsQ0FBQy9OLENBQUosR0FBUTBPLE9BQU8sR0FBR2xDLEVBQTVCLEVBQWdDdUIsR0FBRyxDQUFDOU4sQ0FBSixHQUFReU8sT0FBTyxHQUFHakMsRUFBbEQsQ0FBUDtBQUNELEdBM0djO0FBNEdmOUwsNEJBNUdlLHNDQTRHWW9MLEVBNUdaLEVBNEdnQjNMLE1BNUdoQixFQTRHd0JrRixnQkE1R3hCLEVBNEcwQ3NKLG1CQTVHMUMsRUE0RytEO0FBQzVFLFFBQU1sUCxJQUFJLEdBQUcsS0FBS29ILGdCQUFMLENBQXNCaUYsRUFBdEIsRUFBMEJ6RyxnQkFBMUIsQ0FBYjtBQUNBLFdBQU8sSUFBSXlFLFNBQUosQ0FBYyxLQUFLN0QsU0FBTCxDQUFlNkYsRUFBZixFQUFtQjNMLE1BQU0sSUFBSTJMLEVBQUUsQ0FBQzhDLFVBQWhDLEVBQTRDRCxtQkFBNUMsQ0FBZCxFQUFnRmxQLElBQWhGLENBQVA7QUFDRCxHQS9HYztBQWdIZm9QLHdCQWhIZSxrQ0FnSFEzTyxPQWhIUixFQWdIaUI0TyxLQWhIakIsRUFnSHdCO0FBQ3JDLFdBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2pDLGFBQU9ELEdBQUcsR0FBR0UsUUFBUSxDQUFDNUwsTUFBTSxDQUFDNkwsZ0JBQVAsQ0FBd0JqUCxPQUF4QixFQUFpQytPLElBQWpDLEtBQXdDLENBQXpDLENBQXJCO0FBQ0QsS0FGTSxFQUVKLENBRkksQ0FBUDtBQUdELEdBcEhjO0FBcUhmcEksa0JBckhlLDRCQXFIRWlGLEVBckhGLEVBcUhNekcsZ0JBckhOLEVBcUh3QjtBQUNyQyxRQUFJNkcsS0FBSyxHQUFHZ0QsUUFBUSxDQUFDNUwsTUFBTSxDQUFDNkwsZ0JBQVAsQ0FBd0JyRCxFQUF4QixFQUE0QixPQUE1QixDQUFELENBQXBCO0FBQUEsUUFBNERLLE1BQU0sR0FBRytDLFFBQVEsQ0FBQzVMLE1BQU0sQ0FBQzZMLGdCQUFQLENBQXdCckQsRUFBeEIsRUFBNEIsUUFBNUIsQ0FBRCxDQUE3RTs7QUFDQSxRQUFJLENBQUN6RyxnQkFBTCxFQUF1QjtBQUNyQjZHLFdBQUssSUFBSSxLQUFLMkMsc0JBQUwsQ0FBNEIvQyxFQUE1QixFQUFnQyxDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsbUJBQWxDLEVBQXVELG9CQUF2RCxDQUFoQyxDQUFUO0FBQ0FLLFlBQU0sSUFBSSxLQUFLMEMsc0JBQUwsQ0FBNEIvQyxFQUE1QixFQUFnQyxDQUFDLGFBQUQsRUFBZ0IsZ0JBQWhCLEVBQWtDLGtCQUFsQyxFQUFzRCxxQkFBdEQsQ0FBaEMsQ0FBVjtBQUNEOztBQUNELFdBQU8sSUFBSS9KLEtBQUosQ0FBVW1LLEtBQVYsRUFBaUJDLE1BQWpCLENBQVA7QUFDRCxHQTVIYztBQTZIZmxHLFdBN0hlLHFCQTZITDZGLEVBN0hLLEVBNkhEM0wsTUE3SEMsRUE2SE87QUFDcEIsUUFBTWlQLE1BQU0sR0FBR3RELEVBQUUsQ0FBQ3VELHFCQUFILEVBQWY7QUFBQSxRQUEyQ0MsVUFBVSxHQUFHblAsTUFBTSxDQUFDa1AscUJBQVAsRUFBeEQ7QUFDQSxXQUFPLElBQUl0TixLQUFKLENBQVVxTixNQUFNLENBQUNwRCxJQUFQLEdBQWNzRCxVQUFVLENBQUN0RCxJQUFuQyxFQUF5Q29ELE1BQU0sQ0FBQ25ELEdBQVAsR0FBYXFELFVBQVUsQ0FBQ3JELEdBQWpFLENBQVA7QUFDRCxHQWhJYztBQWlJZi9JLDBCQWpJZSxvQ0FpSVVKLEtBaklWLEVBaUlpQnFCLE1BaklqQixFQWlJeUI5QixNQWpJekIsRUFpSWlDO0FBQzlDQSxVQUFNLEdBQUdBLE1BQU0sSUFBSSxJQUFJTixLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBbkI7QUFDQSxXQUFPTSxNQUFNLENBQUNzRCxHQUFQLENBQVcsSUFBSTVELEtBQUosQ0FBVW9DLE1BQU0sR0FBRzlDLElBQUksQ0FBQ00sR0FBTCxDQUFTbUIsS0FBVCxDQUFuQixFQUFvQ3FCLE1BQU0sR0FBRzlDLElBQUksQ0FBQ1EsR0FBTCxDQUFTaUIsS0FBVCxDQUE3QyxDQUFYLENBQVA7QUFDRCxHQXBJYztBQXFJZnlNLHVCQXJJZSxpQ0FxSU9DLFdBcklQLEVBcUlvQmhRLEtBcklwQixFQXFJMkJpUSxPQXJJM0IsRUFxSW9DO0FBQ2pELFFBQU1DLE1BQU0sR0FBR0YsV0FBVyxDQUFDRyxNQUFaLENBQW1CLFVBQVNDLE1BQVQsRUFBaUI7QUFDakQsYUFBUUEsTUFBTSxDQUFDNVAsQ0FBUCxHQUFXUixLQUFLLENBQUNRLENBQWpCLEtBQXVCeVAsT0FBTyxHQUFHRyxNQUFNLENBQUM3UCxDQUFQLEdBQVdQLEtBQUssQ0FBQ08sQ0FBcEIsR0FBd0I2UCxNQUFNLENBQUM3UCxDQUFQLEdBQVdQLEtBQUssQ0FBQ08sQ0FBdkUsQ0FBUjtBQUNELEtBRmMsQ0FBZjs7QUFJQSxTQUFLLElBQUlrRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUwsTUFBTSxDQUFDdkwsTUFBM0IsRUFBbUNGLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsVUFBSXpFLEtBQUssQ0FBQ1EsQ0FBTixHQUFVMFAsTUFBTSxDQUFDekwsQ0FBRCxDQUFOLENBQVVqRSxDQUF4QixFQUEyQjtBQUN6QjBQLGNBQU0sQ0FBQzVFLE1BQVAsQ0FBYzdHLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J6RSxLQUFwQjtBQUNBLGVBQU9rUSxNQUFQO0FBQ0Q7QUFDRjs7QUFDREEsVUFBTSxDQUFDaEwsSUFBUCxDQUFZbEYsS0FBWjtBQUNBLFdBQU9rUSxNQUFQO0FBQ0QsR0FsSmM7QUFtSmYzTSxVQW5KZSxvQkFtSk5zSixFQW5KTSxFQW1KRkMsRUFuSkUsRUFtSkU7QUFDZixRQUFNdUQsSUFBSSxHQUFHdkQsRUFBRSxDQUFDdEUsR0FBSCxDQUFPcUUsRUFBUCxDQUFiO0FBQ0EsV0FBTyxLQUFLckosY0FBTCxDQUFvQjNCLElBQUksQ0FBQ0MsS0FBTCxDQUFXdU8sSUFBSSxDQUFDN1AsQ0FBaEIsRUFBbUI2UCxJQUFJLENBQUM5UCxDQUF4QixDQUFwQixDQUFQO0FBQ0QsR0F0SmM7QUF1SmYrUCxVQXZKZSxvQkF1Sk5oTixLQXZKTSxFQXVKQztBQUNkLFdBQVNBLEtBQUssR0FBRyxHQUFULEdBQWdCekIsSUFBSSxDQUFDRyxFQUFyQixHQUEwQixHQUFsQztBQUNELEdBekpjO0FBMEpmdU8sVUExSmUsb0JBMEpOak4sS0ExSk0sRUEwSkM7QUFDZCxXQUFRQSxLQUFLLEdBQUcsR0FBUixHQUFjekIsSUFBSSxDQUFDRyxFQUFwQixHQUEwQixHQUFqQztBQUNELEdBNUpjO0FBNkpmeUIsWUE3SmUsc0JBNkpKa0ksR0E3SkksRUE2SkNDLEdBN0pELEVBNkpNOEIsR0E3Sk4sRUE2Slc7QUFDeEIsUUFBSThDLElBQUosRUFBVUMsSUFBVjs7QUFDQSxRQUFJOUUsR0FBRyxHQUFHQyxHQUFOLElBQWE4QixHQUFHLEdBQUcvQixHQUFuQixJQUEwQitCLEdBQUcsR0FBRzlCLEdBQXBDLEVBQXlDO0FBQ3ZDLGFBQU84QixHQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUk5QixHQUFHLEdBQUdELEdBQU4sS0FBYytCLEdBQUcsR0FBRzlCLEdBQU4sSUFBYThCLEdBQUcsR0FBRy9CLEdBQWpDLENBQUosRUFBMkM7QUFDaEQsYUFBTytCLEdBQVA7QUFDRCxLQUZNLE1BRUE7QUFDTDhDLFVBQUksR0FBRyxLQUFLRSxZQUFMLENBQWtCL0UsR0FBbEIsRUFBdUIrQixHQUF2QixDQUFQO0FBQ0ErQyxVQUFJLEdBQUcsS0FBS0MsWUFBTCxDQUFrQjlFLEdBQWxCLEVBQXVCOEIsR0FBdkIsQ0FBUDs7QUFDQSxVQUFJOEMsSUFBSSxHQUFHQyxJQUFYLEVBQWlCO0FBQ2YsZUFBTzlFLEdBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPQyxHQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBNUtjO0FBNktmK0UsaUJBN0tlLDJCQTZLQ2xELEdBN0tELEVBNktNbkssS0E3S04sRUE2S2E7QUFDMUIsUUFBSW1CLENBQUo7QUFBQSxRQUFPa0osSUFBUDtBQUFBLFFBQWEwQyxJQUFJLEdBQUd4TyxJQUFJLENBQUNHLEVBQUwsR0FBVSxDQUE5QjtBQUFBLFFBQWlDNE8sS0FBakM7O0FBQ0EsU0FBS25NLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2dKLEdBQUcsQ0FBQzlJLE1BQXBCLEVBQTJCRixDQUFDLEVBQTVCLEVBQWdDO0FBQzlCa0osVUFBSSxHQUFHMU0sUUFBUSxDQUFDeVAsWUFBVCxDQUFzQmpELEdBQUcsQ0FBQ2hKLENBQUQsQ0FBekIsRUFBOEJuQixLQUE5QixDQUFQOztBQUNBLFVBQUkrTSxJQUFJLEdBQUcxQyxJQUFYLEVBQWlCO0FBQ2YwQyxZQUFJLEdBQUcxQyxJQUFQO0FBQ0FpRCxhQUFLLEdBQUduRCxHQUFHLENBQUNoSixDQUFELENBQVg7QUFDRDtBQUNGOztBQUNELFdBQU9tTSxLQUFQO0FBQ0QsR0F2TGM7QUF3TGZGLGNBeExlLHdCQXdMRjlPLEtBeExFLEVBd0xLRyxJQXhMTCxFQXdMVztBQUN4QixRQUFNOE8sUUFBUSxHQUFHaFAsSUFBSSxDQUFDOEosR0FBTCxDQUFTL0osS0FBVCxFQUFnQkcsSUFBaEIsQ0FBakI7QUFBQSxRQUNFK08sUUFBUSxHQUFJalAsSUFBSSxDQUFDK0osR0FBTCxDQUFTaEssS0FBVCxFQUFnQkcsSUFBaEIsQ0FEZDtBQUVBLFdBQU9GLElBQUksQ0FBQzhKLEdBQUwsQ0FBU21GLFFBQVEsR0FBR0QsUUFBcEIsRUFBOEJBLFFBQVEsR0FBR2hQLElBQUksQ0FBQ0csRUFBTCxHQUFRLENBQW5CLEdBQXVCOE8sUUFBckQsQ0FBUDtBQUNELEdBNUxjO0FBNkxmdE4sZ0JBN0xlLDBCQTZMQWtLLEdBN0xBLEVBNkxLO0FBQ2xCLFdBQU9BLEdBQUcsR0FBRyxDQUFiLEVBQWdCO0FBQ2RBLFNBQUcsSUFBSSxJQUFJN0wsSUFBSSxDQUFDRyxFQUFoQjtBQUNEOztBQUNELFdBQU8wTCxHQUFHLEdBQUcsSUFBSTdMLElBQUksQ0FBQ0csRUFBdEIsRUFBMEI7QUFDeEIwTCxTQUFHLElBQUksSUFBSTdMLElBQUksQ0FBQ0csRUFBaEI7QUFDRDs7QUFDRCxXQUFPMEwsR0FBUDtBQUNEO0FBck1jLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEEsSUFBTXFELEtBQUssR0FBRyxFQUFkO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNcE4sTUFBTSxHQUFHO0FBQUVDLE9BQUssRUFBTEEsOENBQUtBO0FBQVAsQ0FBZixDLENBQXlCOztJQUVuQm9OLEk7OztBQUNKLGdCQUFZN00sVUFBWixFQUFvQztBQUFBLFFBQVpvQixPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xDLFNBQUtBLE9BQUwsR0FBZUcsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0JzTCxhQUFPLEVBQUUsR0FEa0I7QUFFM0JDLGlCQUFXLEVBQUUsR0FGYztBQUczQnBPLFlBQU0sRUFBRSxFQUhtQjtBQUkzQjhKLGlCQUFXLEVBQUUzTCxrREFBUSxDQUFDMkwsV0FKSztBQUszQnVFLG9CQUFjLEVBQUUsS0FMVztBQU0zQkMsZ0JBQVUsRUFBRTtBQU5lLEtBQWQsRUFPWjdMLE9BUFksQ0FBZjtBQVNBLFNBQUtwQixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBNE0sU0FBSyxDQUFDN0wsSUFBTixDQUFXLElBQVg7QUFDQSxTQUFLbU0sUUFBTCxHQUFnQixJQUFJMU4sTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWhCOztBQUNBLFFBQUkyQixPQUFPLENBQUM4TCxRQUFaLEVBQXNCO0FBQ3BCLFdBQUtBLFFBQUwsQ0FBY2xMLEdBQWQsQ0FBa0JaLE9BQU8sQ0FBQzhMLFFBQTFCO0FBQ0Q7O0FBQ0QsU0FBSy9LLElBQUw7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS3BDLFVBQUwsQ0FBZ0JtTixPQUFoQixDQUF3QixLQUFLQyxhQUE3QixFQUE0QyxJQUE1QztBQUNEOzs7a0NBRWF6TSxTLEVBQVc7QUFBQTs7QUFDdkIsVUFBSTBNLFlBQUo7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFFQTNNLGVBQVMsQ0FBQzBGLE1BQVYsR0FBbUIsS0FBS2pFLE9BQXhCOztBQUNBLFVBQUksS0FBS2hCLE9BQUwsQ0FBYTRMLGNBQWpCLEVBQWlDO0FBQy9CSyxvQkFBVyxHQUFHLHVCQUFXO0FBQ3ZCLGNBQUkxTSxTQUFTLENBQUNrRixVQUFkLEVBQTBCO0FBQ3hCeUgsZ0JBQUksQ0FBQ3ZMLE9BQUwsQ0FBYXBCLFNBQWI7QUFDQUEscUJBQVMsQ0FBQ21CLE1BQVYsQ0FBaUJtRixNQUFqQixDQUF3Qm9HLFlBQXhCO0FBQ0EsbUJBQU8sSUFBUDtBQUNEO0FBQ0YsU0FORDs7QUFRQTFNLGlCQUFTLENBQUNnQixLQUFWLENBQWdCSyxHQUFoQixDQUFvQixZQUFNO0FBQ3hCLGVBQUksQ0FBQ3VMLGtCQUFMLENBQXdCNU0sU0FBeEI7O0FBQ0FBLG1CQUFTLENBQUNtQixNQUFWLENBQWlCRSxHQUFqQixDQUFxQnFMLFlBQXJCO0FBQ0EsaUJBQU8sSUFBUDtBQUNELFNBSkQ7QUFNQTFNLGlCQUFTLENBQUNtQixNQUFWLENBQWlCRSxHQUFqQixDQUFxQnFMLFlBQXJCO0FBQ0QsT0FoQkQsTUFnQk87QUFDTDFNLGlCQUFTLENBQUNnQixLQUFWLENBQWdCSyxHQUFoQixDQUFvQixZQUFNO0FBQ3hCLGVBQUksQ0FBQ0wsS0FBTCxDQUFXaEIsU0FBWDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0FIRDtBQUlEO0FBQ0Y7OzsrQkFFVUEsUyxFQUFXeEUsUSxFQUFVNkgsSSxFQUFNO0FBQ3BDLFVBQUlyRCxTQUFTLENBQUNrRixVQUFkLEVBQTBCO0FBQ3hCbEYsaUJBQVMsQ0FBQzRCLFdBQVYsR0FBd0JwRyxRQUF4QjtBQUNELE9BRkQsTUFFTztBQUNMd0UsaUJBQVMsQ0FBQ2QsSUFBVixDQUFlMUQsUUFBZixFQUF5QjZILElBQXpCLEVBQStCLElBQS9CO0FBQ0Q7QUFDRjs7OzBCQUVLckQsUyxFQUFXO0FBQ2YsVUFBTTZNLFlBQVksR0FBRyxLQUFLQyxxQkFBTCxFQUFyQjtBQUNBLFVBQU1DLFlBQVksR0FBRyxLQUFLMU4sVUFBTCxDQUFnQjZELE9BQWhCLENBQXdCbEQsU0FBeEIsQ0FBckI7QUFDQSxVQUFNZ04sWUFBWSxHQUFHN1Esa0RBQVEsQ0FBQ3VNLG1CQUFULENBQTZCbUUsWUFBN0IsRUFBMkM3TSxTQUFTLENBQUN4RSxRQUFyRCxFQUErRCxLQUFLaUYsT0FBTCxDQUFhekMsTUFBNUUsRUFBb0YsS0FBS3lDLE9BQUwsQ0FBYXFILFdBQWpHLENBQXJCOztBQUVBLFVBQUlrRixZQUFZLEtBQUssQ0FBQyxDQUFsQixJQUF1QkEsWUFBWSxLQUFLRCxZQUE1QyxFQUEwRDtBQUN4RC9NLGlCQUFTLENBQUNkLElBQVYsQ0FBZWMsU0FBUyxDQUFDNEIsV0FBekIsRUFBc0MsS0FBS25CLE9BQUwsQ0FBYTBMLE9BQW5ELEVBQTRELElBQTVEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2MsVUFBTCxDQUFnQixLQUFLNU4sVUFBTCxDQUFnQjJOLFlBQWhCLENBQWhCLEVBQStDSCxZQUFZLENBQUNFLFlBQUQsQ0FBM0QsRUFBMkUsS0FBS3RNLE9BQUwsQ0FBYTJMLFdBQXhGO0FBQ0EsYUFBSy9NLFVBQUwsQ0FBZ0IwTixZQUFoQixFQUE4QjdOLElBQTlCLENBQW1DMk4sWUFBWSxDQUFDRyxZQUFELENBQS9DLEVBQStELEtBQUt2TSxPQUFMLENBQWEwTCxPQUE1RSxFQUFxRixJQUFyRjtBQUNBLGFBQUtJLFFBQUwsQ0FBY2hMLElBQWQ7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O21DQUVjdkIsUyxFQUFXO0FBQ3hCLFVBQU00QixXQUFXLEdBQUc1QixTQUFTLENBQUM0QixXQUE5QjtBQUNBLFVBQU1tTCxZQUFZLEdBQUcsS0FBSzFOLFVBQUwsQ0FBZ0I2RCxPQUFoQixDQUF3QmxELFNBQXhCLENBQXJCO0FBQ0EsVUFBTWtOLGFBQWEsR0FBRyxLQUFLN04sVUFBTCxDQUFnQjBOLFlBQVksR0FBRyxDQUEvQixDQUF0QjtBQUNBLFVBQU1JLGFBQWEsR0FBRyxLQUFLOU4sVUFBTCxDQUFnQjBOLFlBQVksR0FBRyxDQUEvQixDQUF0Qjs7QUFFQSxVQUFJL00sU0FBUyxDQUFDZ0UsYUFBVixJQUEyQmtKLGFBQS9CLEVBQThDO0FBQzVDLFlBQU05RSxRQUFRLEdBQUcsS0FBSzNILE9BQUwsQ0FBYXFILFdBQWIsQ0FBeUI5SCxTQUFTLENBQUN4RSxRQUFuQyxFQUE2QzBSLGFBQWEsQ0FBQzFSLFFBQTNELENBQWpCOztBQUNBLFlBQUk0TSxRQUFRLEdBQUcsS0FBSzNILE9BQUwsQ0FBYXpDLE1BQTVCLEVBQW9DO0FBQ2xDZ0MsbUJBQVMsQ0FBQzRCLFdBQVYsR0FBd0JzTCxhQUFhLENBQUN0TCxXQUF0QztBQUNBLGVBQUtxTCxVQUFMLENBQWdCQyxhQUFoQixFQUErQnRMLFdBQS9CLEVBQTRDLEtBQUtuQixPQUFMLENBQWEyTCxXQUF6RDtBQUZrQyxxQkFHbUMsQ0FBQyxLQUFLL00sVUFBTCxDQUFnQjBOLFlBQVksR0FBRyxDQUEvQixDQUFELEVBQW9DLEtBQUsxTixVQUFMLENBQWdCME4sWUFBaEIsQ0FBcEMsQ0FIbkM7QUFHakMsZUFBSzFOLFVBQUwsQ0FBZ0IwTixZQUFoQixDQUhpQztBQUdGLGVBQUsxTixVQUFMLENBQWdCME4sWUFBWSxHQUFHLENBQS9CLENBSEU7QUFJbEMsZUFBS0ssY0FBTCxDQUFvQnBOLFNBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQSxTQUFTLENBQUMrRCxXQUFWLElBQXlCb0osYUFBN0IsRUFBNEM7QUFDMUMsWUFBTS9FLFNBQVEsR0FBRyxLQUFLM0gsT0FBTCxDQUFhcUgsV0FBYixDQUF5QjlILFNBQVMsQ0FBQ3hFLFFBQW5DLEVBQTZDMlIsYUFBYSxDQUFDM1IsUUFBM0QsQ0FBakI7O0FBQ0EsWUFBSTRNLFNBQVEsR0FBRyxLQUFLM0gsT0FBTCxDQUFhekMsTUFBNUIsRUFBb0M7QUFDbENnQyxtQkFBUyxDQUFDNEIsV0FBVixHQUF3QnVMLGFBQWEsQ0FBQ3ZMLFdBQXRDO0FBQ0EsZUFBS3FMLFVBQUwsQ0FBZ0JFLGFBQWhCLEVBQStCdkwsV0FBL0IsRUFBNEMsS0FBS25CLE9BQUwsQ0FBYTJMLFdBQXpEO0FBRmtDLHNCQUdtQyxDQUFDLEtBQUsvTSxVQUFMLENBQWdCME4sWUFBWSxHQUFHLENBQS9CLENBQUQsRUFBb0MsS0FBSzFOLFVBQUwsQ0FBZ0IwTixZQUFoQixDQUFwQyxDQUhuQztBQUdqQyxlQUFLMU4sVUFBTCxDQUFnQjBOLFlBQWhCLENBSGlDO0FBR0YsZUFBSzFOLFVBQUwsQ0FBZ0IwTixZQUFZLEdBQUcsQ0FBL0IsQ0FIRTtBQUlsQyxlQUFLSyxjQUFMLENBQW9CcE4sU0FBcEI7QUFDRDtBQUNGO0FBQ0Y7Ozt1Q0FFa0JBLFMsRUFBVztBQUM1QixVQUFNcU4sZ0JBQWdCLEdBQUcsS0FBS0MsbUJBQUwsRUFBekI7QUFDQSxVQUFNVCxZQUFZLEdBQUdRLGdCQUFnQixDQUFDRSxHQUFqQixDQUFxQixVQUFDdk4sU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzRCLFdBQXpCO0FBQUEsT0FBckIsQ0FBckI7QUFFQSxVQUFNbUwsWUFBWSxHQUFHTSxnQkFBZ0IsQ0FBQ25LLE9BQWpCLENBQXlCbEQsU0FBekIsQ0FBckI7QUFDQSxVQUFNd04sV0FBVyxHQUFHclIsa0RBQVEsQ0FBQ3VNLG1CQUFULENBQTZCbUUsWUFBN0IsRUFBMkM3TSxTQUFTLENBQUN4RSxRQUFyRCxFQUErRCxLQUFLaUYsT0FBTCxDQUFhekMsTUFBNUUsRUFBb0YsS0FBS3lDLE9BQUwsQ0FBYXFILFdBQWpHLENBQXBCOztBQUVBLFVBQUkwRixXQUFXLEtBQUssQ0FBQyxDQUFyQixFQUF3QjtBQUN0QixZQUFJQSxXQUFXLEdBQUdULFlBQWxCLEVBQWdDO0FBQzlCLGVBQUssSUFBSXBOLENBQUMsR0FBQzZOLFdBQVgsRUFBd0I3TixDQUFDLEdBQUNvTixZQUExQixFQUF3Q3BOLENBQUMsRUFBekMsRUFBNkM7QUFDM0MsaUJBQUtzTixVQUFMLENBQWdCSSxnQkFBZ0IsQ0FBQzFOLENBQUQsQ0FBaEMsRUFBcUNrTixZQUFZLENBQUNsTixDQUFDLEdBQUMsQ0FBSCxDQUFqRCxFQUF3RCxLQUFLYyxPQUFMLENBQWEyTCxXQUFyRTtBQUNEO0FBQ0YsU0FKRCxNQUlPO0FBQ0wsZUFBSyxJQUFJek0sRUFBQyxHQUFDb04sWUFBWCxFQUF5QnBOLEVBQUMsR0FBQzZOLFdBQTNCLEVBQXdDN04sRUFBQyxFQUF6QyxFQUE2QztBQUMzQyxpQkFBS3NOLFVBQUwsQ0FBZ0JJLGdCQUFnQixDQUFDMU4sRUFBQyxHQUFDLENBQUgsQ0FBaEMsRUFBdUNrTixZQUFZLENBQUNsTixFQUFELENBQW5ELEVBQXdELEtBQUtjLE9BQUwsQ0FBYTJMLFdBQXJFO0FBQ0Q7QUFDRjs7QUFDRHBNLGlCQUFTLENBQUNkLElBQVYsQ0FBZTJOLFlBQVksQ0FBQ1csV0FBRCxDQUEzQixFQUEwQyxLQUFLL00sT0FBTCxDQUFhMEwsT0FBdkQsRUFBZ0UsSUFBaEU7QUFDRCxPQVhELE1BV087QUFDTG5NLGlCQUFTLENBQUNkLElBQVYsQ0FBZWMsU0FBUyxDQUFDNEIsV0FBekIsRUFBc0MsS0FBS25CLE9BQUwsQ0FBYTBMLE9BQW5ELEVBQTRELElBQTVEO0FBQ0Q7QUFDRjs7OzRCQUVPbk0sUyxFQUFXO0FBQ2pCLFVBQUlMLENBQUo7QUFDQSxVQUFNME4sZ0JBQWdCLEdBQUcsS0FBS0MsbUJBQUwsRUFBekI7QUFDQSxVQUFNVCxZQUFZLEdBQUdRLGdCQUFnQixDQUFDRSxHQUFqQixDQUFxQixVQUFDdk4sU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzRCLFdBQXpCO0FBQUEsT0FBckIsQ0FBckI7QUFFQSxVQUFNbUwsWUFBWSxHQUFHTSxnQkFBZ0IsQ0FBQ25LLE9BQWpCLENBQXlCbEQsU0FBekIsQ0FBckI7O0FBQ0EsV0FBS0wsQ0FBQyxHQUFHb04sWUFBWSxHQUFHLENBQXhCLEVBQTJCcE4sQ0FBQyxHQUFHME4sZ0JBQWdCLENBQUN4TixNQUFoRCxFQUF3REYsQ0FBQyxFQUF6RCxFQUE2RDtBQUMzRCxhQUFLc04sVUFBTCxDQUFnQkksZ0JBQWdCLENBQUMxTixDQUFELENBQWhDLEVBQXFDa04sWUFBWSxDQUFDbE4sQ0FBQyxHQUFHLENBQUwsQ0FBakQsRUFBMEQsS0FBS2MsT0FBTCxDQUFhMkwsV0FBdkU7QUFDRDs7QUFDRGlCLHNCQUFnQixDQUFDTixZQUFELENBQWhCLENBQStCbkwsV0FBL0IsR0FBNkNpTCxZQUFZLENBQUNsTixDQUFDLEdBQUcsQ0FBTCxDQUF6RDtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS04sVUFBTCxDQUFnQmtPLEdBQWhCLENBQW9CLFVBQUN2TixTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDNEIsV0FBVixDQUFzQnZHLEtBQXRCLEVBQWY7QUFBQSxPQUFwQixDQUFQO0FBQ0Q7OzswQ0FFcUI7QUFBQTs7QUFDcEIsVUFBTW9TLGFBQWEsR0FBRyxLQUFLcE8sVUFBTCxDQUFnQmtPLEdBQWhCLENBQW9CLFVBQUN2TixTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDNkIsWUFBekI7QUFBQSxPQUFwQixDQUF0QjtBQUVBLFVBQU13TCxnQkFBZ0IsR0FBR0ksYUFBYSxDQUFDRixHQUFkLENBQWtCLFVBQUMvUixRQUFELEVBQWM7QUFDdkQsZUFBTyxNQUFJLENBQUM2RCxVQUFMLENBQWdCZ00sTUFBaEIsQ0FBdUIsVUFBQ3JMLFNBQUQ7QUFBQSxpQkFBZUEsU0FBUyxDQUFDNEIsV0FBVixDQUFzQjhMLE9BQXRCLENBQThCbFMsUUFBOUIsQ0FBZjtBQUFBLFNBQXZCLEVBQStFLENBQS9FLENBQVA7QUFDRCxPQUZ3QixDQUF6QjtBQUlBLGFBQU82UixnQkFBUDtBQUNEOzs7NEJBRU87QUFDTixXQUFLaE8sVUFBTCxDQUFnQm1OLE9BQWhCLENBQXdCLFVBQUN4TSxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNkLElBQVYsQ0FBZWMsU0FBUyxDQUFDNkIsWUFBekIsRUFBdUMsQ0FBdkMsRUFBMEMsSUFBMUMsRUFBZ0QsS0FBaEQ7QUFDRCxPQUZEO0FBR0Q7Ozs4QkFFUztBQUNSLFdBQUt4QyxVQUFMLENBQWdCbU4sT0FBaEIsQ0FBd0IsVUFBQ3hNLFNBQUQsRUFBZTtBQUNyQ0EsaUJBQVMsQ0FBQzlELE9BQVY7QUFDRCxPQUZEO0FBR0Q7Ozt3QkFFR21ELFUsRUFBWTtBQUNkLFVBQUksRUFBRUEsVUFBVSxZQUFZc08sS0FBeEIsQ0FBSixFQUFvQztBQUNsQ3RPLGtCQUFVLEdBQUcsQ0FBQ0EsVUFBRCxDQUFiO0FBQ0Q7O0FBQ0RBLGdCQUFVLENBQUNtTixPQUFYLENBQW1CLEtBQUtDLGFBQXhCLEVBQXVDLElBQXZDO0FBQ0EsV0FBS3BOLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQnVPLE1BQWhCLENBQXVCdk8sVUFBdkIsQ0FBbEI7QUFDRDs7OzJCQUVNQSxVLEVBQVk7QUFBQTs7QUFDakIsVUFBTW9PLGFBQWEsR0FBRyxLQUFLcE8sVUFBTCxDQUFnQmtPLEdBQWhCLENBQW9CLFVBQUN2TixTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDNkIsWUFBekI7QUFBQSxPQUFwQixDQUF0QjtBQUNBLFVBQU04SyxJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1VLGdCQUFnQixHQUFHLEtBQUtDLG1CQUFMLEVBQXpCOztBQUVBLFVBQUksRUFBRWpPLFVBQVUsWUFBWXNPLEtBQXhCLENBQUosRUFBb0M7QUFDbEN0TyxrQkFBVSxHQUFHLENBQUNBLFVBQUQsQ0FBYjtBQUNEOztBQUVEQSxnQkFBVSxDQUFDbU4sT0FBWCxDQUFtQixVQUFDeE0sU0FBRCxFQUFlO0FBQ2hDQSxpQkFBUyxDQUFDZ0IsS0FBVixDQUFnQnlFLEtBQWhCO0FBQ0F6RixpQkFBUyxDQUFDbUIsTUFBVixDQUFpQnNFLEtBQWpCLEdBRmdDLENBRVA7O0FBQ3pCb0ksMEVBQVcsQ0FBQyxNQUFJLENBQUN4TyxVQUFOLEVBQWtCVyxTQUFsQixDQUFYO0FBQ0QsT0FKRDtBQU1BLFVBQUk4TixDQUFDLEdBQUcsQ0FBUjtBQUNBVCxzQkFBZ0IsQ0FBQ2IsT0FBakIsQ0FBeUIsVUFBQ3hNLFNBQUQsRUFBZTtBQUN0QyxZQUFJLE1BQUksQ0FBQ1gsVUFBTCxDQUFnQjZELE9BQWhCLENBQXdCbEQsU0FBeEIsTUFBdUMsQ0FBQyxDQUE1QyxFQUErQztBQUM3QyxjQUFJQSxTQUFTLENBQUM0QixXQUFWLEtBQTBCNkwsYUFBYSxDQUFDSyxDQUFELENBQTNDLEVBQWdEO0FBQzlDOU4scUJBQVMsQ0FBQ2QsSUFBVixDQUFldU8sYUFBYSxDQUFDSyxDQUFELENBQTVCLEVBQWlDLE1BQUksQ0FBQ3JOLE9BQUwsQ0FBYTJMLFdBQTlDLEVBQTJELElBQTNEO0FBQ0Q7O0FBQ0RwTSxtQkFBUyxDQUFDNkIsWUFBVixHQUF5QjRMLGFBQWEsQ0FBQ0ssQ0FBRCxDQUF0QztBQUNBQSxXQUFDO0FBQ0RuQixjQUFJLENBQUN2TSxJQUFMLENBQVVKLFNBQVY7QUFDRDtBQUNGLE9BVEQ7QUFVQSxXQUFLWCxVQUFMLEdBQWtCc04sSUFBbEI7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS3JHLE1BQUwsQ0FBWSxLQUFLakgsVUFBTCxDQUFnQjBHLEtBQWhCLEVBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBSzFHLFVBQUwsQ0FBZ0JtTixPQUFoQixDQUF3QixVQUFDeE0sU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQytOLE9BQVYsRUFBZjtBQUFBLE9BQXhCO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBS2pCLHFCQUFMLEVBQVA7QUFDRCxLO3NCQUVha0IsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQU0vTixPQUFPLEdBQUcsb0JBQWhCOztBQUNBLFVBQUkrTixTQUFTLENBQUNuTyxNQUFWLEtBQXFCLEtBQUtSLFVBQUwsQ0FBZ0JRLE1BQXpDLEVBQWlEO0FBQy9DbU8saUJBQVMsQ0FBQ3hCLE9BQVYsQ0FBa0IsVUFBQ3RSLEtBQUQsRUFBUXlFLENBQVIsRUFBYztBQUM5QixnQkFBSSxDQUFDTixVQUFMLENBQWdCTSxDQUFoQixFQUFtQlQsSUFBbkIsQ0FBd0JoRSxLQUF4QixFQUErQixDQUEvQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QztBQUNELFNBRkQsRUFFRyxJQUZIO0FBR0QsT0FKRCxNQUlPO0FBQ0wsY0FBTStFLE9BQU47QUFDRDtBQUNGOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUt3QixPQUFaO0FBQ0QsSztzQkFFVWlFLE0sRUFBUTtBQUNqQixXQUFLakUsT0FBTCxHQUFlaUUsTUFBZjtBQUNBLFdBQUtyRyxVQUFMLENBQWdCbU4sT0FBaEIsQ0FBd0IsVUFBQ3hNLFNBQUQsRUFBZTtBQUNyQ0EsaUJBQVMsQ0FBQzBGLE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTdUksV0FBVCxDQUFxQkMsYUFBckIsRUFBb0NDLFFBQXBDLEVBQTBEO0FBQUEsTUFBWjFOLE9BQVksdUVBQUosRUFBSTtBQUN4RCxNQUFNMk4sZ0JBQWdCLEdBQUczTixPQUFPLENBQUNULFNBQVIsSUFBcUIsRUFBOUM7QUFDQSxNQUFNcU8sV0FBVyxHQUFHNU4sT0FBTyxDQUFDa00sSUFBUixJQUFnQixFQUFwQztBQUNBeUIsa0JBQWdCLENBQUN2UyxNQUFqQixHQUEwQnVTLGdCQUFnQixDQUFDdlMsTUFBakIsSUFBMkJxUyxhQUFyRDtBQUNBQyxVQUFRLEdBQUdSLEtBQUssQ0FBQzlILFNBQU4sQ0FBZ0JFLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQm1JLFFBQTNCLENBQVg7QUFFQSxNQUFNOU8sVUFBVSxHQUFHOE8sUUFBUSxDQUFDWixHQUFULENBQWEsVUFBQzNSLE9BQUQsRUFBYTtBQUMzQyxXQUFPLElBQUk0RSxvREFBSixDQUFjNUUsT0FBZCxFQUF1QndTLGdCQUF2QixDQUFQO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxTQUFPLElBQUlsQyxJQUFKLENBQVM3TSxVQUFULEVBQXFCZ1AsV0FBckIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ2pRRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0lBRU1DLFk7Ozs7O0FBQ0osd0JBQVlqUCxVQUFaLEVBQW9DO0FBQUEsUUFBWm9CLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDbENBLFdBQU8sQ0FBQzhOLE1BQVIsR0FBaUI5TixPQUFPLENBQUM4TixNQUFSLElBQWtCLElBQUk5USwrQ0FBSixDQUFVLENBQUMsRUFBWCxFQUFlLENBQWYsQ0FBbkM7QUFEa0MscUZBRTVCNEIsVUFGNEIsRUFFaEJvQixPQUZnQjtBQUduQzs7OzsyQkFFTTtBQUFBOztBQUNMLFdBQUtwQixVQUFMLENBQWdCbU4sT0FBaEIsQ0FBd0IsVUFBQ3hNLFNBQUQsRUFBZTtBQUNyQ0EsaUJBQVMsQ0FBQ3dPLElBQVYsR0FBaUIsS0FBakI7QUFDQXhPLGlCQUFTLENBQUNnQixLQUFWLENBQWdCSyxHQUFoQixDQUFvQixZQUFNO0FBQ3hCLGVBQUksQ0FBQ0wsS0FBTCxDQUFXaEIsU0FBWDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0FIRDtBQUlELE9BTkQ7QUFPRDs7OzBCQUVLQSxTLEVBQVc7QUFDZixVQUFNNk0sWUFBWSxHQUFHLEtBQUs0Qiw0QkFBTCxFQUFyQjtBQUNBLFVBQU0xQixZQUFZLEdBQUcsS0FBSzFOLFVBQUwsQ0FBZ0I2RCxPQUFoQixDQUF3QmxELFNBQXhCLENBQXJCO0FBQ0EsVUFBTWdOLFlBQVksR0FBRzdRLGtEQUFRLENBQUN1TSxtQkFBVCxDQUE2Qm1FLFlBQTdCLEVBQTJDN00sU0FBUyxDQUFDeEUsUUFBckQsRUFBK0QsS0FBS2lGLE9BQUwsQ0FBYXpDLE1BQTVFLEVBQW9GLEtBQUt5QyxPQUFMLENBQWFxSCxXQUFqRyxDQUFyQjs7QUFFQSxVQUFJa0YsWUFBWSxLQUFLLENBQUMsQ0FBbEIsSUFBdUJBLFlBQVksS0FBS0QsWUFBNUMsRUFBMEQ7QUFDeEQsYUFBSzJCLGFBQUwsQ0FBbUIzQixZQUFuQixFQUFpQy9NLFNBQVMsQ0FBQ3hFLFFBQTNDLEVBQXFEcVIsWUFBWSxDQUFDRSxZQUFELENBQWpFLEVBQWlGLEtBQUt0TSxPQUFMLENBQWEwTCxPQUE5RjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUksS0FBSzlNLFVBQUwsQ0FBZ0IyTixZQUFoQixFQUE4QjlILFVBQWxDLEVBQThDO0FBQzVDLGVBQUt5SixRQUFMLENBQWMzQixZQUFkLEVBQTRCSCxZQUFZLENBQUNFLFlBQUQsQ0FBeEM7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLNkIsa0JBQUwsQ0FBd0I1QixZQUF4QixFQUFzQ0gsWUFBWSxDQUFDRSxZQUFELENBQWxELEVBQWtFLEtBQUt0TSxPQUFMLENBQWEyTCxXQUEvRTtBQUNEOztBQUNELGFBQUtzQyxhQUFMLENBQW1CM0IsWUFBbkIsRUFBaUMvTSxTQUFTLENBQUN4RSxRQUEzQyxFQUFxRHFSLFlBQVksQ0FBQ0csWUFBRCxDQUFqRSxFQUFpRixLQUFLdk0sT0FBTCxDQUFhMEwsT0FBOUY7QUFDQSxhQUFLSSxRQUFMLENBQWNoTCxJQUFkO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztrQ0FFYWdGLEssRUFBTy9LLFEsRUFBVXFULGMsRUFBZ0J4TCxJLEVBQU07QUFDbkQsVUFBTTJLLFNBQVMsR0FBRyxDQUFDYSxjQUFELEVBQWlCQSxjQUFjLENBQUN4TixHQUFmLENBQW1CLEtBQUtaLE9BQUwsQ0FBYThOLE1BQWhDLENBQWpCLENBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHclMsa0RBQVEsQ0FBQ3VNLG1CQUFULENBQTZCc0YsU0FBN0IsRUFBd0N4UyxRQUF4QyxFQUFrRCxDQUFDLENBQW5ELEVBQXNEVyxrREFBUSxDQUFDa00sY0FBL0QsQ0FBYjs7QUFFQSxVQUFJLEtBQUtoSixVQUFMLENBQWdCa0gsS0FBaEIsRUFBdUJpSSxJQUF2QixLQUFnQyxDQUFDLENBQUNBLElBQXRDLEVBQTRDO0FBQzFDLGFBQUtuUCxVQUFMLENBQWdCa0gsS0FBaEIsRUFBdUJpSSxJQUF2QixHQUE4QixDQUFDLENBQUNBLElBQWhDO0FBQ0EsYUFBS2pDLFFBQUwsQ0FBY2hMLElBQWQ7QUFDRDs7QUFFRCxXQUFLbEMsVUFBTCxDQUFnQmtILEtBQWhCLEVBQXVCckgsSUFBdkIsQ0FBNEI4TyxTQUFTLENBQUNRLElBQUQsQ0FBckMsRUFBNkNuTCxJQUE3QyxFQUFtRCxJQUFuRDtBQUNEOzs7NkJBRVFrRCxLLEVBQU9zSSxjLEVBQWdCO0FBQzlCLFdBQUt4UCxVQUFMLENBQWdCa0gsS0FBaEIsRUFBdUJpSSxJQUF2QixHQUE4QixLQUE5QjtBQUNBLFdBQUtuUCxVQUFMLENBQWdCa0gsS0FBaEIsRUFBdUIzRSxXQUF2QixHQUFxQ2lOLGNBQXJDO0FBQ0Q7Ozt1Q0FFa0J0SSxLLEVBQU9zSSxjLEVBQWdCeEwsSSxFQUFNO0FBQzlDLFdBQUtoRSxVQUFMLENBQWdCa0gsS0FBaEIsRUFBdUJpSSxJQUF2QixHQUE4QixLQUE5QjtBQUNBLFdBQUtuUCxVQUFMLENBQWdCa0gsS0FBaEIsRUFBdUJySCxJQUF2QixDQUE0QjJQLGNBQTVCLEVBQTRDeEwsSUFBNUMsRUFBa0QsSUFBbEQ7QUFDRDs7O21EQUU4QjtBQUFBOztBQUM3QixhQUFPLEtBQUtoRSxVQUFMLENBQWdCa08sR0FBaEIsQ0FBb0IsVUFBQ3ZOLFNBQUQsRUFBZTtBQUN4QyxlQUFPQSxTQUFTLENBQUN3TyxJQUFWLEdBQWlCeE8sU0FBUyxDQUFDNEIsV0FBVixDQUFzQjhCLEdBQXRCLENBQTBCLE1BQUksQ0FBQ2pELE9BQUwsQ0FBYThOLE1BQXZDLENBQWpCLEdBQWtFdk8sU0FBUyxDQUFDNEIsV0FBVixDQUFzQnZHLEtBQXRCLEVBQXpFO0FBQ0QsT0FGTSxFQUVKLElBRkksQ0FBUDtBQUdEOzs7MENBRXFCO0FBQUE7O0FBQ3BCLGFBQU8sS0FBS2dFLFVBQUwsQ0FBZ0JrTyxHQUFoQixDQUFvQixVQUFDdk4sU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzZCLFlBQXpCO0FBQUEsT0FBcEIsRUFDZ0IwTCxHQURoQixDQUNvQixVQUFDL1IsUUFBRCxFQUFjO0FBQ2pCLGVBQU8sTUFBSSxDQUFDNkQsVUFBTCxDQUFnQmdNLE1BQWhCLENBQXVCLFVBQUNyTCxTQUFELEVBQWU7QUFDM0MsaUJBQU9BLFNBQVMsQ0FBQzRCLFdBQVYsQ0FBc0I4TCxPQUF0QixDQUE4QmxTLFFBQTlCLEtBQTJDd0UsU0FBUyxDQUFDNEIsV0FBVixDQUFzQjhMLE9BQXRCLENBQThCbFMsUUFBUSxDQUFDNkYsR0FBVCxDQUFhLE1BQUksQ0FBQ1osT0FBTCxDQUFhOE4sTUFBMUIsQ0FBOUIsQ0FBbEQ7QUFDRCxTQUZNLEVBRUosTUFGSSxFQUVFLENBRkYsQ0FBUDtBQUdELE9BTGhCLEVBS2tCLElBTGxCLENBQVA7QUFNRDs7OzRCQUVPO0FBQ04sV0FBS2xQLFVBQUwsQ0FBZ0JtTixPQUFoQixDQUF3QixVQUFDeE0sU0FBRCxFQUFlO0FBQ3JDQSxpQkFBUyxDQUFDZCxJQUFWLENBQWVjLFNBQVMsQ0FBQzZCLFlBQXpCLEVBQXVDLENBQXZDLEVBQTBDLElBQTFDLEVBQWdELEtBQWhEO0FBQ0E3QixpQkFBUyxDQUFDd08sSUFBVixHQUFpQixLQUFqQjtBQUNELE9BSEQ7QUFJRDs7O3dCQUVlO0FBQ2QsYUFBTyxLQUFLblAsVUFBTCxDQUFnQmtPLEdBQWhCLENBQW9CLFVBQUN2TixTQUFELEVBQWU7QUFDeEMsWUFBTXhFLFFBQVEsR0FBR3dFLFNBQVMsQ0FBQzRCLFdBQVYsQ0FBc0J2RyxLQUF0QixFQUFqQjtBQUNBRyxnQkFBUSxDQUFDZ1QsSUFBVCxHQUFnQnhPLFNBQVMsQ0FBQ3dPLElBQTFCO0FBQ0EsZUFBT2hULFFBQVA7QUFDRCxPQUpNLENBQVA7QUFLRCxLO3NCQUVhd1MsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQU0vTixPQUFPLEdBQUcsb0JBQWhCOztBQUNBLFVBQUkrTixTQUFTLENBQUNuTyxNQUFWLEtBQXFCLEtBQUtSLFVBQUwsQ0FBZ0JRLE1BQXpDLEVBQWlEO0FBQy9DbU8saUJBQVMsQ0FBQ3hCLE9BQVYsQ0FBa0IsVUFBQ3RSLEtBQUQsRUFBUXlFLENBQVIsRUFBYztBQUM5QixnQkFBSSxDQUFDTixVQUFMLENBQWdCTSxDQUFoQixFQUFtQjZPLElBQW5CLEdBQTBCdFQsS0FBSyxDQUFDc1QsSUFBaEM7O0FBQ0EsZ0JBQUksQ0FBQ25QLFVBQUwsQ0FBZ0JNLENBQWhCLEVBQW1CVCxJQUFuQixDQUF3QmhFLEtBQXhCLEVBQStCLENBQS9CLEVBQWtDLElBQWxDLEVBQXdDLElBQXhDO0FBQ0QsU0FIRCxFQUdHLElBSEg7QUFJRCxPQUxELE1BS087QUFDTCxjQUFNK0UsT0FBTjtBQUNEO0FBQ0Y7Ozs7RUFqR3dCaU0sMEM7O0FBb0czQixTQUFTNEMsbUJBQVQsQ0FBNkJsVCxPQUE3QixFQUFzQ21ULGlCQUF0QyxFQUFxRTtBQUFBLE1BQVp0TyxPQUFZLHVFQUFKLEVBQUk7QUFDbkUsTUFBTTJOLGdCQUFnQixHQUFHM04sT0FBTyxDQUFDVCxTQUFSLElBQXFCLEVBQTlDO0FBQ0EsTUFBTXFPLFdBQVcsR0FBRzVOLE9BQU8sQ0FBQ2tNLElBQVIsSUFBZ0IsRUFBcEM7QUFFQXlCLGtCQUFnQixDQUFDdlMsTUFBakIsR0FBMEJ1UyxnQkFBZ0IsQ0FBQ3ZTLE1BQWpCLElBQTJCRCxPQUFyRDtBQUNBbVQsbUJBQWlCLEdBQUdwQixLQUFLLENBQUM5SCxTQUFOLENBQWdCRSxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkIrSSxpQkFBM0IsQ0FBcEI7QUFFQSxNQUFNMVAsVUFBVSxHQUFHMFAsaUJBQWlCLENBQUN4QixHQUFsQixDQUFzQixVQUFDM1IsT0FBRCxFQUFhO0FBQ3BELFdBQU8sSUFBSTRFLG9EQUFKLENBQWM1RSxPQUFkLEVBQXVCd1MsZ0JBQXZCLENBQVA7QUFDRCxHQUZrQixDQUFuQjtBQUdBLFNBQU8sSUFBSUUsWUFBSixDQUFpQmpQLFVBQWpCLEVBQTZCZ1AsV0FBN0IsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ3JIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQSxJQUFNVyxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxDQURNO0FBRW5CQyxXQUFTLEVBQUUsQ0FGUTtBQUduQkMsWUFBVSxFQUFFO0FBSE8sQ0FBckI7O0FBTUEsU0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0IsVUFBUUEsSUFBUjtBQUNBLFNBQUtMLFlBQVksQ0FBQ0MsV0FBbEI7QUFDRSxhQUFPLFVBQVNoVSxTQUFULEVBQW9CcVUsUUFBcEIsRUFBOEI7QUFDbkMsZUFBTyxVQUFTQyxhQUFULEVBQXdCQyxhQUF4QixFQUF1QztBQUM1QyxjQUFNQyxTQUFTLEdBQUcsT0FBT3hVLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQWxFO0FBQUEsY0FDRXlVLHNCQUFzQixHQUFHSCxhQUFhLENBQUM5RSxNQUFkLENBQXFCLFVBQVNrRixPQUFULEVBQWtCQyxLQUFsQixFQUF5QnJKLEtBQXpCLEVBQWdDO0FBQzVFLGdCQUFJaUosYUFBYSxDQUFDdE0sT0FBZCxDQUFzQnFELEtBQXRCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkNvSixxQkFBTyxDQUFDdlAsSUFBUixDQUFhbUcsS0FBYjtBQUNEOztBQUNELG1CQUFPb0osT0FBUDtBQUNELFdBTHdCLEVBS3RCLEVBTHNCLENBRDNCO0FBUUFILHVCQUFhLENBQUNoRCxPQUFkLENBQXNCLFVBQVNqRyxLQUFULEVBQWdCO0FBQ3BDLGdCQUFJSyxJQUFJLEdBQUcySSxhQUFhLENBQUNoSixLQUFELENBQXhCO0FBQUEsZ0JBQWlDc0osU0FBUyxHQUFHLEtBQTdDO0FBQ0FILGtDQUFzQixDQUFDbEQsT0FBdkIsQ0FBK0IsVUFBU3NELGFBQVQsRUFBd0I7QUFDckQsa0JBQU1DLFVBQVUsR0FBR1IsYUFBYSxDQUFDTyxhQUFELENBQWhDO0FBQ0FsSixrQkFBSSxHQUFHbUosVUFBVSxDQUFDQyxXQUFYLENBQXVCcEosSUFBdkIsQ0FBUDtBQUNELGFBSEQ7QUFJQWlKLHFCQUFTLEdBQUdILHNCQUFzQixDQUFDeFAsSUFBdkIsQ0FBNEIsVUFBUzRQLGFBQVQsRUFBd0I7QUFDOUQsa0JBQU1DLFVBQVUsR0FBR1IsYUFBYSxDQUFDTyxhQUFELENBQWhDO0FBQ0EscUJBQVEsQ0FBQyxDQUFDQyxVQUFVLENBQUM1SSxHQUFYLENBQWVQLElBQWYsQ0FBVjtBQUNELGFBSFcsS0FHTkEsSUFBSSxDQUFDTyxHQUFMLENBQVNzSSxTQUFULEVBQW9CUSxTQUFwQixPQUFvQ3JKLElBQUksQ0FBQ3FKLFNBQUwsRUFIMUM7O0FBSUEsZ0JBQUlKLFNBQUosRUFBZTtBQUNiakosa0JBQUksQ0FBQ2lKLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxhQUZELE1BRU87QUFDTEgsb0NBQXNCLENBQUN0UCxJQUF2QixDQUE0Qm1HLEtBQTVCO0FBQ0Q7QUFDRixXQWZEO0FBZ0JBLGlCQUFPZ0osYUFBUDtBQUNELFNBMUJEO0FBMkJELE9BNUJEOztBQTZCRixTQUFLUCxZQUFZLENBQUNFLFNBQWxCO0FBQ0UsYUFBTyxVQUFTalUsU0FBVCxFQUFvQndGLE9BQXBCLEVBQTZCO0FBQ2xDQSxlQUFPLEdBQUdHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3RCcVAsd0JBQWMsRUFBRSxJQUFJelMsK0NBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQURNO0FBRXRCMFMsNEJBQWtCLEVBQUUsSUFBSTFTLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FGRTtBQUd0QjJTLCtCQUFxQixFQUFFLENBSEQ7QUFJdEJQLG1CQUFTLEVBQUU7QUFKVyxTQUFkLEVBS1BwUCxPQUxPLENBQVY7QUFPQSxlQUFPLFVBQVM4TyxhQUFULEVBQXdCYyxjQUF4QixFQUF3QztBQUM3QyxjQUFNWixTQUFTLEdBQUcsT0FBT3hVLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQWxFO0FBQ0EsY0FBTUssTUFBTSxHQUFHbVUsU0FBUyxDQUFDYSxLQUFWLEVBQWY7QUFDQSxjQUFJQyxjQUFjLEdBQUcsQ0FBQ2QsU0FBUyxDQUFDalUsUUFBWCxDQUFyQjtBQUNBK1QsdUJBQWEsQ0FBQy9DLE9BQWQsQ0FBc0IsVUFBUzVGLElBQVQsRUFBZTtBQUNuQyxnQkFBSXBMLFFBQUo7QUFBQSxnQkFBY2dWLE9BQU8sR0FBRyxLQUF4Qjs7QUFDQSxpQkFBSyxJQUFJN1EsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRRLGNBQWMsQ0FBQzFRLE1BQW5DLEVBQTJDRixDQUFDLEVBQTVDLEVBQWdEO0FBQzlDbkUsc0JBQVEsR0FBSSxJQUFJaUMsK0NBQUosQ0FBVThTLGNBQWMsQ0FBQzVRLENBQUQsQ0FBZCxDQUFrQmxFLENBQTVCLEVBQStCa0UsQ0FBQyxHQUFHLENBQUosR0FBUzRRLGNBQWMsQ0FBQzVRLENBQUMsR0FBRyxDQUFMLENBQWQsQ0FBc0JqRSxDQUF0QixHQUEwQitFLE9BQU8sQ0FBQzJQLHFCQUEzQyxHQUFvRVgsU0FBUyxDQUFDalUsUUFBVixDQUFtQkUsQ0FBdEgsQ0FBRCxDQUEySDJGLEdBQTNILENBQStIWixPQUFPLENBQUN5UCxjQUF2SSxDQUFYO0FBQ0FNLHFCQUFPLEdBQUloVixRQUFRLENBQUNDLENBQVQsR0FBYW1MLElBQUksQ0FBQ3pMLElBQUwsQ0FBVU0sQ0FBdkIsR0FBMkJILE1BQU0sQ0FBQ0csQ0FBN0M7O0FBQ0Esa0JBQUkrVSxPQUFKLEVBQWE7QUFDWDtBQUNEO0FBQ0Y7O0FBQ0QsZ0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1poVixzQkFBUSxHQUFJLElBQUlpQywrQ0FBSixDQUFVZ1MsU0FBUyxDQUFDalUsUUFBVixDQUFtQkMsQ0FBN0IsRUFBZ0M4VSxjQUFjLENBQUNBLGNBQWMsQ0FBQzFRLE1BQWYsR0FBd0IsQ0FBekIsQ0FBZCxDQUEwQ25FLENBQTFDLEdBQThDK0UsT0FBTyxDQUFDMlAscUJBQXRGLENBQUQsQ0FBK0cvTyxHQUEvRyxDQUFtSFosT0FBTyxDQUFDeVAsY0FBM0gsQ0FBWDtBQUNEOztBQUNEdEosZ0JBQUksQ0FBQ3BMLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUNBLGdCQUFJaUYsT0FBTyxDQUFDb1AsU0FBUixJQUFxQmpKLElBQUksQ0FBQ3JMLEtBQUwsR0FBYUcsQ0FBYixHQUFpQitULFNBQVMsQ0FBQ2xVLEtBQVYsR0FBa0JHLENBQTVELEVBQStEO0FBQzdEa0wsa0JBQUksQ0FBQ2lKLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7QUFDRFUsMEJBQWMsR0FBR3BVLGtEQUFRLENBQUM4TyxxQkFBVCxDQUErQnNGLGNBQS9CLEVBQStDM0osSUFBSSxDQUFDckwsS0FBTCxHQUFhOEYsR0FBYixDQUFpQlosT0FBTyxDQUFDMFAsa0JBQXpCLENBQS9DLENBQWpCO0FBQ0QsV0FqQkQ7QUFrQkEsaUJBQU9aLGFBQVA7QUFDRCxTQXZCRDtBQXdCRCxPQWhDRDs7QUFpQ0YsU0FBS1AsWUFBWSxDQUFDRyxVQUFsQjtBQUNFLGFBQU8sVUFBU2xVLFNBQVQsRUFBb0J3RixPQUFwQixFQUE2QjtBQUNsQ0EsZUFBTyxHQUFHRyxNQUFNLENBQUM2UCxNQUFQLENBQWM7QUFDdEJDLHlCQUFlLEVBQUUsSUFBSWpULCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FESztBQUV0QmtULDJCQUFpQixFQUFFLElBQUlsVCwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBRkc7QUFHdEJvUyxtQkFBUyxFQUFFO0FBSFcsU0FBZCxFQUlQcFAsT0FKTyxDQUFWO0FBTUEsWUFBTW1RLGtCQUFrQixHQUFHLElBQUluVCwrQ0FBSixDQUFVLENBQUNnRCxPQUFPLENBQUNpUSxlQUFSLENBQXdCalYsQ0FBbkMsRUFBc0NnRixPQUFPLENBQUNpUSxlQUFSLENBQXdCaFYsQ0FBOUQsQ0FBM0I7QUFDQSxZQUFNbVYsb0JBQW9CLEdBQUcsSUFBSXBULCtDQUFKLENBQVUsQ0FBQ2dELE9BQU8sQ0FBQ2tRLGlCQUFSLENBQTBCbFYsQ0FBckMsRUFBd0NnRixPQUFPLENBQUNrUSxpQkFBUixDQUEwQmpWLENBQWxFLENBQTdCO0FBQ0EsZUFBTyxVQUFTNlQsYUFBVCxFQUF3QmMsY0FBeEIsRUFBd0M7QUFDN0MsY0FBTVosU0FBUyxHQUFHLE9BQU94VSxTQUFQLEtBQXFCLFVBQXJCLEdBQWtDQSxTQUFTLEVBQTNDLEdBQWdEQSxTQUFsRTtBQUNBLGNBQUlzVixjQUFjLEdBQUcsQ0FBQ2QsU0FBUyxDQUFDcUIsZ0JBQVYsRUFBRCxDQUFyQjtBQUNBdkIsdUJBQWEsQ0FBQy9DLE9BQWQsQ0FBc0IsVUFBUzVGLElBQVQsRUFBZW1LLE1BQWYsRUFBdUI7QUFDM0MsZ0JBQUl2VixRQUFKO0FBQUEsZ0JBQWNnVixPQUFPLEdBQUcsS0FBeEI7O0FBQ0EsaUJBQUssSUFBSTdRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0USxjQUFjLENBQUMxUSxNQUFuQyxFQUEyQ0YsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5Q25FLHNCQUFRLEdBQUksSUFBSWlDLCtDQUFKLENBQVU4UyxjQUFjLENBQUM1USxDQUFELENBQWQsQ0FBa0JsRSxDQUFsQixHQUFzQm1MLElBQUksQ0FBQ3pMLElBQUwsQ0FBVU0sQ0FBMUMsRUFBNkNrRSxDQUFDLEdBQUcsQ0FBSixHQUFRNFEsY0FBYyxDQUFDNVEsQ0FBQyxHQUFHLENBQUwsQ0FBZCxDQUFzQmpFLENBQTlCLEdBQWtDK1QsU0FBUyxDQUFDalUsUUFBVixDQUFtQkUsQ0FBbEcsQ0FBRCxDQUF1RzJGLEdBQXZHLENBQTJHdVAsa0JBQTNHLENBQVg7QUFDQUoscUJBQU8sR0FBSWhWLFFBQVEsQ0FBQ0MsQ0FBVCxHQUFhbUwsSUFBSSxDQUFDcEwsUUFBTCxDQUFjQyxDQUF0Qzs7QUFDQSxrQkFBSStVLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWmhWLHNCQUFRLEdBQUcsSUFBSWlDLCtDQUFKLENBQVVnUyxTQUFTLENBQUNhLEtBQVYsR0FBa0I3VSxDQUE1QixFQUErQjhVLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDMVEsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDbkUsQ0FBekUsQ0FBWDtBQUNEOztBQUNEa0wsZ0JBQUksQ0FBQ3BMLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUNBLGdCQUFJaUYsT0FBTyxDQUFDb1AsU0FBUixJQUFxQmpKLElBQUksQ0FBQ29LLGtCQUFMLEdBQTBCdFYsQ0FBMUIsR0FBOEIrVCxTQUFTLENBQUN3QixLQUFWLEdBQWtCdlYsQ0FBekUsRUFBNEU7QUFDMUVrTCxrQkFBSSxDQUFDaUosU0FBTCxHQUFpQixJQUFqQjtBQUNEOztBQUNEVSwwQkFBYyxHQUFHcFUsa0RBQVEsQ0FBQzhPLHFCQUFULENBQStCc0YsY0FBL0IsRUFBK0MzSixJQUFJLENBQUNxSyxLQUFMLEdBQWE1UCxHQUFiLENBQWlCd1Asb0JBQWpCLENBQS9DLEVBQXVGLElBQXZGLENBQWpCO0FBQ0QsV0FqQkQ7QUFrQkEsaUJBQU90QixhQUFQO0FBQ0QsU0F0QkQ7QUF1QkQsT0FoQ0Q7QUFsRUY7QUFvR0Q7O0FBRUQsU0FBUzJCLGNBQVQsQ0FBd0I3QixJQUF4QixFQUE4QjtBQUM1QixVQUFRQSxJQUFSO0FBQ0EsU0FBS0wsWUFBWSxDQUFDQyxXQUFsQjtBQUNFLGFBQU8sWUFBVztBQUNoQixlQUFPLFVBQVNrQyxXQUFULEVBQXNCQyxPQUF0QixFQUErQkMsV0FBL0IsRUFBNEM7QUFDakQsY0FBTUMsUUFBUSxHQUFHSCxXQUFXLENBQUN2RCxNQUFaLENBQW1Cd0QsT0FBbkIsQ0FBakI7QUFDQUEsaUJBQU8sQ0FBQzVFLE9BQVIsQ0FBZ0IsVUFBUytFLEdBQVQsRUFBYztBQUM1QkYsdUJBQVcsQ0FBQ2pSLElBQVosQ0FBaUJrUixRQUFRLENBQUNwTyxPQUFULENBQWlCcU8sR0FBakIsQ0FBakI7QUFDRCxXQUZEO0FBR0EsaUJBQU9ELFFBQVA7QUFDRCxTQU5EO0FBT0QsT0FSRDs7QUFTRixTQUFLdEMsWUFBWSxDQUFDRSxTQUFsQjtBQUNBLFNBQUtGLFlBQVksQ0FBQ0csVUFBbEI7QUFDRSxhQUFPLFVBQVNuUixNQUFULEVBQWlCOEosV0FBakIsRUFBOEJySCxPQUE5QixFQUF1QztBQUM1Q0EsZUFBTyxHQUFHRyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN0QitDLHFCQUFXLEVBQUUscUJBQVMyTixHQUFULEVBQWM7QUFDekIsbUJBQU9BLEdBQUcsQ0FBQy9WLFFBQVg7QUFDRDtBQUhxQixTQUFkLEVBSVBpRixPQUpPLENBQVY7QUFNQSxlQUFPLFVBQVMwUSxXQUFULEVBQXNCQyxPQUF0QixFQUErQkMsV0FBL0IsRUFBNEM7QUFDakQsY0FBTUcsT0FBTyxHQUFHTCxXQUFXLENBQUN2RCxNQUFaLEVBQWhCO0FBQ0EsY0FBTTZELGVBQWUsR0FBR04sV0FBVyxDQUFDNUQsR0FBWixDQUFnQjlNLE9BQU8sQ0FBQ21ELFdBQXhCLENBQXhCO0FBQ0F3TixpQkFBTyxDQUFDNUUsT0FBUixDQUFnQixVQUFTa0YsTUFBVCxFQUFpQjtBQUMvQixnQkFBSW5MLEtBQUssR0FBR3BLLGtEQUFRLENBQUN1TSxtQkFBVCxDQUE2QitJLGVBQTdCLEVBQThDaFIsT0FBTyxDQUFDbUQsV0FBUixDQUFvQjhOLE1BQXBCLENBQTlDLEVBQTJFMVQsTUFBM0UsRUFBbUY4SixXQUFuRixDQUFaOztBQUNBLGdCQUFJdkIsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkEsbUJBQUssR0FBR2lMLE9BQU8sQ0FBQzNSLE1BQWhCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wwRyxtQkFBSyxHQUFHaUwsT0FBTyxDQUFDdE8sT0FBUixDQUFnQmlPLFdBQVcsQ0FBQzVLLEtBQUQsQ0FBM0IsQ0FBUjtBQUNEOztBQUNEaUwsbUJBQU8sQ0FBQ2hMLE1BQVIsQ0FBZUQsS0FBZixFQUFzQixDQUF0QixFQUF5Qm1MLE1BQXpCO0FBQ0QsV0FSRDtBQVNBTixpQkFBTyxDQUFDNUUsT0FBUixDQUFnQixVQUFTa0YsTUFBVCxFQUFpQjtBQUMvQkwsdUJBQVcsQ0FBQ2pSLElBQVosQ0FBaUJvUixPQUFPLENBQUN0TyxPQUFSLENBQWdCd08sTUFBaEIsQ0FBakI7QUFDRCxXQUZEO0FBR0EsaUJBQU9GLE9BQVA7QUFDRCxTQWhCRDtBQWlCRCxPQXhCRDtBQWJGO0FBdUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNM1MsTUFBTSxHQUFHO0FBQUVDLE9BQUssRUFBTEEsOENBQUtBO0FBQVAsQ0FBZixDLENBQXlCOztBQUV6QixJQUFNNlMsTUFBTSxHQUFHLEVBQWY7O0lBRU1DLEs7OztBQUNKLGlCQUFZdlMsVUFBWixFQUF3QnNCLE9BQXhCLEVBQTZDO0FBQUEsUUFBWkYsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUMzQ2tSLFVBQU0sQ0FBQ25GLE9BQVAsQ0FBZSxVQUFDcUYsS0FBRCxFQUFXO0FBQ3hCLFVBQUl4UyxVQUFKLEVBQWdCO0FBQ2RBLGtCQUFVLENBQUNtTixPQUFYLENBQW1CLFVBQUN4TSxTQUFELEVBQWU7QUFDaEM2Tiw0RUFBVyxDQUFDZ0UsS0FBSyxDQUFDeFMsVUFBUCxFQUFtQlcsU0FBbkIsQ0FBWDtBQUNELFNBRkQ7QUFHRDs7QUFFRCxVQUFJVyxPQUFKLEVBQWE7QUFDWEEsZUFBTyxDQUFDNkwsT0FBUixDQUFnQixVQUFDM0gsTUFBRCxFQUFZO0FBQzFCZ0osNEVBQVcsQ0FBQ2dFLEtBQUssQ0FBQ2xSLE9BQVAsRUFBZ0JrRSxNQUFoQixDQUFYO0FBQ0QsU0FGRDtBQUdEO0FBQ0YsS0FaRDtBQWNBLFNBQUt4RixVQUFMLEdBQWtCQSxVQUFVLElBQUksRUFBaEM7QUFDQSxTQUFLc0IsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFDQWdSLFVBQU0sQ0FBQ3ZSLElBQVAsQ0FBWSxJQUFaO0FBQ0EsU0FBS0ssT0FBTCxHQUFlO0FBQ2IwTCxhQUFPLEVBQUcxTCxPQUFPLENBQUMwTCxPQUFULElBQXFCO0FBRGpCLEtBQWY7QUFJQSxTQUFLSSxRQUFMLEdBQWdCLElBQUkxTixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBaEI7O0FBQ0EsUUFBSTJCLE9BQU8sQ0FBQzhMLFFBQVosRUFBc0I7QUFDcEIsV0FBS0EsUUFBTCxDQUFjbEwsR0FBZCxDQUFrQlosT0FBTyxDQUFDOEwsUUFBMUI7QUFDRDs7QUFDRCxTQUFLL0ssSUFBTDtBQUNEOzs7OzJCQUVNO0FBQUE7O0FBQ0wsV0FBS25DLFVBQUwsQ0FBZ0JtTixPQUFoQixDQUF3QixVQUFDeE0sU0FBRCxFQUFlO0FBQ3JDQSxpQkFBUyxDQUFDZ0IsS0FBVixDQUFnQkssR0FBaEIsQ0FBb0IsWUFBTTtBQUN4QixpQkFBTyxLQUFJLENBQUNMLEtBQUwsQ0FBV2hCLFNBQVgsQ0FBUDtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0Q7OztpQ0FFWUEsUyxFQUFXO0FBQUE7O0FBQ3RCLFdBQUtYLFVBQUwsQ0FBZ0JlLElBQWhCLENBQXFCSixTQUFyQjtBQUNBQSxlQUFTLENBQUNnQixLQUFWLENBQWdCcUYsT0FBaEIsQ0FBd0IsWUFBTTtBQUM1QixlQUFPLE1BQUksQ0FBQ3JGLEtBQUwsQ0FBV2hCLFNBQVgsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7OzhCQUVTNkUsTSxFQUFRO0FBQ2hCLFdBQUtsRSxPQUFMLENBQWFQLElBQWIsQ0FBa0J5RSxNQUFsQjtBQUNEOzs7MEJBRUs3RSxTLEVBQVc7QUFDZixVQUFNOFIsV0FBVyxHQUFHLEtBQUtuUixPQUFMLENBQWEwSyxNQUFiLENBQW9CLFVBQUN4RyxNQUFELEVBQVk7QUFDbEQsZUFBT0EsTUFBTSxDQUFDeEYsVUFBUCxDQUFrQjZELE9BQWxCLENBQTBCbEQsU0FBMUIsTUFBeUMsQ0FBQyxDQUFqRDtBQUNELE9BRm1CLEVBRWpCcUwsTUFGaUIsQ0FFVixVQUFDeEcsTUFBRCxFQUFZO0FBQ3BCLGVBQU9BLE1BQU0sQ0FBQ2tOLGNBQVAsQ0FBc0IvUixTQUF0QixDQUFQO0FBQ0QsT0FKbUIsRUFJakJnUyxJQUppQixDQUlaLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2hCLGVBQU9ELENBQUMsQ0FBQ0UsWUFBRixHQUFpQmxDLFNBQWpCLEtBQStCaUMsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCbEMsU0FBakIsRUFBdEM7QUFDRCxPQU5tQixDQUFwQjs7QUFRQSxVQUFJNkIsV0FBVyxDQUFDalMsTUFBaEIsRUFBd0I7QUFDdEJpUyxtQkFBVyxDQUFDLENBQUQsQ0FBWCxDQUFlOVEsS0FBZixDQUFxQmhCLFNBQXJCO0FBQ0QsT0FGRCxNQUVPLElBQUlBLFNBQVMsQ0FBQ1csT0FBVixDQUFrQmQsTUFBdEIsRUFBOEI7QUFDbkNHLGlCQUFTLENBQUNkLElBQVYsQ0FBZWMsU0FBUyxDQUFDNkIsWUFBekIsRUFBdUMsS0FBS3BCLE9BQUwsQ0FBYTBMLE9BQXBELEVBQTZELElBQTdELEVBQW1FLElBQW5FO0FBQ0Q7O0FBQ0QsV0FBS0ksUUFBTCxDQUFjaEwsSUFBZDtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NEJBRU87QUFDTixXQUFLWixPQUFMLENBQWE2TCxPQUFiLENBQXFCLFVBQUMzSCxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDWSxLQUFQLEVBQVo7QUFBQSxPQUFyQjtBQUNEOzs7OEJBRVM7QUFDUixXQUFLcEcsVUFBTCxDQUFnQm1OLE9BQWhCLENBQXdCLFVBQUN4TSxTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDOUQsT0FBVixFQUFmO0FBQUEsT0FBeEI7QUFDQSxXQUFLeUUsT0FBTCxDQUFhNkwsT0FBYixDQUFxQixVQUFDM0gsTUFBRDtBQUFBLGVBQVlBLE1BQU0sQ0FBQzNJLE9BQVAsRUFBWjtBQUFBLE9BQXJCO0FBQ0Q7Ozt3QkFFZTtBQUFBOztBQUNkLGFBQU8sS0FBS3lFLE9BQUwsQ0FBYTRNLEdBQWIsQ0FBaUIsVUFBQzFJLE1BQUQsRUFBWTtBQUNsQyxlQUFPQSxNQUFNLENBQUN1TixlQUFQLENBQXVCN0UsR0FBdkIsQ0FBMkIsVUFBQ3ZOLFNBQUQ7QUFBQSxpQkFBZSxNQUFJLENBQUNYLFVBQUwsQ0FBZ0I2RCxPQUFoQixDQUF3QmxELFNBQXhCLENBQWY7QUFBQSxTQUEzQixDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsSztzQkFFYWdPLFMsRUFBVztBQUFBOztBQUN2QixVQUFNL04sT0FBTyxHQUFHLG9CQUFoQjs7QUFDQSxVQUFJK04sU0FBUyxDQUFDbk8sTUFBVixLQUFxQixLQUFLYyxPQUFMLENBQWFkLE1BQXRDLEVBQThDO0FBQzVDLGFBQUtjLE9BQUwsQ0FBYTZMLE9BQWIsQ0FBcUIsVUFBQzNILE1BQUQ7QUFBQSxpQkFBWUEsTUFBTSxDQUFDWSxLQUFQLEVBQVo7QUFBQSxTQUFyQjtBQUVBdUksaUJBQVMsQ0FBQ3hCLE9BQVYsQ0FBa0IsVUFBQzZGLGFBQUQsRUFBZ0IxUyxDQUFoQixFQUFzQjtBQUN0QzBTLHVCQUFhLENBQUM3RixPQUFkLENBQXNCLFVBQUNqRyxLQUFELEVBQVc7QUFDL0Isa0JBQUksQ0FBQzVGLE9BQUwsQ0FBYWhCLENBQWIsRUFBZ0IwQixHQUFoQixDQUFvQixNQUFJLENBQUNoQyxVQUFMLENBQWdCa0gsS0FBaEIsQ0FBcEI7QUFDRCxXQUZEO0FBR0QsU0FKRDtBQUtELE9BUkQsTUFRTztBQUNMLGNBQU10RyxPQUFOO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsSUFBTUssWUFBWSxHQUFHLElBQUlzUixLQUFKLEVBQXJCOztBQUVBLFNBQVNDLEtBQVQsQ0FBZVMsRUFBZixFQUFtQjtBQUNqQixNQUFNQyxZQUFZLEdBQUcsSUFBSVgsS0FBSixFQUFyQjs7QUFDQSxNQUFNWSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVN4UyxTQUFULEVBQW9CO0FBQzlDdVMsZ0JBQVksQ0FBQ2hTLFlBQWIsQ0FBMEJQLFNBQTFCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRDs7QUFJQSxNQUFNeVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTNU4sTUFBVCxFQUFpQjtBQUN4QzBOLGdCQUFZLENBQUNHLFNBQWIsQ0FBdUI3TixNQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7O0FBS0FyRSxzREFBUyxDQUFDYyxRQUFWLENBQW1CRCxHQUFuQixDQUF1Qm1SLG1CQUF2QjtBQUNBRyxnREFBTSxDQUFDclIsUUFBUCxDQUFnQkQsR0FBaEIsQ0FBb0JvUixnQkFBcEI7QUFDQUgsSUFBRSxDQUFDdE0sSUFBSDtBQUNBeEYsc0RBQVMsQ0FBQ2MsUUFBVixDQUFtQmdGLE1BQW5CLENBQTBCa00sbUJBQTFCO0FBQ0FHLGdEQUFNLENBQUNyUixRQUFQLENBQWdCZ0YsTUFBaEIsQ0FBdUJtTSxnQkFBdkI7QUFDQSxTQUFPRixZQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssWUFBVCxDQUFzQjFFLGFBQXRCLEVBQXFDYSxpQkFBckMsRUFBd0Q4RCxjQUF4RCxFQUFvRjtBQUFBLE1BQVpwUyxPQUFZLHVFQUFKLEVBQUk7QUFDbEYsTUFBTTJOLGdCQUFnQixHQUFHM04sT0FBTyxDQUFDVCxTQUFSLElBQXFCLEVBQTlDO0FBQ0EsTUFBTThTLGFBQWEsR0FBR3JTLE9BQU8sQ0FBQ29FLE1BQVIsSUFBa0IsRUFBeEM7QUFDQSxNQUFNa08sWUFBWSxHQUFHdFMsT0FBTyxDQUFDb1IsS0FBUixJQUFpQixFQUF0QztBQUNBekQsa0JBQWdCLENBQUN2UyxNQUFqQixHQUEwQnVTLGdCQUFnQixDQUFDdlMsTUFBakIsSUFBMkJxUyxhQUFyRDtBQUNBNEUsZUFBYSxDQUFDalgsTUFBZCxHQUF1QmlYLGFBQWEsQ0FBQ2pYLE1BQWQsSUFBd0JxUyxhQUEvQztBQUNBYSxtQkFBaUIsR0FBR3BCLEtBQUssQ0FBQzlILFNBQU4sQ0FBZ0JFLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQitJLGlCQUEzQixDQUFwQjtBQUNBOEQsZ0JBQWMsR0FBR2xGLEtBQUssQ0FBQzlILFNBQU4sQ0FBZ0JFLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQjZNLGNBQTNCLENBQWpCO0FBRUEsTUFBTXhULFVBQVUsR0FBRzBQLGlCQUFpQixDQUFDeEIsR0FBbEIsQ0FBc0IsVUFBQzNSLE9BQUQsRUFBYTtBQUNwRCxXQUFPLElBQUk0RSxvREFBSixDQUFjNUUsT0FBZCxFQUF1QndTLGdCQUF2QixDQUFQO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxNQUFNek4sT0FBTyxHQUFHa1MsY0FBYyxDQUFDdEYsR0FBZixDQUFtQixVQUFDM1IsT0FBRCxFQUFhO0FBQzlDLFdBQU8sSUFBSStXLDhDQUFKLENBQVcvVyxPQUFYLEVBQW9CeUQsVUFBcEIsRUFBZ0N5VCxhQUFoQyxDQUFQO0FBQ0QsR0FGZSxDQUFoQjtBQUdBLFNBQU8sSUFBSWxCLEtBQUosQ0FBVXZTLFVBQVYsRUFBc0JzQixPQUF0QixFQUErQm9TLFlBQS9CLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWxVLE1BQU0sR0FBRztBQUFFbVEsY0FBWSxFQUFaQSx5REFBRjtBQUFpQkksaUJBQWUsRUFBZkEsNERBQWpCO0FBQWtDOEIsZ0JBQWMsRUFBZEEsMkRBQWxDO0FBQWtEUyxRQUFNLEVBQU5BLDZDQUFsRDtBQUEwRDdTLE9BQUssRUFBTEEsOENBQUtBO0FBQS9ELENBQWYsQyxDQUFnRjs7QUFFaEYsSUFBTTZCLE9BQU8sR0FBRyxFQUFoQjtBQUFBLElBQ0VOLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBU3dFLE1BQVQsRUFBaUI7QUFDbkN2RSxxREFBWSxDQUFDb1MsU0FBYixDQUF1QjdOLE1BQXZCO0FBQ0QsQ0FISDs7SUFLTThOLE07OztBQUNKLGtCQUFZL1csT0FBWixFQUFxQnlELFVBQXJCLEVBQStDO0FBQUEsUUFBZG9CLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDN0MsUUFBTW9FLE1BQU0sR0FBRyxJQUFmO0FBQ0EsUUFBTWhKLE1BQU0sR0FBRzRFLE9BQU8sQ0FBQzVFLE1BQVIsSUFBa0I2RSx1RUFBZ0IsQ0FBQzlFLE9BQUQsQ0FBakQ7QUFFQSxTQUFLNkUsT0FBTCxHQUFlRyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQnNMLGFBQU8sRUFBRSxHQURrQjtBQUUzQkMsaUJBQVcsRUFBRSxHQUZjO0FBRzNCdlEsWUFBTSxFQUFFQSxNQUhtQjtBQUkzQm1YLGFBQU8sRUFBRW5VLE1BQU0sQ0FBQ3FTLGNBQVAsQ0FBc0JyUyxNQUFNLENBQUNtUSxZQUFQLENBQW9CRSxTQUExQyxFQUFxRCxFQUFyRCxFQUF5RC9TLGtEQUFRLENBQUNxTSwrQkFBVCxDQUF5QztBQUFFL00sU0FBQyxFQUFFLENBQUw7QUFBUUMsU0FBQyxFQUFFO0FBQVgsT0FBekMsQ0FBekQsQ0FKa0I7QUFLM0J1WCxpQkFBVyxFQUFFcFUsTUFBTSxDQUFDdVEsZUFBUCxDQUF1QnZRLE1BQU0sQ0FBQ21RLFlBQVAsQ0FBb0JFLFNBQTNDLEVBQXNELEtBQUtpRCxZQUFMLENBQWtCblEsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdEQsRUFBb0Y7QUFBRTZOLGlCQUFTLEVBQUU7QUFBYixPQUFwRjtBQUxjLEtBQWQsRUFNWnBQLE9BTlksQ0FBZjtBQVFBRSxXQUFPLENBQUNQLElBQVIsQ0FBYSxJQUFiO0FBQ0EsU0FBS3hFLE9BQUwsR0FBZUEsT0FBZjtBQUNBeUQsY0FBVSxDQUFDbU4sT0FBWCxDQUFtQixVQUFDeE0sU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQ1csT0FBVixDQUFrQlAsSUFBbEIsQ0FBdUJ5RSxNQUF2QixDQUFmO0FBQUEsS0FBbkI7QUFDQSxTQUFLeEYsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLNlQsS0FBTCxHQUFhLElBQUlyVSxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBYjtBQUNBLFNBQUtxVSxTQUFMLEdBQWlCLElBQUl0VSxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBakI7QUFDQSxTQUFLc1UsUUFBTCxHQUFnQixJQUFJdlUsTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWhCOztBQUVBLFFBQUkyQixPQUFPLENBQUMyUyxRQUFaLEVBQXNCO0FBQ3BCLFdBQUtBLFFBQUwsQ0FBYy9SLEdBQWQsQ0FBa0JaLE9BQU8sQ0FBQzJTLFFBQTFCO0FBQ0Q7O0FBRUQsUUFBSTNTLE9BQU8sQ0FBQ3lTLEtBQVosRUFBbUI7QUFDakIsV0FBS0EsS0FBTCxDQUFXN1IsR0FBWCxDQUFlWixPQUFPLENBQUN5UyxLQUF2QjtBQUNEOztBQUVELFFBQUl6UyxPQUFPLENBQUMwUyxTQUFaLEVBQXVCO0FBQ3JCLFdBQUtBLFNBQUwsQ0FBZTlSLEdBQWYsQ0FBbUJaLE9BQU8sQ0FBQzBTLFNBQTNCO0FBQ0Q7O0FBRURSLFVBQU0sQ0FBQ3JSLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCO0FBRUEsU0FBS0MsSUFBTDtBQUNEOzs7OzJCQUVNO0FBQUE7O0FBQ0wsVUFBSTZSLFVBQUosRUFBZ0JDLFlBQWhCO0FBRUEsV0FBS2xCLGVBQUwsR0FBdUIsS0FBSy9TLFVBQUwsQ0FBZ0JnTSxNQUFoQixDQUF1QixVQUFDckwsU0FBRCxFQUFlO0FBQzNELFlBQUlwRSxPQUFPLEdBQUdvRSxTQUFTLENBQUNwRSxPQUFWLENBQWtCME8sVUFBaEM7O0FBQ0EsZUFBTzFPLE9BQVAsRUFBZ0I7QUFDZCxjQUFJQSxPQUFPLEtBQUssS0FBSSxDQUFDQSxPQUFyQixFQUE4QjtBQUM1QixtQkFBTyxJQUFQO0FBQ0Q7O0FBQ0RBLGlCQUFPLEdBQUdBLE9BQU8sQ0FBQzBPLFVBQWxCO0FBQ0Q7O0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0FUc0IsQ0FBdkI7O0FBV0EsVUFBSSxLQUFLOEgsZUFBTCxDQUFxQnZTLE1BQXpCLEVBQWlDO0FBQy9CeVQsb0JBQVksR0FBR0MsK0RBQUssQ0FBQyxLQUFLbkIsZUFBTCxDQUFxQnZTLE1BQXRCLENBQXBCO0FBQ0F3VCxrQkFBVSxHQUFHLEtBQUs1UyxPQUFMLENBQWF3UyxXQUFiLENBQXlCLEtBQUtiLGVBQUwsQ0FBcUI3RSxHQUFyQixDQUF5QixVQUFDdk4sU0FBRCxFQUFlO0FBQzVFLGlCQUFPQSxTQUFTLENBQUNtUyxZQUFWLEVBQVA7QUFDRCxTQUZxQyxDQUF6QixFQUVUbUIsWUFGUyxDQUFiO0FBR0EsYUFBSzNQLFdBQUwsQ0FBaUIwUCxVQUFqQixFQUE2QkMsWUFBN0I7QUFDQSxhQUFLbEIsZUFBTCxDQUFxQjVGLE9BQXJCLENBQTZCLFVBQUN4TSxTQUFEO0FBQUEsaUJBQWUsS0FBSSxDQUFDa1QsS0FBTCxDQUFXM1IsSUFBWCxDQUFnQnZCLFNBQWhCLENBQWY7QUFBQSxTQUE3QjtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLGFBQU83RCxrREFBUSxDQUFDQywwQkFBVCxDQUNMLEtBQUtSLE9BREEsRUFFTCxLQUFLNkUsT0FBTCxDQUFhNUUsTUFGUixFQUdMLEtBQUs0RSxPQUFMLENBQWFNLGdCQUhSLEVBSUwsSUFKSyxDQUFQO0FBTUQ7OzttQ0FFY2YsUyxFQUFXO0FBQ3hCLFVBQUksS0FBS1MsT0FBTCxDQUFhc1IsY0FBakIsRUFBaUM7QUFDL0IsZUFBTyxLQUFLdFIsT0FBTCxDQUFhc1IsY0FBYixDQUE0QixJQUE1QixFQUFrQy9SLFNBQWxDLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNd1QsZUFBZSxHQUFHLEtBQUtyQixZQUFMLEVBQXhCO0FBQ0EsWUFBTXNCLGVBQWUsR0FBR3pULFNBQVMsQ0FBQ21TLFlBQVYsR0FBeUJsQyxTQUF6QixFQUF4QjtBQUVBLGVBQU93RCxlQUFlLEdBQUdELGVBQWUsQ0FBQ3ZELFNBQWhCLEVBQWxCLElBQ0l1RCxlQUFlLENBQUN6TSxZQUFoQixDQUE2Qi9HLFNBQVMsQ0FBQ3FILFNBQVYsRUFBN0IsQ0FEWDtBQUVEO0FBQ0Y7OztrQ0FFYTtBQUNaLGFBQU8sS0FBSzhLLFlBQUwsR0FBb0IzVyxRQUEzQjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUsyVyxZQUFMLEdBQW9CaFgsSUFBM0I7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1IwRCxZQUFNLENBQUM4UyxNQUFQLENBQWNuRixPQUFkLENBQXNCLFVBQUNxRixLQUFEO0FBQUEsZUFBV2hFLGtFQUFXLENBQUNnRSxLQUFLLENBQUNsUixPQUFQLEVBQWdCLE1BQWhCLENBQXRCO0FBQUEsT0FBdEI7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTTBTLFVBQVUsR0FBRyxLQUFLNVMsT0FBTCxDQUFhd1MsV0FBYixDQUF5QixLQUFLYixlQUFMLENBQXFCN0UsR0FBckIsQ0FBeUIsVUFBQ3ZOLFNBQUQsRUFBZTtBQUNsRixlQUFPQSxTQUFTLENBQUNtUyxZQUFWLEVBQVA7QUFDRCxPQUYyQyxDQUF6QixFQUVmLEVBRmUsQ0FBbkI7QUFHQSxXQUFLeE8sV0FBTCxDQUFpQjBQLFVBQWpCLEVBQTZCLEVBQTdCLEVBQWlDLENBQWpDO0FBQ0Q7OzswQkFFS3JULFMsRUFBVztBQUNmLFVBQU0wVCxrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLFVBQU0zTSxZQUFZLEdBQUcsS0FBS29MLFlBQUwsR0FBb0JwTCxZQUFwQixDQUFpQy9HLFNBQVMsQ0FBQzRELFdBQVYsRUFBakMsQ0FBckI7O0FBRUEsVUFBSSxDQUFDbUQsWUFBTCxFQUFtQjtBQUNqQixZQUFJLEtBQUtvTCxZQUFMLEdBQW9CcEwsWUFBcEIsQ0FBaUMvRyxTQUFTLENBQUNxSCxTQUFWLEVBQWpDLENBQUosRUFBNkQ7QUFDM0RySCxtQkFBUyxDQUFDeEUsUUFBVixHQUFxQndFLFNBQVMsQ0FBQ3FILFNBQVYsR0FBc0JoTSxLQUF0QixFQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFdBQUs4WCxTQUFMLENBQWU1UixJQUFmLENBQW9CdkIsU0FBcEI7QUFFQSxXQUFLb1MsZUFBTCxHQUF1QixLQUFLM1IsT0FBTCxDQUFhdVMsT0FBYixDQUFxQixLQUFLWixlQUExQixFQUEyQyxDQUFDcFMsU0FBRCxDQUEzQyxFQUF3RDBULGtCQUF4RCxDQUF2QjtBQUNBLFVBQU1MLFVBQVUsR0FBRyxLQUFLNVMsT0FBTCxDQUFhd1MsV0FBYixDQUF5QixLQUFLYixlQUFMLENBQXFCN0UsR0FBckIsQ0FBeUIsVUFBQ3ZOLFNBQUQsRUFBZTtBQUNsRixlQUFPQSxTQUFTLENBQUNtUyxZQUFWLEVBQVA7QUFDRCxPQUYyQyxDQUF6QixFQUVmdUIsa0JBRmUsRUFFSzFULFNBRkwsQ0FBbkI7QUFJQSxXQUFLMkQsV0FBTCxDQUFpQjBQLFVBQWpCLEVBQTZCSyxrQkFBN0I7O0FBQ0EsVUFBSSxLQUFLdEIsZUFBTCxDQUFxQmxQLE9BQXJCLENBQTZCbEQsU0FBN0IsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLMlQsZUFBTCxDQUFxQjNULFNBQXJCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztnQ0FFV3FULFUsRUFBWUMsWSxFQUFjalEsSSxFQUFNO0FBQUE7O0FBQzFDLFdBQUsrTyxlQUFMLENBQXFCck0sS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEJ5RyxPQUE5QixDQUFzQyxVQUFDeE0sU0FBRCxFQUFZTCxDQUFaLEVBQWtCO0FBQ3RELFlBQU1pSCxJQUFJLEdBQUd5TSxVQUFVLENBQUMxVCxDQUFELENBQXZCO0FBQUEsWUFDRXdNLE9BQU8sR0FBRzlJLElBQUksSUFBSUEsSUFBSSxLQUFLLENBQWpCLEdBQXFCQSxJQUFyQixHQUE0QmlRLFlBQVksQ0FBQ3BRLE9BQWIsQ0FBcUJ2RCxDQUFyQixNQUE0QixDQUFDLENBQTdCLEdBQWlDLE1BQUksQ0FBQ2MsT0FBTCxDQUFhMEwsT0FBOUMsR0FBd0QsTUFBSSxDQUFDMUwsT0FBTCxDQUFhMkwsV0FEN0c7O0FBR0EsWUFBSXhGLElBQUksQ0FBQ2lKLFNBQVQsRUFBb0I7QUFDbEI3UCxtQkFBUyxDQUFDZCxJQUFWLENBQWVjLFNBQVMsQ0FBQzZCLFlBQXpCLEVBQXVDc0ssT0FBdkMsRUFBZ0QsSUFBaEQsRUFBc0QsSUFBdEQ7QUFDQTBCLDRFQUFXLENBQUMsTUFBSSxDQUFDdUUsZUFBTixFQUF1QnBTLFNBQXZCLENBQVg7O0FBRUEsZ0JBQUksQ0FBQ29ULFFBQUwsQ0FBYzdSLElBQWQsQ0FBbUJ2QixTQUFuQjtBQUNELFNBTEQsTUFLTztBQUNMQSxtQkFBUyxDQUFDZCxJQUFWLENBQWUwSCxJQUFJLENBQUNwTCxRQUFwQixFQUE4QjJRLE9BQTlCLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDO0FBQ0Q7QUFDRixPQVpEO0FBYUQ7Ozt3QkFFR25NLFMsRUFBV3FELEksRUFBTTtBQUNuQixVQUFNcVEsa0JBQWtCLEdBQUcsS0FBS3RCLGVBQUwsQ0FBcUJ2UyxNQUFoRDtBQUVBLFdBQUtzVCxTQUFMLENBQWU1UixJQUFmLENBQW9CdkIsU0FBcEI7QUFFQSxXQUFLNFQsa0JBQUwsQ0FBd0I1VCxTQUF4QjtBQUNBLFVBQU1xVCxVQUFVLEdBQUcsS0FBSzVTLE9BQUwsQ0FBYXdTLFdBQWIsQ0FBeUIsS0FBS2IsZUFBTCxDQUFxQjdFLEdBQXJCLENBQXlCLFVBQUN2TixTQUFELEVBQWU7QUFDbEYsZUFBT0EsU0FBUyxDQUFDbVMsWUFBVixFQUFQO0FBQ0QsT0FGMkMsQ0FBekIsRUFFZnVCLGtCQUZlLEVBRUsxVCxTQUZMLENBQW5CO0FBSUEsV0FBSzJELFdBQUwsQ0FBaUIwUCxVQUFqQixFQUE2QixDQUFDSyxrQkFBRCxDQUE3QixFQUFtRHJRLElBQUksSUFBSSxDQUEzRDs7QUFDQSxVQUFJLEtBQUsrTyxlQUFMLENBQXFCbFAsT0FBckIsQ0FBNkJsRCxTQUE3QixNQUE0QyxDQUFDLENBQWpELEVBQW9EO0FBQ2xELGFBQUsyVCxlQUFMLENBQXFCM1QsU0FBckI7QUFDRDtBQUNGOzs7dUNBRWtCQSxTLEVBQVc7QUFDNUIsVUFBSSxLQUFLb1MsZUFBTCxDQUFxQmxQLE9BQXJCLENBQTZCbEQsU0FBN0IsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRCxhQUFLb1MsZUFBTCxDQUFxQmhTLElBQXJCLENBQTBCSixTQUExQjtBQUNEO0FBQ0Y7OztvQ0FFZUEsUyxFQUFXO0FBQUE7O0FBQ3pCQSxlQUFTLENBQUNtQixNQUFWLENBQWlCRSxHQUFqQixDQUFxQixLQUFLd1MsYUFBTCxHQUFxQixZQUFNO0FBQzlDLGNBQUksQ0FBQ3ZOLE1BQUwsQ0FBWXRHLFNBQVo7QUFDRCxPQUZEO0FBSUEsV0FBS2tULEtBQUwsQ0FBVzNSLElBQVgsQ0FBZ0J2QixTQUFoQjtBQUNEOzs7MkJBRU1BLFMsRUFBVztBQUNoQkEsZUFBUyxDQUFDbUIsTUFBVixDQUFpQm1GLE1BQWpCLENBQXdCLEtBQUt1TixhQUE3QjtBQUVBLFVBQU10TixLQUFLLEdBQUcsS0FBSzZMLGVBQUwsQ0FBcUJsUCxPQUFyQixDQUE2QmxELFNBQTdCLENBQWQ7O0FBQ0EsVUFBSXVHLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEI7QUFDRDs7QUFFRCxXQUFLNkwsZUFBTCxDQUFxQjVMLE1BQXJCLENBQTRCRCxLQUE1QixFQUFtQyxDQUFuQztBQUVBLFVBQU04TSxVQUFVLEdBQUcsS0FBSzVTLE9BQUwsQ0FBYXdTLFdBQWIsQ0FBeUIsS0FBS2IsZUFBTCxDQUFxQjdFLEdBQXJCLENBQXlCLFVBQUN2TixTQUFELEVBQWU7QUFDbEYsZUFBT0EsU0FBUyxDQUFDbVMsWUFBVixFQUFQO0FBQ0QsT0FGMkMsQ0FBekIsRUFFZixFQUZlLENBQW5CO0FBSUEsV0FBS3hPLFdBQUwsQ0FBaUIwUCxVQUFqQixFQUE2QixFQUE3QjtBQUNBLFdBQUtELFFBQUwsQ0FBYzdSLElBQWQsQ0FBbUJ2QixTQUFuQjtBQUNEOzs7NEJBRU87QUFBQTs7QUFDTixXQUFLb1MsZUFBTCxDQUFxQjVGLE9BQXJCLENBQTZCLFVBQUN4TSxTQUFELEVBQWU7QUFDMUNBLGlCQUFTLENBQUNkLElBQVYsQ0FBZWMsU0FBUyxDQUFDNkIsWUFBekIsRUFBdUMsQ0FBdkMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQ7O0FBQ0EsY0FBSSxDQUFDdVIsUUFBTCxDQUFjN1IsSUFBZCxDQUFtQnZCLFNBQW5CO0FBQ0QsT0FIRDtBQUlBLFdBQUtvUyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS0EsZUFBTCxDQUFxQnJNLEtBQXJCO0FBQ0Q7Ozs7OztBQUdINE0sTUFBTSxDQUFDclIsUUFBUCxHQUFrQixJQUFJekMsTUFBTSxDQUFDQyxLQUFYLENBQWlCNlQsTUFBakIsRUFBeUI7QUFBRTFSLFdBQVMsRUFBRSxJQUFiO0FBQW1CQyxjQUFZLEVBQUU7QUFBakMsQ0FBekIsQ0FBbEI7QUFDQXlSLE1BQU0sQ0FBQ3JSLFFBQVAsQ0FBZ0JELEdBQWhCLENBQW9CaEIsaUJBQXBCOzs7Ozs7Ozs7Ozs7O0FDN05BO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU3lULFFBQVQsQ0FBa0JsWSxPQUFsQixFQUEyQm1ZLENBQTNCLEVBQThCO0FBQ25DLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyxNQUFKLENBQVcsWUFBWUYsQ0FBWixHQUFnQixTQUEzQixFQUFzQyxHQUF0QyxDQUFYO0FBQ0EsU0FBUUMsRUFBRSxDQUFDN1EsSUFBSCxDQUFRdkgsT0FBTyxDQUFDc1ksU0FBaEIsQ0FBUjtBQUNEO0FBRU0sU0FBUy9PLFFBQVQsQ0FBa0J2SixPQUFsQixFQUEyQm1ZLENBQTNCLEVBQThCO0FBQ25DLE1BQUksQ0FBQ0QsUUFBUSxDQUFDbFksT0FBRCxFQUFVbVksQ0FBVixDQUFiLEVBQTJCO0FBQ3pCblksV0FBTyxDQUFDc1ksU0FBUixHQUFvQixDQUFDdFksT0FBTyxDQUFDc1ksU0FBUixHQUFvQixHQUFwQixHQUEwQkgsQ0FBM0IsRUFBOEIzUSxPQUE5QixDQUFzQyxNQUF0QyxFQUE4QyxHQUE5QyxFQUFtREEsT0FBbkQsQ0FBMkQsVUFBM0QsRUFBdUUsRUFBdkUsQ0FBcEI7QUFDRDtBQUNGO0FBRU0sU0FBU21DLFdBQVQsQ0FBcUIzSixPQUFyQixFQUE4Qm1ZLENBQTlCLEVBQWlDO0FBQ3RDLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyxNQUFKLENBQVcsWUFBWUYsQ0FBWixHQUFnQixTQUEzQixFQUFzQyxHQUF0QyxDQUFYO0FBQ0FuWSxTQUFPLENBQUNzWSxTQUFSLEdBQW9CdFksT0FBTyxDQUFDc1ksU0FBUixDQUFrQjlRLE9BQWxCLENBQTBCNFEsRUFBMUIsRUFBOEIsSUFBOUIsRUFBb0M1USxPQUFwQyxDQUE0QyxNQUE1QyxFQUFvRCxHQUFwRCxFQUF5REEsT0FBekQsQ0FBaUUsVUFBakUsRUFBNkUsRUFBN0UsQ0FBcEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQWUsU0FBUzFDLGdCQUFULENBQTBCOUUsT0FBMUIsRUFBbUM7QUFDaEQsTUFBSUMsTUFBTSxHQUFHRCxPQUFPLENBQUMwTyxVQUFyQjs7QUFDQSxTQUFPek8sTUFBTSxDQUFDeU8sVUFBUCxJQUFxQnRMLE1BQU0sQ0FBQzZMLGdCQUFQLENBQXdCaFAsTUFBeEIsRUFBZ0MsVUFBaEMsTUFBZ0QsUUFBNUUsRUFBc0Y7QUFDcEZBLFVBQU0sR0FBR0EsTUFBTSxDQUFDeU8sVUFBaEI7QUFDRDs7QUFDRCxTQUFPek8sTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBZSxTQUFTMFgsS0FBVCxDQUFlM1csS0FBZixFQUFzQnVYLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQztBQUMvQyxNQUFNaEosTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxPQUFPK0ksSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHdlgsS0FBUDtBQUNBQSxTQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELE1BQUksT0FBT3dYLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBS0EsSUFBSSxHQUFHLENBQVAsSUFBWXhYLEtBQUssSUFBSXVYLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZeFgsS0FBSyxJQUFJdVgsSUFBekQsRUFBZ0U7QUFDOUQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJeFUsQ0FBQyxHQUFHL0MsS0FBYixFQUFvQndYLElBQUksR0FBRyxDQUFQLEdBQVd6VSxDQUFDLEdBQUd3VSxJQUFmLEdBQXNCeFUsQ0FBQyxHQUFHd1UsSUFBOUMsRUFBb0R4VSxDQUFDLElBQUl5VSxJQUF6RCxFQUErRDtBQUM3RGhKLFVBQU0sQ0FBQ2hMLElBQVAsQ0FBWVQsQ0FBWjtBQUNEOztBQUNELFNBQU95TCxNQUFQO0FBQ0QsQyIsImZpbGUiOiJsaXN0c3dpdGNoZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGlzdHN3aXRjaGVyLmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgdmFyIGksIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0SWR4ID49IGxlbmd0aCB8fCByZW1vdmVDb3VudCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQ291bnQgPSAoc3RhcnRJZHggKyByZW1vdmVDb3VudCA+IGxlbmd0aCA/IGxlbmd0aCAtIHN0YXJ0SWR4IDogcmVtb3ZlQ291bnQpO1xuXG4gIHZhciBsZW4gPSBsZW5ndGggLSByZW1vdmVDb3VudDtcblxuICBmb3IgKGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKSB7XG4gICAgYXJyW2ldID0gYXJyW2kgKyByZW1vdmVDb3VudF07XG4gIH1cblxuICBhcnIubGVuZ3RoID0gbGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVJdGVtcztcbiIsImltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCJjb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgICAgaXNEaXNwbGFjZW1lbnQ6IGZhbHNlLFxuICAgICAgaXNTb3J0YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgbGlzdHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGxldCBtb3ZlSGFuZGxlclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzXG5cbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0Rpc3BsYWNlbWVudCkge1xuICAgICAgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgbGlzdC5vblN0YXJ0KGRyYWdnYWJsZSlcbiAgICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZShtb3ZlSGFuZGxlcilcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpXG4gICAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcblxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbW92ZU9yU2F2ZShkcmFnZ2FibGUsIHBvc2l0aW9uLCB0aW1lKSB7XG4gICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICBkcmFnZ2FibGUuZml4UG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XS5tb3ZlKGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBmaXhQb3NpdGlvbiA9IGRyYWdnYWJsZS5maXhQb3NpdGlvblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXVxuXG4gICAgaWYgKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKGRyYWdnYWJsZS5wb3NpdGlvbiwgbmV4dERyYWdnYWJsZS5wb3NpdGlvbilcbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gbmV4dERyYWdnYWJsZS5maXhQb3NpdGlvblxuICAgICAgICB0aGlzLm1vdmVPclNhdmUobmV4dERyYWdnYWJsZSwgZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSk7XG4gICAgICAgIFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdXSA9IFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4ICsgMV0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdXVxuICAgICAgICB0aGlzLnNvcnRJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKGRyYWdnYWJsZS5wb3NpdGlvbiwgcHJldkRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5maXhQb3NpdGlvblxuICAgICAgICB0aGlzLm1vdmVPclNhdmUocHJldkRyYWdnYWJsZSwgZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSk7XG4gICAgICAgIFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCAtIDFdXSA9IFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdXVxuICAgICAgICB0aGlzLnNvcnRJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpKzFdLCBmaXhQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHJhZ2dhYmxlLm1vdmUoZml4UG9zaXRpb25zW3RhcmdldEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25TdGFydChkcmFnZ2FibGUpIHtcbiAgICBsZXQgaVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgZm9yIChpID0gY3VycmVudEluZGV4ICsgMTsgaSA8IHNvcnRlZERyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSAtIDFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgfVxuICAgIHNvcnRlZERyYWdnYWJsZXNbY3VycmVudEluZGV4XS5maXhQb3NpdGlvbiA9IGZpeFBvc2l0aW9uc1tpIC0gMV1cbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSBpbml0UG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSlbMF1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlZERyYWdnYWJsZXNcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5yZWZyZXNoKClcbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQucmVzZXQoKVxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZXNldCgpIC8vdG9kbyByZW1vdmUgcmVzZXQgaW4gZnV0dXJlXG4gICAgICByZW1vdmVJdGVtcyh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uICE9PSBpbml0UG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLm1vdmUoaW5pdFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0UG9zaXRpb24gPSBpbml0UG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY2xhc3MgTGlzdFN3aXRjaGVyIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmZpeFRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdmVEcmFnZ2FibGVUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlKGluZGV4LCBwb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbZml4T2ZmUG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKV1cbiAgICBjb25zdCBpc09uID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChwb3NpdGlvbnMsIHBvc2l0aW9uLCAtMSwgR2VvbWV0cnkuZ2V0WERpZmZlcmVuY2UpXG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uICE9PSAhIWlzT24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9ICEhaXNPblxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUocG9zaXRpb25zW2lzT25dLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZml4VG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmZpeFBvc2l0aW9uID0gZml4T2ZmUG9zaXRpb25cbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGVUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShmaXhPZmZQb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5pc09uID8gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLnN1Yih0aGlzLm9wdGlvbnMuc3RlcE9uKSA6IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pIHx8IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgICAgcG9zaXRpb24uaXNPbiA9IGRyYWdnYWJsZS5pc09uXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5pc09uID0gcG9pbnQuaXNPblxuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFN3aXRjaGVyRmFjdG9yeShlbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cblxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IGVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgdGFyZ2V0cyA9IFtdLFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICB9XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0YXJnZXRzLnB1c2godGhpcylcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbXModGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
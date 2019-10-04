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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







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
      this.isDragee = true;
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
      this.isDragee = false;
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
/*! exports provided: getDefaultParent, getTouchByID, getSumValueOfStyleRule, appendFirstChild, range, setStyle, randomColor, createCanvas, hasClass, addClass, removeClass, removeItem, default */
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
  appendFirstChild: appendFirstChild,
  range: range,
  setStyle: setStyle,
  randomColor: randomColor,
  createCanvas: createCanvas,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  removeItem: removeItem
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwidG9SZWN0YW5nbGUiLCJ0b0VsZW1lbnQiLCJ0b0xpbmVYIiwidG9MaW5lWSIsInRvTGluZSIsInRvQ2lyY2xlIiwidG9BcmMiLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsIm1vdmUiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJwcmV2ZW50RG91YmxlSW5pdCIsImRyYWdnYWJsZSIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJwdXNoIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJvcHRpb25zIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uTW92ZSIsIm9uU3RhcnQiLCJhZGQiLCJvbkNyZWF0ZSIsImZpcmUiLCJpbml0IiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsImdldFNpemVPZkVsZW1lbnQiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwibXVsdCIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic3ViIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2VlIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImVuYWJsZSIsImNvbnRleHQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImkiLCJsZW5ndGgiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsImluZGV4Iiwic3BsaWNlIiwiX2YiLCJ0b1N0cmluZyIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJ1dGlsIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsIlRhcmdldCIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwidGhhdCIsImFkZFRhcmdldCIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJfX2RlZmluZUdldHRlcl9fIiwiaW5uZXJEcmFnZ2FibGVzIiwiX19kZWZpbmVTZXR0ZXJfXyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIkFycmF5IiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwiZGVzdHJveSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3RvcCIsInN0ZXAiLCJzZXRTdHlsZSIsImNzc1RleHQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInJhbmRvbUNvbG9yIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwiY3JlYXRlQ2FudmFzIiwiYXJlYSIsInJlY3RhZ2xlIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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LENBQWhCO0FBQ0FBLE9BQUM7QUFDRjtBQUNGOztBQUNELFNBQU9zTyxLQUFQO0FBQ0Q7O0FBRUQsSUFBTWxKLElBQUksR0FBRztBQUNYakwsa0JBQWdCLEVBQWhCQSxnQkFEVztBQUVYNkUsY0FBWSxFQUFaQSxZQUZXO0FBR1hxRyx3QkFBc0IsRUFBdEJBLHNCQUhXO0FBSVhvSCxrQkFBZ0IsRUFBaEJBLGdCQUpXO0FBS1hYLE9BQUssRUFBTEEsS0FMVztBQU1Ya0IsVUFBUSxFQUFSQSxRQU5XO0FBT1hJLGFBQVcsRUFBWEEsV0FQVztBQVFYTyxjQUFZLEVBQVpBLFlBUlc7QUFTWE0sVUFBUSxFQUFSQSxRQVRXO0FBVVhuUCxVQUFRLEVBQVJBLFFBVlc7QUFXWEssYUFBVyxFQUFYQSxXQVhXO0FBWVhxSyxZQUFVLEVBQVZBO0FBWlcsQ0FBYjtBQWVBO0FBZWVwRSxtRUFBZixFIiwiZmlsZSI6ImRyYWdnYWJsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kcmFnZ2FibGUuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuXG5jb25zdCBib3VuZCA9IHtcbiAgdG9SZWN0YW5nbGU6IGJvdW5kVG9SZWN0YW5nbGUsXG4gIHRvRWxlbWVudDogYm91bmRUb0VsZW1lbnQsXG4gIHRvTGluZVg6IGJvdW5kVG9MaW5lWCxcbiAgdG9MaW5lWTogYm91bmRUb0xpbmVZLFxuICB0b0xpbmU6IGJvdW5kVG9MaW5lLFxuICB0b0NpcmNsZTogYm91bmRUb0NpcmNsZSxcbiAgdG9BcmM6IGJvdW5kVG9BcmNcbn1cblxuZXhwb3J0IHsgYm91bmQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IGJvdW5kLCBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IERyYWdlZS5ib3VuZC50b0VsZW1lbnQocGFyZW50LCBwYXJlbnQpLFxuICAgICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNDb250ZW50Qm94U2l6ZTogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkVuZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcywgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuICAgIHRoaXMub25Nb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIHRoaXMub25FbmQuYWRkKCgpID0+IHRoaXMubW92ZSh0aGlzLnBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKSlcblxuICAgIGlmIChvcHRpb25zLm9uRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kLmFkZChvcHRpb25zLm9uRW5kKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vbk1vdmUpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmFkZChvcHRpb25zLm9uTW92ZSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0LmFkZChvcHRpb25zLm9uU3RhcnQpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kXG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUub25DcmVhdGUuZmlyZSh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICB0aGlzLl9kcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcylcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgcmVpbml0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKF9yZWNhbHVsYXRlKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgpJ1xuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzRml4PWZhbHNlLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGlmIChpc0ZpeCkge1xuICAgICAgdGhpcy5maXhQb3NpdGlvbiA9IHBvaW50XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdGltZSArICdtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLm9uTW92ZS5maXJlKClcbiAgICB9XG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIHNldFplcm9UcmFuc2l0aW9uKCkge1xuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdlZSA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2VlID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBEcmFnZ2FibGUsICBUYXJnZXQsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5mdW5jdGlvbiBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zKSB7XG4gIHNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgICAgc2NvcGUuZHJhZ2dhYmxlcy5yZW1vdmVJdGVtKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldHMpIHtcbiAgICAgIHRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgc2NvcGUudGFyZ2V0cy5yZW1vdmVJdGVtKHRhcmdldClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICBzY29wZXMucHVzaCh0aGlzKVxuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgdGltZUVuZDogKG9wdGlvbnMgJiYgb3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgfVxuXG4gIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICB9XG4gIHRoaXMuaW5pdCgpXG59XG5cblNjb3BlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhhdC5vbkVuZCh0aGlzKVxuICAgIH0pXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5hZGREcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcblxuICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGF0Lm9uRW5kKHRoaXMpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5hZGRUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxufVxuXG5TY29wZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gIH0pLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gIH0pXG5cbiAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgfVxuICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICByZXR1cm4gdHJ1ZVxufVxuXG5TY29wZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlc2V0KClcbiAgfSlcbn1cblxuU2NvcGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICB9KVxuICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVmcmVzaCgpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKCdwb3NpdGlvbnMnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICB9LCB0aGlzKVxuICB9LCB0aGlzKVxufSlcblxuU2NvcGUucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKHBvc2l0aW9ucykge1xuICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5yZXNldCgpXG4gICAgfSwgdGhpcylcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXRJbmRleGVzLCBpKSB7XG4gICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgfSwgdGhpcylcbiAgICB9LCB0aGlzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxufSlcblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKCksXG4gICAgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5UYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5mdW5jdGlvbiBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgRHJhZ2VlLnV0aWwuZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRpbWVFbmQ6IDIwMCxcbiAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgfSwgb3B0aW9ucylcblxuICB0YXJnZXRzLnB1c2godGhpcylcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH0pXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICB9XG4gIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgfVxuICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gIH1cblxuICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gIHRoaXMuaW5pdCgpXG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFJlY3RhbmdsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICAgIHRydWVcbiAgICApXG59XG5cblRhcmdldC5wcm90b3R5cGUuY2F0Y2hEcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCksXG4gICAgICBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIHRoaXMpXG5cbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgIGluZGV4ZXNPZk5ldyA9IERyYWdlZS51dGlsLnJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIERyYWdlZS5zY29wZXMuZm9yRWFjaChmdW5jdGlvbihzY29wZSkge1xuICAgIHNjb3BlLnRhcmdldHMucmVtb3ZlSXRlbSh0aGlzKVxuICB9LCB0aGlzKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgW10pXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG59XG5cblRhcmdldC5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblRhcmdldC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUsIGkpIHtcbiAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnJlbW92ZUl0ZW0oZHJhZ2dhYmxlKVxuXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgfSwgdGhpcylcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihkcmFnZ2FibGUsIHRpbWUpIHtcbiAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnB1c2hJbm5lckRyYWdnYWJsZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmFkZFJlbW92ZU9uTW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuXG4gIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoYXQucmVtb3ZlKGRyYWdnYWJsZSlcbiAgfSlcblxuICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIFtdKVxuXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG59XG5cblRhcmdldC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH0sIHRoaXMpXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTb3J0ZWREcmFnZ2FibGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbn1cblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbihzdW0sIHJ1bGUpIHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBlbGVtZW50LmZpcnN0Q2hpbGQgPyBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpIDogZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=
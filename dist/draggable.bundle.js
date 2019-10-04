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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwidG9SZWN0YW5nbGUiLCJ0b0VsZW1lbnQiLCJ0b0xpbmVYIiwidG9MaW5lWSIsInRvTGluZSIsInRvQ2lyY2xlIiwidG9BcmMiLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsIm1vdmUiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJwcmV2ZW50RG91YmxlSW5pdCIsImRyYWdnYWJsZSIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJwdXNoIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJEcmFnZ2FibGUiLCJvcHRpb25zIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uTW92ZSIsIm9uU3RhcnQiLCJhZGQiLCJvbkNyZWF0ZSIsImZpcmUiLCJpbml0IiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsImdldFNpemVPZkVsZW1lbnQiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwibXVsdCIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic3ViIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2VlIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImVuYWJsZSIsImNvbnRleHQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImkiLCJsZW5ndGgiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsImluZGV4Iiwic3BsaWNlIiwiX2YiLCJ0b1N0cmluZyIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJ1dGlsIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsIlRhcmdldCIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwidGhhdCIsImFkZFRhcmdldCIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJfX2RlZmluZUdldHRlcl9fIiwiaW5uZXJEcmFnZ2FibGVzIiwiX19kZWZpbmVTZXR0ZXJfXyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIkFycmF5IiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwiZGVzdHJveSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3RvcCIsInN0ZXAiLCJzZXRTdHlsZSIsImNzc1RleHQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInJhbmRvbUNvbG9yIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwiY3JlYXRlQ2FudmFzIiwiYXJlYSIsInJlY3RhZ2xlIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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LGNBQVksRUFBWkEsWUFSVztBQVNYTSxVQUFRLEVBQVJBLFFBVFc7QUFVWG5QLFVBQVEsRUFBUkEsUUFWVztBQVdYSyxhQUFXLEVBQVhBO0FBWFcsQ0FBYjtBQWNBO0FBY2VpRyxtRUFBZixFIiwiZmlsZSI6ImRyYWdnYWJsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kcmFnZ2FibGUuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuXG5jb25zdCBib3VuZCA9IHtcbiAgdG9SZWN0YW5nbGU6IGJvdW5kVG9SZWN0YW5nbGUsXG4gIHRvRWxlbWVudDogYm91bmRUb0VsZW1lbnQsXG4gIHRvTGluZVg6IGJvdW5kVG9MaW5lWCxcbiAgdG9MaW5lWTogYm91bmRUb0xpbmVZLFxuICB0b0xpbmU6IGJvdW5kVG9MaW5lLFxuICB0b0NpcmNsZTogYm91bmRUb0NpcmNsZSxcbiAgdG9BcmM6IGJvdW5kVG9BcmNcbn1cblxuZXhwb3J0IHsgYm91bmQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IGJvdW5kLCBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICBwcmV2ZW50RG91YmxlSW5pdCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgICBpZiAoZHJhZ2dhYmxlcy5zb21lKGZ1bmN0aW9uKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnRcbiAgICB9KSkge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICB9LFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9LFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogRHJhZ2VlLmJvdW5kLnRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2VlID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZWUgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIERyYWdnYWJsZSwgIFRhcmdldCwgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmZ1bmN0aW9uIFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnMpIHtcbiAgc2NvcGVzLmZvckVhY2goZnVuY3Rpb24oc2NvcGUpIHtcbiAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgICBzY29wZS5kcmFnZ2FibGVzLnJlbW92ZUl0ZW0oZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0cykge1xuICAgICAgdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICBzY29wZS50YXJnZXRzLnJlbW92ZUl0ZW0odGFyZ2V0KVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gIHNjb3Blcy5wdXNoKHRoaXMpXG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICB0aW1lRW5kOiAob3B0aW9ucyAmJiBvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICB9XG5cbiAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbkNoYW5nZSkge1xuICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gIH1cbiAgdGhpcy5pbml0KClcbn1cblxuU2NvcGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uRW5kLmFkZChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGF0Lm9uRW5kKHRoaXMpXG4gICAgfSlcbiAgfSlcbn1cblxuU2NvcGUucHJvdG90eXBlLmFkZERyYWdnYWJsZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuXG4gIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgZHJhZ2dhYmxlLm9uRW5kLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoYXQub25FbmQodGhpcylcbiAgfSlcbn1cblxuU2NvcGUucHJvdG90eXBlLmFkZFRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG59XG5cblNjb3BlLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgfSlcblxuICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlLCB0cnVlKVxuICB9XG4gIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gIHJldHVybiB0cnVlXG59XG5cblNjb3BlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVzZXQoKVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gIH0pXG4gIHRoaXMudGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHRhcmdldC5yZWZyZXNoKClcbiAgfSlcbn1cblxuU2NvcGUucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIH0sIHRoaXMpXG4gIH0sIHRoaXMpXG59KVxuXG5TY29wZS5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXygncG9zaXRpb25zJywgZnVuY3Rpb24ocG9zaXRpb25zKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgdGFyZ2V0LnJlc2V0KClcbiAgICB9LCB0aGlzKVxuICAgIHBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldEluZGV4ZXMsIGkpIHtcbiAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG59KVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKSxcbiAgICBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZ2VlLlRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgdGFyZ2V0cyA9IFtdLFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICB9XG5cbmZ1bmN0aW9uIFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBEcmFnZWUudXRpbC5nZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGltZUVuZDogMjAwLFxuICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgc29ydGluZzogRHJhZ2VlLnNvcnRpbmdGYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSg4MCwgR2VvbWV0cnkudHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSkpLFxuICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICB9LCBvcHRpb25zKVxuXG4gIHRhcmdldHMucHVzaCh0aGlzKVxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gIGRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfSlcbiAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICB0aGlzLm9uQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICBpZiAob3B0aW9ucy5vblJlbW92ZSkge1xuICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gIH1cbiAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICB9XG4gIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgIHRoaXMuYmVmb3JlQWRkLmFkZChvcHRpb25zLmJlZm9yZUFkZClcbiAgfVxuXG4gIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgdGhpcy5pbml0KClcbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cblRhcmdldC5wcm90b3R5cGUuZ2V0UmVjdGFuZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgICAgdHJ1ZVxuICAgIClcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5jYXRjaERyYWdnYWJsZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKSxcbiAgICAgIGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxufVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcihmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSwgdGhpcylcblxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgaW5kZXhlc09mTmV3ID0gRHJhZ2VlLnV0aWwucmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gICAgfSwgdGhpcylcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgc2NvcGUudGFyZ2V0cy5yZW1vdmVJdGVtKHRoaXMpXG4gIH0sIHRoaXMpXG59XG5cblRhcmdldC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBbXSlcbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSwgaSkge1xuICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucmVtb3ZlSXRlbShkcmFnZ2FibGUpXG5cbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICB9LCB0aGlzKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSwgdGltZSkge1xuICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUucHVzaElubmVyRHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuYWRkUmVtb3ZlT25Nb3ZlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG5cbiAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhhdC5yZW1vdmUoZHJhZ2dhYmxlKVxuICB9KVxuXG4gIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG59XG5cblRhcmdldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgW10pXG5cbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfSwgdGhpcylcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFNvcnRlZERyYWdnYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxufVxuXG5leHBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHN1bSwgcnVsZSkge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGVsZW1lbnQuZmlyc3RDaGlsZCA/IGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZCkgOiBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG4gIH1cbiAgY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICAgIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0clxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICByZXR1cm4gJyMnICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuXG5jb25zdCB1dGlsID0ge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIGFwcGVuZEZpcnN0Q2hpbGQsXG4gIHJhbmdlLFxuICBzZXRTdHlsZSxcbiAgcmFuZG9tQ29sb3IsXG4gIGNyZWF0ZUNhbnZhcyxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzc1xufVxuXG5leHBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIGFwcGVuZEZpcnN0Q2hpbGQsXG4gIHJhbmdlLFxuICBzZXRTdHlsZSxcbiAgcmFuZG9tQ29sb3IsXG4gIGNyZWF0ZUNhbnZhcyxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzc1xufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iXSwic291cmNlUm9vdCI6IiJ9
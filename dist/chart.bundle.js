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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/chart.js");
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

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! exports provided: charts, Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var _createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createcanvas */ "./src/createcanvas.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var isTouch = 'ontouchstart' in window;
var charts = [];

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

function getArrayWithBoundIndexes(index, length) {
  var retIndexes = [];

  if (index !== -1) {
    retIndexes.push(index);
    retIndexes.push((index + 1) % length);
  }

  return retIndexes;
}

var Chart =
/*#__PURE__*/
function () {
  function Chart(area, elements) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Chart);

    var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(area, area);
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      touchRadius: areaRectangle.getMinSide() / 2,
      boundAngle: Math.PI / 9,
      fillStyles: _util__WEBPACK_IMPORTED_MODULE_1__["default"].range(0, elements.length).map(function () {
        return randomColor();
      }),
      initAngles: _util__WEBPACK_IMPORTED_MODULE_1__["default"].range(-90, 270, 360 / elements.length).map(function (angle) {
        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].toRadian(angle);
      }),
      limitImg: null,
      limitImgOffset: new _geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0),
      isSelectable: false
    }, options);
    charts.push(this);

    this.onDraw = this.options.onDraw || function () {};

    this.area = area;
    this.areaRectangle = areaRectangle;
    this.init(elements);
  }

  _createClass(Chart, [{
    key: "init",
    value: function init(elements) {
      var _this = this;

      this.canvas = Object(_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.area, this.areaRectangle);
      this.context = this.canvas.getContext('2d');
      this.draggables = elements.map(function (element, i) {
        var angle = _this.options.initAngles[i];
        var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getSizeOfElement(element).mult(0.5);
        var position = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getPointFromRadialSystem(angle, _this.options.touchRadius, _this.options.center.sub(halfSize));
        var bound = Object(_bound__WEBPACK_IMPORTED_MODULE_4__["boundToArc"])(_this.options.center.sub(halfSize), _this.options.touchRadius, _this.getBoundAngle(i, false), _this.getBoundAngle(i, true));
        return new _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"](element, {
          parent: _this.area,
          bound: bound,
          position: position,
          onMove: function onMove() {
            _this.draw();

            return true;
          }
        });
      });
      this.isInit = true;

      if (this.options.isSelectable) {
        this.initSelect();
      }

      this.draw();
    }
  }, {
    key: "initSelect",
    value: function initSelect() {
      var _this2 = this;

      this.setActiveArc(-1);
      this.canvas.addEventListener(_draggable__WEBPACK_IMPORTED_MODULE_3__["events"].start, function (e) {
        var point = new _geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](isTouch ? e.changedTouches[0].pageX : e.clientX, isTouch ? e.changedTouches[0].pageY : e.clientY);

        if (!_this2.canvasOffset) {
          _this2.canvasOffset = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getOffset(_this2.canvas);
        }

        point = point.sub(_this2.canvasOffset);

        var index = _this2.getArcOnPoint(point);

        if (index !== -1) {
          _this2.setActiveArc(_this2.activeArcIndex !== index ? index : -1);
        }
      });
    }
  }, {
    key: "updateAngles",
    value: function updateAngles() {
      var _this3 = this;

      this.angles = this.draggables.map(function (draggable) {
        var halfSize = draggable.getSize().mult(0.5);
        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getAngle(_this3.options.center.sub(halfSize), draggable.position);
      });
    }
  }, {
    key: "getBoundAngle",
    value: function getBoundAngle(index, isClossing) {
      var _this4 = this;

      var sign = isClossing ? 1 : -1;
      return function () {
        var i = (index + sign) % _this4.angles.length;

        if (i < 0) {
          i += _this4.angles.length;
        }

        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(_this4.angles[i] - sign * _this4.options.boundAngle);
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this5 = this;

      if (!this.isInit) {
        return;
      }

      this.updateAngles();
      this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
      this.draggables.forEach(function (_draggable, index) {
        _this5.drawArc(_this5.context, _this5.options.center, _this5.options.radius, index);
      });
      this.draggables.forEach(function (_draggable, index) {
        var enableIndexes;

        if (_this5.options.isSelectable) {
          enableIndexes = getArrayWithBoundIndexes(_this5.activeArcIndex, _this5.draggables.length);

          if (enableIndexes.indexOf(index) !== -1) {
            _this5.drawLimitImg(index);
          }
        } else {
          _this5.drawLimitImg(index);
        }
      });
      this.onDraw();
    }
  }, {
    key: "createClone",
    value: function createClone(element) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInit) {
        return;
      }

      var rectangle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(element, element);
      var opts = Object.assign({
        center: rectangle.getCenter(),
        radius: rectangle.getMinSide() / 2,
        fillStyles: this.options.fillStyles
      }, options);
      var canvas = Object(_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(element, rectangle);
      var context = canvas.getContext('2d');
      var cloneObj = {
        draw: function draw() {
          context.clearRect(0, 0, rectangle.size.x, rectangle.size.y);

          _this6.draggables.forEach(function (_draggable, index) {
            _this6.drawArc(context, opts.center, opts.radius, index);
          });
        }
      };
      cloneObj.draw();
      return cloneObj;
    }
  }, {
    key: "getFillStyle",
    value: function getFillStyle(index) {
      if (typeof this.options.fillStyles[index] === 'function') {
        this.options.fillStyles[index] = this.options.fillStyles[index].call(this);
      }

      return this.options.fillStyles[index];
    }
  }, {
    key: "drawArc",
    value: function drawArc(context, center, radius, index) {
      var startAngle = this.angles[index];
      var endAngle = this.angles[(index + 1) % this.angles.length];
      var color = this.getFillStyle(index);
      context.beginPath();
      context.moveTo(center.x, center.y);
      context.arc(center.x, center.y, radius, startAngle, endAngle, false);
      context.lineTo(center.x, center.y);
      context.closePath();
      context.fillStyle = color;
      context.fill();
    }
  }, {
    key: "drawLimitImg",
    value: function drawLimitImg(index) {
      var point, img;

      if (this.options.limitImg) {
        img = this.options.limitImg instanceof Array ? this.options.limitImg[index] : this.options.limitImg;
      }

      if (img) {
        var angle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(this.angles[index]);
        point = new _geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](0, -img.height / 2);
        point = point.add(this.options.limitImgOffset);
        this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2);
        this.context.rotate(angle);
        this.context.drawImage(img, point.x, point.y);
        this.context.setTransform(1, 0, 0, 1, 0, 0);
      }
    }
  }, {
    key: "getAnglesDiff",
    value: function getAnglesDiff() {
      var angles = this.angles.slice(1);
      var baseAngle = this.angles[0];
      angles.push(baseAngle);
      return angles.map(function (angle) {
        var diffAngle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(angle - baseAngle);
        baseAngle = angle;
        return diffAngle;
      });
    }
  }, {
    key: "getPercent",
    value: function getPercent() {
      return this.getAnglesDiff().map(function (diffAngle) {
        return diffAngle / (2 * Math.PI);
      });
    }
  }, {
    key: "getArcBisectrixs",
    value: function getArcBisectrixs() {
      var _this7 = this;

      return this.getAnglesDiff().map(function (diffAngle, i) {
        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(_this7.angles[i] + diffAngle / 2);
      });
    }
  }, {
    key: "getArcOnPoint",
    value: function getArcOnPoint(point) {
      var angle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getAngle(this.options.center, point);
      var radius = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getDistance(this.options.center, point);

      if (radius > this.options.radius) {
        return -1;
      }

      var offset = -1,
          i,
          j;

      for (i = 0; i < this.angles.length; i++) {
        if (offset === -1 || this.angles[offset] > this.angles[i]) {
          offset = i;
        }
      }

      for (i = 0, j = offset; i < this.angles.length; i++, j = (i + offset) % this.angles.length) {
        if (angle < this.angles[j]) {
          break;
        }
      }

      if (--j < 0) {
        j += this.angles.length;
      }

      return j;
    }
  }, {
    key: "setAngles",
    value: function setAngles(angles) {
      var _this8 = this;

      this.angles = angles;
      this.draggables.forEach(function (draggable, i) {
        var angle = _this8.angles[i];
        var halfSize = draggable.getSize().mult(0.5);
        var position = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getPointFromRadialSystem(angle, _this8.options.touchRadius, _this8.options.center.sub(halfSize));
        draggable.move(position, 0, true, true);
      });
      this.draw();
    }
  }, {
    key: "setActiveArc",
    value: function setActiveArc(index) {
      var enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length);
      this.activeArcIndex = index;
      this.draggables.forEach(function (draggable, i) {
        draggable.enable = enableIndexes.indexOf(i) !== -1;
      });
      this.draw();
    }
  }]);

  return Chart;
}();



/***/ }),

/***/ "./src/createcanvas.js":
/*!*****************************!*\
  !*** ./src/createcanvas.js ***!
  \*****************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9jcmVhdGVjYW52YXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiaXNUb3VjaCIsIndpbmRvdyIsImNoYXJ0cyIsInJhbmRvbUNvbG9yIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMiLCJpbmRleCIsInJldEluZGV4ZXMiLCJwdXNoIiwiQ2hhcnQiLCJhcmVhIiwiZWxlbWVudHMiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIk9iamVjdCIsImFzc2lnbiIsImdldENlbnRlciIsImdldE1pblNpZGUiLCJ0b3VjaFJhZGl1cyIsImZpbGxTdHlsZXMiLCJ1dGlsIiwicmFuZ2UiLCJtYXAiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwib25EcmF3IiwiaW5pdCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhZ2dhYmxlcyIsImkiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0Iiwic3ViIiwiZ2V0Qm91bmRBbmdsZSIsIkRyYWdnYWJsZSIsIm9uTW92ZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImFuZ2xlcyIsImRyYWdnYWJsZSIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsInN0YXJ0QW5nbGUiLCJjb2xvciIsImdldEZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJpbWciLCJBcnJheSIsImhlaWdodCIsImFkZCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInNldFRyYW5zZm9ybSIsInNsaWNlIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsIm1vdmUiLCJlbmFibGUiLCJzZXRTdHlsZSIsInN0eWxlIiwiY3NzVGV4dCIsImtleSIsImhhc093blByb3BlcnR5IiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJyZWN0YWdsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJEcmFnZWUiLCJFdmVudCIsIm1vdXNlRXZlbnRzIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJwcmV2ZW50RG91YmxlSW5pdCIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvblN0YXJ0Iiwib25DcmVhdGUiLCJmaXJlIiwiX2VuYWJsZSIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9yZWNhbHVsYXRlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwidGVzdCIsInJlcGxhY2UiLCJ0aW1lIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0Iiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwicXVlcnlTZWxlY3RvciIsImdyb3d0aCIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhclBvaW50IiwiYXJyIiwidmFsIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsInBhcnNlSW50IiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsInBvc2l0aW9uVHlwZSIsIm5vdENyb3NzaW5nIiwiZmxvYXRMZWZ0IiwiZmxvYXRSaWdodCIsInBvc2l0aW9uRmFjdG9yeSIsInR5cGUiLCJfb3B0aW9ucyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwiYm91bmRSZWN0Iiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwidGltZUVuZCIsIm9uQ2hhbmdlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInBvc2l0aW9ucyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZUVsZW1lbnRzIiwidGFyZ2V0RWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInRpbWVFeGNhbmdlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsInN0b3AiLCJzdGVwIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUksR0FBRztBQUNYa0gsa0JBQWdCLEVBQWhCQSxnQkFEVztBQUVYeUQsY0FBWSxFQUFaQSxZQUZXO0FBR1htRix3QkFBc0IsRUFBdEJBLHNCQUhXO0FBSVg3UCxPQUFLLEVBQUxBLEtBSlc7QUFLWHlXLFVBQVEsRUFBUkEsUUFMVztBQU1Yak0sVUFBUSxFQUFSQSxRQU5XO0FBT1hLLGFBQVcsRUFBWEEsV0FQVztBQVFYK0ksWUFBVSxFQUFWQTtBQVJXLENBQWI7QUFXQTtBQVdlN1QsbUVBQWYsRSIsImZpbGUiOiJjaGFydC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jaGFydC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgY2hhcnRzID0gW11cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiB1dGlsLnJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogdXRpbC5yYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICAgIHJldHVybiBHZW9tZXRyeS50b1JhZGlhbihhbmdsZSlcbiAgICAgIH0pLFxuICAgICAgbGltaXRJbWc6IG51bGwsXG4gICAgICBsaW1pdEltZ09mZnNldDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgaXNTZWxlY3RhYmxlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjaGFydHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25EcmF3ID0gdGhpcy5vcHRpb25zLm9uRHJhdyB8fCBmdW5jdGlvbigpIHt9XG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmluaXRTZWxlY3QoKVxuICAgIH1cbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgaW5pdFNlbGVjdCgpIHtcbiAgICB0aGlzLnNldEFjdGl2ZUFyYygtMSlcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCAoZSkgPT4ge1xuICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFlcbiAgICAgIClcblxuICAgICAgaWYgKCF0aGlzLmNhbnZhc09mZnNldCkge1xuICAgICAgICB0aGlzLmNhbnZhc09mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmNhbnZhcylcbiAgICAgIH1cblxuICAgICAgcG9pbnQgPSBwb2ludC5zdWIodGhpcy5jYW52YXNPZmZzZXQpXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0QXJjT25Qb2ludChwb2ludClcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVBcmMoKHRoaXMuYWN0aXZlQXJjSW5kZXggIT09IGluZGV4KSA/IGluZGV4IDogLTEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZW5hYmxlSW5kZXhlc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgICAgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyh0aGlzLmFjdGl2ZUFyY0luZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgICBpZiAoZW5hYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uRHJhdygpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG5cbmV4cG9ydCB7IGNoYXJ0cywgQ2hhcnQgfVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogYm91bmRUb0VsZW1lbnQocGFyZW50LCBwYXJlbnQpLFxuICAgICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNDb250ZW50Qm94U2l6ZTogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkVuZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcywgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuICAgIHRoaXMub25Nb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIHRoaXMub25FbmQuYWRkKCgpID0+IHRoaXMubW92ZSh0aGlzLnBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKSlcblxuICAgIGlmIChvcHRpb25zLm9uRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kLmFkZChvcHRpb25zLm9uRW5kKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vbk1vdmUpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmFkZChvcHRpb25zLm9uTW92ZSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0LmFkZChvcHRpb25zLm9uU3RhcnQpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kXG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUub25DcmVhdGUuZmlyZSh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICB0aGlzLl9kcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcylcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgcmVpbml0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKF9yZWNhbHVsYXRlKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgpJ1xuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzRml4PWZhbHNlLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGlmIChpc0ZpeCkge1xuICAgICAgdGhpcy5maXhQb3NpdGlvbiA9IHBvaW50XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdGltZSArICdtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLm9uTW92ZS5maXJlKClcbiAgICB9XG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIHNldFplcm9UcmFuc2l0aW9uKCkge1xuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZHJhZ2dhYmxlcywgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gIHRoaXMueCA9IHhcbiAgdGhpcy55ID0geVxufVxuXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICd7eD0nICsgdGhpcy54ICsgJyx5PScgKyB0aGlzLnkgKyAnfSdcbn1cblxuUG9pbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLm11bHQgPSBmdW5jdGlvbihrKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbn1cblxuUG9pbnQucHJvdG90eXBlLm5lZ2F0aXZlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxufVxuXG4vKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSkge1xuICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgdGhpcy5zaXplID0gc2l6ZVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAxID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUG9pbnQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVJlY3RhbmdsZSA9IGZ1bmN0aW9uKHJlY3RhbmdsZSkge1xuICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5tb3ZlVG9Cb3VuZCA9IGZ1bmN0aW9uKHJlY3QsIGF4aXMpIHtcbiAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gIGlmIChheGlzKSB7XG4gICAgc2VsQXhpcyA9IGF4aXNcbiAgfSBlbHNlIHtcbiAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9XG4gICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICB9XG4gIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICByZXR1cm4gcmVjdFxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFNxdWFyZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLnN0eWxlQXBwbHkgPSBmdW5jdGlvbihlbCkge1xuICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ3Jvd3RoID0gZnVuY3Rpb24oc2l6ZSkge1xuICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0TWluU2lkZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxuICB9LFxuICBkaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbiAgfSxcbiAgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgICAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyUG9pbnQ6IGZ1bmN0aW9uKGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlKSB7XG4gICAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICAgIGdldERpc3RhbmNlID0gZ2V0RGlzdGFuY2UgfHwgR2VvbWV0cnkuZ2V0RGlzdGFuY2VcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHNpemUgPSBnZXREaXN0YW5jZShhcnJbMF0sIHZhbClcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wID0gZ2V0RGlzdGFuY2UoYXJyW2ldLCB2YWwpXG4gICAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgICAgaW5kZXggPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4XG4gIH0sXG4gIGJvdW5kOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50OiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nOiBmdW5jdGlvbihMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gICAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gICAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgICB0ZW1wID0gTDJQMVxuICAgICAgTDJQMSA9IEwxUDFcbiAgICAgIEwxUDEgPSB0ZW1wXG4gICAgICB0ZW1wID0gTDJQMlxuICAgICAgTDJQMiA9IEwxUDJcbiAgICAgIEwxUDIgPSB0ZW1wXG4gICAgfVxuICAgIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIHggPSBMMVAxLnhcbiAgICAgIHkgPSB4ICogazIgKyBiMlxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICAgIH0gZWxzZSB7XG4gICAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICAgIHkgPSB4ICogazEgKyBiMVxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICAgIH1cbiAgfSxcbiAgICAvL0dldCBwb2ludCBhbmQgY2hlY2sgdGhhdCBwb2ludCBiZWxvbmcgdG8gc2VnbWVudCBvZiB0aGUgbGluZVxuICAgIC8vIGlmIG5vdCAtIHJldHVybiB0aGUgbmVhcmVzdCBwb2ludCBvZiBzZWdtZW50XG4gIGJvdW5kVG9TZWdtZW50OiBmdW5jdGlvbihMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lOiBmdW5jdGlvbihBLCBCLCBQKSB7XG4gICAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICAgIHQgPSBhcF9hYiAvIGFiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxuICB9LFxuICBnZXRQb2ludEluTGluZTogZnVuY3Rpb24oTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0OiBmdW5jdGlvbihMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQsIGlzQ29udGVudEJveFNpemUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplT2ZFbGVtZW50KGVsLCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMuZ2V0T2Zmc2V0KGVsLCBwYXJlbnQgfHwgZWwucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZSksIHNpemUpXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpWyd3aWR0aCddKSwgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJ10pXG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9pbnQod2lkdGgsIGhlaWdodClcbiAgfSxcbiAgZ2V0T2Zmc2V0OiBmdW5jdGlvbihlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbTogZnVuY3Rpb24oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50czogZnVuY3Rpb24oYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKGZ1bmN0aW9uKGJQb2ludCkge1xuICAgICAgcmV0dXJuICBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gICAgfSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnB1c2gocG9pbnQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICBnZXRBbmdsZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW46IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWU6IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG4gIH0sXG4gIGJvdW5kQW5nbGU6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlOiBmdW5jdGlvbihhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmOiBmdW5jdGlvbihhbHBoYSwgYmV0YSkge1xuICAgIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpLFxuICAgICAgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gICAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG4gIH0sXG4gIG5vcm1hbGl6ZUFuZ2xlOiBmdW5jdGlvbih2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgeyByZW1vdmVJdGVtIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uRW5kLnVuc2hpZnQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgcmVtb3ZlSXRlbSxcbiAgcmFuZ2Vcbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgdGFyZ2V0cyA9IFtdLFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICB9XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0YXJnZXRzLnB1c2godGhpcylcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuICAgIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbihzdW0sIHJ1bGUpIHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuY29uc3QgdXRpbCA9IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIHJhbmdlLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=
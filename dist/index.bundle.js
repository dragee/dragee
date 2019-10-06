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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

/***/ "./src/arcslider.js":
/*!**************************!*\
  !*** ./src/arcslider.js ***!
  \**************************/
/*! exports provided: arcSliders, ArcSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcSliders", function() { return arcSliders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return ArcSlider; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var arcSliders = [];

var ArcSlider =
/*#__PURE__*/
function () {
  function ArcSlider(area, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ArcSlider);

    var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].createRectangleFromElement(area, area);
    var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getSizeOfElement(element).mult(0.5);
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      startAngle: Math.PI,
      endAngle: 0,
      angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
      onChange: function onChange() {},
      time: 500
    }, options);
    this.shiftedCenter = this.options.center.sub(halfSize);
    this.onChange = this.options.onChange;
    arcSliders.push(this);
    this.area = area;
    this.init(element);
  }

  _createClass(ArcSlider, [{
    key: "init",
    value: function init(element) {
      var _this = this;

      var angle = this.options.startAngle;
      var position = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter);
      var bound = Object(_bound__WEBPACK_IMPORTED_MODULE_2__["boundToArc"])(this.shiftedCenter, this.options.radius, this.options.startAngle, this.options.endAngle);
      this.angle = angle;
      this.draggable = new _draggable__WEBPACK_IMPORTED_MODULE_1__["Draggable"](element, {
        parent: this.area,
        bound: bound,
        position: position,
        onMove: function onMove() {
          _this.change();

          return true;
        }
      });
    }
  }, {
    key: "updateAngle",
    value: function updateAngle() {
      this.angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getAngle(this.shiftedCenter, this.draggable.position);
    }
  }, {
    key: "change",
    value: function change() {
      this.updateAngle(); //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
      //      this.setAngle(angle,this.options.time);

      this.onChange(this.angle);
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle, time) {
      var position = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
      this.angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].normalizeAngle(angle, position);
      this.draggable.move(position, time || 0, true, true);
      this.onChange(this.angle);
    }
  }]);

  return ArcSlider;
}();



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

/***/ "./src/expandnative.js":
/*!*****************************!*\
  !*** ./src/expandnative.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*********************** 00P *************************/
var augment = function augment(receivingClass, givingClass) {
  /* only provide certain methods */
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else {
    for (var methodName in givingClass.prototype) {
      /* check to make sure the receiving class doesn't
         have a method of the same name as the one currently
         being processed */
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
};
/**************************************************/


augment(NodeList, Array, 'forEach');

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, targets, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, spiders, Spider, arcSliders, ArcSlider, charts, Chart, listSwitcherFactory, ListSwitcher, util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expandnative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandnative */ "./src/expandnative.js");
/* harmony import */ var _expandnative__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_expandnative__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"]; });

/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_3__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listFactory", function() { return _list__WEBPACK_IMPORTED_MODULE_3__["listFactory"]; });

/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target */ "./src/target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targets", function() { return _target__WEBPACK_IMPORTED_MODULE_4__["targets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return _target__WEBPACK_IMPORTED_MODULE_4__["Target"]; });

/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopes", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["scopes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultScope", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["defaultScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopeFactory", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["scopeFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["scope"]; });

/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionType", function() { return _positioning__WEBPACK_IMPORTED_MODULE_6__["positionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortingFactory", function() { return _positioning__WEBPACK_IMPORTED_MODULE_6__["sortingFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionFactory", function() { return _positioning__WEBPACK_IMPORTED_MODULE_6__["positionFactory"]; });

/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spider */ "./src/spider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spiders", function() { return _spider__WEBPACK_IMPORTED_MODULE_7__["spiders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return _spider__WEBPACK_IMPORTED_MODULE_7__["Spider"]; });

/* harmony import */ var _arcslider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arcslider */ "./src/arcslider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcSliders", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_8__["arcSliders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_8__["ArcSlider"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return _chart__WEBPACK_IMPORTED_MODULE_9__["charts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_9__["Chart"]; });

/* harmony import */ var _listswitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listswitcher */ "./src/listswitcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_10__["listSwitcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_10__["ListSwitcher"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_11__["default"]; });















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
/* harmony import */ var _createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createcanvas */ "./src/createcanvas.js");
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

      this.canvas = Object(_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.area, this.areaRectangle);
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2NyZWF0ZWNhbnZhcy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZHJhZ2dhYmxlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXhwYW5kbmF0aXZlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2xpc3Rzd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvcG9zaXRpb25pbmcuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zcGlkZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJhcmNTbGlkZXJzIiwiQXJjU2xpZGVyIiwiYXJlYSIsImVsZW1lbnQiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwicmFkaXVzIiwiZ2V0TWluU2lkZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbmRBbmdsZSIsImFuZ2xlcyIsIm9uQ2hhbmdlIiwidGltZSIsInNoaWZ0ZWRDZW50ZXIiLCJzdWIiLCJwdXNoIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsImlzVG91Y2giLCJ3aW5kb3ciLCJjaGFydHMiLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInV0aWwiLCJyYW5nZSIsIm1hcCIsImluaXRBbmdsZXMiLCJ0b1JhZGlhbiIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJpc1NlbGVjdGFibGUiLCJvbkRyYXciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYWdnYWJsZXMiLCJpIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImltZyIsIkFycmF5IiwiaGVpZ2h0IiwiYWRkIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXQiLCJqIiwiZW5hYmxlIiwic2V0U3R5bGUiLCJzdHlsZSIsImNzc1RleHQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwicmVjdGFnbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0QXR0cmlidXRlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiRHJhZ2VlIiwiRXZlbnQiLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwicHJldmVudERvdWJsZUluaXQiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsImF1Z21lbnQiLCJyZWNlaXZpbmdDbGFzcyIsImdpdmluZ0NsYXNzIiwibGVuIiwibWV0aG9kTmFtZSIsIk5vZGVMaXN0IiwicCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDQiLCJvciIsInJlY3QiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZ3Jvd3RoIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyUG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwicGFyc2VJbnQiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwibGlzdHMiLCJMaXN0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwiaXNEaXNwbGFjZW1lbnQiLCJpbml0RHJhZ2dhYmxlIiwibW92ZUhhbmRsZXIiLCJsaXN0Iiwib25FbmREaXNwbGF5Y2VtZW50IiwiZml4UG9zaXRpb25zIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uIiwiY3VycmVudEluZGV4IiwiZXhjYW5nZUluZGV4IiwibW92ZU9yU2F2ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXgiLCJpbml0UG9zaXRpb25zIiwiY29uY2F0IiwicmVtb3ZlSXRlbSIsImRlc3Ryb3kiLCJwb3NpdGlvbnMiLCJsaXN0RmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJMaXN0U3dpdGNoZXIiLCJzdGVwT24iLCJpc09uIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZiIsIm1vdmVEcmFnZ2FibGUiLCJmaXhUb09mZiIsIm1vdmVEcmFnZ2FibGVUb09mZiIsImZpeE9mZlBvc2l0aW9uIiwibGlzdFN3aXRjaGVyRmFjdG9yeSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInNwaWRlcnMiLCJTcGlkZXIiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsInN0b3AiLCJzdGVwIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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LENBQVg7QUFDQS9lLFNBQU8sQ0FBQ2tmLFNBQVIsR0FBb0JsZixPQUFPLENBQUNrZixTQUFSLENBQWtCdlEsT0FBbEIsQ0FBMEJxUSxFQUExQixFQUE4QixJQUE5QixFQUFvQ3JRLE9BQXBDLENBQTRDLE1BQTVDLEVBQW9ELEdBQXBELEVBQXlEQSxPQUF6RCxDQUFpRSxVQUFqRSxFQUE2RSxFQUE3RSxDQUFwQjtBQUNEOztBQUVELFNBQVMwSixVQUFULENBQW9COEcsS0FBcEIsRUFBMkJoTCxHQUEzQixFQUFnQztBQUM5QixPQUFLLElBQUk5TSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOFgsS0FBSyxDQUFDcFosTUFBMUIsRUFBa0NzQixDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUk4WCxLQUFLLENBQUM5WCxDQUFELENBQUwsS0FBYThNLEdBQWpCLEVBQXNCO0FBQ3BCZ0wsV0FBSyxDQUFDOU4sTUFBTixDQUFhaEssQ0FBYixFQUFnQixDQUFoQjtBQUNBQSxPQUFDO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPOFgsS0FBUDtBQUNEOztBQUVELElBQU01WSxJQUFJLEdBQUc7QUFDWHVHLGtCQUFnQixFQUFoQkEsZ0JBRFc7QUFFWHdELGNBQVksRUFBWkEsWUFGVztBQUdYeUYsd0JBQXNCLEVBQXRCQSxzQkFIVztBQUlYdlAsT0FBSyxFQUFMQSxLQUpXO0FBS1hzWSxVQUFRLEVBQVJBLFFBTFc7QUFNWDFPLFVBQVEsRUFBUkEsUUFOVztBQU9YSyxhQUFXLEVBQVhBLFdBUFc7QUFRWDRILFlBQVUsRUFBVkE7QUFSVyxDQUFiO0FBV0E7QUFXZTlSLG1FQUFmLEUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgYXJjU2xpZGVycyA9IFtdXG5cbmNsYXNzIEFyY1NsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogMCxcbiAgICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9wdGlvbnMub25DaGFuZ2VcbiAgICBhcmNTbGlkZXJzLnB1c2godGhpcylcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgKVxuXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lfHwwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxufVxuXG5leHBvcnQgeyBhcmNTbGlkZXJzLCBBcmNTbGlkZXIgfVxuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IGNoYXJ0cyA9IFtdXG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICBjb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbiAgfVxuICBjb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gICAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgICAgc3RyID0gJzAnICsgc3RyXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHJldHVybiAnIycgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSlcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgdG91Y2hSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGJvdW5kQW5nbGU6IE1hdGguUEkgLyA5LFxuICAgICAgZmlsbFN0eWxlczogdXRpbC5yYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHV0aWwucmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4ge1xuICAgICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgICB9KSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY2hhcnRzLnB1c2godGhpcylcbiAgICB0aGlzLm9uRHJhdyA9IHRoaXMub3B0aW9ucy5vbkRyYXcgfHwgZnVuY3Rpb24oKSB7fVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5pbml0U2VsZWN0KClcbiAgICB9XG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGluaXRTZWxlY3QoKSB7XG4gICAgdGhpcy5zZXRBY3RpdmVBcmMoLTEpXG5cbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgKGUpID0+IHtcbiAgICAgIGxldCBwb2ludCA9IG5ldyBQb2ludChcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFgsXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgICApXG5cbiAgICAgIGlmICghdGhpcy5jYW52YXNPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNPZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5jYW52YXMpXG4gICAgICB9XG5cbiAgICAgIHBvaW50ID0gcG9pbnQuc3ViKHRoaXMuY2FudmFzT2Zmc2V0KVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEFyY09uUG9pbnQocG9pbnQpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQXJjKCh0aGlzLmFjdGl2ZUFyY0luZGV4ICE9PSBpbmRleCkgPyBpbmRleCA6IC0xKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVuYWJsZUluZGV4ZXNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICAgIGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXModGhpcy5hY3RpdmVBcmNJbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgICAgaWYgKGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vbkRyYXcoKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IEdlb21ldHJ5LmdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuXG5leHBvcnQgeyBjaGFydHMsIENoYXJ0IH1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGFkZENsYXNzLCByZW1vdmVDbGFzc1xufSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiAwMFAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGF1Z21lbnQgPSBmdW5jdGlvbihyZWNlaXZpbmdDbGFzcywgZ2l2aW5nQ2xhc3MpIHtcbiAgICAvKiBvbmx5IHByb3ZpZGUgY2VydGFpbiBtZXRob2RzICovXG4gIGlmIChhcmd1bWVudHNbMl0pIHtcbiAgICBmb3IgKGxldCBpPTIsIGxlbj1hcmd1bWVudHMubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbYXJndW1lbnRzW2ldXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBnaXZpbmdDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgIC8qIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcmVjZWl2aW5nIGNsYXNzIGRvZXNuJ3RcbiAgICAgICAgIGhhdmUgYSBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZSBhcyB0aGUgb25lIGN1cnJlbnRseVxuICAgICAgICAgYmVpbmcgcHJvY2Vzc2VkICovXG4gICAgICBpZiAoIXJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBnaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmF1Z21lbnQoTm9kZUxpc3QsIEFycmF5LCAnZm9yRWFjaCcpXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsImltcG9ydCAnLi9leHBhbmRuYXRpdmUnXG5pbXBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QsIGxpc3RGYWN0b3J5IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5ICB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfSBmcm9tICcuL3NwaWRlcidcbmltcG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9IGZyb20gJy4vYXJjc2xpZGVyJ1xuaW1wb3J0IHsgY2hhcnRzLCBDaGFydCB9IGZyb20gJy4vY2hhcnQnXG5pbXBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfSBmcm9tICcuL2xpc3Rzd2l0Y2hlcidcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLFxuICBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSxcbiAgTGlzdCwgbGlzdEZhY3RvcnksXG4gIHRhcmdldHMsIFRhcmdldCxcbiAgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlLFxuICBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnksXG4gIHNwaWRlcnMsIFNwaWRlcixcbiAgYXJjU2xpZGVycywgQXJjU2xpZGVyLFxuICBjaGFydHMsIENoYXJ0LFxuICBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIsXG4gIHV0aWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgICAgaXNEaXNwbGFjZW1lbnQ6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICBsaXN0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IG1vdmVIYW5kbGVyXG4gICAgY29uc3QgbGlzdCA9IHRoaXNcblxuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRGlzcGxhY2VtZW50KSB7XG4gICAgICBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICBsaXN0Lm9uU3RhcnQoZHJhZ2dhYmxlKVxuICAgICAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKG1vdmVIYW5kbGVyKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSlcbiAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtb3ZlT3JTYXZlKGRyYWdnYWJsZSwgcG9zaXRpb24sIHRpbWUpIHtcbiAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZSh0aGlzLmRyYWdnYWJsZXNbZXhjYW5nZUluZGV4XSwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLm1vdmUoZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2krMV0sIGZpeFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkcmFnZ2FibGUubW92ZShmaXhQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KGRyYWdnYWJsZSkge1xuICAgIGxldCBpXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBmb3IgKGkgPSBjdXJyZW50SW5kZXggKyAxOyBpIDwgc29ydGVkRHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpIC0gMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICB9XG4gICAgc29ydGVkRHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLmZpeFBvc2l0aW9uID0gZml4UG9zaXRpb25zW2kgLSAxXVxuICB9XG5cbiAgZ2V0Q3VycmVudEZpeFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IGluaXRQb3NpdGlvbnMubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pKVswXVxuICAgIH0pXG5cbiAgICByZXR1cm4gc29ydGVkRHJhZ2dhYmxlc1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5yZXNldCgpXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlc2V0KCkgLy90b2RvIHJlbW92ZSByZXNldCBpbiBmdXR1cmVcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0cywgTGlzdCwgbGlzdEZhY3RvcnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL2xpc3QnXG5cbmNsYXNzIExpc3RTd2l0Y2hlciBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgb3B0aW9ucy5zdGVwT24gPSBvcHRpb25zLnN0ZXBPbiB8fCBuZXcgUG9pbnQoLTUwLCAwKVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5pc09uID0gZmFsc2VcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5maXhUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlVG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbW92ZURyYWdnYWJsZShpbmRleCwgcG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW2ZpeE9mZlBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbildXG4gICAgY29uc3QgaXNPbiA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQocG9zaXRpb25zLCBwb3NpdGlvbiwgLTEsIEdlb21ldHJ5LmdldFhEaWZmZXJlbmNlKVxuXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiAhPT0gISFpc09uKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSAhIWlzT25cbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKHBvc2l0aW9uc1tpc09uXSwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGZpeFRvT2ZmKGluZGV4LCBmaXhPZmZQb3NpdGlvbikge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5maXhQb3NpdGlvbiA9IGZpeE9mZlBvc2l0aW9uXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlVG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUoZml4T2ZmUG9zaXRpb24sIHRpbWUsIHRydWUpXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuaXNPbiA/IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5zdWIodGhpcy5vcHRpb25zLnN0ZXBPbikgOiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgIH0sIHRoaXMpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSB8fCBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICAgIHBvc2l0aW9uLmlzT24gPSBkcmFnZ2FibGUuaXNPblxuICAgICAgcmV0dXJuIHBvc2l0aW9uXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0uaXNPbiA9IHBvaW50LmlzT25cbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RTd2l0Y2hlckZhY3RvcnkoZWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IGxpc3RPcHRpb25zID0gb3B0aW9ucy5saXN0IHx8IHt9XG5cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBlbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgTGlzdFN3aXRjaGVyKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IHNwaWRlcnMgPSBbXVxuXG5jbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHNwaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuXG5leHBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfVxuIiwiaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgcmVtb3ZlSXRlbSxcbiAgcmFuZ2Vcbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgdGFyZ2V0cyA9IFtdLFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICB9XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0YXJnZXRzLnB1c2godGhpcylcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuICAgIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbihzdW0sIHJ1bGUpIHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuY29uc3QgdXRpbCA9IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIHJhbmdlLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=
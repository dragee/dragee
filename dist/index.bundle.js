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
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, targets, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, bound, spiders, Spider, arcSliders, ArcSlider, charts, Chart, listSwitcherFactory, ListSwitcher, util */
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

/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bound", function() { return _bound__WEBPACK_IMPORTED_MODULE_7__["bound"]; });

/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spider */ "./src/spider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spiders", function() { return _spider__WEBPACK_IMPORTED_MODULE_8__["spiders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return _spider__WEBPACK_IMPORTED_MODULE_8__["Spider"]; });

/* harmony import */ var _arcslider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arcslider */ "./src/arcslider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcSliders", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_9__["arcSliders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_9__["ArcSlider"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return _chart__WEBPACK_IMPORTED_MODULE_10__["charts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_10__["Chart"]; });

/* harmony import */ var _listswitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listswitcher */ "./src/listswitcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_11__["listSwitcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_11__["ListSwitcher"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_12__["default"]; });
















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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2NyZWF0ZWNhbnZhcy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZHJhZ2dhYmxlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXhwYW5kbmF0aXZlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2xpc3Rzd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvcG9zaXRpb25pbmcuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zcGlkZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJhcmNTbGlkZXJzIiwiQXJjU2xpZGVyIiwiYXJlYSIsImVsZW1lbnQiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwicmFkaXVzIiwiZ2V0TWluU2lkZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbmRBbmdsZSIsImFuZ2xlcyIsIm9uQ2hhbmdlIiwidGltZSIsInNoaWZ0ZWRDZW50ZXIiLCJzdWIiLCJwdXNoIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsImlzVG91Y2giLCJ3aW5kb3ciLCJjaGFydHMiLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInV0aWwiLCJyYW5nZSIsIm1hcCIsImluaXRBbmdsZXMiLCJ0b1JhZGlhbiIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJpc1NlbGVjdGFibGUiLCJvbkRyYXciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYWdnYWJsZXMiLCJpIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImltZyIsIkFycmF5IiwiaGVpZ2h0IiwiYWRkIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXQiLCJqIiwiZW5hYmxlIiwic2V0U3R5bGUiLCJzdHlsZSIsImNzc1RleHQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwicmVjdGFnbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0QXR0cmlidXRlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiRHJhZ2VlIiwiRXZlbnQiLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwicHJldmVudERvdWJsZUluaXQiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsImF1Z21lbnQiLCJyZWNlaXZpbmdDbGFzcyIsImdpdmluZ0NsYXNzIiwibGVuIiwibWV0aG9kTmFtZSIsIk5vZGVMaXN0IiwicCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDQiLCJvciIsInJlY3QiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZ3Jvd3RoIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyUG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwicGFyc2VJbnQiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwibGlzdHMiLCJMaXN0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwiaXNEaXNwbGFjZW1lbnQiLCJpbml0RHJhZ2dhYmxlIiwibW92ZUhhbmRsZXIiLCJsaXN0Iiwib25FbmREaXNwbGF5Y2VtZW50IiwiZml4UG9zaXRpb25zIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uIiwiY3VycmVudEluZGV4IiwiZXhjYW5nZUluZGV4IiwibW92ZU9yU2F2ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXgiLCJpbml0UG9zaXRpb25zIiwiY29uY2F0IiwicmVtb3ZlSXRlbSIsImRlc3Ryb3kiLCJwb3NpdGlvbnMiLCJsaXN0RmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJMaXN0U3dpdGNoZXIiLCJzdGVwT24iLCJpc09uIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZiIsIm1vdmVEcmFnZ2FibGUiLCJmaXhUb09mZiIsIm1vdmVEcmFnZ2FibGVUb09mZiIsImZpeE9mZlBvc2l0aW9uIiwibGlzdFN3aXRjaGVyRmFjdG9yeSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInNwaWRlcnMiLCJTcGlkZXIiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsInN0b3AiLCJzdGVwIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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Z0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBL2UsU0FBTyxDQUFDa2YsU0FBUixHQUFvQmxmLE9BQU8sQ0FBQ2tmLFNBQVIsQ0FBa0J2USxPQUFsQixDQUEwQnFRLEVBQTFCLEVBQThCLElBQTlCLEVBQW9DclEsT0FBcEMsQ0FBNEMsTUFBNUMsRUFBb0QsR0FBcEQsRUFBeURBLE9BQXpELENBQWlFLFVBQWpFLEVBQTZFLEVBQTdFLENBQXBCO0FBQ0Q7O0FBRUQsU0FBUzBKLFVBQVQsQ0FBb0I4RyxLQUFwQixFQUEyQmhMLEdBQTNCLEVBQWdDO0FBQzlCLE9BQUssSUFBSTlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4WCxLQUFLLENBQUNwWixNQUExQixFQUFrQ3NCLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSThYLEtBQUssQ0FBQzlYLENBQUQsQ0FBTCxLQUFhOE0sR0FBakIsRUFBc0I7QUFDcEJnTCxXQUFLLENBQUM5TixNQUFOLENBQWFoSyxDQUFiLEVBQWdCLENBQWhCO0FBQ0FBLE9BQUM7QUFDRjtBQUNGOztBQUNELFNBQU84WCxLQUFQO0FBQ0Q7O0FBRUQsSUFBTTVZLElBQUksR0FBRztBQUNYdUcsa0JBQWdCLEVBQWhCQSxnQkFEVztBQUVYd0QsY0FBWSxFQUFaQSxZQUZXO0FBR1h5Rix3QkFBc0IsRUFBdEJBLHNCQUhXO0FBSVh2UCxPQUFLLEVBQUxBLEtBSlc7QUFLWHNZLFVBQVEsRUFBUkEsUUFMVztBQU1YMU8sVUFBUSxFQUFSQSxRQU5XO0FBT1hLLGFBQVcsRUFBWEEsV0FQVztBQVFYNEgsWUFBVSxFQUFWQTtBQVJXLENBQWI7QUFXQTtBQVdlOVIsbUVBQWYsRSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBhcmNTbGlkZXJzID0gW11cblxuY2xhc3MgQXJjU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub3B0aW9ucy5vbkNoYW5nZVxuICAgIGFyY1NsaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZDogYm91bmQsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWV8fDAsIHRydWUsIHRydWUpXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxuICB9XG59XG5cbmV4cG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgY2hhcnRzID0gW11cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiB1dGlsLnJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogdXRpbC5yYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICAgIHJldHVybiBHZW9tZXRyeS50b1JhZGlhbihhbmdsZSlcbiAgICAgIH0pLFxuICAgICAgbGltaXRJbWc6IG51bGwsXG4gICAgICBsaW1pdEltZ09mZnNldDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgaXNTZWxlY3RhYmxlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjaGFydHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25EcmF3ID0gdGhpcy5vcHRpb25zLm9uRHJhdyB8fCBmdW5jdGlvbigpIHt9XG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmluaXRTZWxlY3QoKVxuICAgIH1cbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgaW5pdFNlbGVjdCgpIHtcbiAgICB0aGlzLnNldEFjdGl2ZUFyYygtMSlcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCAoZSkgPT4ge1xuICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFlcbiAgICAgIClcblxuICAgICAgaWYgKCF0aGlzLmNhbnZhc09mZnNldCkge1xuICAgICAgICB0aGlzLmNhbnZhc09mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmNhbnZhcylcbiAgICAgIH1cblxuICAgICAgcG9pbnQgPSBwb2ludC5zdWIodGhpcy5jYW52YXNPZmZzZXQpXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0QXJjT25Qb2ludChwb2ludClcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVBcmMoKHRoaXMuYWN0aXZlQXJjSW5kZXggIT09IGluZGV4KSA/IGluZGV4IDogLTEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZW5hYmxlSW5kZXhlc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgICAgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyh0aGlzLmFjdGl2ZUFyY0luZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgICBpZiAoZW5hYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uRHJhdygpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG5cbmV4cG9ydCB7IGNoYXJ0cywgQ2hhcnQgfVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogYm91bmRUb0VsZW1lbnQocGFyZW50LCBwYXJlbnQpLFxuICAgICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNDb250ZW50Qm94U2l6ZTogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkVuZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcywgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuICAgIHRoaXMub25Nb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIHRoaXMub25FbmQuYWRkKCgpID0+IHRoaXMubW92ZSh0aGlzLnBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKSlcblxuICAgIGlmIChvcHRpb25zLm9uRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kLmFkZChvcHRpb25zLm9uRW5kKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vbk1vdmUpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmFkZChvcHRpb25zLm9uTW92ZSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0LmFkZChvcHRpb25zLm9uU3RhcnQpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kXG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUub25DcmVhdGUuZmlyZSh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICB0aGlzLl9kcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcylcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgcmVpbml0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKF9yZWNhbHVsYXRlKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgpJ1xuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzRml4PWZhbHNlLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGlmIChpc0ZpeCkge1xuICAgICAgdGhpcy5maXhQb3NpdGlvbiA9IHBvaW50XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdGltZSArICdtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLm9uTW92ZS5maXJlKClcbiAgICB9XG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIHNldFplcm9UcmFuc2l0aW9uKCkge1xuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZHJhZ2dhYmxlcywgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqIDAwUCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgYXVnbWVudCA9IGZ1bmN0aW9uKHJlY2VpdmluZ0NsYXNzLCBnaXZpbmdDbGFzcykge1xuICAgIC8qIG9ubHkgcHJvdmlkZSBjZXJ0YWluIG1ldGhvZHMgKi9cbiAgaWYgKGFyZ3VtZW50c1syXSkge1xuICAgIGZvciAobGV0IGk9MiwgbGVuPWFyZ3VtZW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIGdpdmluZ0NsYXNzLnByb3RvdHlwZSkge1xuICAgICAgLyogY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSByZWNlaXZpbmcgY2xhc3MgZG9lc24ndFxuICAgICAgICAgaGF2ZSBhIG1ldGhvZCBvZiB0aGUgc2FtZSBuYW1lIGFzIHRoZSBvbmUgY3VycmVudGx5XG4gICAgICAgICBiZWluZyBwcm9jZXNzZWQgKi9cbiAgICAgIGlmICghcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYXVnbWVudChOb2RlTGlzdCwgQXJyYXksICdmb3JFYWNoJylcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiaW1wb3J0ICcuL2V4cGFuZG5hdGl2ZSdcbmltcG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgIH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9IGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH0gZnJvbSAnLi9hcmNzbGlkZXInXG5pbXBvcnQgeyBjaGFydHMsIENoYXJ0IH0gZnJvbSAnLi9jaGFydCdcbmltcG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9IGZyb20gJy4vbGlzdHN3aXRjaGVyJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgeyBEcmFnZ2FibGUsXG4gIFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5LFxuICBMaXN0LCBsaXN0RmFjdG9yeSxcbiAgdGFyZ2V0cywgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUsXG4gIHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSxcbiAgYm91bmQsXG4gIHNwaWRlcnMsIFNwaWRlcixcbiAgYXJjU2xpZGVycywgQXJjU2xpZGVyLFxuICBjaGFydHMsIENoYXJ0LFxuICBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIsXG4gIHV0aWxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgICAgaXNEaXNwbGFjZW1lbnQ6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICBsaXN0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IG1vdmVIYW5kbGVyXG4gICAgY29uc3QgbGlzdCA9IHRoaXNcblxuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRGlzcGxhY2VtZW50KSB7XG4gICAgICBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICBsaXN0Lm9uU3RhcnQoZHJhZ2dhYmxlKVxuICAgICAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKG1vdmVIYW5kbGVyKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSlcbiAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtb3ZlT3JTYXZlKGRyYWdnYWJsZSwgcG9zaXRpb24sIHRpbWUpIHtcbiAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZSh0aGlzLmRyYWdnYWJsZXNbZXhjYW5nZUluZGV4XSwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLm1vdmUoZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2krMV0sIGZpeFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkcmFnZ2FibGUubW92ZShmaXhQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KGRyYWdnYWJsZSkge1xuICAgIGxldCBpXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBmb3IgKGkgPSBjdXJyZW50SW5kZXggKyAxOyBpIDwgc29ydGVkRHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpIC0gMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICB9XG4gICAgc29ydGVkRHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLmZpeFBvc2l0aW9uID0gZml4UG9zaXRpb25zW2kgLSAxXVxuICB9XG5cbiAgZ2V0Q3VycmVudEZpeFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IGluaXRQb3NpdGlvbnMubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pKVswXVxuICAgIH0pXG5cbiAgICByZXR1cm4gc29ydGVkRHJhZ2dhYmxlc1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5yZXNldCgpXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlc2V0KCkgLy90b2RvIHJlbW92ZSByZXNldCBpbiBmdXR1cmVcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0cywgTGlzdCwgbGlzdEZhY3RvcnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL2xpc3QnXG5cbmNsYXNzIExpc3RTd2l0Y2hlciBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgb3B0aW9ucy5zdGVwT24gPSBvcHRpb25zLnN0ZXBPbiB8fCBuZXcgUG9pbnQoLTUwLCAwKVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5pc09uID0gZmFsc2VcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5maXhUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlVG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbW92ZURyYWdnYWJsZShpbmRleCwgcG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW2ZpeE9mZlBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbildXG4gICAgY29uc3QgaXNPbiA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQocG9zaXRpb25zLCBwb3NpdGlvbiwgLTEsIEdlb21ldHJ5LmdldFhEaWZmZXJlbmNlKVxuXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiAhPT0gISFpc09uKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSAhIWlzT25cbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKHBvc2l0aW9uc1tpc09uXSwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGZpeFRvT2ZmKGluZGV4LCBmaXhPZmZQb3NpdGlvbikge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5maXhQb3NpdGlvbiA9IGZpeE9mZlBvc2l0aW9uXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlVG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUoZml4T2ZmUG9zaXRpb24sIHRpbWUsIHRydWUpXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuaXNPbiA/IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5zdWIodGhpcy5vcHRpb25zLnN0ZXBPbikgOiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgIH0sIHRoaXMpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSB8fCBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICAgIHBvc2l0aW9uLmlzT24gPSBkcmFnZ2FibGUuaXNPblxuICAgICAgcmV0dXJuIHBvc2l0aW9uXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0uaXNPbiA9IHBvaW50LmlzT25cbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RTd2l0Y2hlckZhY3RvcnkoZWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IGxpc3RPcHRpb25zID0gb3B0aW9ucy5saXN0IHx8IHt9XG5cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBlbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgTGlzdFN3aXRjaGVyKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IHNwaWRlcnMgPSBbXVxuXG5jbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHNwaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuXG5leHBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfVxuIiwiaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgcmVtb3ZlSXRlbSxcbiAgcmFuZ2Vcbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgdGFyZ2V0cyA9IFtdLFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICB9XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0YXJnZXRzLnB1c2godGhpcylcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuICAgIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbihzdW0sIHJ1bGUpIHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuY29uc3QgdXRpbCA9IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIHJhbmdlLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=
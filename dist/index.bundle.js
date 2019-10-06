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
/* harmony import */ var _utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createcanvas */ "./src/utils/createcanvas.js");
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

      this.canvas = Object(_utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.area, this.areaRectangle);
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
      var canvas = Object(_utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(element, rectangle);
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc3BpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NyZWF0ZWNhbnZhcy5qcyJdLCJuYW1lcyI6WyJhcmNTbGlkZXJzIiwiQXJjU2xpZGVyIiwiYXJlYSIsImVsZW1lbnQiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwicmFkaXVzIiwiZ2V0TWluU2lkZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbmRBbmdsZSIsImFuZ2xlcyIsIm9uQ2hhbmdlIiwidGltZSIsInNoaWZ0ZWRDZW50ZXIiLCJzdWIiLCJwdXNoIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsImlzVG91Y2giLCJ3aW5kb3ciLCJjaGFydHMiLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInV0aWwiLCJyYW5nZSIsIm1hcCIsImluaXRBbmdsZXMiLCJ0b1JhZGlhbiIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJpc1NlbGVjdGFibGUiLCJvbkRyYXciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYWdnYWJsZXMiLCJpIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImltZyIsIkFycmF5IiwiaGVpZ2h0IiwiYWRkIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXQiLCJqIiwiZW5hYmxlIiwiRHJhZ2VlIiwiRXZlbnQiLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwicHJldmVudERvdWJsZUluaXQiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwidGVzdCIsInJlcGxhY2UiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsImlkZW50aWZpZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwic3BsaWNlIiwiX2YiLCJhdWdtZW50IiwicmVjZWl2aW5nQ2xhc3MiLCJnaXZpbmdDbGFzcyIsImxlbiIsIm1ldGhvZE5hbWUiLCJOb2RlTGlzdCIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0Iiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImdyb3d0aCIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhclBvaW50IiwiYXJyIiwidmFsIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJsaXN0cyIsIkxpc3QiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJpc0Rpc3BsYWNlbWVudCIsImluaXREcmFnZ2FibGUiLCJtb3ZlSGFuZGxlciIsImxpc3QiLCJvbkVuZERpc3BsYXljZW1lbnQiLCJmaXhQb3NpdGlvbnMiLCJnZXRDdXJyZW50Rml4UG9zaXRpb24iLCJjdXJyZW50SW5kZXgiLCJleGNhbmdlSW5kZXgiLCJtb3ZlT3JTYXZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleCIsImluaXRQb3NpdGlvbnMiLCJjb25jYXQiLCJyZW1vdmVJdGVtIiwiZGVzdHJveSIsInBvc2l0aW9ucyIsImxpc3RGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZU9wdGlvbnMiLCJsaXN0T3B0aW9ucyIsIkxpc3RTd2l0Y2hlciIsInN0ZXBPbiIsImlzT24iLCJnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmIiwibW92ZURyYWdnYWJsZSIsImZpeFRvT2ZmIiwibW92ZURyYWdnYWJsZVRvT2ZmIiwiZml4T2ZmUG9zaXRpb24iLCJsaXN0U3dpdGNoZXJGYWN0b3J5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJyZWR1Y2UiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwidGFyZ2V0RWxlbWVudHMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwic3BpZGVycyIsIlNwaWRlciIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJ0b3VjaElkIiwicnVsZXMiLCJzdW0iLCJydWxlIiwic3RvcCIsInN0ZXAiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsImNsYXNzTmFtZSIsImFycmF5Iiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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QUFzQztBQUNuRCxNQUFNalksTUFBTSxHQUFHa0ksUUFBUSxDQUFDZ1EsYUFBVCxDQUF1QixRQUF2QixDQUFmOztBQUNBLE1BQUk3WixNQUFNLENBQUM2UCxnQkFBUCxDQUF3Qm5WLElBQXhCLEVBQThCMkIsUUFBOUIsS0FBMkMsUUFBL0MsRUFBeUQ7QUFDdkQzQixRQUFJLENBQUNvTixLQUFMLENBQVd6TCxRQUFYLEdBQXNCLFVBQXRCO0FBQ0Q7O0FBRURzRixRQUFNLENBQUNtWSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCRixRQUFRLENBQUN2YyxJQUFULENBQWNLLENBQWQsR0FBa0IsSUFBL0M7QUFDQWlFLFFBQU0sQ0FBQ21ZLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJGLFFBQVEsQ0FBQ3ZjLElBQVQsQ0FBY00sQ0FBZCxHQUFrQixJQUFoRDtBQUNBd2IsVUFBUSxDQUFDeFgsTUFBRCxFQUFTO0FBQ2Z0RixZQUFRLEVBQUUsVUFESztBQUVmMlEsUUFBSSxFQUFFNE0sUUFBUSxDQUFDdmQsUUFBVCxDQUFrQnNCLENBQWxCLEdBQXNCLElBRmI7QUFHZnNQLE9BQUcsRUFBRTJNLFFBQVEsQ0FBQ3ZkLFFBQVQsQ0FBa0JzQixDQUFsQixHQUFzQixJQUhaO0FBSWZ1UCxTQUFLLEVBQUUwTSxRQUFRLENBQUN2YyxJQUFULENBQWNLLENBQWQsR0FBa0IsSUFKVjtBQUtmaUgsVUFBTSxFQUFFaVYsUUFBUSxDQUFDdmMsSUFBVCxDQUFjTSxDQUFkLEdBQWtCO0FBTFgsR0FBVCxDQUFSO0FBT0E0YixrQkFBZ0IsQ0FBQzdlLElBQUQsRUFBT2lILE1BQVAsQ0FBaEI7QUFDQSxTQUFPQSxNQUFQO0FBQ0QsQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBhcmNTbGlkZXJzID0gW11cblxuY2xhc3MgQXJjU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub3B0aW9ucy5vbkNoYW5nZVxuICAgIGFyY1NsaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZDogYm91bmQsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWV8fDAsIHRydWUsIHRydWUpXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxuICB9XG59XG5cbmV4cG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgY2hhcnRzID0gW11cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiB1dGlsLnJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogdXRpbC5yYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICAgIHJldHVybiBHZW9tZXRyeS50b1JhZGlhbihhbmdsZSlcbiAgICAgIH0pLFxuICAgICAgbGltaXRJbWc6IG51bGwsXG4gICAgICBsaW1pdEltZ09mZnNldDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgaXNTZWxlY3RhYmxlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjaGFydHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25EcmF3ID0gdGhpcy5vcHRpb25zLm9uRHJhdyB8fCBmdW5jdGlvbigpIHt9XG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmluaXRTZWxlY3QoKVxuICAgIH1cbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgaW5pdFNlbGVjdCgpIHtcbiAgICB0aGlzLnNldEFjdGl2ZUFyYygtMSlcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCAoZSkgPT4ge1xuICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFlcbiAgICAgIClcblxuICAgICAgaWYgKCF0aGlzLmNhbnZhc09mZnNldCkge1xuICAgICAgICB0aGlzLmNhbnZhc09mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmNhbnZhcylcbiAgICAgIH1cblxuICAgICAgcG9pbnQgPSBwb2ludC5zdWIodGhpcy5jYW52YXNPZmZzZXQpXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0QXJjT25Qb2ludChwb2ludClcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVBcmMoKHRoaXMuYWN0aXZlQXJjSW5kZXggIT09IGluZGV4KSA/IGluZGV4IDogLTEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZW5hYmxlSW5kZXhlc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgICAgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyh0aGlzLmFjdGl2ZUFyY0luZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgICBpZiAoZW5hYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uRHJhdygpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG5cbmV4cG9ydCB7IGNoYXJ0cywgQ2hhcnQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogYm91bmRUb0VsZW1lbnQocGFyZW50LCBwYXJlbnQpLFxuICAgICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNDb250ZW50Qm94U2l6ZTogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkVuZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcywgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuICAgIHRoaXMub25Nb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIHRoaXMub25FbmQuYWRkKCgpID0+IHRoaXMubW92ZSh0aGlzLnBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKSlcblxuICAgIGlmIChvcHRpb25zLm9uRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kLmFkZChvcHRpb25zLm9uRW5kKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vbk1vdmUpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmFkZChvcHRpb25zLm9uTW92ZSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0LmFkZChvcHRpb25zLm9uU3RhcnQpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kXG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUub25DcmVhdGUuZmlyZSh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICB0aGlzLl9kcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcylcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgcmVpbml0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKF9yZWNhbHVsYXRlKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgpJ1xuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzRml4PWZhbHNlLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGlmIChpc0ZpeCkge1xuICAgICAgdGhpcy5maXhQb3NpdGlvbiA9IHBvaW50XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdGltZSArICdtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLm9uTW92ZS5maXJlKClcbiAgICB9XG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIHNldFplcm9UcmFuc2l0aW9uKCkge1xuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZHJhZ2dhYmxlcywgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqIDAwUCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgYXVnbWVudCA9IGZ1bmN0aW9uKHJlY2VpdmluZ0NsYXNzLCBnaXZpbmdDbGFzcykge1xuICAgIC8qIG9ubHkgcHJvdmlkZSBjZXJ0YWluIG1ldGhvZHMgKi9cbiAgaWYgKGFyZ3VtZW50c1syXSkge1xuICAgIGZvciAobGV0IGk9MiwgbGVuPWFyZ3VtZW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIGdpdmluZ0NsYXNzLnByb3RvdHlwZSkge1xuICAgICAgLyogY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSByZWNlaXZpbmcgY2xhc3MgZG9lc24ndFxuICAgICAgICAgaGF2ZSBhIG1ldGhvZCBvZiB0aGUgc2FtZSBuYW1lIGFzIHRoZSBvbmUgY3VycmVudGx5XG4gICAgICAgICBiZWluZyBwcm9jZXNzZWQgKi9cbiAgICAgIGlmICghcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYXVnbWVudChOb2RlTGlzdCwgQXJyYXksICdmb3JFYWNoJylcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiaW1wb3J0ICcuL2V4cGFuZG5hdGl2ZSdcbmltcG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgIH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9IGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH0gZnJvbSAnLi9hcmNzbGlkZXInXG5pbXBvcnQgeyBjaGFydHMsIENoYXJ0IH0gZnJvbSAnLi9jaGFydCdcbmltcG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9IGZyb20gJy4vbGlzdHN3aXRjaGVyJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgeyBEcmFnZ2FibGUsXG4gIFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5LFxuICBMaXN0LCBsaXN0RmFjdG9yeSxcbiAgdGFyZ2V0cywgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUsXG4gIHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSxcbiAgc3BpZGVycywgU3BpZGVyLFxuICBhcmNTbGlkZXJzLCBBcmNTbGlkZXIsXG4gIGNoYXJ0cywgQ2hhcnQsXG4gIGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlcixcbiAgdXRpbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGxpc3RzID0gW11cblxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBnZXREaXN0YW5jZTogR2VvbWV0cnkuZ2V0RGlzdGFuY2UsXG4gICAgICBpc0Rpc3BsYWNlbWVudDogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIGxpc3RzLnB1c2godGhpcylcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBsZXQgbW92ZUhhbmRsZXJcbiAgICBjb25zdCBsaXN0ID0gdGhpc1xuXG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNEaXNwbGFjZW1lbnQpIHtcbiAgICAgIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICAgIGxpc3Qub25TdGFydChkcmFnZ2FibGUpXG4gICAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUobW92ZUhhbmRsZXIpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKVxuICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPclNhdmUoZHJhZ2dhYmxlLCBwb3NpdGlvbiwgdGltZSkge1xuICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWUsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0ubW92ZShmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgb25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaSsxXSwgZml4UG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGZpeFBvc2l0aW9uc1t0YXJnZXRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGlcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGZvciAoaSA9IGN1cnJlbnRJbmRleCArIDE7IGkgPCBzb3J0ZWREcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2kgLSAxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIH1cbiAgICBzb3J0ZWREcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0uZml4UG9zaXRpb24gPSBmaXhQb3NpdGlvbnNbaSAtIDFdXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLnJlc2V0KClcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVzZXQoKSAvL3RvZG8gcmVtb3ZlIHJlc2V0IGluIGZ1dHVyZVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uICE9PSBpbml0UG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLm1vdmUoaW5pdFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0UG9zaXRpb24gPSBpbml0UG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY2xhc3MgTGlzdFN3aXRjaGVyIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmZpeFRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdmVEcmFnZ2FibGVUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlKGluZGV4LCBwb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbZml4T2ZmUG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKV1cbiAgICBjb25zdCBpc09uID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChwb3NpdGlvbnMsIHBvc2l0aW9uLCAtMSwgR2VvbWV0cnkuZ2V0WERpZmZlcmVuY2UpXG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uICE9PSAhIWlzT24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9ICEhaXNPblxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUocG9zaXRpb25zW2lzT25dLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZml4VG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmZpeFBvc2l0aW9uID0gZml4T2ZmUG9zaXRpb25cbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGVUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShmaXhPZmZQb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5pc09uID8gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLnN1Yih0aGlzLm9wdGlvbnMuc3RlcE9uKSA6IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pIHx8IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgICAgcG9zaXRpb24uaXNPbiA9IGRyYWdnYWJsZS5pc09uXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5pc09uID0gcG9pbnQuaXNPblxuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFN3aXRjaGVyRmFjdG9yeShlbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cblxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IGVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgeyByZW1vdmVJdGVtIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uRW5kLnVuc2hpZnQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGVjYW52YXMnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBib3VuZFRvTGluZSB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3Qgc3BpZGVycyA9IFtdXG5cbmNsYXNzIFNwaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICBzdGFydFJhZGl1czogNTAsXG4gICAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgc3BpZGVycy5wdXNoKHRoaXMpXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBzdGFydCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBlbmQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0xpbmUoc3RhcnQsIGVuZClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG5cbmV4cG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9XG4iLCJpbXBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICByZW1vdmVJdGVtLFxuICByYW5nZVxufSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBwb3NpdGlvblR5cGUsICBwb3NpdGlvbkZhY3RvcnksIHNvcnRpbmdGYWN0b3J5LCBzY29wZXMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCB0YXJnZXRzID0gW10sXG4gIGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gIH1cblxuY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc29ydGluZzogRHJhZ2VlLnNvcnRpbmdGYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSg4MCwgR2VvbWV0cnkudHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSkpLFxuICAgICAgcG9zaXRpb25pbmc6IERyYWdlZS5wb3NpdGlvbkZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksIHsgcmVtb3ZhYmxlOiB0cnVlIH0pXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRhcmdldHMucHVzaCh0aGlzKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMuYmVmb3JlQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICBpZiAob3B0aW9ucy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5vblJlbW92ZS5hZGQob3B0aW9ucy5vblJlbW92ZSlcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5vbkFkZCkge1xuICAgICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICAgIHRoaXMuYmVmb3JlQWRkLmFkZChvcHRpb25zLmJlZm9yZUFkZClcbiAgICB9XG5cbiAgICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIERyYWdlZS5zY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHN1bSwgcnVsZSkge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuXG5jb25zdCB1dGlsID0ge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIHJhbmdlLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXRpbFxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
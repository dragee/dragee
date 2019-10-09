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
/* harmony import */ var _utils_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/range */ "./src/utils/range.js");
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
      fillStyles: Object(_utils_range__WEBPACK_IMPORTED_MODULE_1__["default"])(0, elements.length).map(function () {
        return randomColor();
      }),
      initAngles: Object(_utils_range__WEBPACK_IMPORTED_MODULE_1__["default"])(-90, 270, 360 / elements.length).map(function (angle) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvcG9zaXRpb25pbmcuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NyZWF0ZWNhbnZhcy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvcmFuZ2UuanMiXSwibmFtZXMiOlsiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJwb3NpdGlvbiIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJlbGVtZW50IiwicGFyZW50IiwicmV0RnVuYyIsImJvdW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiTWF0aCIsImF0YW4yIiwiYmV0YSIsIlBJIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJlbmRBbmdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYW5nbGUiLCJnZXRBbmdsZSIsIm5vcm1hbGl6ZUFuZ2xlIiwiYm91bmRBbmdsZSIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImlzVG91Y2giLCJ3aW5kb3ciLCJjaGFydHMiLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwicHVzaCIsIkNoYXJ0IiwiYXJlYSIsImVsZW1lbnRzIiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRDZW50ZXIiLCJnZXRNaW5TaWRlIiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwicmFuZ2UiLCJtYXAiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwib25EcmF3IiwiaW5pdCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhZ2dhYmxlcyIsImkiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0Iiwic3ViIiwiZ2V0Qm91bmRBbmdsZSIsIkRyYWdnYWJsZSIsIm9uTW92ZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImFuZ2xlcyIsImRyYWdnYWJsZSIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsInN0YXJ0QW5nbGUiLCJjb2xvciIsImdldEZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJpbWciLCJBcnJheSIsImhlaWdodCIsImFkZCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInNldFRyYW5zZm9ybSIsInNsaWNlIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsIm1vdmUiLCJlbmFibGUiLCJEcmFnZWUiLCJFdmVudCIsIm1vdXNlRXZlbnRzIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uU3RhcnQiLCJvbkNyZWF0ZSIsImZpcmUiLCJfZW5hYmxlIiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX3JlY2FsdWxhdGUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZnVuY3MiLCJwcm90b3R5cGUiLCJhcmdzIiwiZnMiLCJyZXZlcnNlIiwicmV0VmFsdWUiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsInNwbGljZSIsIl9mIiwicCIsImsiLCJyZWN0IiwibWluIiwibWF4IiwiaW5jbHVkZVBvaW50IiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibGVmdCIsInRvcCIsIndpZHRoIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsInBvc2l0aW9uVHlwZSIsIm5vdENyb3NzaW5nIiwiZmxvYXRMZWZ0IiwiZmxvYXRSaWdodCIsInBvc2l0aW9uRmFjdG9yeSIsInR5cGUiLCJfb3B0aW9ucyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwiYm91bmRSZWN0Iiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJnZXRTcXVhcmUiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsImdldFA0Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtcyIsInRpbWVFbmQiLCJvbkNoYW5nZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJwb3NpdGlvbnMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVFbGVtZW50cyIsInRhcmdldEVsZW1lbnRzIiwiZHJhZ2dhYmxlT3B0aW9ucyIsInRhcmdldE9wdGlvbnMiLCJzY29wZU9wdGlvbnMiLCJ0aW1lRXhjYW5nZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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RCxTQUFPL1MsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBZSxTQUFTMkUsS0FBVCxDQUFlNUQsS0FBZixFQUFzQmlhLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQztBQUMvQyxNQUFNcEgsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxPQUFPbUgsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHamEsS0FBUDtBQUNBQSxTQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELE1BQUksT0FBT2thLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBS0EsSUFBSSxHQUFHLENBQVAsSUFBWWxhLEtBQUssSUFBSWlhLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZbGEsS0FBSyxJQUFJaWEsSUFBekQsRUFBZ0U7QUFDOUQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJdlYsQ0FBQyxHQUFHMUUsS0FBYixFQUFvQmthLElBQUksR0FBRyxDQUFQLEdBQVd4VixDQUFDLEdBQUd1VixJQUFmLEdBQXNCdlYsQ0FBQyxHQUFHdVYsSUFBOUMsRUFBb0R2VixDQUFDLElBQUl3VixJQUF6RCxFQUErRDtBQUM3RHBILFVBQU0sQ0FBQzlQLElBQVAsQ0FBWTBCLENBQVo7QUFDRDs7QUFDRCxTQUFPb08sTUFBUDtBQUNELEMiLCJmaWxlIjoiY2hhcnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2hhcnQuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiLyoqXG4gKiBSZW1vdmUgYSByYW5nZSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGZ1bmN0aW9uIHJlbW92ZUl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnIgVGhlIHRhcmdldCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SWR4IFRoZSBpbmRleCB0byBiZWdpbiByZW1vdmluZyBmcm9tIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtb3ZlQ291bnQgSG93IG1hbnkgaXRlbXMgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUl0ZW1zIChhcnIsIHN0YXJ0SWR4LCByZW1vdmVDb3VudCkge1xuICB2YXIgaSwgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICBpZiAoc3RhcnRJZHggPj0gbGVuZ3RoIHx8IHJlbW92ZUNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZW1vdmVDb3VudCA9IChzdGFydElkeCArIHJlbW92ZUNvdW50ID4gbGVuZ3RoID8gbGVuZ3RoIC0gc3RhcnRJZHggOiByZW1vdmVDb3VudCk7XG5cbiAgdmFyIGxlbiA9IGxlbmd0aCAtIHJlbW92ZUNvdW50O1xuXG4gIGZvciAoaSA9IHN0YXJ0SWR4OyBpIDwgbGVuOyArK2kpIHtcbiAgICBhcnJbaV0gPSBhcnJbaSArIHJlbW92ZUNvdW50XTtcbiAgfVxuXG4gIGFyci5sZW5ndGggPSBsZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUl0ZW1zO1xuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgY2hhcnRzID0gW11cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiByYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHJhbmdlKC05MCwgMjcwLCAzNjAgLyBlbGVtZW50cy5sZW5ndGgpLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5LnRvUmFkaWFuKGFuZ2xlKVxuICAgICAgfSksXG4gICAgICBsaW1pdEltZzogbnVsbCxcbiAgICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICBpc1NlbGVjdGFibGU6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNoYXJ0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vbkRyYXcgPSB0aGlzLm9wdGlvbnMub25EcmF3IHx8IGZ1bmN0aW9uKCkge31cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5pbml0QW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuaW5pdFNlbGVjdCgpXG4gICAgfVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBpbml0U2VsZWN0KCkge1xuICAgIHRoaXMuc2V0QWN0aXZlQXJjKC0xKVxuXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIChlKSA9PiB7XG4gICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5jbGllbnRYLFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUuY2xpZW50WVxuICAgICAgKVxuXG4gICAgICBpZiAoIXRoaXMuY2FudmFzT2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzT2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuY2FudmFzKVxuICAgICAgfVxuXG4gICAgICBwb2ludCA9IHBvaW50LnN1Yih0aGlzLmNhbnZhc09mZnNldClcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRBcmNPblBvaW50KHBvaW50KVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUFyYygodGhpcy5hY3RpdmVBcmNJbmRleCAhPT0gaW5kZXgpID8gaW5kZXggOiAtMSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICByZXR1cm4gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLCBkcmFnZ2FibGUucG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGdldEJvdW5kQW5nbGUoaW5kZXgsIGlzQ2xvc3NpbmcpIHtcbiAgICBjb25zdCBzaWduID0gaXNDbG9zc2luZyA/IDEgOiAtMVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldIC0gc2lnbiAqIHRoaXMub3B0aW9ucy5ib3VuZEFuZ2xlKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0FyYyh0aGlzLmNvbnRleHQsIHRoaXMub3B0aW9ucy5jZW50ZXIsIHRoaXMub3B0aW9ucy5yYWRpdXMsIGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBlbmFibGVJbmRleGVzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgICBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKHRoaXMuYWN0aXZlQXJjSW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICAgIGlmIChlbmFibGVJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25EcmF3KClcbiAgfVxuXG4gIGNyZWF0ZUNsb25lKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBlbGVtZW50KVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiByZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhlbGVtZW50LCByZWN0YW5nbGUpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHJlY3RhbmdsZS5zaXplLngsIHJlY3RhbmdsZS5zaXplLnkpXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZU9iai5kcmF3KClcbiAgICByZXR1cm4gY2xvbmVPYmpcbiAgfVxuXG4gIGdldEZpbGxTdHlsZShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdXG4gIH1cblxuICBkcmF3QXJjKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSB0aGlzLmFuZ2xlc1tpbmRleF1cbiAgICBjb25zdCBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSAlIHRoaXMuYW5nbGVzLmxlbmd0aF1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0RmlsbFN0eWxlKGluZGV4KVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlKVxuICAgIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBkcmF3TGltaXRJbWcoaW5kZXgpIHtcbiAgICBsZXQgcG9pbnQsIGltZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICAgIGltZyA9IHRoaXMub3B0aW9ucy5saW1pdEltZyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy5vcHRpb25zLmxpbWl0SW1nW2luZGV4XSA6IHRoaXMub3B0aW9ucy5saW1pdEltZ1xuICAgIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaW5kZXhdKVxuICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54IC8gMiwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSAvIDIpXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0QW5nbGVzRGlmZigpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICAgIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gICAgYW5nbGVzLnB1c2goYmFzZUFuZ2xlKVxuICAgIHJldHVybiBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xuICAgICAgY29uc3QgZGlmZkFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgICAgcmV0dXJuIGRpZmZBbmdsZVxuICAgIH0pXG4gIH1cblxuICBnZXRQZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSkgPT4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKSlcbiAgfVxuXG4gIGdldEFyY0Jpc2VjdHJpeHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICAgIH0pXG4gIH1cblxuICBnZXRBcmNPblBvaW50KHBvaW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgICBjb25zdCByYWRpdXMgPSBHZW9tZXRyeS5nZXREaXN0YW5jZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcblxuICAgIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvZmZzZXQgPT09IC0xIHx8IHRoaXMuYW5nbGVzW29mZnNldF0gPiB0aGlzLmFuZ2xlc1tpXSkge1xuICAgICAgICBvZmZzZXQgPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0taiA8IDApIHtcbiAgICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzZXRBbmdsZXMoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXNcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHNldEFjdGl2ZUFyYyhpbmRleCkge1xuICAgIGNvbnN0IGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cblxuZXhwb3J0IHsgY2hhcnRzLCBDaGFydCB9XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LCBtb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfSwgdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfSxcbiAgZXZlbnRzID0gaXNUb3VjaCA/IHRvdWNoRXZlbnRzIDogbW91c2VFdmVudHMsXG4gIGRyYWdnYWJsZXMgPSBbXSxcbiAgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogYm91bmRUb0VsZW1lbnQocGFyZW50LCBwYXJlbnQpLFxuICAgICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNDb250ZW50Qm94U2l6ZTogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkVuZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcywgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuICAgIHRoaXMub25Nb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIHRoaXMub25FbmQuYWRkKCgpID0+IHRoaXMubW92ZSh0aGlzLnBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKSlcblxuICAgIGlmIChvcHRpb25zLm9uRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kLmFkZChvcHRpb25zLm9uRW5kKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vbk1vdmUpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmFkZChvcHRpb25zLm9uTW92ZSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0LmFkZChvcHRpb25zLm9uU3RhcnQpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kXG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUub25DcmVhdGUuZmlyZSh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICB0aGlzLl9kcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcylcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgcmVpbml0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKF9yZWNhbHVsYXRlKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgpJ1xuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzRml4PWZhbHNlLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGlmIChpc0ZpeCkge1xuICAgICAgdGhpcy5maXhQb3NpdGlvbiA9IHBvaW50XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdGltZSArICdtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLm9uTW92ZS5maXJlKClcbiAgICB9XG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIHNldFplcm9UcmFuc2l0aW9uKCkge1xuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZHJhZ2dhYmxlcywgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cbn1cblxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQobWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludChtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICAgIH0sIDApXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHRoaXMuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQoZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWUoYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uRW5kLnVuc2hpZnQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW1zKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
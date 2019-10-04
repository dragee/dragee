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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");




var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"]
}; //todo remove after refactore

var arcSliders = [];

function ArcSlider(area, element, options) {
  var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(area, area);
  var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5);
  var i;
  this.options = {
    center: areaRectangle.getCenter(),
    radius: areaRectangle.getMinSide() / 2,
    startAngle: Math.PI,
    endAngle: 0,
    angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
    onChange: function onChange() {},
    time: 500
  };

  for (i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i];
    }
  }

  this.shiftedCenter = this.options.center.sub(halfSize);
  this.onChange = this.options.onChange;
  arcSliders.push(this);
  this.area = area;
  this.init(element);
}

ArcSlider.prototype.init = function (element) {
  var that = this,
      angle = this.options.startAngle,
      position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter),
      bound = Dragee.bound.toArc(that.shiftedCenter, that.options.radius, this.options.startAngle, this.options.endAngle);
  this.angle = angle;
  this.draggable = new Dragee.Draggable(element, {
    parent: this.area,
    bound: bound,
    position: position,
    onMove: function onMove() {
      that.change();
      return true;
    }
  });
};

ArcSlider.prototype.updateAngle = function () {
  this.angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getAngle(this.shiftedCenter, this.draggable.position);
};

ArcSlider.prototype.change = function () {
  this.updateAngle(); //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
  //      this.setAngle(angle,this.options.time);

  this.onChange(this.angle);
};

ArcSlider.prototype.setAngle = function (angle, time) {
  var position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
  this.angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(angle, position);
  this.draggable.move(position, time || 0, true, true);
  this.onChange(this.angle);
};



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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");




var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"]
}; //todo remove after refactore

var isTouch = 'ontouchstart' in window;
var charts = [];

function getArrayWithBoundIndexes(index, length) {
  var retIndexes = [];

  if (index !== -1) {
    retIndexes.push(index);
    retIndexes.push((index + 1) % length);
  }

  return retIndexes;
}

function Chart(area, elements, options) {
  var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(area, area);
  var i;
  this.options = {
    center: areaRectangle.getCenter(),
    radius: areaRectangle.getMinSide() / 2,
    touchRadius: areaRectangle.getMinSide() / 2,
    boundAngle: Math.PI / 9,
    fillStyles: Dragee.util.range(0, elements.length).map(function () {
      return Dragee.util.randomColor();
    }),
    initAngles: Dragee.util.range(-90, 270, 360 / elements.length).map(function (angle) {
      return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].toRadian(angle);
    }),
    onDraw: function onDraw() {},
    limitImg: null,
    limitImgOffset: new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](0, 0),
    isSelectable: false
  };

  for (i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i];
    }
  }

  charts.push(this);
  this.onDraw = this.options.onDraw;
  this.area = area;
  this.areaRectangle = areaRectangle;
  this.init(elements);
}

Chart.prototype.init = function (elements) {
  var that = this;
  this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle);
  this.context = this.canvas.getContext('2d');
  this.draggables = elements.map(function (element, i) {
    var angle = this.options.initAngles[i],
        halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5),
        position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.touchRadius, this.options.center.sub(halfSize)),
        bound = Dragee.bound.toArc(that.options.center.sub(halfSize), that.options.touchRadius, that.getBoundAngle(i, false), that.getBoundAngle(i, true));
    return new Dragee.Draggable(element, {
      parent: this.area,
      bound: bound,
      position: position,
      onMove: function onMove() {
        that.draw();
        return true;
      }
    });
  }, this);
  this.isInit = true;

  if (this.options.isSelectable) {
    this.initSelect();
  }

  this.draw();
};

Chart.prototype.initSelect = function () {
  var that = this;
  this.setActiveArc(-1);
  this.canvas.addEventListener(_draggable__WEBPACK_IMPORTED_MODULE_2__["events"].start, function (e) {
    var point = new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](isTouch ? e.changedTouches[0].pageX : e.clientX, isTouch ? e.changedTouches[0].pageY : e.clientY);

    if (!that.canvasOffset) {
      that.canvasOffset = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getOffset(that.canvas);
    }

    point = point.sub(that.canvasOffset);
    var index = that.getArcOnPoint(point);

    if (index !== -1) {
      that.setActiveArc(that.activeArcIndex !== index ? index : -1);
    }
  });
};

Chart.prototype.updateAngles = function () {
  this.angles = this.draggables.map(function (draggable) {
    var halfSize = draggable.getSize().mult(0.5);
    return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getAngle(this.options.center.sub(halfSize), draggable.position);
  }, this);
};

Chart.prototype.getBoundAngle = function (index, isClossing) {
  var that = this,
      sign = isClossing ? 1 : -1;
  return function () {
    var i = (index + sign) % that.angles.length;

    if (i < 0) {
      i += that.angles.length;
    }

    return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(that.angles[i] - sign * that.options.boundAngle);
  };
};

Chart.prototype.draw = function () {
  if (!this.isInit) {
    return;
  }

  this.updateAngles();
  this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
  this.draggables.forEach(function (_draggable, index) {
    this.drawArc(this.context, this.options.center, this.options.radius, index);
  }, this);
  this.draggables.forEach(function (_draggable, index) {
    var enableIndexes;

    if (this.options.isSelectable) {
      enableIndexes = getArrayWithBoundIndexes(this.activeArcIndex, this.draggables.length);

      if (enableIndexes.indexOf(index) !== -1) {
        this.drawLimitImg(index);
      }
    } else {
      this.drawLimitImg(index);
    }
  }, this);
  this.onDraw();
};

Chart.prototype.createClone = function (element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var that = this;

  if (!this.isInit) {
    return;
  }

  var rectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(element, element);
  var opts = Object.assign({
    center: rectangle.getCenter(),
    radius: rectangle.getMinSide() / 2,
    fillStyles: this.options.fillStyles
  }, options);
  var canvas = Dragee.util.createCanvas(element, rectangle);
  var context = canvas.getContext('2d');
  var cloneObj = {
    draw: function draw() {
      context.clearRect(0, 0, rectangle.size.x, rectangle.size.y);
      that.draggables.forEach(function (_draggable, index) {
        that.drawArc(context, opts.center, opts.radius, index);
      });
    }
  };
  cloneObj.draw();
  return cloneObj;
};

Chart.prototype.getFillStyle = function (index) {
  if (typeof this.options.fillStyles[index] === 'function') {
    this.options.fillStyles[index] = this.options.fillStyles[index].call(this);
  }

  return this.options.fillStyles[index];
};

Chart.prototype.drawArc = function (context, center, radius, index) {
  var startAngle = this.angles[index],
      endAngle = this.angles[(index + 1) % this.angles.length],
      color = this.getFillStyle(index);
  context.beginPath();
  context.moveTo(center.x, center.y);
  context.arc(center.x, center.y, radius, startAngle, endAngle, false);
  context.lineTo(center.x, center.y);
  context.closePath();
  context.fillStyle = color;
  context.fill();
};

Chart.prototype.drawLimitImg = function (index) {
  var point, img;

  if (this.options.limitImg) {
    img = this.options.limitImg instanceof Array ? this.options.limitImg[index] : this.options.limitImg;
  }

  if (img) {
    var angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(this.angles[index]);
    point = new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](0, -img.height / 2);
    point = point.add(this.options.limitImgOffset);
    this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2);
    this.context.rotate(angle);
    this.context.drawImage(img, point.x, point.y);
    this.context.setTransform(1, 0, 0, 1, 0, 0);
  }
};

Chart.prototype.getAnglesDiff = function () {
  var angles = this.angles.slice(1);
  var baseAngle = this.angles[0];
  angles.push(baseAngle);
  return angles.map(function (angle) {
    var diffAngle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(angle - baseAngle);
    baseAngle = angle;
    return diffAngle;
  });
};

Chart.prototype.getPercent = function () {
  return this.getAnglesDiff().map(function (diffAngle) {
    return diffAngle / (2 * Math.PI);
  });
};

Chart.prototype.getArcBisectrixs = function () {
  return this.getAnglesDiff().map(function (diffAngle, i) {
    return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(this.angles[i] + diffAngle / 2);
  }, this);
};

Chart.prototype.getArcOnPoint = function (point) {
  var angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getAngle(this.options.center, point);
  var radius = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getDistance(this.options.center, point);

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
};

Chart.prototype.setAngles = function (angles) {
  this.angles = angles;
  this.draggables.forEach(function (draggable, i) {
    var angle = this.angles[i],
        halfSize = draggable.getSize().mult(0.5),
        position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.touchRadius, this.options.center.sub(halfSize));
    draggable.move(position, 0, true, true);
  }, this);
  this.draw();
};

Chart.prototype.setActiveArc = function (index) {
  var enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length);
  this.activeArcIndex = index;
  this.draggables.forEach(function (draggable, i) {
    draggable.enable = enableIndexes.indexOf(i) !== -1;
  });
  this.draw();
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

/***/ "./src/expandnative.js":
/*!*****************************!*\
  !*** ./src/expandnative.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/************ Array **************/
if (!Array.prototype.removeItem) {
  Array.prototype.removeItem = function (val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1);
        i--;
      }
    }

    return this;
  };
}
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

try {
  if (!Object.prototype.__defineGetter__ && Object.defineProperty({}, 'x', {
    get: function get() {
      return true;
    }
  }).x) {
    Object.defineProperty(Object.prototype, '__defineGetter__', {
      enumerable: false,
      configurable: true,
      value: function value(name, func) {
        Object.defineProperty(this, name, {
          get: func,
          enumerable: true,
          configurable: true
        });
      }
    });
    Object.defineProperty(Object.prototype, '__defineSetter__', {
      enumerable: false,
      configurable: true,
      value: function value(name, func) {
        Object.defineProperty(this, name, {
          set: func,
          enumerable: true,
          configurable: true
        });
      }
    });
  }
} catch (_defPropException) {
  /*Do nothing if an exception occurs*/
}

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
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, targets, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, bound, spiders, Spider, arcSliders, ArcSlider, charts, Chart, listSwitcherFactory, ListSwitcher */
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
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");


var lists = [];





var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_4__["Draggable"],
  events: _draggable__WEBPACK_IMPORTED_MODULE_4__["events"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

function List(draggables, options) {
  this.options = {
    timeEnd: 200,
    timeExcange: 400,
    radius: 30,
    getDistance: _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getDistance,
    isDisplacement: false
  };

  for (var i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i];
    }
  }

  this.draggables = draggables;
  lists.push(this);
  this.onChange = new Dragee.Event(this);

  if (options && options.onChange) {
    this.onChange.add(options.onChange);
  }

  this.init();
}

List.prototype.init = function () {
  this._enable = true;
  this.draggables.forEach(this.initDraggable, this);
};

List.prototype.initDraggable = function (draggable) {
  var _moveHandler;

  var that = this;
  draggable.enable = this._enable;

  if (this.options.isDisplacement) {
    _moveHandler = function moveHandler() {
      if (this.isDragee) {
        that.onStart(this);
        draggable.onMove.remove(_moveHandler);
        return true;
      }
    };

    draggable.onEnd.add(function () {
      that.onEndDisplaycement(this);
      draggable.onMove.add(_moveHandler);
      return true;
    });
    draggable.onMove.add(_moveHandler);
  } else {
    draggable.onEnd.add(function () {
      that.onEnd(this);
      return true;
    });
  }
};

List.prototype.moveOrSave = function (draggable, position, time) {
  if (draggable.isDragee) {
    draggable.fixPosition = position;
  } else {
    draggable.move(position, time, true);
  }
};

List.prototype.onEnd = function (draggable) {
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
};

List.prototype.onEndDisplaycement = function (draggable) {
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
};

List.prototype.onStart = function (draggable) {
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
};

List.prototype.getCurrentFixPosition = function () {
  return this.draggables.map(function (draggable) {
    return draggable.fixPosition.clone();
  });
};

List.prototype.getSortedDraggables = function () {
  var initPositions = this.draggables.map(function (draggable) {
    return draggable.initPosition;
  });
  var sortedDraggables = initPositions.map(function (position) {
    return this.draggables.filter(function (draggable) {
      return draggable.fixPosition.compare(position);
    }, this)[0];
  }, this);
  return sortedDraggables;
};

List.prototype.reset = function () {
  this.draggables.forEach(function (draggable) {
    draggable.move(draggable.initPosition, 0, true, false);
  });
};

List.prototype.refresh = function () {
  this.draggables.forEach(function (draggable) {
    draggable.refresh();
  });
};

List.prototype.add = function (draggables) {
  if (!(draggables instanceof Array)) {
    draggables = [draggables];
  }

  draggables.forEach(this.initDraggable, this);
  this.draggables = this.draggables.concat(draggables);
};

List.prototype.remove = function (draggables) {
  var j;
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

    this.draggables.removeItem(draggable);
    Dragee.util.remove(this.draggables, draggable);
  }, this);
  j = 0;
  sortedDraggables.forEach(function (draggable) {
    if (this.draggables.indexOf(draggable) !== -1) {
      if (draggable.fixPosition !== initPositions[j]) {
        draggable.move(initPositions[j], this.options.timeExcange, true);
      }

      draggable.initPosition = initPositions[j];
      j++;
      list.push(draggable);
    }
  }, this);
  this.draggables = list;
};

List.prototype.clear = function () {
  this.remove(this.draggables.slice());
};

List.prototype.destroy = function () {
  this.draggables.forEach(function (draggable) {
    draggable.destroy();
  });
};

List.prototype.__defineGetter__('positions', function () {
  return this.getCurrentFixPosition();
});

List.prototype.__defineSetter__('positions', function (positions) {
  var message = 'wrong array length';

  if (positions.length === this.draggables.length) {
    positions.forEach(function (point, i) {
      this.draggables[i].move(point, 0, true, true);
    }, this);
  } else {
    throw message;
  }
});

List.prototype.__defineGetter__('enable', function () {
  return this._enable;
});

List.prototype.__defineSetter__('enable', function (value) {
  this._enable = value;
  this.draggables.forEach(function (draggable) {
    draggable.enable = value;
  });
});

function listFactory(parentElement, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  elements = Array.prototype.slice.call(elements);
  var draggables = elements.map(function (element) {
    return new Dragee.Draggable(element, draggableOptions);
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





var Dragee = {
  List: _list__WEBPACK_IMPORTED_MODULE_2__["List"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_1__["Draggable"]
}; //todo remove after refactore

var extend = function extend(Child, Parent) {
  var F = function F() {};

  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}; //todo remove after refacore


function ListSwitcher(draggables, options) {
  options = options || {};
  options.stepOn = options.stepOn || new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-50, 0);
  Dragee.List.call(this, draggables, options);
}

extend(ListSwitcher, Dragee.List);

ListSwitcher.prototype.init = function () {
  var that = this;
  this.draggables.forEach(function (draggable) {
    draggable.isOn = false;
    draggable.onEnd.add(function () {
      that.onEnd(this);
      return true;
    });
  });
};

ListSwitcher.prototype.onEnd = function (draggable) {
  var fixPositions = this.getCurrentFixPositionWithOff();
  var currentIndex = this.draggables.indexOf(draggable);
  var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

  if (excangeIndex === -1 || excangeIndex === currentIndex) {
    this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd);
  } else {
    if (this.draggables[excangeIndex].isDragee) {
      this.fixToOff(excangeIndex, fixPositions[currentIndex]);
    } else {
      this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
    }

    this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd);
    this.onChange.fire();
  }

  return true;
};

ListSwitcher.prototype.moveDraggable = function (index, position, fixOffPosition, time) {
  var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)],
      isOn = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(positions, position, -1, _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getXDifference);

  if (this.draggables[index].isOn !== !!isOn) {
    this.draggables[index].isOn = !!isOn;
    this.onChange.fire();
  }

  this.draggables[index].move(positions[isOn], time, true);
};

ListSwitcher.prototype.fixToOff = function (index, fixOffPosition) {
  this.draggables[index].isOn = false;
  this.draggables[index].fixPosition = fixOffPosition;
};

ListSwitcher.prototype.moveDraggableToOff = function (index, fixOffPosition, time) {
  this.draggables[index].isOn = false;
  this.draggables[index].move(fixOffPosition, time, true);
};

ListSwitcher.prototype.getCurrentFixPositionWithOff = function () {
  return this.draggables.map(function (draggable) {
    return draggable.isOn ? draggable.fixPosition.sub(this.options.stepOn) : draggable.fixPosition.clone();
  }, this);
};

ListSwitcher.prototype.getSortedDraggables = function () {
  return this.draggables.map(function (draggable) {
    return draggable.initPosition;
  }).map(function (position) {
    return this.draggables.filter(function (draggable) {
      return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(this.options.stepOn));
    }, this)[0];
  }, this);
};

ListSwitcher.prototype.reset = function () {
  this.draggables.forEach(function (draggable) {
    draggable.move(draggable.initPosition, 0, true, false);
    draggable.isOn = false;
  });
};

ListSwitcher.prototype.__defineGetter__('positions', function () {
  return this.draggables.map(function (draggable) {
    var position = draggable.fixPosition.clone();
    position.isOn = draggable.isOn;
    return position;
  });
});

ListSwitcher.prototype.__defineSetter__('positions', function (positions) {
  var message = 'wrong array length';

  if (positions.length === this.draggables.length) {
    positions.forEach(function (point, i) {
      this.draggables[i].isOn = point.isOn;
      this.draggables[i].move(point, 0, true, true);
    }, this);
  } else {
    throw message;
  }
});

function listSwitcherFactory(element, draggableElements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || element;
  draggableElements = Array.prototype.slice.call(draggableElements);
  var draggables = draggableElements.map(function (element) {
    return new Dragee.Draggable(element, draggableOptions);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");






var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_2__["bound"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"]
};
var spiders = [];

function Spider(area, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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

Spider.prototype.init = function (elements) {
  var that = this;
  this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle);
  this.context = this.canvas.getContext('2d');
  this.draggables = elements.map(function (element, i) {
    var angle = this.options.angle + i * this.options.dAngle,
        halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5),
        start = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
        end = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
        bound = Dragee.bound.toLine(start, end);
    return new Dragee.Draggable(element, {
      parent: this.area,
      bound: bound,
      position: start,
      onMove: function onMove() {
        that.draw();
        return true;
      }
    });
  }, this);
  this.isInit = true;
  this.draw();
};

Spider.prototype.draw = function () {
  var point, i;

  if (!this.isInit) {
    return;
  }

  this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
  this.context.beginPath();
  point = this.draggables[0].getCenter();
  this.context.moveTo(point.x, point.y);

  for (i = 0; i < this.draggables.length; i++) {
    point = this.draggables[i].getCenter();
    this.context.lineTo(point.x, point.y);
  }

  this.context.closePath();
  this.context.lineWidth = this.options.lineWidth;
  this.context.strokeStyle = this.options.strokeStyle;
  this.context.stroke();
  this.context.fillStyle = this.options.fillStyle;
  this.context.fill();
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc3BpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiRHJhZ2VlIiwidXRpbCIsIkRyYWdnYWJsZSIsImJvdW5kIiwiYXJjU2xpZGVycyIsIkFyY1NsaWRlciIsImFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiaGFsZlNpemUiLCJnZXRTaXplT2ZFbGVtZW50IiwibXVsdCIsImkiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwiaGFzT3duUHJvcGVydHkiLCJzaGlmdGVkQ2VudGVyIiwic3ViIiwicHVzaCIsImluaXQiLCJwcm90b3R5cGUiLCJ0aGF0IiwiYW5nbGUiLCJwb3NpdGlvbiIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsInRvQXJjIiwiZHJhZ2dhYmxlIiwicGFyZW50Iiwib25Nb3ZlIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJnZXRBbmdsZSIsInNldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImJvdW5kQW5nbGUiLCJ0b1JlY3RhbmdsZSIsInRvRWxlbWVudCIsInRvTGluZVgiLCJ0b0xpbmVZIiwidG9MaW5lIiwidG9DaXJjbGUiLCJpc1RvdWNoIiwid2luZG93IiwiY2hhcnRzIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInJhbmdlIiwibWFwIiwicmFuZG9tQ29sb3IiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJvbkRyYXciLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmFnZ2FibGVzIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsInVwZGF0ZUFuZ2xlcyIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwiY3JlYXRlQ2xvbmUiLCJvcHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xvbmVPYmoiLCJnZXRGaWxsU3R5bGUiLCJjYWxsIiwiY29sb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiaW1nIiwiQXJyYXkiLCJoZWlnaHQiLCJhZGQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJnZXRBbmdsZXNEaWZmIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRQZXJjZW50IiwiZ2V0QXJjQmlzZWN0cml4cyIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsInNldEFuZ2xlcyIsImVuYWJsZSIsIkV2ZW50IiwibW91c2VFdmVudHMiLCJ0b3VjaEV2ZW50cyIsInByZXZlbnREb3VibGVJbml0IiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uU3RhcnQiLCJvbkNyZWF0ZSIsImZpcmUiLCJfZW5hYmxlIiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX3JlY2FsdWxhdGUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2VlIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsInJlbW92ZUl0ZW0iLCJ2YWwiLCJhdWdtZW50IiwicmVjZWl2aW5nQ2xhc3MiLCJnaXZpbmdDbGFzcyIsImxlbiIsIm1ldGhvZE5hbWUiLCJOb2RlTGlzdCIsIl9fZGVmaW5lR2V0dGVyX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIm5hbWUiLCJmdW5jIiwic2V0IiwiX2RlZlByb3BFeGNlcHRpb24iLCJ0b1N0cmluZyIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0Iiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImdyb3d0aCIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhclBvaW50IiwiYXJyIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwibGlzdHMiLCJMaXN0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwiaXNEaXNwbGFjZW1lbnQiLCJpbml0RHJhZ2dhYmxlIiwibW92ZUhhbmRsZXIiLCJvbkVuZERpc3BsYXljZW1lbnQiLCJtb3ZlT3JTYXZlIiwiZml4UG9zaXRpb25zIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uIiwiY3VycmVudEluZGV4IiwiZXhjYW5nZUluZGV4Iiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleCIsImluaXRQb3NpdGlvbnMiLCJjb25jYXQiLCJsaXN0IiwiY2xlYXIiLCJkZXN0cm95IiwiX19kZWZpbmVTZXR0ZXJfXyIsInBvc2l0aW9ucyIsImxpc3RGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZU9wdGlvbnMiLCJsaXN0T3B0aW9ucyIsImV4dGVuZCIsIkNoaWxkIiwiUGFyZW50IiwiRiIsImNvbnN0cnVjdG9yIiwic3VwZXJjbGFzcyIsIkxpc3RTd2l0Y2hlciIsInN0ZXBPbiIsImlzT24iLCJnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmIiwibW92ZURyYWdnYWJsZSIsImZpeFRvT2ZmIiwibW92ZURyYWdnYWJsZVRvT2ZmIiwiZml4T2ZmUG9zaXRpb24iLCJsaXN0U3dpdGNoZXJGYWN0b3J5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJyZWR1Y2UiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJUYXJnZXQiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwiYWRkVGFyZ2V0Iiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwic2NvcGVGYWN0b3J5IiwidGFyZ2V0RWxlbWVudHMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwic3BpZGVycyIsIlNwaWRlciIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJ0b3VjaElkIiwicnVsZXMiLCJzdW0iLCJydWxlIiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdG9wIiwic3RlcCIsInNldFN0eWxlIiwiY3NzVGV4dCIsImtleSIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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LEdBQW9CLEdBQXBCLEdBQTBCSCxDQUEzQixFQUE4QjNTLE9BQTlCLENBQXNDLE1BQXRDLEVBQThDLEdBQTlDLEVBQW1EQSxPQUFuRCxDQUEyRCxVQUEzRCxFQUF1RSxFQUF2RSxDQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBUytCLFdBQVQsQ0FBcUI3UCxPQUFyQixFQUE4QnlnQixDQUE5QixFQUFpQztBQUMvQixNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBemdCLFNBQU8sQ0FBQzRnQixTQUFSLEdBQW9CNWdCLE9BQU8sQ0FBQzRnQixTQUFSLENBQWtCOVMsT0FBbEIsQ0FBMEI0UyxFQUExQixFQUE4QixJQUE5QixFQUFvQzVTLE9BQXBDLENBQTRDLE1BQTVDLEVBQW9ELEdBQXBELEVBQXlEQSxPQUF6RCxDQUFpRSxVQUFqRSxFQUE2RSxFQUE3RSxDQUFwQjtBQUNEOztBQUVELElBQU1wTyxJQUFJLEdBQUc7QUFDWHNNLGtCQUFnQixFQUFoQkEsZ0JBRFc7QUFFWDBELGNBQVksRUFBWkEsWUFGVztBQUdYd0csd0JBQXNCLEVBQXRCQSxzQkFIVztBQUlYbUosa0JBQWdCLEVBQWhCQSxnQkFKVztBQUtYOVksT0FBSyxFQUFMQSxLQUxXO0FBTVhxWixVQUFRLEVBQVJBLFFBTlc7QUFPWG5aLGFBQVcsRUFBWEEsV0FQVztBQVFYUSxjQUFZLEVBQVpBLFlBUlc7QUFTWHVaLFVBQVEsRUFBUkEsUUFUVztBQVVYaFIsVUFBUSxFQUFSQSxRQVZXO0FBV1hLLGFBQVcsRUFBWEE7QUFYVyxDQUFiO0FBY0E7QUFjZW5RLG1FQUFmLEUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgRHJhZ2dhYmxlLCBib3VuZCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgYXJjU2xpZGVycyA9IFtdXG5cbmZ1bmN0aW9uIEFyY1NsaWRlcihhcmVhLCBlbGVtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gIGxldCBpXG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICBlbmRBbmdsZTogMCxcbiAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gICAgdGltZTogNTAwXG4gIH1cbiAgZm9yIChpIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXVxuICAgIH1cbiAgfVxuICB0aGlzLnNoaWZ0ZWRDZW50ZXIgPSB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub3B0aW9ucy5vbkNoYW5nZVxuICBhcmNTbGlkZXJzLnB1c2godGhpcylcbiAgdGhpcy5hcmVhID0gYXJlYVxuICB0aGlzLmluaXQoZWxlbWVudClcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBjb25zdCB0aGF0ID0gdGhpcyxcbiAgICBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgIHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgICAgICksXG4gICAgYm91bmQgPSBEcmFnZWUuYm91bmQudG9BcmMoXG4gICAgICAgICAgICB0aGF0LnNoaWZ0ZWRDZW50ZXIsXG4gICAgICAgICAgICB0aGF0Lm9wdGlvbnMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICAgICAgKVxuXG4gIHRoaXMuYW5nbGUgPSBhbmdsZVxuICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICBib3VuZDogYm91bmQsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIG9uTW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LmNoYW5nZSgpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS51cGRhdGVBbmdsZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVBbmdsZSgpXG4vLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbi8vICAgICAgdGhpcy5zZXRBbmdsZShhbmdsZSx0aGlzLm9wdGlvbnMudGltZSk7XG4gIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGFuZ2xlLCB0aW1lKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgIHRoaXMuYW5nbGUsXG4gICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgKVxuICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICB0aGlzLmRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lfHwwLCB0cnVlLCB0cnVlKVxuICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG59XG5cbmV4cG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG5cbmNvbnN0IGJvdW5kID0ge1xuICB0b1JlY3RhbmdsZTogYm91bmRUb1JlY3RhbmdsZSxcbiAgdG9FbGVtZW50OiBib3VuZFRvRWxlbWVudCxcbiAgdG9MaW5lWDogYm91bmRUb0xpbmVYLFxuICB0b0xpbmVZOiBib3VuZFRvTGluZVksXG4gIHRvTGluZTogYm91bmRUb0xpbmUsXG4gIHRvQ2lyY2xlOiBib3VuZFRvQ2lyY2xlLFxuICB0b0FyYzogYm91bmRUb0FyY1xufVxuXG5leHBvcnQgeyBib3VuZCB9XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlLCBldmVudHMgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBib3VuZCwgRHJhZ2dhYmxlIH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBjaGFydHMgPSBbXVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5mdW5jdGlvbiBDaGFydChhcmVhLCBlbGVtZW50cywgb3B0aW9ucykge1xuICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgbGV0IGlcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIGJvdW5kQW5nbGU6IE1hdGguUEkvOSxcbiAgICBmaWxsU3R5bGVzOiBEcmFnZWUudXRpbC5yYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEcmFnZWUudXRpbC5yYW5kb21Db2xvcigpXG4gICAgfSksXG4gICAgaW5pdEFuZ2xlczogRHJhZ2VlLnV0aWwucmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgfSksXG4gICAgb25EcmF3OiBmdW5jdGlvbigpIHt9LFxuICAgIGxpbWl0SW1nOiBudWxsLFxuICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgaXNTZWxlY3RhYmxlOiBmYWxzZVxuICB9XG4gIGZvciAoaSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV1cbiAgICB9XG4gIH1cblxuICBjaGFydHMucHVzaCh0aGlzKVxuICB0aGlzLm9uRHJhdyA9IHRoaXMub3B0aW9ucy5vbkRyYXdcbiAgdGhpcy5hcmVhID0gYXJlYVxuICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gIHRoaXMuaW5pdChlbGVtZW50cylcbn1cblxuQ2hhcnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICB0aGlzLmNhbnZhcyA9IERyYWdlZS51dGlsLmNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV0sXG4gICAgICBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpLFxuICAgICAgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgICAgICAgKSxcbiAgICAgIGJvdW5kID0gRHJhZ2VlLmJvdW5kLnRvQXJjKFxuICAgICAgICAgICAgICAgIHRoYXQub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgICAgICAgICB0aGF0Lm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgICAgICAgdGhhdC5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgICAgICAgICB0aGF0LmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgICAgICAgIClcblxuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG9uTW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZHJhdygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSwgdGhpcylcblxuICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICB0aGlzLmluaXRTZWxlY3QoKVxuICB9XG4gIHRoaXMuZHJhdygpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5pbml0U2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuc2V0QWN0aXZlQXJjKC0xKVxuXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFgsXG4gICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUuY2xpZW50WVxuICAgIClcblxuICAgIGlmICghdGhhdC5jYW52YXNPZmZzZXQpIHtcbiAgICAgIHRoYXQuY2FudmFzT2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoYXQuY2FudmFzKVxuICAgIH1cblxuICAgIHBvaW50ID0gcG9pbnQuc3ViKHRoYXQuY2FudmFzT2Zmc2V0KVxuICAgIGNvbnN0IGluZGV4ID0gdGhhdC5nZXRBcmNPblBvaW50KHBvaW50KVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoYXQuc2V0QWN0aXZlQXJjKCh0aGF0LmFjdGl2ZUFyY0luZGV4ICE9PSBpbmRleCkgPyBpbmRleCA6IC0xKVxuICAgIH1cbiAgfSlcbn1cblxuQ2hhcnQucHJvdG90eXBlLnVwZGF0ZUFuZ2xlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfSwgdGhpcylcbn1cblxuQ2hhcnQucHJvdG90eXBlLmdldEJvdW5kQW5nbGUgPSBmdW5jdGlvbihpbmRleCwgaXNDbG9zc2luZykge1xuICBjb25zdCB0aGF0ID0gdGhpcywgc2lnbiA9IGlzQ2xvc3Npbmc/MTotMVxuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhhdC5hbmdsZXMubGVuZ3RoXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBpICs9IHRoYXQuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhhdC5hbmdsZXNbaV0gLSBzaWduICogdGhhdC5vcHRpb25zLmJvdW5kQW5nbGUpXG4gIH1cbn1cblxuQ2hhcnQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKF9kcmFnZ2FibGUsIGluZGV4KSB7XG4gICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gIH0sIHRoaXMpXG5cbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oX2RyYWdnYWJsZSwgaW5kZXgpIHtcbiAgICBsZXQgZW5hYmxlSW5kZXhlc1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKHRoaXMuYWN0aXZlQXJjSW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICBpZiAoZW5hYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgIH1cbiAgfSwgdGhpcylcbiAgdGhpcy5vbkRyYXcoKVxufVxuXG5DaGFydC5wcm90b3R5cGUuY3JlYXRlQ2xvbmUgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gIH0sIG9wdGlvbnMpXG5cbiAgY29uc3QgY2FudmFzID0gRHJhZ2VlLnV0aWwuY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIGNvbnN0IGNsb25lT2JqID0ge1xuICAgIGRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgIHRoYXQuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKF9kcmFnZ2FibGUsIGluZGV4KSB7XG4gICAgICAgIHRoYXQuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgY2xvbmVPYmouZHJhdygpXG4gIHJldHVybiBjbG9uZU9ialxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0RmlsbFN0eWxlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICB9XG4gIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbn1cblxuQ2hhcnQucHJvdG90eXBlLmRyYXdBcmMgPSBmdW5jdGlvbihjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XSxcbiAgICBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSV0aGlzLmFuZ2xlcy5sZW5ndGhdLFxuICAgIGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgY29udGV4dC5iZWdpblBhdGgoKVxuICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgY29udGV4dC5jbG9zZVBhdGgoKVxuICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gIGNvbnRleHQuZmlsbCgpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5kcmF3TGltaXRJbWcgPSBmdW5jdGlvbihpbmRleCkge1xuICBsZXQgcG9pbnQsIGltZ1xuICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gIH1cblxuICBpZiAoaW1nKSB7XG4gICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgfVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0QW5nbGVzRGlmZiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gIHJldHVybiBhbmdsZXMubWFwKGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgY29uc3QgZGlmZkFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICByZXR1cm4gZGlmZkFuZ2xlXG4gIH0pXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRQZXJjZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoZnVuY3Rpb24oZGlmZkFuZ2xlKSB7XG4gICAgcmV0dXJuIGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSlcbiAgfSlcbn1cblxuQ2hhcnQucHJvdG90eXBlLmdldEFyY0Jpc2VjdHJpeHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcChmdW5jdGlvbihkaWZmQW5nbGUsIGkpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICB9LCB0aGlzKVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0QXJjT25Qb2ludCA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gIGNvbnN0IHJhZGl1cyA9IEdlb21ldHJ5LmdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICBvZmZzZXQgPSBpXG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBpZiAoLS1qIDwgMCkge1xuICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGpcbn1cblxuQ2hhcnQucHJvdG90eXBlLnNldEFuZ2xlcyA9IGZ1bmN0aW9uKGFuZ2xlcykge1xuICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUsIGkpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldLFxuICAgICAgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KSxcbiAgICAgIHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICAgICAgICAgIGFuZ2xlLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgICAgICAgIClcblxuICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICB9LCB0aGlzKVxuICB0aGlzLmRyYXcoKVxufVxuXG5DaGFydC5wcm90b3R5cGUuc2V0QWN0aXZlQXJjID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSwgaSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gIH0pXG4gIHRoaXMuZHJhdygpXG59XG5cbmV4cG9ydCB7IGNoYXJ0cywgQ2hhcnQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IGJvdW5kLCBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICBwcmV2ZW50RG91YmxlSW5pdCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgICBpZiAoZHJhZ2dhYmxlcy5zb21lKGZ1bmN0aW9uKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnRcbiAgICB9KSkge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICB9LFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9LFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogRHJhZ2VlLmJvdW5kLnRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2VlID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZWUgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKiogQXJyYXkgKioqKioqKioqKioqKiovXG5cbmlmICghQXJyYXkucHJvdG90eXBlLnJlbW92ZUl0ZW0pIHtcbiAgQXJyYXkucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbih2YWwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzW2ldID09PSB2YWwpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgaS0tXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqIDAwUCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgYXVnbWVudCA9IGZ1bmN0aW9uKHJlY2VpdmluZ0NsYXNzLCBnaXZpbmdDbGFzcykge1xuICAgIC8qIG9ubHkgcHJvdmlkZSBjZXJ0YWluIG1ldGhvZHMgKi9cbiAgaWYgKGFyZ3VtZW50c1syXSkge1xuICAgIGZvciAobGV0IGk9MiwgbGVuPWFyZ3VtZW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIGdpdmluZ0NsYXNzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgLyogY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSByZWNlaXZpbmcgY2xhc3MgZG9lc24ndFxuICAgICAgICAgICAgICAgaGF2ZSBhIG1ldGhvZCBvZiB0aGUgc2FtZSBuYW1lIGFzIHRoZSBvbmUgY3VycmVudGx5XG4gICAgICAgICAgICAgICBiZWluZyBwcm9jZXNzZWQgKi9cbiAgICAgIGlmICghcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYXVnbWVudChOb2RlTGlzdCwgQXJyYXksICdmb3JFYWNoJylcblxudHJ5IHtcbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18gJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICd4JywgeyBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IH0pLngpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ19fZGVmaW5lR2V0dGVyX18nLFxuICAgICAgeyBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24obmFtZSwgZnVuYykge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLFxuICAgICAgICAgICAgIHsgZ2V0OiBmdW5jLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ19fZGVmaW5lU2V0dGVyX18nLFxuICAgICAgeyBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24obmFtZSwgZnVuYykge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLFxuICAgICAgICAgICAgIHsgc2V0OiBmdW5jLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufSBjYXRjaCAoX2RlZlByb3BFeGNlcHRpb24pIHsgLypEbyBub3RoaW5nIGlmIGFuIGV4Y2VwdGlvbiBvY2N1cnMqLyB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsImltcG9ydCAnLi9leHBhbmRuYXRpdmUnXG5pbXBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QsIGxpc3RGYWN0b3J5IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5ICB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfSBmcm9tICcuL3NwaWRlcidcbmltcG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9IGZyb20gJy4vYXJjc2xpZGVyJ1xuaW1wb3J0IHsgY2hhcnRzLCBDaGFydCB9IGZyb20gJy4vY2hhcnQnXG5pbXBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfSBmcm9tICcuL2xpc3Rzd2l0Y2hlcidcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLFxuICBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSxcbiAgTGlzdCwgbGlzdEZhY3RvcnksXG4gIHRhcmdldHMsIFRhcmdldCxcbiAgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlLFxuICBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnksXG4gIGJvdW5kLFxuICBzcGlkZXJzLCBTcGlkZXIsXG4gIGFyY1NsaWRlcnMsIEFyY1NsaWRlcixcbiAgY2hhcnRzLCBDaGFydCxcbiAgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgbGlzdHMgPSBbXVxuXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgYm91bmQsIERyYWdnYWJsZSwgZXZlbnRzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuZnVuY3Rpb24gTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICB0aW1lRW5kOiAyMDAsXG4gICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICByYWRpdXM6IDMwLFxuICAgIGdldERpc3RhbmNlOiBHZW9tZXRyeS5nZXREaXN0YW5jZSxcbiAgICBpc0Rpc3BsYWNlbWVudDogZmFsc2VcbiAgfVxuICBmb3IgKGNvbnN0IGkgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldXG4gICAgfVxuICB9XG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgbGlzdHMucHVzaCh0aGlzKVxuICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgfVxuICB0aGlzLmluaXQoKVxufVxuXG5MaXN0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxufVxuXG5MaXN0LnByb3RvdHlwZS5pbml0RHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGxldCBtb3ZlSGFuZGxlclxuICBjb25zdCB0aGF0ID0gdGhpc1xuICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gIGlmICh0aGlzLm9wdGlvbnMuaXNEaXNwbGFjZW1lbnQpIHtcbiAgICBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaXNEcmFnZWUpIHtcbiAgICAgICAgdGhhdC5vblN0YXJ0KHRoaXMpXG4gICAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKG1vdmVIYW5kbGVyKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBkcmFnZ2FibGUub25FbmQuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC5vbkVuZERpc3BsYXljZW1lbnQodGhpcylcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICB9IGVsc2Uge1xuICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0Lm9uRW5kKHRoaXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuTGlzdC5wcm90b3R5cGUubW92ZU9yU2F2ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSwgcG9zaXRpb24sIHRpbWUpIHtcbiAgaWYgKGRyYWdnYWJsZS5pc0RyYWdlZSkge1xuICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHBvc2l0aW9uXG4gIH0gZWxzZSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWUsIHRydWUpXG4gIH1cbn1cblxuTGlzdC5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tb3ZlT3JTYXZlKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLm1vdmUoZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuTGlzdC5wcm90b3R5cGUub25FbmREaXNwbGF5Y2VtZW50ID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uXG4gIH0pXG5cbiAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgY29uc3QgdGFyZ2V0SW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xuICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpKzFdLCBmaXhQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZHJhZ2dhYmxlLm1vdmUoZml4UG9zaXRpb25zW3RhcmdldEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgfVxufVxuXG5MaXN0LnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGxldCBpXG4gIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uXG4gIH0pXG5cbiAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgZm9yIChpID0gY3VycmVudEluZGV4ICsgMTsgaSA8IHNvcnRlZERyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2kgLSAxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICB9XG4gIHNvcnRlZERyYWdnYWJsZXNbY3VycmVudEluZGV4XS5maXhQb3NpdGlvbiA9IGZpeFBvc2l0aW9uc1tpIC0gMV1cbn1cblxuTGlzdC5wcm90b3R5cGUuZ2V0Q3VycmVudEZpeFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICB9KVxufVxuXG5MaXN0LnByb3RvdHlwZS5nZXRTb3J0ZWREcmFnZ2FibGVzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uXG4gIH0pXG5cbiAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IGluaXRQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pXG4gICAgfSwgdGhpcylbMF1cbiAgfSwgdGhpcylcblxuICByZXR1cm4gc29ydGVkRHJhZ2dhYmxlc1xufVxuXG5MaXN0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgfSlcbn1cblxuTGlzdC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gIH0pXG59XG5cbkxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZXMpIHtcbiAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgfVxuICBkcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG59XG5cbkxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZXMpIHtcbiAgbGV0IGpcbiAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5pbml0UG9zaXRpb25cbiAgfSlcbiAgY29uc3QgbGlzdCA9IFtdXG4gIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gIH1cblxuICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uRW5kLnJlc2V0KClcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlc2V0KCkvL3RvZG8gcmVtb3ZlIHJlc2V0IGluIGZ1dHVyZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5yZW1vdmVJdGVtKGRyYWdnYWJsZSlcbiAgICBEcmFnZWUudXRpbC5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH0sIHRoaXMpXG4gIGogPSAwXG4gIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIGlmIChkcmFnZ2FibGUuZml4UG9zaXRpb24gIT09IGluaXRQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoaW5pdFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiA9IGluaXRQb3NpdGlvbnNbal1cbiAgICAgIGorK1xuICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH0sIHRoaXMpXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3Rcbn1cblxuTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG59XG5cbkxpc3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmRlc3Ryb3koKVxuICB9KVxufVxuXG5MaXN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKCdwb3NpdGlvbnMnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uKClcbn0pXG5cbkxpc3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKHBvc2l0aW9ucykge1xuICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChmdW5jdGlvbihwb2ludCwgaSkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbn0pXG5cbkxpc3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oJ2VuYWJsZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fZW5hYmxlXG59KVxuXG5MaXN0LnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKCdlbmFibGUnLCBmdW5jdGlvbih2YWx1ZSkge1xuICB0aGlzLl9lbmFibGUgPSB2YWx1ZVxuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdmFsdWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGxpc3RGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY29uc3QgRHJhZ2VlID0geyBMaXN0LCBEcmFnZ2FibGUgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBleHRlbmQgPSBmdW5jdGlvbihDaGlsZCwgUGFyZW50KSB7XG4gIGNvbnN0IEYgPSBmdW5jdGlvbigpIHsgfVxuICBGLnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGVcbiAgQ2hpbGQucHJvdG90eXBlID0gbmV3IEYoKVxuICBDaGlsZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGlsZFxuICBDaGlsZC5zdXBlcmNsYXNzID0gUGFyZW50LnByb3RvdHlwZVxufS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWNvcmVcblxuZnVuY3Rpb24gTGlzdFN3aXRjaGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgb3B0aW9ucy5zdGVwT24gPSBvcHRpb25zLnN0ZXBPbiB8fCBuZXcgUG9pbnQoLTUwLCAwKVxuICBEcmFnZWUuTGlzdC5jYWxsKHRoaXMsIGRyYWdnYWJsZXMsIG9wdGlvbnMpXG59XG5cbmV4dGVuZChMaXN0U3dpdGNoZXIsIERyYWdlZS5MaXN0KVxuXG5MaXN0U3dpdGNoZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0Lm9uRW5kKHRoaXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gIH0pXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG4gIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLmlzRHJhZ2VlKSB7XG4gICAgICB0aGlzLmZpeFRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZVRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICB9XG4gICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5MaXN0U3dpdGNoZXIucHJvdG90eXBlLm1vdmVEcmFnZ2FibGUgPSBmdW5jdGlvbihpbmRleCwgcG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtmaXhPZmZQb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24uYWRkKHRoaXMub3B0aW9ucy5zdGVwT24pXSwgaXNPbiA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQocG9zaXRpb25zLCBwb3NpdGlvbiwgLTEsIEdlb21ldHJ5LmdldFhEaWZmZXJlbmNlKVxuICBpZiAodGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uICE9PSAhIWlzT24pIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSAhIWlzT25cbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICB9XG4gIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShwb3NpdGlvbnNbaXNPbl0sIHRpbWUsIHRydWUpXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUuZml4VG9PZmYgPSBmdW5jdGlvbihpbmRleCwgZml4T2ZmUG9zaXRpb24pIHtcbiAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5maXhQb3NpdGlvbiA9IGZpeE9mZlBvc2l0aW9uXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUubW92ZURyYWdnYWJsZVRvT2ZmID0gZnVuY3Rpb24oaW5kZXgsIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShmaXhPZmZQb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbn1cblxuTGlzdFN3aXRjaGVyLnByb3RvdHlwZS5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuaXNPbiA/IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5zdWIodGhpcy5vcHRpb25zLnN0ZXBPbikgOiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICB9LCB0aGlzKVxufVxuXG5MaXN0U3dpdGNoZXIucHJvdG90eXBlLmdldFNvcnRlZERyYWdnYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoXG4gICAgICBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5pbml0UG9zaXRpb25cbiAgICAgIH0pLm1hcChmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcihmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pIHx8IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKSlcbiAgICAgICAgfSwgdGhpcylbMF1cbiAgICAgIH0sIHRoaXMpXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICB9KVxufVxuXG5MaXN0U3dpdGNoZXIucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgcG9zaXRpb24uaXNPbiA9IGRyYWdnYWJsZS5pc09uXG4gICAgcmV0dXJuIHBvc2l0aW9uXG4gIH0pXG59KVxuXG5MaXN0U3dpdGNoZXIucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKHBvc2l0aW9ucykge1xuICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChmdW5jdGlvbihwb2ludCwgaSkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLmlzT24gPSBwb2ludC5pc09uXG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxufSlcblxuZnVuY3Rpb24gbGlzdFN3aXRjaGVyRmFjdG9yeShlbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cblxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IGVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgRHJhZ2dhYmxlLCAgVGFyZ2V0LCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuZnVuY3Rpb24gU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucykge1xuICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbihzY29wZSkge1xuICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICAgIHNjb3BlLmRyYWdnYWJsZXMucmVtb3ZlSXRlbShkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICB0YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHNjb3BlLnRhcmdldHMucmVtb3ZlSXRlbSh0YXJnZXQpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgc2NvcGVzLnB1c2godGhpcylcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHRpbWVFbmQ6IChvcHRpb25zICYmIG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gIH1cblxuICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgfVxuICB0aGlzLmluaXQoKVxufVxuXG5TY29wZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25FbmQuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoYXQub25FbmQodGhpcylcbiAgICB9KVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUuYWRkRHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG5cbiAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICBkcmFnZ2FibGUub25FbmQudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhhdC5vbkVuZCh0aGlzKVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbn1cblxuU2NvcGUucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICB9KS5maWx0ZXIoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICB9KVxuXG4gIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gIH1cbiAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgcmV0dXJuIHRydWVcbn1cblxuU2NvcGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHRhcmdldC5yZXNldCgpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5yZWZyZXNoKClcbiAgfSlcbiAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlZnJlc2goKVxuICB9KVxufVxuXG5TY29wZS5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXygncG9zaXRpb25zJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRhcmdldHMubWFwKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgfSwgdGhpcylcbiAgfSwgdGhpcylcbn0pXG5cblNjb3BlLnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKCdwb3NpdGlvbnMnLCBmdW5jdGlvbihwb3NpdGlvbnMpIHtcbiAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVzZXQoKVxuICAgIH0sIHRoaXMpXG4gICAgcG9zaXRpb25zLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0SW5kZXhlcywgaSkge1xuICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbn0pXG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpLFxuICAgIGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIGJvdW5kLCBEcmFnZ2FibGUgfVxuY29uc3Qgc3BpZGVycyA9IFtdXG5cbmZ1bmN0aW9uIFNwaWRlcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYW5nbGU6IDAsXG4gICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIGxpbmVXaWR0aDogMixcbiAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICB9LCBvcHRpb25zKVxuXG4gIHNwaWRlcnMucHVzaCh0aGlzKVxuICB0aGlzLmFyZWEgPSBhcmVhXG4gIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgdGhpcy5pbml0KGVsZW1lbnRzKVxufVxuXG5TcGlkZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICB0aGlzLmNhbnZhcyA9IERyYWdlZS51dGlsLmNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpKSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZSxcbiAgICAgIGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSksXG4gICAgICBzdGFydCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpLFxuICAgICAgZW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpLFxuICAgICAgYm91bmQgPSBEcmFnZWUuYm91bmQudG9MaW5lKHN0YXJ0LCBlbmQpXG5cbiAgICByZXR1cm4gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZDogYm91bmQsXG4gICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICBvbk1vdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmRyYXcoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgfSwgdGhpcylcblxuICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgdGhpcy5kcmF3KClcbn1cblxuU3BpZGVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwb2ludCwgaVxuICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KVxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50LngsIHBvaW50LnkpXG4gIH1cbiAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLm9wdGlvbnMubGluZVdpZHRoXG4gIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVcbiAgdGhpcy5jb250ZXh0LmZpbGwoKVxufVxuXG5leHBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBwb3NpdGlvblR5cGUsICBwb3NpdGlvbkZhY3RvcnksIHNvcnRpbmdGYWN0b3J5LCBzY29wZXMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCB0YXJnZXRzID0gW10sXG4gIGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gIH1cblxuZnVuY3Rpb24gVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IERyYWdlZS51dGlsLmdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcblxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICB0aW1lRW5kOiAyMDAsXG4gICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgcG9zaXRpb25pbmc6IERyYWdlZS5wb3NpdGlvbkZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksIHsgcmVtb3ZhYmxlOiB0cnVlIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9KVxuICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMuYmVmb3JlQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgdGhpcy5vblJlbW92ZS5hZGQob3B0aW9ucy5vblJlbW92ZSlcbiAgfVxuICBpZiAob3B0aW9ucy5vbkFkZCkge1xuICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gIH1cbiAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICB9XG5cbiAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICB0aGlzLmluaXQoKVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRSZWN0YW5nbGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmNhdGNoRHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpLFxuICAgICAgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG59XG5cblRhcmdldC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9LCB0aGlzKVxuXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICBpbmRleGVzT2ZOZXcgPSBEcmFnZWUudXRpbC5yYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgICB9LCB0aGlzKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBEcmFnZWUuc2NvcGVzLmZvckVhY2goZnVuY3Rpb24oc2NvcGUpIHtcbiAgICBzY29wZS50YXJnZXRzLnJlbW92ZUl0ZW0odGhpcylcbiAgfSwgdGhpcylcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIFtdKVxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlLCBpKSB7XG4gICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5yZW1vdmVJdGVtKGRyYWdnYWJsZSlcblxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gIH0sIHRoaXMpXG59XG5cblRhcmdldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZHJhZ2dhYmxlLCB0aW1lKSB7XG4gIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5wdXNoSW5uZXJEcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5hZGRSZW1vdmVPbk1vdmUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcblxuICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGF0LnJlbW92ZShkcmFnZ2FibGUpXG4gIH0pXG5cbiAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBbXSlcblxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9LCB0aGlzKVxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0U29ydGVkRHJhZ2dhYmxlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG59XG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBydWxlKSB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgZWxlbWVudC5maXJzdENoaWxkID8gZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKSA6IGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbn1cblxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICBjb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbiAgfVxuICBjb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gICAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgICAgc3RyID0gJzAnICsgc3RyXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHJldHVybiAnIycgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzXG59XG5cbmV4cG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=
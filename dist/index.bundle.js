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
          if (draggable.isDragee) {
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
      if (draggable.isDragee) {
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
        if (this.draggables[excangeIndex].isDragee) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc3BpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiRHJhZ2VlIiwidXRpbCIsIkRyYWdnYWJsZSIsImJvdW5kIiwiYXJjU2xpZGVycyIsIkFyY1NsaWRlciIsImFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiaGFsZlNpemUiLCJnZXRTaXplT2ZFbGVtZW50IiwibXVsdCIsImkiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwiaGFzT3duUHJvcGVydHkiLCJzaGlmdGVkQ2VudGVyIiwic3ViIiwicHVzaCIsImluaXQiLCJwcm90b3R5cGUiLCJ0aGF0IiwiYW5nbGUiLCJwb3NpdGlvbiIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsInRvQXJjIiwiZHJhZ2dhYmxlIiwicGFyZW50Iiwib25Nb3ZlIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJnZXRBbmdsZSIsInNldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImJvdW5kQW5nbGUiLCJ0b1JlY3RhbmdsZSIsInRvRWxlbWVudCIsInRvTGluZVgiLCJ0b0xpbmVZIiwidG9MaW5lIiwidG9DaXJjbGUiLCJpc1RvdWNoIiwid2luZG93IiwiY2hhcnRzIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInJhbmdlIiwibWFwIiwicmFuZG9tQ29sb3IiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJvbkRyYXciLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmFnZ2FibGVzIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsInVwZGF0ZUFuZ2xlcyIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwiY3JlYXRlQ2xvbmUiLCJvcHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xvbmVPYmoiLCJnZXRGaWxsU3R5bGUiLCJjYWxsIiwiY29sb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiaW1nIiwiQXJyYXkiLCJoZWlnaHQiLCJhZGQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJnZXRBbmdsZXNEaWZmIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRQZXJjZW50IiwiZ2V0QXJjQmlzZWN0cml4cyIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsInNldEFuZ2xlcyIsImVuYWJsZSIsIkV2ZW50IiwibW91c2VFdmVudHMiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInByZXZlbnREb3VibGVJbml0IiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uU3RhcnQiLCJvbkNyZWF0ZSIsImZpcmUiLCJfZW5hYmxlIiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX3JlY2FsdWxhdGUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2VlIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsInJlbW92ZUl0ZW0iLCJ2YWwiLCJhdWdtZW50IiwicmVjZWl2aW5nQ2xhc3MiLCJnaXZpbmdDbGFzcyIsImxlbiIsIm1ldGhvZE5hbWUiLCJOb2RlTGlzdCIsIl9fZGVmaW5lR2V0dGVyX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIm5hbWUiLCJmdW5jIiwic2V0IiwiX2RlZlByb3BFeGNlcHRpb24iLCJ0b1N0cmluZyIsInAiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiZ2V0UDEiLCJnZXRQMiIsImdldFA0Iiwib3IiLCJyZWN0IiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImdyb3d0aCIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhclBvaW50IiwiYXJyIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwibGlzdHMiLCJMaXN0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwiaXNEaXNwbGFjZW1lbnQiLCJpbml0RHJhZ2dhYmxlIiwibW92ZUhhbmRsZXIiLCJsaXN0Iiwib25FbmREaXNwbGF5Y2VtZW50IiwiZml4UG9zaXRpb25zIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uIiwiY3VycmVudEluZGV4IiwiZXhjYW5nZUluZGV4IiwibW92ZU9yU2F2ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXgiLCJpbml0UG9zaXRpb25zIiwiY29uY2F0IiwiZGVzdHJveSIsInBvc2l0aW9ucyIsImxpc3RGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZU9wdGlvbnMiLCJsaXN0T3B0aW9ucyIsIkxpc3RTd2l0Y2hlciIsInN0ZXBPbiIsImlzT24iLCJnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmIiwibW92ZURyYWdnYWJsZSIsImZpeFRvT2ZmIiwibW92ZURyYWdnYWJsZVRvT2ZmIiwiZml4T2ZmUG9zaXRpb24iLCJsaXN0U3dpdGNoZXJGYWN0b3J5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJyZWR1Y2UiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJUYXJnZXQiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwiYWRkVGFyZ2V0Iiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsIl9fZGVmaW5lU2V0dGVyX18iLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInNwaWRlcnMiLCJTcGlkZXIiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3RvcCIsInN0ZXAiLCJzZXRTdHlsZSIsImNzc1RleHQiLCJrZXkiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJyZWN0YWdsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsImNsYXNzTmFtZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdD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cmEsTUFBMUIsRUFBa0N6RixDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUk4ZixLQUFLLENBQUM5ZixDQUFELENBQUwsS0FBYW1RLEdBQWpCLEVBQXNCO0FBQ3BCMlAsV0FBSyxDQUFDOVAsTUFBTixDQUFhaFEsQ0FBYixFQUFnQixDQUFoQjtBQUNBQSxPQUFDO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPOGYsS0FBUDtBQUNEOztBQUVELElBQU01Z0IsSUFBSSxHQUFHO0FBQ1hzTSxrQkFBZ0IsRUFBaEJBLGdCQURXO0FBRVgwRCxjQUFZLEVBQVpBLFlBRlc7QUFHWHdHLHdCQUFzQixFQUF0QkEsc0JBSFc7QUFJWDRJLGtCQUFnQixFQUFoQkEsZ0JBSlc7QUFLWHZZLE9BQUssRUFBTEEsS0FMVztBQU1YOFksVUFBUSxFQUFSQSxRQU5XO0FBT1g1WSxhQUFXLEVBQVhBLFdBUFc7QUFRWFEsY0FBWSxFQUFaQSxZQVJXO0FBU1hnWixVQUFRLEVBQVJBLFFBVFc7QUFVWHpRLFVBQVEsRUFBUkEsUUFWVztBQVdYSyxhQUFXLEVBQVhBLFdBWFc7QUFZWGEsWUFBVSxFQUFWQTtBQVpXLENBQWI7QUFlQTtBQWVlaFIsbUVBQWYsRSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBEcmFnZ2FibGUsIGJvdW5kIH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBhcmNTbGlkZXJzID0gW11cblxuZnVuY3Rpb24gQXJjU2xpZGVyKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgbGV0IGlcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgIGVuZEFuZ2xlOiAwLFxuICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgICB0aW1lOiA1MDBcbiAgfVxuICBmb3IgKGkgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldXG4gICAgfVxuICB9XG4gIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vcHRpb25zLm9uQ2hhbmdlXG4gIGFyY1NsaWRlcnMucHVzaCh0aGlzKVxuICB0aGlzLmFyZWEgPSBhcmVhXG4gIHRoaXMuaW5pdChlbGVtZW50KVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzLFxuICAgIGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICAgICAgKSxcbiAgICBib3VuZCA9IERyYWdlZS5ib3VuZC50b0FyYyhcbiAgICAgICAgICAgIHRoYXQuc2hpZnRlZENlbnRlcixcbiAgICAgICAgICAgIHRoYXQub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbmRBbmdsZVxuICAgICAgICApXG5cbiAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwge1xuICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgIGJvdW5kOiBib3VuZCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgb25Nb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQuY2hhbmdlKClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLnVwZGF0ZUFuZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLnNoaWZ0ZWRDZW50ZXIsIHRoaXMuZHJhZ2dhYmxlLnBvc2l0aW9uKVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZUFuZ2xlKClcbi8vICAgICAgdmFyIGFuZ2xlID0gR2VvbWV0cnkuZ2V0TmVhcmVzdEFuZ2xlKHRoaXMub3B0aW9ucy5hbmdsZXMsIHRoaXMuYW5nbGUpO1xuLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24oYW5nbGUsIHRpbWUpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgdGhpcy5hbmdsZSxcbiAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICApXG4gIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSwgcG9zaXRpb24pXG4gIHRoaXMuZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWV8fDAsIHRydWUsIHRydWUpXG4gIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbn1cblxuZXhwb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5mdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cblxuY29uc3QgYm91bmQgPSB7XG4gIHRvUmVjdGFuZ2xlOiBib3VuZFRvUmVjdGFuZ2xlLFxuICB0b0VsZW1lbnQ6IGJvdW5kVG9FbGVtZW50LFxuICB0b0xpbmVYOiBib3VuZFRvTGluZVgsXG4gIHRvTGluZVk6IGJvdW5kVG9MaW5lWSxcbiAgdG9MaW5lOiBib3VuZFRvTGluZSxcbiAgdG9DaXJjbGU6IGJvdW5kVG9DaXJjbGUsXG4gIHRvQXJjOiBib3VuZFRvQXJjXG59XG5cbmV4cG9ydCB7IGJvdW5kIH1cbiIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmQgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIGJvdW5kLCBEcmFnZ2FibGUgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IGNoYXJ0cyA9IFtdXG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmZ1bmN0aW9uIENoYXJ0KGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zKSB7XG4gIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICBsZXQgaVxuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgYm91bmRBbmdsZTogTWF0aC5QSS85LFxuICAgIGZpbGxTdHlsZXM6IERyYWdlZS51dGlsLnJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERyYWdlZS51dGlsLnJhbmRvbUNvbG9yKClcbiAgICB9KSxcbiAgICBpbml0QW5nbGVzOiBEcmFnZWUudXRpbC5yYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgIHJldHVybiBHZW9tZXRyeS50b1JhZGlhbihhbmdsZSlcbiAgICB9KSxcbiAgICBvbkRyYXc6IGZ1bmN0aW9uKCkge30sXG4gICAgbGltaXRJbWc6IG51bGwsXG4gICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICBpc1NlbGVjdGFibGU6IGZhbHNlXG4gIH1cbiAgZm9yIChpIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXVxuICAgIH1cbiAgfVxuXG4gIGNoYXJ0cy5wdXNoKHRoaXMpXG4gIHRoaXMub25EcmF3ID0gdGhpcy5vcHRpb25zLm9uRHJhd1xuICB0aGlzLmFyZWEgPSBhcmVhXG4gIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgdGhpcy5pbml0KGVsZW1lbnRzKVxufVxuXG5DaGFydC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuY2FudmFzID0gRHJhZ2VlLnV0aWwuY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpKSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXSxcbiAgICAgIGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSksXG4gICAgICBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICAgICAgICApLFxuICAgICAgYm91bmQgPSBEcmFnZWUuYm91bmQudG9BcmMoXG4gICAgICAgICAgICAgICAgdGhhdC5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICAgICAgICAgIHRoYXQub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICAgICAgICB0aGF0LmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgICAgICAgKVxuXG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb25Nb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5kcmF3KClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9LCB0aGlzKVxuXG4gIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgIHRoaXMuaW5pdFNlbGVjdCgpXG4gIH1cbiAgdGhpcy5kcmF3KClcbn1cblxuQ2hhcnQucHJvdG90eXBlLmluaXRTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgdGhpcy5zZXRBY3RpdmVBcmMoLTEpXG5cbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgKVxuXG4gICAgaWYgKCF0aGF0LmNhbnZhc09mZnNldCkge1xuICAgICAgdGhhdC5jYW52YXNPZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhhdC5jYW52YXMpXG4gICAgfVxuXG4gICAgcG9pbnQgPSBwb2ludC5zdWIodGhhdC5jYW52YXNPZmZzZXQpXG4gICAgY29uc3QgaW5kZXggPSB0aGF0LmdldEFyY09uUG9pbnQocG9pbnQpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhhdC5zZXRBY3RpdmVBcmMoKHRoYXQuYWN0aXZlQXJjSW5kZXggIT09IGluZGV4KSA/IGluZGV4IDogLTEpXG4gICAgfVxuICB9KVxufVxuXG5DaGFydC5wcm90b3R5cGUudXBkYXRlQW5nbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9LCB0aGlzKVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0Qm91bmRBbmdsZSA9IGZ1bmN0aW9uKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzLCBzaWduID0gaXNDbG9zc2luZz8xOi0xXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGF0LmFuZ2xlcy5sZW5ndGhcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIGkgKz0gdGhhdC5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGF0LmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGF0Lm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgfVxufVxuXG5DaGFydC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oX2RyYWdnYWJsZSwgaW5kZXgpIHtcbiAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgfSwgdGhpcylcblxuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihfZHJhZ2dhYmxlLCBpbmRleCkge1xuICAgIGxldCBlbmFibGVJbmRleGVzXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXModGhpcy5hY3RpdmVBcmNJbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIGlmIChlbmFibGVJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgfVxuICB9LCB0aGlzKVxuICB0aGlzLm9uRHJhdygpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5jcmVhdGVDbG9uZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgcmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgfSwgb3B0aW9ucylcblxuICBjb25zdCBjYW52YXMgPSBEcmFnZWUudXRpbC5jcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgdGhhdC5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oX2RyYWdnYWJsZSwgaW5kZXgpIHtcbiAgICAgICAgdGhhdC5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBjbG9uZU9iai5kcmF3KClcbiAgcmV0dXJuIGNsb25lT2JqXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRGaWxsU3R5bGUgPSBmdW5jdGlvbihpbmRleCkge1xuICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gIH1cbiAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxufVxuXG5DaGFydC5wcm90b3R5cGUuZHJhd0FyYyA9IGZ1bmN0aW9uKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdLFxuICAgIGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpJXRoaXMuYW5nbGVzLmxlbmd0aF0sXG4gICAgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgY29udGV4dC5maWxsKClcbn1cblxuQ2hhcnQucHJvdG90eXBlLmRyYXdMaW1pdEltZyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGxldCBwb2ludCwgaW1nXG4gIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgfVxuXG4gIGlmIChpbWcpIHtcbiAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICB9XG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRBbmdsZXNEaWZmID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgcmV0dXJuIGFuZ2xlcy5tYXAoZnVuY3Rpb24oYW5nbGUpIHtcbiAgICBjb25zdCBkaWZmQW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgIHJldHVybiBkaWZmQW5nbGVcbiAgfSlcbn1cblxuQ2hhcnQucHJvdG90eXBlLmdldFBlcmNlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcChmdW5jdGlvbihkaWZmQW5nbGUpIHtcbiAgICByZXR1cm4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKVxuICB9KVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0QXJjQmlzZWN0cml4cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKGZ1bmN0aW9uKGRpZmZBbmdsZSwgaSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gIH0sIHRoaXMpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRBcmNPblBvaW50ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgY29uc3QgcmFkaXVzID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgIG9mZnNldCA9IGlcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIGlmICgtLWogPCAwKSB7XG4gICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgfVxuICByZXR1cm4galxufVxuXG5DaGFydC5wcm90b3R5cGUuc2V0QW5nbGVzID0gZnVuY3Rpb24oYW5nbGVzKSB7XG4gIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSwgaSkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV0sXG4gICAgICBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpLFxuICAgICAgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgICAgICAgKVxuXG4gICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gIH0sIHRoaXMpXG4gIHRoaXMuZHJhdygpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5zZXRBY3RpdmVBcmMgPSBmdW5jdGlvbihpbmRleCkge1xuICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlLCBpKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgfSlcbiAgdGhpcy5kcmF3KClcbn1cblxuZXhwb3J0IHsgY2hhcnRzLCBDaGFydCB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgYm91bmQsIEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogRHJhZ2VlLmJvdW5kLnRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2VlID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZWUgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKiogQXJyYXkgKioqKioqKioqKioqKiovXG5cbmlmICghQXJyYXkucHJvdG90eXBlLnJlbW92ZUl0ZW0pIHtcbiAgQXJyYXkucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbih2YWwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzW2ldID09PSB2YWwpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgaS0tXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqIDAwUCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgYXVnbWVudCA9IGZ1bmN0aW9uKHJlY2VpdmluZ0NsYXNzLCBnaXZpbmdDbGFzcykge1xuICAgIC8qIG9ubHkgcHJvdmlkZSBjZXJ0YWluIG1ldGhvZHMgKi9cbiAgaWYgKGFyZ3VtZW50c1syXSkge1xuICAgIGZvciAobGV0IGk9MiwgbGVuPWFyZ3VtZW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIGdpdmluZ0NsYXNzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgLyogY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSByZWNlaXZpbmcgY2xhc3MgZG9lc24ndFxuICAgICAgICAgICAgICAgaGF2ZSBhIG1ldGhvZCBvZiB0aGUgc2FtZSBuYW1lIGFzIHRoZSBvbmUgY3VycmVudGx5XG4gICAgICAgICAgICAgICBiZWluZyBwcm9jZXNzZWQgKi9cbiAgICAgIGlmICghcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYXVnbWVudChOb2RlTGlzdCwgQXJyYXksICdmb3JFYWNoJylcblxudHJ5IHtcbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18gJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICd4JywgeyBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IH0pLngpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ19fZGVmaW5lR2V0dGVyX18nLFxuICAgICAgeyBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24obmFtZSwgZnVuYykge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLFxuICAgICAgICAgICAgIHsgZ2V0OiBmdW5jLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ19fZGVmaW5lU2V0dGVyX18nLFxuICAgICAgeyBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24obmFtZSwgZnVuYykge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLFxuICAgICAgICAgICAgIHsgc2V0OiBmdW5jLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufSBjYXRjaCAoX2RlZlByb3BFeGNlcHRpb24pIHsgLypEbyBub3RoaW5nIGlmIGFuIGV4Y2VwdGlvbiBvY2N1cnMqLyB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsImltcG9ydCAnLi9leHBhbmRuYXRpdmUnXG5pbXBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QsIGxpc3RGYWN0b3J5IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5ICB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfSBmcm9tICcuL3NwaWRlcidcbmltcG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9IGZyb20gJy4vYXJjc2xpZGVyJ1xuaW1wb3J0IHsgY2hhcnRzLCBDaGFydCB9IGZyb20gJy4vY2hhcnQnXG5pbXBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfSBmcm9tICcuL2xpc3Rzd2l0Y2hlcidcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLFxuICBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSxcbiAgTGlzdCwgbGlzdEZhY3RvcnksXG4gIHRhcmdldHMsIFRhcmdldCxcbiAgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlLFxuICBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnksXG4gIGJvdW5kLFxuICBzcGlkZXJzLCBTcGlkZXIsXG4gIGFyY1NsaWRlcnMsIEFyY1NsaWRlcixcbiAgY2hhcnRzLCBDaGFydCxcbiAgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgbGlzdHMgPSBbXVxuXG5pbXBvcnQgeyByZW1vdmVJdGVtIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIGdldERpc3RhbmNlOiBHZW9tZXRyeS5nZXREaXN0YW5jZSxcbiAgICAgIGlzRGlzcGxhY2VtZW50OiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgbGlzdHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGxldCBtb3ZlSGFuZGxlclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzXG5cbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0Rpc3BsYWNlbWVudCkge1xuICAgICAgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdlZSkge1xuICAgICAgICAgIGxpc3Qub25TdGFydChkcmFnZ2FibGUpXG4gICAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUobW92ZUhhbmRsZXIpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKVxuICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPclNhdmUoZHJhZ2dhYmxlLCBwb3NpdGlvbiwgdGltZSkge1xuICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZWUpIHtcbiAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZSh0aGlzLmRyYWdnYWJsZXNbZXhjYW5nZUluZGV4XSwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLm1vdmUoZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2krMV0sIGZpeFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkcmFnZ2FibGUubW92ZShmaXhQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KGRyYWdnYWJsZSkge1xuICAgIGxldCBpXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBmb3IgKGkgPSBjdXJyZW50SW5kZXggKyAxOyBpIDwgc29ydGVkRHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpIC0gMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICB9XG4gICAgc29ydGVkRHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLmZpeFBvc2l0aW9uID0gZml4UG9zaXRpb25zW2kgLSAxXVxuICB9XG5cbiAgZ2V0Q3VycmVudEZpeFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IGluaXRQb3NpdGlvbnMubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pKVswXVxuICAgIH0pXG5cbiAgICByZXR1cm4gc29ydGVkRHJhZ2dhYmxlc1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5yZXNldCgpXG4gICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlc2V0KCkgLy90b2RvIHJlbW92ZSByZXNldCBpbiBmdXR1cmVcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0cywgTGlzdCwgbGlzdEZhY3RvcnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL2xpc3QnXG5cbmNsYXNzIExpc3RTd2l0Y2hlciBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgb3B0aW9ucy5zdGVwT24gPSBvcHRpb25zLnN0ZXBPbiB8fCBuZXcgUG9pbnQoLTUwLCAwKVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5pc09uID0gZmFsc2VcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLmlzRHJhZ2VlKSB7XG4gICAgICAgIHRoaXMuZml4VG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW92ZURyYWdnYWJsZVRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGUoaW5kZXgsIHBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbiwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtmaXhPZmZQb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24uYWRkKHRoaXMub3B0aW9ucy5zdGVwT24pXVxuICAgIGNvbnN0IGlzT24gPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KHBvc2l0aW9ucywgcG9zaXRpb24sIC0xLCBHZW9tZXRyeS5nZXRYRGlmZmVyZW5jZSlcblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gIT09ICEhaXNPbikge1xuICAgICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gISFpc09uXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShwb3NpdGlvbnNbaXNPbl0sIHRpbWUsIHRydWUpXG4gIH1cblxuICBmaXhUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24pIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uZml4UG9zaXRpb24gPSBmaXhPZmZQb3NpdGlvblxuICB9XG5cbiAgbW92ZURyYWdnYWJsZVRvT2ZmKGluZGV4LCBmaXhPZmZQb3NpdGlvbiwgdGltZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKGZpeE9mZlBvc2l0aW9uLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmlzT24gPyBkcmFnZ2FibGUuZml4UG9zaXRpb24uc3ViKHRoaXMub3B0aW9ucy5zdGVwT24pIDogZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICB9LCB0aGlzKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikgfHwgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24uYWRkKHRoaXMub3B0aW9ucy5zdGVwT24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICAgIGRyYWdnYWJsZS5pc09uID0gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgICBwb3NpdGlvbi5pc09uID0gZHJhZ2dhYmxlLmlzT25cbiAgICAgIHJldHVybiBwb3NpdGlvblxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLmlzT24gPSBwb2ludC5pc09uXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0U3dpdGNoZXJGYWN0b3J5KGVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuXG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgZWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IExpc3RTd2l0Y2hlcihkcmFnZ2FibGVzLCBsaXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBEcmFnZ2FibGUsICBUYXJnZXQsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5mdW5jdGlvbiBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zKSB7XG4gIHNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgICAgc2NvcGUuZHJhZ2dhYmxlcy5yZW1vdmVJdGVtKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldHMpIHtcbiAgICAgIHRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgc2NvcGUudGFyZ2V0cy5yZW1vdmVJdGVtKHRhcmdldClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICBzY29wZXMucHVzaCh0aGlzKVxuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgdGltZUVuZDogKG9wdGlvbnMgJiYgb3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgfVxuXG4gIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICB9XG4gIHRoaXMuaW5pdCgpXG59XG5cblNjb3BlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhhdC5vbkVuZCh0aGlzKVxuICAgIH0pXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5hZGREcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcblxuICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGF0Lm9uRW5kKHRoaXMpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5hZGRUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxufVxuXG5TY29wZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gIH0pLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gIH0pXG5cbiAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgfVxuICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICByZXR1cm4gdHJ1ZVxufVxuXG5TY29wZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlc2V0KClcbiAgfSlcbn1cblxuU2NvcGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICB9KVxuICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVmcmVzaCgpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKCdwb3NpdGlvbnMnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICB9LCB0aGlzKVxuICB9LCB0aGlzKVxufSlcblxuU2NvcGUucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKHBvc2l0aW9ucykge1xuICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5yZXNldCgpXG4gICAgfSwgdGhpcylcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXRJbmRleGVzLCBpKSB7XG4gICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgfSwgdGhpcylcbiAgICB9LCB0aGlzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxufSlcblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKCksXG4gICAgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5UYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgYm91bmQsIERyYWdnYWJsZSB9XG5jb25zdCBzcGlkZXJzID0gW11cblxuZnVuY3Rpb24gU3BpZGVyKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBhbmdsZTogMCxcbiAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICBzdGFydFJhZGl1czogNTAsXG4gICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgbGluZVdpZHRoOiAyLFxuICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gIH0sIG9wdGlvbnMpXG5cbiAgc3BpZGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuYXJlYSA9IGFyZWFcbiAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICB0aGlzLmluaXQoZWxlbWVudHMpXG59XG5cblNwaWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuY2FudmFzID0gRHJhZ2VlLnV0aWwuY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlLFxuICAgICAgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KSxcbiAgICAgIHN0YXJ0ID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSksXG4gICAgICBlbmQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSksXG4gICAgICBib3VuZCA9IERyYWdlZS5ib3VuZC50b0xpbmUoc3RhcnQsIGVuZClcblxuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgIG9uTW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZHJhdygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICB9LCB0aGlzKVxuXG4gIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICB0aGlzLmRyYXcoKVxufVxuXG5TcGlkZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHBvaW50LCBpXG4gIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgfVxuICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICB0aGlzLmNvbnRleHQuZmlsbCgpXG59XG5cbmV4cG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5mdW5jdGlvbiBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgRHJhZ2VlLnV0aWwuZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRpbWVFbmQ6IDIwMCxcbiAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgfSwgb3B0aW9ucylcblxuICB0YXJnZXRzLnB1c2godGhpcylcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH0pXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICB9XG4gIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgfVxuICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gIH1cblxuICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gIHRoaXMuaW5pdCgpXG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFJlY3RhbmdsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICAgIHRydWVcbiAgICApXG59XG5cblRhcmdldC5wcm90b3R5cGUuY2F0Y2hEcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCksXG4gICAgICBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIHRoaXMpXG5cbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgIGluZGV4ZXNPZk5ldyA9IERyYWdlZS51dGlsLnJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIERyYWdlZS5zY29wZXMuZm9yRWFjaChmdW5jdGlvbihzY29wZSkge1xuICAgIHNjb3BlLnRhcmdldHMucmVtb3ZlSXRlbSh0aGlzKVxuICB9LCB0aGlzKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgW10pXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG59XG5cblRhcmdldC5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblRhcmdldC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUsIGkpIHtcbiAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnJlbW92ZUl0ZW0oZHJhZ2dhYmxlKVxuXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgfSwgdGhpcylcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihkcmFnZ2FibGUsIHRpbWUpIHtcbiAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnB1c2hJbm5lckRyYWdnYWJsZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmFkZFJlbW92ZU9uTW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuXG4gIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoYXQucmVtb3ZlKGRyYWdnYWJsZSlcbiAgfSlcblxuICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIFtdKVxuXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG59XG5cblRhcmdldC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH0sIHRoaXMpXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTb3J0ZWREcmFnZ2FibGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbn1cblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbihzdW0sIHJ1bGUpIHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBlbGVtZW50LmZpcnN0Q2hpbGQgPyBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpIDogZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=
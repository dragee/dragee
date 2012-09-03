(function (global, MultiDrag){
	'use strict';
	var isTouch = 'ontouchstart' in window, mouseEvents = {
		start:'mousedown',
		move:'mousemove',
		end:'mouseup'
	},
	touchEvents = {
		start:'touchstart',
		move:'touchmove',
		end:'touchend'
	},
	events = isTouch ? touchEvents : mouseEvents,
	charts = [];

	function getArrayWithBoundIndexes(index,length){
		var retIndexes = [];
		if(index != -1){
			retIndexes.push(index);
			retIndexes.push((index + 1) % length);
		}
		return retIndexes;
	}


	function Chart(area, elements, options){
		var i, areaRectangle = mathPoint.createRectangleFromElement(area, area);
		this.options = {
			center: areaRectangle.getCenter(),
			radius: areaRectangle.getMinSide() / 2,
			touchRadius: areaRectangle.getMinSide() / 2,
			boundAngle: Math.PI/9,
			fillStyles: MultiDrag.util.range(0, elements.length).map(function(){
				return MultiDrag.util.randomColor();
			}),
			initAngles: MultiDrag.util.range(-90, 270, 360 / elements.length).map(function(angle){
				return mathPoint.toRadian(angle);
			}),
			onDraw:function(){},
			limitImg:null,
			isSelectable:false
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		charts.push(this);
		this.onDraw = this.options.onDraw;
		this.area = area;
		this.areaRectangle = areaRectangle;
		this.init(elements);
	}

	Chart.prototype.init = function (elements){
		var that = this;
		this.canvas = MultiDrag.util.createCanvas(this.area,this.areaRectangle);
		this.context = this.canvas.getContext("2d");
		this.objs = elements.map(function (el, i){
			var angle = this.options.initAngles[i],
				halfSize = mathPoint.getSizeOfElement(el).mult(0.5),
				position = mathPoint.getPointFromRadialSystem(angle, this.options.touchRadius, this.options.center.sub(halfSize)),
				bound = function(){
					return MultiDrag.boundFactory(MultiDrag.boundType.arc)(that.options.center.sub(halfSize),that.options.touchRadius,that.getBoundAngle(i,false),that.getBoundAngle(i,true));
				};
			return new MultiDrag.Obj(el, {parent:this.area, bound:bound, position:position, onMove:function (){
				that.draw();
				return true;
			}});
		}, this);
		this.isInit = true;
		if(this.options.isSelectable){
			this.initSelect();
		}
		this.draw();
	};

	Chart.prototype.initSelect = function (){
		var that = this;
		this.setActiveArc(-1);
		this.canvas.addEventListener(events.start,function(e){
			var point = new Point(isTouch ? e.changedTouches[0].pageX : e.clientX, isTouch ? e.changedTouches[0].pageY : e.clientY),
				index;
			if(!that.canvasOffset){
				that.canvasOffset = mathPoint.getOffset(that.canvas);
			}
			point = point.sub(that.canvasOffset);
			index = that.getArcOnPoint(point);
			if(index!=-1){
				that.setActiveArc(that.activeArcIndex !== index ?index : -1);
			}
		})
	};

	Chart.prototype.updateAngles = function (){
		this.angles = this.objs.map(function(obj){
			var halfSize = obj.getSize().mult(0.5);
			return mathPoint.getAngle(this.options.center.sub(halfSize),obj.position);
		},this);
	};

	Chart.prototype.getBoundAngle = function(index, isClossing){
		var that = this, sign = isClossing ? 1 : -1;
		return function(){
			var i = (index + sign) % that.angles.length;
			if(i < 0){
				i += that.angles.length;
			}
			return mathPoint.normalizeAngle(that.angles[i] - sign * that.options.boundAngle);
		}
	};

	Chart.prototype.draw = function (){
		if(!this.isInit){
			return;
		}
		this.updateAngles();
		this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
		this.objs.forEach(function(obj, index){
			this.drawArc(this.context, this.options.center, this.options.radius, index);
		}, this);
		this.objs.forEach(function(obj, index){
			var enableIndexes;
			if(this.options.isSelectable){
				enableIndexes = getArrayWithBoundIndexes(this.activeArcIndex, this.objs.length);
				if(enableIndexes.indexOf(index) !== -1){
					this.drawLimitImg(index);
				}
			}else{
				this.drawLimitImg(index);
			}
		}, this);
		this.onDraw();
	};

	Chart.prototype.createClone = function(el, options){
		var i, canvas, context, opts, rectangle, cloneObj,that = this;
		if(!this.isInit){
			return;
		}
		rectangle = mathPoint.createRectangleFromElement(el, el);
		opts = {
			center: rectangle.getCenter(),
			radius: rectangle.getMinSide() / 2,
			fillStyles: this.options.fillStyles
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				opts[i] = options[i];
			}
		}
		canvas = MultiDrag.util.createCanvas(el, rectangle);
		context = canvas.getContext("2d");
		cloneObj = {
			draw: function(){
				context.clearRect(0, 0, rectangle.size.x, rectangle.size.y);
				that.objs.forEach(function(obj, index){
					that.drawArc(context, opts.center, opts.radius, index);
				});
			}
		};
		cloneObj.draw();
		return cloneObj;
	};

	Chart.prototype.drawArc = function(context,center,radius,index){
		var startAngle = this.angles[index],
			endAngle = this.angles[(index+1)%this.angles.length],
			color = this.options.fillStyles[index];
		context.beginPath();
		context.moveTo(center.x, center.y);
		context.arc(center.x, center.y, radius, startAngle, endAngle, false);
		context.lineTo(center.x, center.y);
		context.closePath();
		context.fillStyle = color;
		context.fill();
	};

	Chart.prototype.drawLimitImg = function(index){
		var angle,point,img = this.options.limitImg;
		if(!img){
			return ;
		}
		angle = mathPoint.normalizeAngle(this.angles[index]);
		point = new Point(0,-img.height/2);
		this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2);
		this.context.rotate(angle);
		this.context.drawImage(this.options.limitImg, point.x, point.y);
		this.context.setTransform(1, 0, 0, 1, 0, 0);
	};

	Chart.prototype.getAnglesDiff = function(){
		var baseAngle = this.angles[0],
			angles = this.angles.slice(1);
			angles.push(baseAngle);
		return angles.map(function(angle){
			var diffAngle = mathPoint.normalizeAngle(angle - baseAngle);
			baseAngle = angle;
			return diffAngle;
		});
	};

	Chart.prototype.getPercent = function(){
		return this.getAnglesDiff().map(function(diffAngle){
			return diffAngle / (2 * Math.PI);
		});
	};

	Chart.prototype.getArcBisectrixs = function(){
		return this.getAnglesDiff().map(function(diffAngle,i){
			return mathPoint.normalizeAngle(this.angles[i] + diffAngle/2);
		},this);
	};

	Chart.prototype.getArcOnPoint = function(point){
		var angle = mathPoint.getAngle(this.options.center,point),i,offset,j,
			radius =  mathPoint.getLength()(this.options.center,point);
		if(radius > this.options.radius ){
			return -1;
		}
		offset = -1;
		for(i = 0; i < this.angles.length; i++){
			if(offset === -1 || this.angles[offset] > this.angles[i]){
				offset = i;
			}
		}
		for(i = 0,j = offset; i < this.angles.length; i++,j = (i + offset) % this.angles.length){
			if(angle < this.angles[j]){
				break;
			}
		}
		if(--j < 0){
			j += this.angles.length;
		}
		return j;
	};

	Chart.prototype.setActiveArc = function(index){
		var enableIndexes = getArrayWithBoundIndexes(index,this.objs.length);
		this.activeArcIndex = index;
		this.objs.forEach(function(obj,i){
			obj.enable = enableIndexes.indexOf(i) !== -1;
		});
		this.draw();
	};



	MultiDrag = MultiDrag || {};
	MultiDrag.charts = charts;
	MultiDrag.Chart = Chart;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);
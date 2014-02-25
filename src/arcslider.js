(function (global, MultiDrag){
	'use strict';
	var arcSliders = [];

	function getNearIndex(){

	}

	function ArcSlider(area, element, options){
		var i,areaRectangle = mathPoint.createRectangleFromElement(area, area),
			halfSize = mathPoint.getSizeOfElement(element).mult(0.5);
		this.options = {
			center: areaRectangle.getCenter(),
			radius: areaRectangle.getMinSide() / 2,
			startAngle: Math.PI,
			endAngle: 0,
			angles: [Math.PI,-Math.PI/4,0,Math.PI/4,Math.PI/2],
			onChange:function(){},
			time: 500
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.shiftedCenter = this.options.center.sub(halfSize);
		this.onChange = this.options.onChange;
		arcSliders.push(this);
		this.area = area;
		this.init(element);
	}

	ArcSlider.prototype.init = function (element){
		var that = this,
			angle = this.options.startAngle,
			position = mathPoint.getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter),
			bound = MultiDrag.boundFactory(MultiDrag.boundType.arc)(that.shiftedCenter,that.options.radius,this.options.startAngle,this.options.endAngle);
		this.angle = angle;
		this.obj = new MultiDrag.Obj(element, {parent:this.area, bound:bound, position:position, onMove:function (){
			that.change();
			return true;
		}});
	};


	ArcSlider.prototype.updateAngle = function (){
		this.angle = mathPoint.getAngle(this.shiftedCenter,this.obj.position);
	};

	ArcSlider.prototype.change = function (){
		this.updateAngle();
//		var angle = mathPoint.getNearestAngle(this.options.angles,this.angle);
//		this.setAngle(angle,this.options.time);
		this.onChange(this.angle);
	};

	ArcSlider.prototype.setAngle = function(angle,time){
		this.angle = mathPoint.normalizeAngle(angle,position);
		var position = mathPoint.getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
		this.obj.move(position,time||0,true,true);
		this.onChange(this.angle);
	};



	MultiDrag = MultiDrag || {};
	MultiDrag.arcSliders = arcSliders;
	MultiDrag.ArcSlider = ArcSlider;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);
(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {};

	function ListSwitcher(objs, options){
		options = options || {};
		options.stepOn = options.stepOn || new Point(-50, 0);
		MultiDrag.List.call(this, objs, options);
	}
	MultiDrag.util.extend(ListSwitcher, MultiDrag.List);

	ListSwitcher.prototype.init = function(){
		var that = this;
		this.objs.forEach(function(obj){
			obj.isOn = false;
			obj.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		});
	};

	ListSwitcher.prototype.onEnd = function(obj){
		var fixPositions = this.getCurrentFixPositionWithOff(), currentIndex, excangeIndex;
		currentIndex = this.objs.indexOf(obj);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			this.moveObj(currentIndex, obj.position, fixPositions[currentIndex], this.options.timeEnd);
		}else{
			if(this.objs[excangeIndex].isMultiDrag){
				this.fixToOff(excangeIndex, fixPositions[currentIndex]);
			}else{
				this.moveObjToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
			}
			this.moveObj(currentIndex, obj.position, fixPositions[excangeIndex], this.options.timeEnd);
			this.onChange.fire();
		}
		return true;
	};

	ListSwitcher.prototype.moveObj = function(index, position, fixOffPosition, time){
		var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)], isOn = mathPoint.indexOfNearPoint(positions, position, -1, mathPoint.getLength({x: true}));
		if(this.objs[index].isOn !== !!isOn){
			this.objs[index].isOn = !!isOn;
			this.onChange.fire();
		}
		this.objs[index].move(positions[isOn], time, true);
	};

	ListSwitcher.prototype.fixToOff = function(index, fixOffPosition){
		this.objs[index].isOn = false;
		this.objs[index].fixPosition = fixOffPosition;
	};

	ListSwitcher.prototype.moveObjToOff = function(index, fixOffPosition, time){
		this.objs[index].isOn = false;
		this.objs[index].move(fixOffPosition, time, true);
	};

	ListSwitcher.prototype.getCurrentFixPositionWithOff = function(){
		return this.objs.map(function(obj){
			return obj.isOn ? obj.fixPosition.sub(this.options.stepOn) : obj.fixPosition.clone();
		}, this);
	};

	ListSwitcher.prototype.getSortedObjs = function(){
		return this.objs.map(
				function(obj){
					return	 obj.initPosition;
				}).map(function(position){
						   return this.objs.filter(function(obj){
							   return obj.fixPosition.compare(position) || obj.fixPosition.compare(position.add(this.options.stepOn));
						   }, this)[0];
					   }, this);
	};

	ListSwitcher.prototype.reset = function(){
		this.objs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, false);
			obj.isOn = false;
		});
	};

	ListSwitcher.prototype.__defineGetter__("positions", function(){
		return this.objs.map(function(obj){
			var position = obj.fixPosition.clone();
			position.isOn = obj.isOn;
			return position;
		});
	});

	ListSwitcher.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.objs.length){
			positions.forEach(function(point, i){
				this.objs[i].isOn = point.isOn;
				this.objs[i].move(point, 0, true, true);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});


	 function listSwitcherFactory(el, objsElements, options){
		var objs, objOptions, listOptions;
		options = options || {};
		objOptions = options.obj || {};
		listOptions = options.list || {};
		objOptions.parent = objOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});
		return new ListSwitcher(objs, listOptions);
	}

	MultiDrag = MultiDrag || {};
	MultiDrag.ListSwitcher = ListSwitcher;
	MultiDrag.listSwitcherFactory = listSwitcherFactory;
	window.MultiDrag = MultiDrag;
})();
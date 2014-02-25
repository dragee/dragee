(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},lists = [];

	function List(objs, options){
		var i;
		this.options = {
			timeEnd: 200,
			timeExcange: 400,
			radius: 30,
			getLength: mathPoint.getLength(),
			isDisplacement:false
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.objs = objs;
		lists.push(this);
		this.onChange = MultiDrag.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	}

	List.prototype.init = function(){
		this._enable = true;
		this.objs.forEach(this.initObj,this);
	};

	List.prototype.initObj = function(obj){
		var moveHandler,that = this;
		obj.enable = this._enable;
		if(this.options.isDisplacement){
			moveHandler = function(){
				if(this.isMultiDrag){
					that.onStart(this);
					obj.onMove.remove(moveHandler);
					return true;
				}
			};
			obj.onEnd.add(function(){
				that.onEndDisplaycement(this);
				obj.onMove.add(moveHandler);
				return true;
			});
			obj.onMove.add(moveHandler);
		}else{
			obj.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		}
	};

	List.prototype.moveOrSave = function(obj,position,time){
		if(obj.isMultiDrag){
			obj.fixPosition = position;
		}else{
			obj.move(position, time, true);
		}
	};

	List.prototype.onEnd = function(obj){
		var fixPositions = this.getCurrentFixPosition(), currentIndex, excangeIndex;
		currentIndex = this.objs.indexOf(obj);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			obj.move(obj.fixPosition, this.options.timeEnd, true);
		}else{
			this.moveOrSave(this.objs[excangeIndex],fixPositions[currentIndex],this.options.timeExcange);
			this.objs[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
			this.onChange.fire();
		}
		return true;
	};

	List.prototype.onEndDisplaycement = function(obj){
		var currentIndex,i,targetIndex,
			sortedObjs = this.getSortedObjs(),
			fixPositions = sortedObjs.map(function(obj){
				return obj.fixPosition;
			});
		currentIndex = sortedObjs.indexOf(obj);
		targetIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(targetIndex !==-1){
			if(targetIndex < currentIndex){
				for(i = targetIndex ; i < currentIndex; i++){
					this.moveOrSave(sortedObjs[i],fixPositions[i+1],this.options.timeExcange);
				}
			}else{
				for(i = currentIndex; i < targetIndex; i++){
					this.moveOrSave(sortedObjs[i+1],fixPositions[i],this.options.timeExcange);
				}
			}
			obj.move(fixPositions[targetIndex],this.options.timeEnd, true);
		}else{
			obj.move(obj.fixPosition,this.options.timeEnd, true);
		}
	};

	List.prototype.onStart = function(obj){
		var currentIndex,i,
			sortedObjs = this.getSortedObjs(),
			fixPositions = sortedObjs.map(function(obj){
				return obj.fixPosition;
			});
		currentIndex = sortedObjs.indexOf(obj);
		for(i = currentIndex + 1; i < sortedObjs.length; i++){
			this.moveOrSave(sortedObjs[i],fixPositions[i-1],this.options.timeExcange);
		}
		sortedObjs[currentIndex].fixPosition = fixPositions[i-1];
	};



	List.prototype.getCurrentFixPosition = function(){
		return this.objs.map(function(obj){
			return obj.fixPosition.clone();
		});
	};

	List.prototype.getSortedObjs = function(){
		var sortedObjs,
			initPositions = this.objs.map(function(obj){
				return obj.initPosition;
			});
		sortedObjs = initPositions.map(function(position){
			return this.objs.filter(function(obj){
				return obj.fixPosition.compare(position);
			},this)[0];
		},this);
		return sortedObjs;
	};

	List.prototype.reset = function(){
		this.objs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, false);
		});
	};

	List.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
	};

	List.prototype.add = function(objs){
		var that = this;
		if(!(objs instanceof Array)){
			objs = [objs];
		}
		objs.forEach(this.initObj,this);
		this.objs = this.objs.concat(objs);
	};

	List.prototype.remove = function(objs){
		var j, initPositions = this.objs.map(function(obj){
				return obj.initPosition;
			}),
			list = [],
			sortedObj = this.getSortedObjs();
		if(!(objs instanceof Array)){
			objs = [objs];

		}
		objs.forEach(function(obj){
			obj.onEnd.reset();
			obj.onMove.reset();//todo remove reset in future
			MultiDrag.util.remove(this.objs,obj);
		}, this);
		j = 0;
		sortedObj.forEach(function(obj, i){
			if(this.objs.indexOf(obj) !== -1){
				if(obj.fixPosition !== initPositions[j]){
					obj.move(initPositions[j], this.options.timeExcange, true);
				}
				obj.initPosition = initPositions[j];
				j++;
				list.push(obj);
			}
		}, this);
		this.objs = list;
	};

	List.prototype.clear = function(){
		this.remove(this.objs.slice());
	};

	List.prototype.destroy = function(){
		this.objs.forEach(function(obj){
			obj.destroy();
		});
	};

	List.prototype.__defineGetter__("positions", function(){
		return this.getCurrentFixPosition();
	});

	List.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.objs.length){
			positions.forEach(function(point, i){
				this.objs[i].move(point, 0, true, true);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});

	List.prototype.__defineGetter__("enable", function(){
		return this._enable;
	});

	List.prototype.__defineSetter__("enable", function(value){
		this._enable = value;
		this.objs.forEach(function(obj){
			obj.enable = value;
		});
	});


	function listFactory(el, objsElements, options){
		var objs, objOptions, listOptions;
		options = options || {};
		objOptions = options.obj || {};
		listOptions = options.list || {};
		objOptions.parent = objOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});

		return new List(objs, listOptions);
	}

	MultiDrag.lists = lists;
	MultiDrag.List = List;
	MultiDrag.listFactory = listFactory;
	window.MultiDrag = MultiDrag;
})();
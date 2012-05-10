(function (global, MultiDrag){
	'use strict';
	var lists = [],listFactory, List = function (objs, options){
		var i;
		this.options = {
			timeEnd:200,
			timeExcange:400,
			radius:30
		};
		for(i in options){
			this.options[i] = options[i];
		}
		this.objs = objs
		lists.push(this);
		this.init();
	}

	List.prototype.init = function (){
		var that = this;
		this.objs.forEach(function (obj){
			obj.onEnd.add(function (){
				that.onEnd(this);
				return true;
			});
		});
	}

	List.prototype.onEnd = function (obj){
		var fixPositions = this.getCurrentFixPosition(), currentIndex, excangeIndex;
		currentIndex = this.objs.indexOf(obj);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius);
		if(excangeIndex == -1 || excangeIndex === currentIndex){
			obj.move(obj.fixPosition, this.options.timeEnd, true);
		}else{
			if(this.objs[excangeIndex].isMultiDrag){
				this.objs[excangeIndex].fixPosition = fixPositions[currentIndex];
			}else{
				this.objs[excangeIndex].move(fixPositions[currentIndex], this.options.timeExcange, true);
			}
			this.objs[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
		}
		return true;
	}

	List.prototype.getCurrentFixPosition = function (){
		return this.objs.map(function (obj){
			return obj.fixPosition.clone();
		});
	}

	List.prototype.getSortedObjs = function(){
		return this.objs.map(function(obj){
			return 	obj.initPosition;
		}).map(function(position){
			return this.objs.filter(function(obj){
				return obj.fixPosition.compare(position);
			})[0];
		},this);
	}

	listFactory = function(el,objsElements,options){
		var objs,objOptions,listOptions;
		options = options || {};
		objOptions = options.obj || {};
		listOptions = options.list || {};
		objOptions.parent = objOptions.parent || el;
		objsElements=Array.prototype.slice.call(objsElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el,objOptions);
		});

		return new List(objs,listOptions);
	}


	MultiDrag = MultiDrag || {};
	MultiDrag.lists = lists;
	MultiDrag.List = List;
	MultiDrag.listFactory = listFactory;
	global.MultiDrag = MultiDrag;
})(window, MultiDrag);
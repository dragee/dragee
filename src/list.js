'use strict';

var lists = [];

import util from './util'
import Event from './event'
import {mathPoint, Point} from './point'
import {bound} from './bound'
import {Draggable, draggables, events} from './draggable'

var Dragee = { util, bound, Draggable, events, Event };//todo remove after refactore


function List(draggables, options){
	var i;
	this.options = {
		timeEnd: 200,
		timeExcange: 400,
		radius: 30,
		getDistance: mathPoint.getDistance,
		isDisplacement: false
	};
	for(i in options){
		if(options.hasOwnProperty(i)){
			this.options[i] = options[i];
		}
	}
	this.draggables = draggables;
	lists.push(this);
	this.onChange = new Dragee.Event(this);
	if(options && options.onChange){
		this.onChange.add(options.onChange);
	}
	this.init();
}

List.prototype.init = function(){
	this._enable = true;
	this.draggables.forEach(this.initDraggable, this);
};

List.prototype.initDraggable = function(draggable){
	var moveHandler, that = this;
	draggable.enable = this._enable;
	if(this.options.isDisplacement){
		moveHandler = function(){
			if(this.isDragee){
				that.onStart(this);
				draggable.onMove.remove(moveHandler);
				return true;
			}
		};
		draggable.onEnd.add(function(){
			that.onEndDisplaycement(this);
			draggable.onMove.add(moveHandler);
			return true;
		});
		draggable.onMove.add(moveHandler);
	}else{
		draggable.onEnd.add(function(){
			that.onEnd(this);
			return true;
		});
	}
};

List.prototype.moveOrSave = function(draggable, position, time){
	if(draggable.isDragee){
		draggable.fixPosition = position;
	}else{
		draggable.move(position, time, true);
	}
};

List.prototype.onEnd = function(draggable){
	var fixPositions = this.getCurrentFixPosition(), currentIndex, excangeIndex;
	currentIndex = this.draggables.indexOf(draggable);
	excangeIndex = mathPoint.indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);
	if(excangeIndex === -1 || excangeIndex === currentIndex){
		draggable.move(draggable.fixPosition, this.options.timeEnd, true);
	}else{
		this.moveOrSave(this.draggables[excangeIndex], fixPositions[currentIndex], this.options.timeExcange);
		this.draggables[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
		this.onChange.fire();
	}
	return true;
};

List.prototype.onEndDisplaycement = function(draggable){
	var currentIndex, i, targetIndex,
		sortedDraggables = this.getSortedDraggables(),
		fixPositions = sortedDraggables.map(function(draggable){
			return draggable.fixPosition;
		});
	currentIndex = sortedDraggables.indexOf(draggable);
	targetIndex = mathPoint.indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);
	if(targetIndex !==-1){
		if(targetIndex < currentIndex){
			for(i=targetIndex; i<currentIndex; i++){
				this.moveOrSave(sortedDraggables[i], fixPositions[i+1], this.options.timeExcange);
			}
		} else {
			for(i=currentIndex; i<targetIndex; i++){
				this.moveOrSave(sortedDraggables[i+1], fixPositions[i], this.options.timeExcange);
			}
		}
		draggable.move(fixPositions[targetIndex], this.options.timeEnd, true);
	} else {
		draggable.move(draggable.fixPosition, this.options.timeEnd, true);
	}
};

List.prototype.onStart = function(draggable){
	var currentIndex,i,
		sortedDraggables = this.getSortedDraggables(),
		fixPositions = sortedDraggables.map(function(draggable){
			return draggable.fixPosition;
		});

	currentIndex = sortedDraggables.indexOf(draggable);
	for(i = currentIndex + 1; i < sortedDraggables.length; i++){
		this.moveOrSave(sortedDraggables[i],fixPositions[i-1],this.options.timeExcange);
	}
	sortedDraggables[currentIndex].fixPosition = fixPositions[i-1];
};



List.prototype.getCurrentFixPosition = function(){
	return this.draggables.map(function(draggable){
		return draggable.fixPosition.clone();
	});
};

List.prototype.getSortedDraggables = function(){
	var sortedDraggables,
		initPositions = this.draggables.map(function(draggable){
			return draggable.initPosition;
		});
	sortedDraggables = initPositions.map(function(position){
		return this.draggables.filter(function(draggable){
			return draggable.fixPosition.compare(position);
		},this)[0];
	},this);
	return sortedDraggables;
};

List.prototype.reset = function(){
	this.draggables.forEach(function(draggable){
		draggable.move(draggable.initPosition, 0, true, false);
	});
};

List.prototype.refresh = function(){
	this.draggables.forEach(function(draggable){
		draggable.refresh();
	});
};

List.prototype.add = function(draggables){
	if(!(draggables instanceof Array)){
		draggables = [draggables];
	}
	draggables.forEach(this.initDraggable, this);
	this.draggables = this.draggables.concat(draggables);
};

List.prototype.remove = function(draggables){
	var j, initPositions = this.draggables.map(function(draggable){
			return draggable.initPosition;
		}),
		list = [],
		sortedDraggables = this.getSortedDraggables();
	if(!(draggables instanceof Array)){
		draggables = [draggables];

	}
	draggables.forEach(function(draggable){
		draggable.onEnd.reset();
		draggable.onMove.reset();//todo remove reset in future
		this.draggables.removeItem(draggable);
		Dragee.util.remove(this.draggables, draggable);
	}, this);
	j = 0;
	sortedDraggables.forEach(function(draggable, i){
		if(this.draggables.indexOf(draggable) !== -1){
			if(draggable.fixPosition !== initPositions[j]){
				draggable.move(initPositions[j], this.options.timeExcange, true);
			}
			draggable.initPosition = initPositions[j];
			j++;
			list.push(draggable);
		}
	}, this);
	this.draggables = list;
};

List.prototype.clear = function(){
	this.remove(this.draggables.slice());
};

List.prototype.destroy = function(){
	this.draggables.forEach(function(draggable){
		draggable.destroy();
	});
};

List.prototype.__defineGetter__("positions", function(){
	return this.getCurrentFixPosition();
});

List.prototype.__defineSetter__("positions", function(positions){
	var message = "wrong array length";
	if(positions.length === this.draggables.length){
		positions.forEach(function(point, i){
			this.draggables[i].move(point, 0, true, true);
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
	this.draggables.forEach(function(draggable){
		draggable.enable = value;
	});
});


function listFactory(parentElement, elements, options){
	var draggables, draggableOptions, listOptions;
	options = options || {};
	draggableOptions = options.draggable || {};
	listOptions = options.list || {};
	draggableOptions.parent = draggableOptions.parent || parentElement;
	elements = Array.prototype.slice.call(elements);

	draggables = elements.map(function(element){
		return new Dragee.Draggable(element, draggableOptions);
	});

	return new List(draggables, listOptions);
}

export {lists, List, listFactory};

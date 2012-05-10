(function (global, MultiDrag, undefined){
	'use strict';

	var targets =[],
	Target = function(el,objs,options){
		options = options || {};
		var i,parent = options.parent || MultiDrag.util.getDafaultParent(el);
		this.options = {
			timeEnd:200,
			timeExcange:400,
			isReCalculateRectangle:false,
			parent:parent,
			isChangeHtmlParent:false,
			sorting: MultiDrag.SortingFactory(MultiDrag.positionType.floatLeft)(80,mathPoint.getLength({x:1,y:4,IsTransformationSpace:true})),
			positioning : MultiDrag.positionFactory(MultiDrag.positionType.floatLeft)(MultiDrag.util.bind(this.getRectangle,this),{isRemove:true})
		};
		for (i in options){
			this.options[i] = options[i];
		}
		targets.push(this);
		this.el = el;
		this.objs = objs;
		this.onAdd = MultiDrag.util.triggerFactory({context:this});
		this.onRemove = MultiDrag.util.triggerFactory({context:this});
		options.onRemove && this.onRemove.add(options.onRemove);
		options.onAdd && this.onRemove.add(options.onAdd);
		this.init();
	};


	Target.prototype.getRectangle = function(){
		if(!this._rectangle || this.options.isReCalculateRectangle || this.options.isChangeHtmlParent){
			this._rectangle = mathPoint.createRectangleFromElement(this.el,this.options.parent,this.options.isContentBoxSize,true);
		}
		return this._rectangle;
	};

	Target.prototype.init = function(){
		var objsRectagles,indexesOfNew;
		this.objOnMoveDictionary = MultiDrag.util.dictionFactory();
		this.innerObjs = this.objs.filter(function(obj){
			var el = obj.el.parentNode;
			while( el ){
				if(el === this.el ){
					return true;
				}
				el = el.parentNode;
			}
			return false;
		},this);
		indexesOfNew = MultiDrag.util.range(this.innerObjs.length);
		objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}),indexesOfNew);
		this.setPosition(objsRectagles,indexesOfNew);
		this.innerObjs.forEach(function(obj){
			this.onAdd(obj);
		},this);
	};

	Target.prototype.refresh = function(){
		var objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}),[]);
		this.setPosition(objsRectagles,[]);
	};

	Target.prototype.onEnd = function(obj){
		var newObjsIndex=[],objsRectagles,isOn = this.getRectangle().isOn(obj.getCenter());
		if(!isOn){
			return false;
		}
		this.innerObjs = this.options.sorting(this.innerObjs,[obj],newObjsIndex);
		objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}),newObjsIndex);

		this.setPosition(objsRectagles,newObjsIndex);
		this.add(obj);
		return true;
	};

	Target.prototype.setPosition = function(rectangles,indexesOfNew,time){
		this.innerObjs.slice(0).forEach(function(obj,i){
			var rect = rectangles[i],that = this,
			timeEnd = time !== undefined ? time :
						indexesOfNew.indexOf(i) !== -1 ?
							this.options.timeEnd :
							this.options.timeExcange;
			if(rect.isRemove){
				obj.move(obj.initPosition,timeEnd,true,true);
				MultiDrag.util.remove(this.innerObjs,obj);
				this.options.isChangeHtmlParent && obj._initialParent && setTimeout(function(){
					obj.changeHtmlParent(obj._initialParent);
				},time+10);
			}else{
				obj.move(rect.position,timeEnd,true,true);
				this.options.isChangeHtmlParent && setTimeout(function(){
					obj.changeHtmlParent(that.el);
				},time+10);
			}
		},this);
	};

	Target.prototype.add = function(obj){
		var that = this;
		obj.onMove.add(
			this.objOnMoveDictionary.setValue(obj,function(){
				return that.remove(this);
			})
		);
		this.onAdd.fire(obj);
	};

	Target.prototype.remove = function(obj){
		var index,objsRectagles;
		obj.onMove.remove(this.objOnMoveDictionary.remove(obj));
		index = this.innerObjs.indexOf(obj);
		if( index === -1){
			return;
		}
		this.innerObjs.splice(index,1);
		objsRectagles = this.options.positioning(this.innerObjs.map(function(obj){
			return obj.getRectangle();
		}),[]);
		this.setPosition(objsRectagles,[]);
		this.onRemove.fire(obj);
	};

	Target.prototype.getSortedObjs = function(){
		this.innerObjs.slice();
	}

	MultiDrag = MultiDrag || {};
	MultiDrag.targets = targets;
	MultiDrag.Target = Target;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);
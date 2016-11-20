'use strict';

import util from './util'
import Event from './event'
import {Draggable} from './draggable'
import {targets, Target} from './target'

var Dragee = { util, Draggable,  Target, Event };//todo remove after refactore

var scopes = [], defaultScope;

function Scope(draggables, targets, options){
    scopes.forEach(function(scope){
        draggables && draggables.forEach(function(draggable){
            scope.draggables.removeItem(draggable);
        });
        targets && targets.forEach(function(target){
            scope.targets.removeItem(target);
        });
    });

    this.draggables = draggables || [];
    this.targets = targets || [];
    scopes.push(this);
    this.options = {
        timeEnd: (options && options.timeEnd) || 400
    };

    this.onChange = new Dragee.Event(this);
    if(options && options.onChange){
        this.onChange.add(options.onChange);
    }
    this.init();
}

Scope.prototype.init = function(){
    var that = this;
    this.draggables.forEach(function(draggable){
        draggable.onEnd.add(function(){
            return that.onEnd(this);
        });
    });
};

Scope.prototype.addDraggable = function(draggable){
    var that = this;

    this.draggables.push(draggable);
    draggable.onEnd.unshift(function(){
        return that.onEnd(this);
    });
};

Scope.prototype.addTarget = function(target){
    this.targets.push(target);
};

Scope.prototype.onEnd = function(draggable){
    var shotTargets = this.targets.filter(function(target){
        return target.draggables.indexOf(draggable) !== -1;
    }).filter(function(target){
        return target.catchDraggable(draggable);
    }).sort(function(a, b){
        return a.getRectangle().getSquare() - b.getRectangle().getSquare();
    });

    if(shotTargets.length){
        shotTargets[0].onEnd(draggable);
    } else if(draggable.targets.length) {
        draggable.move(draggable.initPosition, this.options.timeEnd, true, true);
    }
    this.onChange.fire();
    return true;
};

Scope.prototype.reset = function(){
    this.targets.forEach(function(target){
        target.reset();
    });
};

Scope.prototype.refresh = function(){
    this.draggables.forEach(function(draggable){
        draggable.refresh();
    });
    this.targets.forEach(function(target){
        target.refresh();
    });
};

Scope.prototype.__defineGetter__("positions", function(){
    return this.targets.map(function(target){
        return target.innerDraggables.map(function(draggable){
            return this.draggables.indexOf(draggable);
        }, this);
    }, this);
});

Scope.prototype.__defineSetter__("positions", function(positions){
    var message = "wrong array length";
    if(positions.length === this.targets.length){
        this.targets.forEach(function(target){
            target.reset();
        }, this);
        positions.forEach(function(targetIndexes, i){
            targetIndexes.forEach(function(index){
                this.targets[i].add(this.draggables[index]);
            }, this);
        }, this);
    }else{
        alert(message);
        throw message;
    }
});

defaultScope = new Scope();

function scope(fn){
    var currentScope = new Scope(),
        addDraggableToScope = function(draggable){
            currentScope.addDraggable(draggable);
            return true;
        },
        addTargetToScope = function(target){
            currentScope.addTarget(target);
            return true;
        };

    Draggable.onCreate.add(addDraggableToScope);
    Target.onCreate.add(addTargetToScope);
    fn.call();
    Draggable.onCreate.remove(addDraggableToScope);
    Target.onCreate.remove(addTargetToScope);
    return currentScope;
}

function scopeFactory(parentElement, draggableElements, targetElements, options){
    var draggables, targets, draggableOptions, targetOptions, scopeOptions;
    options = options || {};
    draggableOptions = options.draggable || {};
    targetOptions = options.target || {};
    scopeOptions = options.scope || {};
    draggableOptions.parent = draggableOptions.parent || parentElement;
    targetOptions.parent = targetOptions.parent || parentElement;
    draggableElements = Array.prototype.slice.call(draggableElements);
    targetElements = Array.prototype.slice.call(targetElements);

    draggables = draggableElements.map(function(element){
        return new Dragee.Draggable(element, draggableOptions);
    });

    targets = targetElements.map(function(el){
        return new Dragee.Target(element, draggables, targetOptions);
    });
    return new Scope(draggables, targets, scopeOptions);
}

export {scopes, defaultScope, Scope, scopeFactory, scope};

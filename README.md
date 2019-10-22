# Dragee

[dragee.github.io](http://dragee.github.io) - drag&drop library for desktop and touch devices

# Draggable
```javascript
new Draggable(element[, options])
```
##### Example:
```javascript
function boundPoint(point, size){ return point; }

this.draggable = new Draggable(that.element, {
    bounding: {
        bound: boundPoint
    },
    on: {
        'drag:move': () => this.moveCorners(),
        'drag:end': () => this.onEnd()
    }
});
```

# Dragee.Target
```javascript
Target(element, draggables[, options])
```

##### Example:
```javascript
this.target = new Dragee.Target(element, draggables, {
    parent: targetAreaElement,
    strategy: new Dragee.NotCrossingStrategy(() => target.getRectangle()),
    on: {
        'target:add': (draggable) => addClass(draggable.element, "ontarget"),
        'target:remove': (draggable) => removeClass(draggable.element, "ontarget"),
    }
});
```

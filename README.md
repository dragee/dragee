# Dragee

[dragee.github.io](http://dragee.github.io) - drag&drop library for desltop and touch devices

# Dragee.Draggable
```javascript
Draggable(element[, options])
```
##### Example:
```javascript
function boundPoint(point, size){ return point; }

that.draggable = new Dragee.Draggable(that.element, {
    bound: boundPoint,
    onMove: that.moveCorners.bind(this),
    onEnd: onEnd
});
```

# Dragee.Target
```javascript
Target(element, draggables[, options])
```

##### Example:
```javascript
var target = new Dragee.Target(element, draggables, {
    parent: targetAreaElement,
    positioning: Dragee.positionFactory(Dragee.positionType.notCrossing)(function(){
        return target.getRectangle();
    }),
    sorting: Dragee.sortingFactory(Dragee.positionType.notCrossing)(),
    onAdd: function(draggable){
        draggable.element.addClass("ontarget");
    },
    onRemove: function(draggable){
        draggable.element.removeClass("ontarget");
    }
});
```

# Development

## install
`npm install`

## commands
`npm run build`
`npm run dev`

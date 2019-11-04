# Dragee.Target

```javascript
Target(element, draggables[, options])
```

### Options:

`timeEnd` - time to move `Dragee.Draggable` to endpoint.
`timeExcange` - time to exchange `Dragee.Draggables`.
`parent` - HTMLElement that define Cartesian coordinates system.
`strategy` - class of `Strategy` thad describe positioning and sorting `Draggables` inside target

### Callbacks:

`target:add`, `target:remove`

### Defaults:

```javascript
timeEnd: 200,
timeExcange: 400,
parent: Dragee.util.getDefaultParent(element),
strategy: new FloatLeftStrategy(
  	this.getRectangle.bind(this),
  	{
    	radius: 80,
    	getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 }),
    	removable: true
  	}
)
```

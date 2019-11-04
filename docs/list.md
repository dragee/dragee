# Dragee.List

```javascript
Dragee.List(draggables[, options])
```

### Options:

timeEnd - time to move `Dragee.Draggable` to endpoint.
timeExcange - time to exchange `Dragee.Draggables`.
getDistance - function that determines distance between two `Draggable`. It take two arguments - p1 and p2.
radius - radius that determine if we can excange two `Draggable`.

During dragging we search nearest `Draggable` from list and if distance between them is less than radius, we excange their positions.

### Defaults:

```javascript
timeEnd: 200,
timeExcange: 400,
radius: 30,
getDistance: Dragee.getDistance
``

# List

```javascript
Dragee.List(draggables[, options])
```

During dragging we search nearest `Draggable` from list and if distance between them is less than radius, we excange their positions

## Options:

### getDistance

Function that calculate distance from one draggable to other.
We already implemented `getDistance`, `getXDifference` and `getYDifference` functions.
By default we use `getDistance` function.

```javascript
import { distance, List } from 'dragee'

new List(draggables, {
    getDistance: getYDifference
})

new List(draggables, {
    getDistance: (p1, p2) => Math.abs(p1.x - p2.x)
})
```

### radius
radius that determine if we can excange two `Draggable`.
Default: 30px

### timeEnd
time to move `draggable` to endpoint
Default: 200ms

### timeExcange
time to exchange two `draggables`
Default: 400ms

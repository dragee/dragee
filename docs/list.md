## List

During dragging we search nearest `Draggable` from list and if distance between them is less than radius, we excange their positions

```javascript
Dragee.List(draggables[, options])
```

## Example:

```html
<ul id="listA" class="list">
    <li>↔ A</li>
    <li>↔ B</li>
    ...
    <li>↔ Z</li>
</ul>
```

```javascript
const container = document.getElementById("listA")
const elements = [...container.querySelectorAll("li")]
const draggables = elements.map((element) => new Draggable(element, { parent: container})

new List(draggables)
````

## Options:

### getDistance

Function that calculate distance from one draggable to other.
We already implemented `getDistance`, `getXDifference` and `getYDifference` functions.
By default we use `getDistance` function.

```javascript
import { getYDifference, List } from 'dragee'

new List(draggables, {
    getDistance: getYDifference
})

new List(draggables, {
    getDistance: (p1, p2) => Math.abs(p1.x - p2.x)
})
```

### sorting

By default we sort by `y` value. If it's equal, then by `x`. But it's possible to customize this behaviour

### radius
radius that determine if we can excange two `Draggable`.
Default: 30px

### timeEnd
time to move `draggable` to endpoint
Default: 200ms

### timeExcange
time to exchange two `draggables`
Default: 400ms

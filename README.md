# Getting Started

Install with npm

```
npm install dragee
```

Install with yarn
```
yarn add dragee
```

# Usage

## Draggable

```javascript
import { Draggable } from 'dragee'
new Draggable(element[, options])
```


### Listeners
```javascript
new Draggable(element, {
    on: {
        'drag:start': () => addClass(element, 'is-dragging')
        'drag:move': () => console.log('drag:move')
        'drag:end': () => removeClass(element, 'is-dragging')
    }
})
```

### bound
`bound` is function that restrict movements of `Draggable`.
Bounding conception can help us to restrict `draggable` movements. We can set to move it insite rectangle, by circle, by line, etc.
By default we will resctrict movements inside `container` rectangle


![Скриншот 2019-11-04 20 10 03](https://user-images.githubusercontent.com/244409/68145781-36dd3500-ff3f-11e9-8ab2-5f0d22b1d448.png)

```javascript
import { BoundToCircle } from 'dragee'

new Draggable(element, {
    bound(point, size) {
        const retPoint = point.clone()
        retPoint.y = calculusFx(point.x)
        return retPoint
    }
})

new Draggable(element, {
    bound: BoundToCircle.bounding(new Dragee.Point(100, 90), 80)
})
```

Predefined boundings:
```javascript
BoundToElemen.bounding(element, container)
BoundToRectangle.bounding(rectangle)
BoundTolineX.bounding(x, startY, endY)
BoundTolineY.bounding(y, startX, endX)
BoundToLine.bounding(startPoint, endPoint)
BoundToCircle.bounding(center, radius)
BoundToArc.bounding(center, radius, startAgle, endAngle)
```

### Other Options
| **Option** | **Type** | **Default** | **Description** |
| --- | :---: | :---: | --- |
| `handler` | `string/element` | null | specifies on what element the drag interaction starts. |
| `container` | `element` | auto | HTMLElement that define Cartesian coordinates system. It's upper left corner is taken as the origin. By default we calculate `container` automatically by finding first `parentNode` that have non `static` positioning. |
| `position` | `Point` | auto | Start positioning. By default we automatically calculate position inside `container` element. |
| `isContentBoxSize` | `Boolean` | `true` | You can identify  that we should take into account element borders and paddings when we calculate draggable size. |
| `nativeDragAndDrop` | `Boolean` | `false` | There can be situations where we need to use html5 drag&drop instead of `dragee` realization. Example: `table>tr` have a lot of issues, so it's easier to fix them using html5 drag&drop realization or emulation. |
| `emulateNativeDragAndDropOnTouch` | `Boolean` | `true` | Emulate native drag&drop on touch devices. |
| `emulateNativeDragAndDropForAll` | `Boolean` | `false` | Emulate native drag&drop on all browsers. |
| `moveBackOnEnd` | `Boolean` | `false` | Move draggable to initial position on dragend |

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
const draggables = elements.map((element) => new Draggable(element, { container })

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


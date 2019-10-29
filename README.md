# Getting Started

Install with npm

```
npm install dragee
```

Install with yarn
```
yarn add dragee
```

Import to you project
```javascript
import { Draggable, List, ... } from Dragee
```

# Usage

## Draggable
```html
<div class="area">
    <div id="draggable">
        <i class="icon-move"></i> A
    </div>
</div>
```

```javascript
var element = document.getElementById('draggable')
new Draggable(element)
```

## Bounding

We can describe bounding for `Draggable` movements. We can restrict to move inside parent, using line description, circle description, etc.

```javascript
new Draggable(draggableAElement, {
    bounding: Dragee.bound.BoundToCircle(new Point(100, 90), 80),
    position: new Point(100, 10)
})

function calculusFx(x) {
    x = x/100;
    return (x*Math.sin(x*x)+1)*10 + 80;
}

new Dragee.Draggable(draggableBElement, {
    bounding: {
        bound: (point, size) => {
            const retPoint = point.clone()
            retPoint.y = calculusFx(point.x)
            return retPoint
        }
    },
    position: new Point(210, calculusFx(210))
});
```

## List
```html
<ul id="listA" class="list">
    <li>↔ A</li>
    <li>↔ B</li>
    <li>↔ C</li>
    <li>↔ D</li>
    <li>↔ E</li>
    <li>↔ F</li>
</ul>
```

```javascript
const container = document.getElementById("listA")
const elements = [...container.querySelectorAll("li")]

const draggables = elements.map((element) => {
  return new Draggable(element, {
    parent: container
  })
})

const new List(draggables, {
    getDistance: Dragee.distance.getYDifference
})
````

or

```javascript
List.factory(listAParentElement, listAElements, {
    list: {
        getDistance: Dragee.distance.getYDifference
    }
});
```


# Dragee

[![npm version](https://badge.fury.io/js/dragee.svg)](https://badge.fury.io/js/dragee)

A lightweight, dependency-free JavaScript library for drag and drop, sortable lists, and target-based interactions.

[Full Documentation](https://dragee.github.io/)

## Installation

```bash
npm install dragee
```

## Core Components

### Draggable

The base class for making elements draggable.

```javascript
import { Draggable } from 'dragee';

const element = document.getElementById('draggable');
const calculusFx = (x) => {
  x = x / 100;
  return (x * Math.sin(x * x) + 1) * 10 + 80;
};

new Draggable(element, {
  bound: (point, size) => {
    const retPoint = point.clone();
    retPoint.y = calculusFx(point.x);
    return retPoint;
  },
  position: new Point(210, calculusFx(210))
});

// Events
draggable.on('drag:start', (event) => console.log('Started dragging'));
draggable.on('drag:move', (event) => console.log('Dragging'));
draggable.on('drag:end', (event) => console.log('Finished dragging'));
```

![Draggable Bounding Demo](https://user-images.githubusercontent.com/244409/68145781-36dd3500-ff3f-11e9-8ab2-5f0d22b1d448.png)

### Predefined Bounding Functions

Dragee provides several predefined bounding functions to constrain draggable movement:

```javascript
// Bound to element's boundaries
BoundToElement.bounding(element, container)

// Bound to specific rectangle
BoundToRectangle.bounding(rectangle)

// Bound to vertical line with Y-axis constraints
BoundToLineX.bounding(x, startY, endY)

// Bound to horizontal line with X-axis constraints
BoundToLineY.bounding(y, startX, endX)

// Bound to line between two points
BoundToLine.bounding(startPoint, endPoint)

// Bound to circle
BoundToCircle.bounding(center, radius)

// Bound to arc
BoundToArc.bounding(center, radius, startAngle, endAngle)
```

### Sortable

Two types of sortable lists are available:

#### List
Basic sortable list implementation.

```javascript
import { Draggable, List } from 'dragee';

const gridContainer = document.querySelector('.grid-container');
const gridItems = gridContainer.querySelectorAll('.grid-item');

const gridDraggables = Array.from(gridItems).map(item =>
  new Draggable(item, {
    container: gridContainer,
    nativeDragAndDrop: true
  })
);

new List(gridDraggables)
```

#### BubblingList
Vertical sortable list that uses bubbling algorithm for smooth and natural sorting behavior.

```javascript
import { Draggable, BubblingList } from 'dragee';

const listContainer = document.querySelector('.sortable-demo-list');
const listItems = listContainer.querySelectorAll('.items')

const draggableItems = Array.from(listItems).map(item => {
  new Draggable(item, {
    container: listContainer,
    nativeDragAndDrop: true,
    emulateNativeDragAndDropOnTouch: true
  })
});

new BubblingList(draggableItems);
```

![Sotrable BubblingList Demo](https://github.com/user-attachments/assets/29d6eb14-485e-44e4-bf04-9f6f3ffe2609)

### Targets

Target areas for draggable elements.

```javascript
import { Target, FloatLeftStrategy, transformedSpaceDistanceFactory } from 'dragee'

const target = new Target(element, draggables, {
  timeEnd: 200,
  timeExcange: 400,
  parent: parentElement,
  strategy: new FloatLeftStrategy(
    () => target.getRectangle()
    {
      radius: 80,
      getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 }),
      removable: true
    }
  )
});
```

### Target Strategies

#### FloatLeftStrategy
Orders draggables from top to bottom, positioning them on the left side of the target area.

```javascript
new Target(element, draggables, {
  strategy: new FloatLeftStrategy(
    () => target.getRectangle(),
    {
      radius: 80,
      getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 })
    }
  )
});
```

#### FloatRightStrategy
Orders draggables from top to bottom, positioning them on the right side of the target area.

```javascript
new Target(element, draggables, {
  strategy: new FloatRightStrategy(
    () => target.getRectangle(),
    {
      radius: 80,
      getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 })
    }
  )
});
```

#### NotCrossingStrategy
A free-form positioning strategy that prevents draggables from overlapping. Items can be placed anywhere within the target area but will maintain their own space without intersecting with other items.

```javascript
new Target(element, draggables, {
  strategy: new NotCrossingStrategy(
    () => target.getRectangle()
  )
});
```

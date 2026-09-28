
# Dragee

[![npm version](https://badge.fury.io/js/dragee.svg)](https://badge.fury.io/js/dragee)
[![bundle size](https://img.shields.io/bundlephobia/minzip/dragee)](https://bundlephobia.com/package/dragee)
[![license](https://img.shields.io/npm/l/dragee)](https://github.com/dragee/dragee/blob/master/LICENSE)

Precise, constraint-based drag-and-drop for JavaScript. Zero dependencies. 7 geometric bounds. Sortable lists. Multi-target scoping.

[Documentation & Demos](https://dragee.github.io/) | [GitHub](https://github.com/dragee/dragee)

## Installation

```bash
npm install dragee
```

```javascript
import { Draggable, Point } from 'dragee'       // ESM
const { Draggable, Point } = require('dragee')   // CommonJS
```

## Quick Start

```javascript
import { Draggable } from 'dragee'

new Draggable(document.getElementById('my-element'))
```

That's it. The element is now draggable within its offset parent.

## Draggable

The core class for making elements draggable with optional movement constraints.

```javascript
import { Draggable, Point, BoundToElement } from 'dragee'

const draggable = new Draggable(element, {
  container: parentElement,
  position: new Point(100, 50),
  bound: (point, size) => {
    point.y = Math.max(0, point.y)
    return point
  },
  handler: '.drag-handle',
  nativeDragAndDrop: true,
  on: {
    'drag:start': () => console.log('started'),
    'drag:end': () => console.log('ended')
  }
})
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `container` | `Element` | `element.offsetParent` | Coordinate space for position calculations |
| `parent` | `Element` | — | Alias for `container` |
| `position` | `Point` | current offset | Initial position |
| `bound` / `bounding` | `(point, size) => Point` or `Bound` | identity | Movement constraint function or Bound instance |
| `handler` | `Element` \| `string` | `element` | Sub-element (or CSS selector) that starts the drag |
| `dragStartThreshold` | `number` | `0` | Pixels the pointer must travel before drag activates |
| `touchDraggingThreshold` | `number` | `0` | Milliseconds to distinguish touch scroll from drag |
| `dragOverThrottleDuration` | `number` | `16` | Throttle duration (ms) for native drag-over events |
| `considerTransformOffset` | `boolean` | `false` | Use `getBoundingClientRect` instead of `offsetLeft/Top` |
| `scrollRootContainer` | `Element` | `container` | Root for scroll element chain detection |
| `shouldRemoveZeroTranslate` | `boolean` | `false` | Remove `translate3d(0,0,0)` when resting |
| `nativeDragAndDrop` | `boolean` | `false` | Use HTML5 Drag and Drop API |
| `emulateNativeDragAndDropOnTouch` | `boolean` | `false` | Emulate native DnD on touch devices |
| `stopPropagationOnDragStart` | `boolean` | `false` | Stop event propagation on drag start |
| `copyStyles` | `function` | — | Custom function to copy styles during touch DnD emulation |
| `on` | `object` | — | Event listeners: `{ 'drag:start': fn, ... }` |

### Events

| Event | Description |
| --- | --- |
| `drag:start` | Drag begins (after threshold is met) |
| `drag:move` | Position updates during dragging |
| `drag:end` | Drag finishes |

### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `move` | `(point, time?, isSilent?)` | Move to point with optional animation (ms) |
| `pinPosition` | `(point, time?, silent?)` | Move and remember as the pinned (rest) position |
| `setPosition` | `(point)` | Set position instantly, no animation |
| `resetPositionToInitial` | `()` | Return to the initial position |
| `refreshPosition` | `()` | Re-read and re-apply current position |
| `getPosition` | `()` → `Point` | Get current position |
| `getCenter` | `()` → `Point` | Get center point of element |
| `getSize` | `()` → `Point` | Get element dimensions (width, height) |
| `getRectangle` | `()` → `Rectangle` | Get Rectangle from position + size |
| `cancelDragging` | `()` | Cancel active drag, remove move/end listeners |
| `refresh` | `()` | Refresh bounding constraints |
| `destroy` | `()` | Remove all listeners, clean up |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The DOM element |
| `position` | `Point` | Current position |
| `pinnedPosition` | `Point` | Last pinned (rest) position |
| `initialPosition` | `Point` | Position from construction |
| `isDragging` | `boolean` | Whether currently being dragged |
| `targets` | `Target[]` | Targets this draggable belongs to |
| `enable` | `boolean` | Get/set to enable or disable dragging |

### Static

`Draggable.emitter` — global EventEmitter that fires `draggable:create` for every new Draggable instance.

---

## Bounding

Dragee provides 7 geometric constraint classes. Each has a static `.bounding()` factory that returns a plain function, or you can pass an instance directly.

```javascript
import { Draggable, BoundToElement, BoundToCircle, Point } from 'dragee'

// Using the .bounding() factory (returns a function)
new Draggable(el, {
  bound: BoundToElement.bounding(containerEl, parentEl)
})

// Using an instance directly (has .bound() and .refresh() methods)
new Draggable(el, {
  bounding: new BoundToCircle(new Point(200, 200), 100)
})
```

| Class | Constructor | Description |
| --- | --- | --- |
| `Bound` | `()` | Base class, passes point through unchanged |
| `BoundToRectangle` | `(rectangle)` | Constrain within a Rectangle |
| `BoundToElement` | `(element, container?)` | Constrain within element boundaries (auto-refreshes) |
| `BoundToLineX` | `(x, startY, endY)` | Constrain to vertical line at `x`, between `startY` and `endY` |
| `BoundToLineY` | `(y, startX, endX)` | Constrain to horizontal line at `y`, between `startX` and `endX` |
| `BoundToLine` | `(startPoint, endPoint)` | Constrain to the line segment between two Points |
| `BoundToCircle` | `(center, radius)` | Constrain to circle perimeter |
| `BoundToArc` | `(center, radius, startAngle, endAngle)` | Constrain to arc segment (angles can be functions) |

### Custom Bounding Function

```javascript
new Draggable(el, {
  bound: (point, size) => {
    // point — current position (Point)
    // size — element dimensions (Point)
    // return constrained Point
    return new Point(
      Math.max(0, Math.min(300 - size.x, point.x)),
      point.y
    )
  }
})
```

---

## Sortable Lists

### List

Proximity-based sortable list. Swaps items when a dragged element gets within `radius` of another slot.

```javascript
import { Draggable, List } from 'dragee'

const container = document.querySelector('.grid')
const items = container.querySelectorAll('.item')

const draggables = Array.from(items).map(item =>
  new Draggable(item, { container, nativeDragAndDrop: true })
)

const list = new List(draggables, {
  radius: 40,
  reorderOnChange: true,
  container
})

list.on('list:change', () => console.log('order changed'))
```

#### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `200` | Animation ms when dropped |
| `timeExcange` | `number` | `400` | Animation ms for swapping items |
| `radius` | `number` | `30` | Distance threshold for nearest slot detection |
| `container` | `Element` | — | Container for resize observation |
| `reorderOnChange` | `boolean` | `false` | Reorder DOM elements on swap |
| `sorting` | `(a, b) => number` | by y, then x | Custom sort comparator |
| `getDistance` | `(p1, p2) => number` | Euclidean | Custom distance function |
| `on` | `object` | — | Event listeners |

#### Events

| Event | Description |
| --- | --- |
| `list:change` | List order changed (items swapped) |
| `list:reordered` | DOM elements reordered (when `reorderOnChange: true`) |

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `add` | `(draggable \| draggable[])` | Add items to the list |
| `remove` | `(draggable \| draggable[])` | Remove items, reflow positions |
| `clear` | `()` | Remove all items |
| `destroy` | `()` | Destroy list and all draggables |
| `reset` | `()` | Reset all to initial positions |
| `refresh` | `()` | Refresh all positions |
| `getSortedDraggables` | `()` → `Draggable[]` | Get current order |
| `getCurrentPinnedPositions` | `()` → `Point[]` | Get all pinned positions |

#### Properties

| Property | Type | Description |
| --- | --- | --- |
| `draggables` | `Draggable[]` | All draggables in the list |
| `positions` | `Point[]` | Get/set all pinned positions |
| `enable` | `boolean` | Get/set to enable/disable all dragging |
| `swappingDisabled` | `boolean` | Get/set to disable item swapping during drag |

### BubblingList

Single-axis sortable list (vertical or horizontal) with a bubbling algorithm for smooth, natural sorting behavior. Items are laid out one after another from the first item's position, so they can have different sizes. Extends `List`.

```javascript
import { Draggable, BubblingList } from 'dragee'

const container = document.querySelector('.vertical-list')
const items = container.querySelectorAll('.item')

const draggables = Array.from(items).map(item =>
  new Draggable(item, {
    container,
    nativeDragAndDrop: true,
    emulateNativeDragAndDropOnTouch: true
  })
)

new BubblingList(draggables, { container, reorderOnChange: true })
```

Horizontal list — pass `axis: 'x'`:

```javascript
new BubblingList(draggables, { container, axis: 'x', gap: 8, reorderOnChange: true })
```

#### Additional Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `axis` | `'y' \| 'x'` | `'y'` | List direction: `'y'` — vertical, `'x'` — horizontal |
| `gap` | `number` | auto-detected | Gap between items along the axis (detected from the first two items if not set; `0` is respected) |
| `verticalGap` | `number` | — | Deprecated alias for `gap` |

#### Additional Properties

| Property | Type | Description |
| --- | --- | --- |
| `gap` | `number` | Get/set the gap between items |

Uses `getYDifference` (or `getXDifference` when `axis: 'x'`) as the default distance function. Inherits all List options, methods, events, and properties.

---

## Target

Drop zone container that accepts draggable elements and positions them using a strategy.

```javascript
import { Target, Draggable, FloatLeftStrategy, transformedSpaceDistanceFactory } from 'dragee'

const targetEl = document.querySelector('.drop-zone')
const draggables = [/* array of Draggable instances */]

const target = new Target(targetEl, draggables, {
  timeEnd: 200,
  timeExcange: 400,
  container: parentElement,
  strategy: new FloatLeftStrategy(
    () => target.getRectangle(),
    {
      radius: 80,
      getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 }),
      removable: true
    }
  )
})

target.on('target:add', (draggable) => console.log('added', draggable.element))
target.on('target:remove', (draggable) => console.log('removed', draggable.element))
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `200` | Animation ms for new items entering |
| `timeExcange` | `number` | `400` | Animation ms for repositioning existing items |
| `strategy` | `Strategy` | `FloatLeftStrategy` | Positioning strategy instance |
| `bound` | `(point, size) => Point` | `BoundToElement` | Post-drop constraint |
| `catchDraggable` | `(target, draggable) => boolean` | center inclusion | Custom hit-test for accepting drops |
| `container` / `parent` | `Element` | `element.offsetParent` | Coordinate space |
| `on` | `object` | — | Event listeners |

### Events

| Event | Arguments | Description |
| --- | --- | --- |
| `target:beforeAdd` | `draggable` | Before a draggable is added |
| `target:add` | `draggable` | After a draggable is added |
| `target:remove` | `draggable` | After a draggable is removed |

### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `add` | `(draggable, time?)` | Programmatically add a draggable |
| `remove` | `(draggable)` | Remove a draggable from the target |
| `reset` | `()` | Remove all draggables, reset to initial state |
| `refresh` | `()` | Recalculate positions for all inner draggables |
| `destroy` | `()` | Remove target from all scopes |
| `getRectangle` | `()` → `Rectangle` | Get target's Rectangle |
| `getPosition` | `()` → `Point` | Get target's position |
| `getSize` | `()` → `Point` | Get target's size |
| `getSortedDraggables` | `()` → `Draggable[]` | Get inner draggables in order |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The target DOM element |
| `innerDraggables` | `Draggable[]` | Draggables currently inside the target |
| `draggables` | `Draggable[]` | All draggables associated with this target |
| `container` | `Element` | Coordinate space element |

### Static

`Target.emitter` — global EventEmitter that fires `target:create` for every new Target instance.

---

## Positioning Strategies

All strategies accept `(rectangle, options?)` where `rectangle` is a `Rectangle` or a function returning one.

### FloatLeftStrategy

Positions items top-to-bottom, left-aligned. Items that overflow the bottom are marked removable.

```javascript
import { FloatLeftStrategy, transformedSpaceDistanceFactory } from 'dragee'

new FloatLeftStrategy(() => target.getRectangle(), {
  radius: 80,
  paddingTopLeft: new Point(10, 10),
  paddingBottomRight: new Point(10, 10),
  yGapBetweenDraggables: 5,
  getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 }),
  removable: true
})
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `number` | `80` | Detection radius for insertion sorting |
| `paddingTopLeft` | `Point` | `(0, 0)` | Padding from top-left corner |
| `paddingBottomRight` | `Point` | `(0, 0)` | Padding from bottom-right corner |
| `yGapBetweenDraggables` | `number` | `0` | Vertical gap between items |
| `getDistance` | `(p1, p2) => number` | Euclidean | Distance function for sorting |
| `getPosition` | `(draggable) => Point` | `d.position` | Position getter for sorting |
| `removable` | `boolean` | `true` | Mark items outside bounds as removable |

### FloatRightStrategy

Positions items top-to-bottom, right-aligned. Extends `FloatLeftStrategy`.

```javascript
import { FloatRightStrategy } from 'dragee'

new FloatRightStrategy(() => target.getRectangle(), {
  paddingTopRight: new Point(5, 5),
  paddingBottomLeft: new Point(0, 0),
  yGapBetweenDraggables: 5
})
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `paddingTopRight` | `Point` | `(5, 5)` | Padding from top-right corner |
| `paddingBottomLeft` | `Point` | `(0, 0)` | Padding from bottom-left corner |
| `yGapBetweenDraggables` | `number` | `0` | Vertical gap between items |

### NotCrossingStrategy

Free-form positioning that prevents draggables from overlapping. Items can be placed anywhere within the target but will not intersect.

```javascript
import { NotCrossingStrategy } from 'dragee'

new NotCrossingStrategy(() => target.getRectangle())
```

---

## Scope

Scope groups draggables and targets together, managing which draggables can interact with which targets. Without explicit scoping, all instances share a single `defaultScope`.

### scope() Helper

The simplest way to create an isolated scope. Everything created inside the callback automatically belongs to the same scope.

```javascript
import { scope, Draggable, Target } from 'dragee'

const kanbanScope = scope(() => {
  const cards = items.map(el => new Draggable(el))
  const columns = columnEls.map(el => new Target(el, cards))
})

kanbanScope.on('scope:change', () => {
  console.log('positions:', kanbanScope.positions)
})
```

### Scope Class

```javascript
import { Scope } from 'dragee'

const myScope = new Scope(draggables, targets, { timeEnd: 400 })
```

#### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `400` | Animation ms when returning to initial position |

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `addDraggable` | `(draggable)` | Add a draggable to this scope |
| `addTarget` | `(target)` | Add a target to this scope |
| `reset` | `()` | Reset all targets to initial state |
| `refresh` | `()` | Refresh all draggables and targets |

#### Properties

| Property | Type | Description |
| --- | --- | --- |
| `draggables` | `Draggable[]` | All draggables in scope |
| `targets` | `Target[]` | All targets in scope |
| `positions` | `number[][]` | Get/set draggable indexes per target |

#### Events

| Event | Description |
| --- | --- |
| `scope:change` | A draggable was dropped into a target |

### Exported Utilities

- `defaultScope` — the global scope all instances join by default
- `scopes` — array of all scope instances

---

## Geometry Utilities

### Point

Represents a 2D point or vector.

```javascript
import { Point } from 'dragee'

const a = new Point(10, 20)
const b = new Point(5, 5)

a.add(b)       // Point(15, 25)
a.sub(b)       // Point(5, 15)
a.mult(2)      // Point(20, 40)
a.negative()   // Point(-10, -20)
a.compare(b)   // false
a.clone()      // Point(10, 20)
```

**Static methods:**

| Method | Returns | Description |
| --- | --- | --- |
| `Point.elementOffset(element, parent?)` | `Point` | Offset position relative to parent |
| `Point.elementBoundingOffset(element, parent?)` | `Point` | Bounding rect offset (considers transforms) |
| `Point.elementSize(element)` | `Point` | Element width/height from bounding rect |

### Rectangle

Represents a positioned rectangle.

```javascript
import { Rectangle, Point } from 'dragee'

const rect = new Rectangle(new Point(0, 0), new Point(100, 50))
rect.getP1()            // top-left
rect.getP2()            // top-right
rect.getP3()            // bottom-right
rect.getP4()            // bottom-left
rect.getCenter()        // center Point
rect.getSquare()        // area (5000)
rect.includePoint(p)    // boolean
rect.includeRectangle(r) // boolean
rect.or(otherRect)      // union Rectangle
rect.and(otherRect)     // intersection Rectangle (or null)
```

**Static:** `Rectangle.fromElement(element, parent?, isConsiderTranslate?)` — create from DOM element.

### Distance Functions

```javascript
import { getDistance, getXDifference, getYDifference, transformedSpaceDistanceFactory, indexOfNearestPoint } from 'dragee'

getDistance(p1, p2)          // Euclidean distance
getXDifference(p1, p2)      // |p1.x - p2.x|
getYDifference(p1, p2)      // |p1.y - p2.y|

// Weighted distance (useful for lists with wide items)
const weightedDist = transformedSpaceDistanceFactory({ x: 1, y: 4 })
weightedDist(p1, p2)

// Find nearest point in array within radius
indexOfNearestPoint(pointArray, target, radius, distanceFn?)
```

---

## EventEmitter

All dragee classes extend EventEmitter. Available on any instance:

| Method | Description |
| --- | --- |
| `on(eventName, fn)` | Add a listener; returns a function that removes it |
| `off(eventName, fn)` / `unsubscribe(eventName, fn)` | Remove a listener |
| `once(eventName, fn)` | Add a listener called only for the next event |
| `prependOn(eventName, fn)` | Add a listener before the others; returns a function that removes it |
| `resetOn(eventName)` | Remove all listeners of the event |
| `resetEmitter()` | Remove all listeners |

Constructor shorthand with the `on` option:

```javascript
new Draggable(el, {
  on: {
    'drag:start': () => {},
    'drag:end': () => {}
  }
})
```

---

## CSS Classes

Dragee automatically applies these classes during lifecycle:

| Class | Applied when |
| --- | --- |
| `dragee-active` | Element is being dragged |
| `dragee-disable` | `enable` is set to `false` |
| `dragee-placeholder` | Original element during native DnD (ghost visible) |
| `dragee-native-emulation` | Cloned element during touch DnD emulation |

---

## License

ISC

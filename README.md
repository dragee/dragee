
# Dragee

[![npm version](https://badge.fury.io/js/dragee.svg)](https://badge.fury.io/js/dragee)
[![bundle size](https://img.shields.io/bundlephobia/minzip/dragee)](https://bundlephobia.com/package/dragee)
[![license](https://img.shields.io/npm/l/dragee)](https://github.com/dragee/dragee/blob/master/LICENSE)

Precise, constraint-based drag-and-drop for JavaScript. Zero dependencies. 7 geometric bounds. Sortable lists (vertical and horizontal). Multi-tray scoping. Bubbling DOM events for easy framework integration.

[Documentation & Demos](https://dragee.github.io/) | [GitHub](https://github.com/dragee/dragee)

## Installation

```bash
npm install dragee
```

```javascript
import { Draggable, Point } from 'dragee'       // ESM
const { Draggable, Point } = require('dragee')   // CommonJS
```

## Browser support

Dragee 2 relies on [subclassing `EventTarget`](https://caniuse.com/mdn-api_eventtarget_eventtarget) and on the [`signal` option of `addEventListener`](https://caniuse.com/mdn-api_eventtarget_addeventlistener_options_parameter_options_signal_parameter): Chrome / Edge 90+, Firefox 86+, Safari 15+ (iOS 15+). For older browsers use dragee 1.x.

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
    'drag:start': ({ draggable }) => console.log('started', draggable),
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
| `handler` | `Element` \| `string` | `element` | Sub-element (or CSS selector) that starts the drag. Pressing an `input`, `textarea`, `select` or `contenteditable` inside the draggable never starts one, so these fields can be focused and edited |
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
| `domEvents` | `boolean` | `true` | Dispatch `dragee:*` DOM events on the element |
| `scope` | `Scope` | current scope | Scope to join instead of the one `scope()` is running or `defaultScope` |
| `on` | `object` | — | Event listeners: `{ 'drag:start': fn, ... }` |

### Events

| Event | Event data | DOM event | Description |
| --- | --- | --- | --- |
| `drag:start` | `{ draggable }` | `dragee:start` | Drag begins (after threshold is met). **Cancelable** |
| `drag:move` | `{ draggable }` | `dragee:move` | Position updates during dragging |
| `drag:release` | `{ draggable }` | `dragee:release` | Draggable is released, before it is placed. **Cancelable** |
| `drag:end` | `{ draggable }` | `dragee:end` | Drag finishes |

Each event is also dispatched as a bubbling DOM `CustomEvent` on the element. That makes it possible to listen on a common ancestor instead of every draggable:

```javascript
container.addEventListener('dragee:end', ({ draggable }) => {
  console.log('dropped', draggable.element)
})
```

Calling `event.cancel()` on `drag:start` (or on `dragee:start`) cancels the drag:

```javascript
draggable.on('drag:start', (event) => {
  if (isLocked) event.cancel()
})
```

By default a released draggable is pinned where it was dropped. Calling `event.cancel()` on `drag:release` skips that, so the draggable can be placed differently:

```javascript
draggable.on('drag:release', (event) => {
  event.cancel()
  draggable.pinPosition(snapToGrid(draggable.position), { duration: 200 })
})
```

Lists and scopes place their draggables through the same event and leave the drop alone when an earlier listener has already called `cancel()`.

### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `move` | `(point, { duration?, silent? })` | Move to point, animated over `duration` ms (default `0`); `silent: true` skips `drag:move` |
| `pinPosition` | `(point, { duration?, silent? })` | Move and remember as the pinned (rest) position; silent by default |
| `setPosition` | `(point)` | Set position instantly, no animation |
| `resetPositionToInitial` | `()` | Return to the initial position |
| `refreshPosition` | `()` | Re-read and re-apply current position |
| `remeasure` | `()` | Re-read the element's place in the layout after it changed; a draggable at its initial position moves to the new one, others keep their position |
| `getPosition` | `()` → `Point` | Get current position |
| `getCenter` | `()` → `Point` | Get center point of element |
| `getSize` | `()` → `Point` | Get element dimensions (width, height) |
| `getRectangle` | `()` → `Rectangle` | Get Rectangle from position + size |
| `cancelDragging` | `()` | Cancel active drag, remove move/end listeners |
| `refresh` | `()` | Refresh bounding constraints |
| `destroy` | `()` | Remove all listeners, including those of a drag in progress, and remove the draggable from its scope and trays |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The DOM element |
| `position` | `Point` | Current position |
| `pinnedPosition` | `Point` | Last pinned (rest) position |
| `initialPosition` | `Point` | Position from construction |
| `isDragging` | `boolean` | Whether currently being dragged |
| `trays` | `Tray[]` | Trays this draggable belongs to |
| `enable` | `boolean` | Get/set to enable or disable dragging |

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

list.on('list:change', ({ draggable }) => console.log('order changed by', draggable.element))
```

#### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `200` | Animation ms when dropped |
| `timeExchange` | `number` | `400` | Animation ms for swapping items |
| `radius` | `number` | `30` | Distance threshold for nearest slot detection |
| `container` | `Element` | — | Container for resize observation |
| `reorderOnChange` | `boolean` | `false` | Reorder DOM elements on swap (within their parent element; `container` is not required) |
| `sorting` | `(a, b) => number` | by y, then x | Custom sort comparator |
| `getDistance` | `(p1, p2) => number` | Euclidean | Custom distance function |
| `domEvents` | `boolean` | `true` | Dispatch `dragee:*` DOM events (see Events) |
| `on` | `object` | — | Event listeners |

#### Events

| Event | Event data | DOM event | Description |
| --- | --- | --- | --- |
| `list:change` | `{ list, draggable }` | `dragee:list-change` | List order changed (items swapped); `draggable` is the dragged item |
| `list:reordered` | `{ list, draggable }` | `dragee:list-reordered` | DOM elements reordered (when `reorderOnChange: true`); `draggable` is the moved item |

DOM events are dispatched from the dragged item's element and bubble, so they reach the list container and any ancestor even without the `container` option. With nested lists use `event.list` to tell them apart.

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
| `positions` | `Point[]` | Get/set all pinned positions; setting an array of the wrong length throws a `RangeError` |
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
| `verticalGap` | `number` | — | Alias for `gap` |

#### Additional Properties

| Property | Type | Description |
| --- | --- | --- |
| `gap` | `number` | Get/set the gap between items |

Uses `getYDifference` (or `getXDifference` when `axis: 'x'`) as the default distance function. Inherits all List options, methods, events, and properties.

---

## Tray

A container that draggables are dropped into: it accepts them, lays them out with a positioning strategy and releases a draggable as soon as it is dragged away. When the layout changes, for example on window resize, a tray re-measures its draggables and lays them out again.

```javascript
import { Tray, Draggable, FloatLeftStrategy, transformedSpaceDistanceFactory } from 'dragee'

const trayEl = document.querySelector('.drop-zone')
const draggables = [/* array of Draggable instances */]

const tray = new Tray(trayEl, draggables, {
  timeEnd: 200,
  timeExchange: 400,
  container: parentElement,
  strategy: new FloatLeftStrategy(
    () => tray.getRectangle(),
    {
      radius: 80,
      getDistance: transformedSpaceDistanceFactory({ x: 1, y: 4 }),
      removable: true
    }
  )
})

tray.on('tray:add', ({ draggable }) => console.log('added', draggable.element))
tray.on('tray:remove', ({ draggable }) => console.log('removed', draggable.element))
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `200` | Animation ms for new items entering |
| `timeExchange` | `number` | `400` | Animation ms for repositioning existing items |
| `strategy` | `Strategy` | `FloatLeftStrategy` | Positioning strategy instance |
| `bound` | `(point, size) => Point` | `BoundToElement` | Post-drop constraint |
| `catchDraggable` | `(tray, draggable) => boolean` | center inclusion | Custom hit-test for accepting drops |
| `container` / `parent` | `Element` | `element.offsetParent` | Coordinate space |
| `domEvents` | `boolean` | `true` | Dispatch `dragee:*` DOM events (see Events) |
| `scope` | `Scope` | current scope | Scope to join instead of the one `scope()` is running or `defaultScope` |
| `on` | `object` | — | Event listeners |

### Events

| Event | Event data | DOM event | Description |
| --- | --- | --- | --- |
| `tray:beforeAdd` | `{ tray, draggable }` | `dragee:tray-before-add` | Before a draggable is added. **Cancelable** |
| `tray:add` | `{ tray, draggable }` | `dragee:tray-add` | After a draggable is added |
| `tray:remove` | `{ tray, draggable }` | `dragee:tray-remove` | After a draggable is removed |

Calling `event.cancel()` on `tray:beforeAdd` refuses the draggable: a dropped one returns to its initial position, and `add()` does nothing. For example, to limit a column to 5 cards:

```javascript
tray.on('tray:beforeAdd', (event) => {
  if (tray.innerDraggables.length >= 5) event.cancel()
})
```

DOM events are dispatched from the tray element and bubble. For example, one listener on a kanban board can track all its columns:

```javascript
board.addEventListener('dragee:tray-add', ({ tray, draggable }) => {
  console.log(draggable.element, 'moved to', tray.element)
})
```

### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `add` | `(draggable, { duration? })` | Programmatically add a draggable, animated over `duration` ms (default `0`) |
| `accept` | `(draggable)` | Let a draggable be dropped into this tray without placing it there |
| `remove` | `(draggable)` | Remove a draggable from the tray |
| `releaseDraggable` | `(draggable)` | Stop accepting a draggable (the reverse of `accept`); `draggable.destroy()` calls it for each of its trays |
| `reset` | `()` | Remove all draggables, reset to initial state |
| `refresh` | `()` | Recalculate positions for all inner draggables |
| `destroy` | `()` | Stop watching its draggables and remove the tray from all scopes |
| `getRectangle` | `()` → `Rectangle` | Get tray's Rectangle |
| `getPosition` | `()` → `Point` | Get tray's position |
| `getSize` | `()` → `Point` | Get tray's size |
| `getSortedDraggables` | `()` → `Draggable[]` | Get inner draggables in order |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The tray DOM element |
| `innerDraggables` | `Draggable[]` | Draggables currently inside the tray |
| `draggables` | `Draggable[]` | All draggables associated with this tray |
| `container` | `Element` | Coordinate space element |

---

## Positioning Strategies

All strategies accept `(rectangle, options?)` where `rectangle` is a `Rectangle` or a function returning one.

### FloatLeftStrategy

Positions items top-to-bottom, left-aligned. Items that overflow the bottom are marked removable.

```javascript
import { FloatLeftStrategy, transformedSpaceDistanceFactory } from 'dragee'

new FloatLeftStrategy(() => tray.getRectangle(), {
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

new FloatRightStrategy(() => tray.getRectangle(), {
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

Free-form positioning that prevents draggables from overlapping. Items can be placed anywhere within the tray but will not intersect.

```javascript
import { NotCrossingStrategy } from 'dragee'

new NotCrossingStrategy(() => tray.getRectangle())
```

---

## Scope

Scope groups draggables and trays together, managing which draggables can interact with which trays. Without explicit scoping, all instances share a single `defaultScope`.

### scope() Helper

The simplest way to create an isolated scope. Everything created inside the callback automatically belongs to the same scope. `scope()` calls can be nested: instances join the innermost one.

```javascript
import { scope, Draggable, Tray } from 'dragee'

const kanbanScope = scope(() => {
  const cards = items.map(el => new Draggable(el))
  const columns = columnEls.map(el => new Tray(el, cards))
})

kanbanScope.on('scope:change', ({ draggable }) => {
  console.log('dropped', draggable.element, 'positions:', kanbanScope.positions)
})
```

Only instances created while the callback runs join the scope. For ones created later, for example after an `await` or from an "Add card" button, pass the scope explicitly and let the trays accept them:

```javascript
const card = new Draggable(el, { scope: kanbanScope })
columns.forEach((column) => column.accept(card))
```

### Scope Class

```javascript
import { Scope } from 'dragee'

const myScope = new Scope(draggables, trays, { timeEnd: 400 })
```

#### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `400` | Animation ms when returning to initial position |

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `addDraggable` | `(draggable)` | Move a draggable into this scope (it leaves its previous scope) |
| `addTray` | `(tray)` | Move a tray into this scope (it leaves its previous scope) |
| `reset` | `()` | Reset all trays to initial state |
| `refresh` | `()` | Refresh all draggables and trays |

#### Properties

| Property | Type | Description |
| --- | --- | --- |
| `draggables` | `Draggable[]` | All draggables in scope |
| `trays` | `Tray[]` | All trays in scope |
| `positions` | `number[][]` | Get/set draggable indexes per tray; setting an array of the wrong length throws a `RangeError` |

#### Events

| Event | Event data | Description |
| --- | --- | --- |
| `scope:change` | `{ scope, draggable }` | A draggable that belongs to trays was dropped |

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

## Events

Every dragee instance (`Draggable`, `List`, `BubblingList`, `Tray`, `Scope`) is a standard [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget). Listeners receive a `CustomEvent` that carries the payload as its own properties, so handlers can destructure it, e.g. `({ draggable }) => {}`; the same data is also in `event.detail`. Cancelable events are canceled with `event.cancel()` (`event.preventDefault()` works too); call it on the event itself, since a destructured method loses its `this`.

```javascript
draggable.addEventListener('drag:end', ({ draggable }) => console.log(draggable))
```

| Method | Description |
| --- | --- |
| `on(eventName, fn, options?)` | `addEventListener`; returns a function that removes the listener |
| `off(eventName, fn)` / `unsubscribe(eventName, fn)` | `removeEventListener` |
| `once(eventName, fn)` | Add a listener called only for the next event |

Standard listener options such as `{ signal }` work with `on()` too:

```javascript
const controller = new AbortController()
draggable.on('drag:move', handler, { signal: controller.signal })
controller.abort()
```

Constructor shorthand with the `on` option:

```javascript
new Draggable(el, {
  on: {
    'drag:start': (event) => {},
    'drag:end': (event) => {}
  }
})
```

`Draggable`, `List` and `Tray` also dispatch bubbling `dragee:*` DOM events (see their Events tables); disable them with the `domEvents: false` option.

---

## Migrating from 1.x

- **Browser support:** Chrome / Edge 90+, Firefox 86+, Safari 15+ are required (see [Browser support](#browser-support)).
- **Listeners receive an `Event`** that carries the payload: `tray.on('tray:add', ({ draggable }) => {})` instead of `target.on('target:add', (draggable) => {})`.
- **`Target` is renamed to `Tray`**, together with `draggable.trays`, `scope.trays` / `scope.addTray()`, the `tray:*` / `dragee:tray-*` events and the `{ tray, draggable }` event data.
- **`move()`, `pinPosition()` and `Tray.add()` take an options object:** `pinPosition(point, { duration: 200 })` instead of `pinPosition(point, 200)`, `move(point, { silent: true })` instead of `move(point, 0, true)`, `tray.add(draggable, { duration: 200 })` instead of `tray.add(draggable, 200)`.
- **`timeExcange` is renamed to `timeExchange`** in `List`, `BubblingList` and `Tray`. The old name is ignored.
- **Removed:** `prependOn`, `resetOn`, `resetEmitter`, `interrupt`, `Draggable.emitter` and `Target.emitter`. `scope()` no longer needs them; to react to new instances, create them inside `scope()` or add them to a scope explicitly.
- **Only the package entry point can be imported:** `package.json` now has `exports`, so deep imports such as `dragee/src/…` or `dragee/dist/…` fail; import from `dragee`.
- **Form fields inside a draggable don't start a drag:** pressing an `input`, `textarea`, `select` or `contenteditable` element lets the user edit it instead.
- **Errors are `Error` objects** instead of strings: a second `Draggable` for the same element throws an `Error`, and setting `positions` of the wrong length on a `List` or `Scope` throws a `RangeError`.
- **Listener semantics follow `EventTarget`:** the same function added twice is registered once, and an exception in one listener no longer stops the others.
- **`dragEndAction` can no longer be overridden.** Listen to `drag:release` and call `event.cancel()` to place a dropped draggable yourself.
- **A drop refused by a tray** (`tray:beforeAdd` prevented, or a custom `catchDraggable` accepting a draggable whose center is outside) returns the draggable to its initial position.

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

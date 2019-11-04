# Dragee.Spider

```javascript
Dragee.Spider(areaElement, draggableElements[, options])
```

### Options:

`angle` - angle where will first ray built
`dAngle` - angle between two rays
`center` - center of spider web
`startRadius` - lower bound of slider
`endRadius` - upper bound of slider
`lineWidth`, `strokeStyle`, `fillStyle`


### Defaults:

```javascript
angle: 0,
dAngle: 2 * Math.PI / elements.length,
center: areaRectangle.getCenter(),
startRadius: 50,
endRadius: mathPoint.createRectangleFromElement(area, area).getMinSide() / 2,
lineWidth: 2,
strokeStyle: "#ff5577",
fillStyle: "rgba(150,255,50,0.8)"
```

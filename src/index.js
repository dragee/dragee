import './expandnative'
import Point from './geometry/point'
import Rectangle from './geometry/point'
import Draggable from './draggable'
import List from './list'
import Target from './target'
import { scopes, defaultScope, Scope, scope } from './scope'
import { NotCrossingStrategy, FloatLeftStrategy, FloatRightStrategy } from './positioning'
import Spider from './spider'
import ArcSlider from './arcslider'
import Chart from './chart'
import { getDistance, getXDifference, getYDifference, transformedSpaceDistanceFactory } from './geometry/distances'
import { addClass, removeClass } from './utils/classes'
import {
  BoundToRectangle,
  BoundToElement,
  BoundToLineX,
  BoundToLineY,
  BoundToLine,
  BoundToCircle,
  BoundToArc
} from './bounding'

const bound = {
  BoundToRectangle,
  BoundToElement,
  BoundToLineX,
  BoundToLineY,
  BoundToLine,
  BoundToCircle,
  BoundToArc
}

const distance = {
  getDistance,
  getXDifference,
  getYDifference,
  transformedSpaceDistanceFactory
}

export {
  Draggable,
  Point, Rectangle,
  List,
  Target,
  scopes, defaultScope, Scope, scope,
  NotCrossingStrategy, FloatLeftStrategy, FloatRightStrategy,
  Spider,
  ArcSlider,
  Chart,
  bound,
  distance,
  addClass, removeClass
}

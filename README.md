## `linearScale`

[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/simple-linear-scale.svg)](https://greenkeeper.io/)

[![build status](https://secure.travis-ci.org/mapbox/simple-linear-scale.png)](http://travis-ci.org/mapbox/simple-linear-scale)

Bare-bones equivalent for the functionality of d3.scale.linear

### Parameters

* `domain` **`Array<number>`**
* `range` **`Array<number>`**


### Examples

```js
var linearScale = require('simple-linear-scale');

var scaleFunction = linearScale([0, 1], [0, 100]);
scaleFunction(0.5); // 50

// clamp option ensures that output is within range
var scaleFunction = linearScale([0, 1], [0, 10], true);
scaleFunction(100); // 10
```

Returns `Function` scale function

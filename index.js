/**
 * Bare-bones equivalent for the functionality of d3.scale.linear
 * @param {Array<number>} domain
 * @param {Array<number>} range
 * @returns {Function} scale function
 * @example
 * var linearScale = require('simple-linear-scale');
 *
 * var scaleFunction = linearScale([0, 1], [0, 100]);
 * scaleFunction(0.5); // 50
 *
 * // clamp option ensures that output is within range
 * var scaleFunction = linearScale([0, 1], [0, 10], true);
 * scaleFunction(100); // 10
 */
function linearScale(domain, range, clamp) {
  return function(value) {
    if (domain[0] === domain[1] || range[0] === range[1]) {
      return range[0];
    }
    var ratio = (range[1] - range[0]) / (domain[1] - domain[0]),
      result = range[0] + ratio * (value - domain[0]);
    return clamp ? Math.min(range[1], Math.max(range[0], result)) : result;
  };
}

module.exports = linearScale;

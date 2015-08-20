var test = require('tap').test;
var linearScale = require('./');

test('linearScale', function(t) {
    t.equal(typeof linearScale([0, 1], [0, 1]), 'function');
    t.equal(linearScale([0, 1], [0, 1])(0), 0);
    t.equal(linearScale([0, 1], [0, 1])(1), 1);
    t.equal(linearScale([0, 1], [0, 10])(1), 10);
    t.equal(linearScale([0, 10], [0, 10])(1), 1);
    t.equal(linearScale([0, 10], [0, 1])(1), 0.1);
    t.equal(linearScale([0, 10], [0, 10])(20), 20);
    t.equal(linearScale([0, 10], [0, 10], true)(20), 10, 'clamp');
    t.end();
});

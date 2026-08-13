var test = require('./tap-adapter');
var detective = require('../');
var fs = require('fs');
var src = [ 'require("a")\nreturn' ];

test('return', function (t) {
    t.plan(1);
    t.deepEqual(detective(src), [ 'a' ]);
});

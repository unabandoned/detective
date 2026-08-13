var test = require('./tap-adapter');
var detective = require('../');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/files/generators.js');

test('generators', function (t) {
    t.plan(1);
    t.deepEqual(detective(src), [ 'a', 'b' ]);
});

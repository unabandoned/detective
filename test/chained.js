var test = require('./tap-adapter');
var detective = require('../');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/files/chained.js');

test('chained', function (t) {
    t.deepEqual(detective(src), [ 'c', 'b', 'a' ]);
    t.end();
});

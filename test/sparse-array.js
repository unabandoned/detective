var test = require('./tap-adapter');
var detective = require('../');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/files/sparse-array.js');

test('sparse-array', function (t) {
    //just check that this does not crash.
    t.doesNotThrow(function () {
      detective(src)
    })
    t.end();
});



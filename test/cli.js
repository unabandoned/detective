var test = require('node:test');
var assert = require('node:assert');
var { spawnSync } = require('node:child_process');
var path = require('path');

var cmd = path.join(__dirname, '..', 'bin', 'detective.js');
function file (name) { return path.join(__dirname, 'files', name); }

function run (args) {
    var res = spawnSync(process.execPath, [cmd].concat(args), { encoding: 'utf8' });
    return { status: res.status, stderr: res.stderr, lines: res.stdout.split('\n').filter(Boolean) };
}

test('cli: prints the requires of each file given', function () {
    var res = run([file('word.js'), file('both.js')]);
    assert.equal(res.status, 0, res.stderr);
    assert.deepEqual(res.lines, []
        .concat(require('../')(require('fs').readFileSync(file('word.js'))))
        .concat(require('../')(require('fs').readFileSync(file('both.js')))));
});

test('cli: --word, as --word x and --word=x', function () {
    var want = [ 'a', 'b', 'c', 'events', 'doom', 'y', 'events2' ];
    assert.deepEqual(run(['--word', 'load', file('word.js')]).lines, want);
    assert.deepEqual(run(['--word=load', file('word.js')]).lines, want);
});

test('cli: dotted --parse.* options reach acorn', function () {
    var es6 = file('es6-module.js');
    assert.notEqual(run([es6]).status, 0, 'ES module syntax fails as a script');
    assert.deepEqual(run(['--parse.sourceType', 'module', es6]).lines, [ 'a', 'b' ]);
    assert.deepEqual(run(['--parse.sourceType=module', es6]).lines, [ 'a', 'b' ]);
    assert.deepEqual(run(['--parse.allowImportExportEverywhere', es6]).lines, [ 'a', 'b' ]);
    assert.deepEqual(run(['--parse.ecmaVersion=2015', '--parse.sourceType=module', es6]).lines, [ 'a', 'b' ]);
});

test('cli: --no-parse.* negates a boolean acorn option', function () {
    var shebang = file('shebang.js');
    assert.equal(run([shebang]).status, 0);
    assert.notEqual(run(['--no-parse.allowHashBang', '--parse.ecmaVersion=2020', shebang]).status, 0);
});

test('cli: unknown flags are ignored, as with minimist', function () {
    var res = run(['--whatever', file('word.js')]);
    assert.equal(res.status, 0, res.stderr);
});

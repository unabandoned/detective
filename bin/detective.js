#!/usr/bin/env node

var detective = require('../');
var { parseArgs } = require('node:util');
var fs = require('fs');

// Every option detective reads from the command line: `word`, `nodes`, and the
// acorn options forwarded through `opts.parse` (see parse() in index.js),
// written minimist-style as dotted keys, e.g. --parse.sourceType=module.
var parseBooleans = [
    'allowHashBang', 'allowReturnOutsideFunction', 'allowReserved',
    'allowImportExportEverywhere', 'ranges', 'range', 'locations', 'loc'
];
var options = {
    word: { type: 'string' },
    nodes: { type: 'boolean' },
    'parse.ecmaVersion': { type: 'string' },
    'parse.sourceType': { type: 'string' }
};
parseBooleans.forEach(function (k) {
    options['parse.' + k] = { type: 'boolean' };
});

// strict: false keeps the old minimist behaviour of ignoring unknown flags.
var parsed = parseArgs({
    args: process.argv.slice(2),
    options: options,
    strict: false,
    allowPositionals: true,
    allowNegative: true
});

// minimist coerced "true"/"false" and numeric strings, and nested dotted keys.
function coerce (v) {
    if (v === 'true') return true;
    if (v === 'false') return false;
    if (typeof v === 'string' && v !== '' && !isNaN(Number(v))) return Number(v);
    return v;
}

var argv = {};
Object.keys(parsed.values).forEach(function (key) {
    var path = key.split('.');
    var obj = argv;
    for (var i = 0; i < path.length - 1; i++) {
        if (typeof obj[path[i]] !== 'object' || obj[path[i]] === null) obj[path[i]] = {};
        obj = obj[path[i]];
    }
    obj[path[path.length - 1]] = coerce(parsed.values[key]);
});

parsed.positionals.forEach(function(file) {
    var src = fs.readFileSync(file, 'utf8');
    var requires = detective(src, argv);
    console.log(requires.join('\n'));
});

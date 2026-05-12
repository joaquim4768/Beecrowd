var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());

var media = (2 * a + 3 * b + 5 * c) / (2+3+5);

console.log(`MEDIA = ${media.toFixed(1)}`)
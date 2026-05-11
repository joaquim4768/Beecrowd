var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());

var media = (3.5 * a + 7.5 * b) / (3.5 + 7.5);

console.log(`MEDIA = ${media.toFixed(5)}`)
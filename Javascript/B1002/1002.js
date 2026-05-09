var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var pi = 3.14159;

var area = (pi * raio**2).toFixed(4);

console.log(`A=${area}`);
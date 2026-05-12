var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());
var d = Number(lines.shift());

var diferença = (a * b - c * d);

console.log(`DIFERENCA = ${diferença}`);
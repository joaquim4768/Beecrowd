var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var x1 = Number(lines.shift());
var y1 = Number(lines.shift());

var x2 = Number(lines.shift());
var y2 = Number(lines.shift());

var distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distancia.toFixed(4));
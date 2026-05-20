var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = Number(lines.shift());
var y = Number(lines.shift());

var resultado = x / y;

console.log(`${resultado.toFixed(3)} km/l`);
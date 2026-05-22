var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempo = Number(lines.shift());
var vel = Number(lines.shift());

var dist = vel * tempo;

var litros = dist / 12;

console.log(litros.toFixed(3));
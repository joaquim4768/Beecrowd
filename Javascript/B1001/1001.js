var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valoresRecebidos = input.split('\n');

var a = parseInt(valoresRecebidos.shift());
var b = parseInt(valoresRecebidos.shift());

var X = a + b;

console.log("X = " + X);
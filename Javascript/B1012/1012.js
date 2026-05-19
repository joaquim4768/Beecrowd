var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());

var areaT = (a * c)/2;
var areaC = 3.14159 * c**2;
var areaTra = ((a + b) * c) / 2;
var areaQ = b ** 2;
var areaR = a * b;

console.log(`TRIANGULO: ${areaT.toFixed(3)}`);
console.log(`CIRCULO: ${areaC.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTra.toFixed(3)}`);
console.log(`QUADRADO: ${areaQ.toFixed(3)}`);
console.log(`RETANGULO: ${areaR.toFixed(3)}`);
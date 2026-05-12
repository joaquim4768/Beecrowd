var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numF = Number(lines.shift());
var horas = Number(lines.shift());
var valorHora = Number(lines.shift());

var salario = valorHora * horas;

console.log(`NUMBER = ${numF}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);

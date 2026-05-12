var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var peca1 = Number(lines.shift());
var numPeca1 = Number(lines.shift());
var valorPeca1 = Number(lines.shift());

var peca2 = Number(lines.shift());
var numPeca2 = Number(lines.shift());
var valorPeca2 = Number(lines.shift());

var valor1 = numPeca1 * valorPeca1;
var valor2 = numPeca2 * valorPeca2;
var totalPagar = valor1 + valor2;

console.log(`VALOR A PAGAR: R$ ${totalPagar.toFixed(2)}`);
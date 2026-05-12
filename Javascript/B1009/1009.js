var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = Number(lines.shift());
var vendas = Number(lines.shift());

var comissão = (15/100) * vendas;

var salarioTotal = salarioFixo + comissão;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = Number(lines.shift());
var centavos = Math.round(valor * 100);

console.log(`NOTAS:`)

console.log(`${Math.floor(centavos/10000)} nota(s) de R$ 100.00`)
centavos %= 10000;
console.log(`${Math.floor(centavos/5000)} nota(s) de R$ 50.00`)
centavos %= 5000;
console.log(`${Math.floor(centavos/2000)} nota(s) de R$ 20.00`)
centavos %= 2000;
console.log(`${Math.floor(centavos/1000)} nota(s) de R$ 10.00`)
centavos %= 1000;
console.log(`${Math.floor(centavos/500)} nota(s) de R$ 5.00`)
centavos %= 500;
console.log(`${Math.floor(centavos/200)} nota(s) de R$ 2.00`)
centavos %= 200;

console.log(`MOEDAS:`);

console.log(`${Math.floor(centavos/100)} moeda(s) de R$ 1.00`)
centavos %= 100;
console.log(`${Math.floor(centavos/50)} moeda(s) de R$ 0.50`)
centavos %= 50;
console.log(`${Math.floor(centavos/25)} moeda(s) de R$ 0.25`)
centavos %= 25;
console.log(`${Math.floor(centavos/10)} moeda(s) de R$ 0.10`)
centavos %= 10;
console.log(`${Math.floor(centavos/5)} moeda(s) de R$ 0.05`)
centavos %= 5;
console.log(`${Math.floor(centavos/1)} moeda(s) de R$ 0.01`)
centavos %= 1;
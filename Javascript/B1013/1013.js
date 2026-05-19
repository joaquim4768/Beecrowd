var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());

var maiorAB = (a + b + Math.abs(a-b)) / 2;
var maiorABC = (maiorAB + c + Math.abs(maiorAB-c)) / 2;

console.log(`${maiorABC} eh o maior`);

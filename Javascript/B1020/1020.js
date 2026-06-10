var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dias  = Number(lines.shift());

console.log(`${Math.floor(dias / 365)} ano(s)`);
dias %= 365;
console.log(`${Math.floor(dias / 30)} mes(es)`);
dias %= 30;
console.log(`${dias} dia(s)`);
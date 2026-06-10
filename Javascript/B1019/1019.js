var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

segundos = Number(lines.shift());

var horas = Math.floor(segundos / 3600);
segundos %= 3600;

var minutos = Math.floor(segundos / 60);
segundos %= 60;

console.log(`${horas}:${minutos}:${segundos}`);
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var codigo = Number(lines.shift());
var quantidade = Number(lines.shift());

switch(codigo){
    case 1:
        total = quantidade * 4;
        break;
    case 2:
        total = quantidade * 4.5;
        break;
    case 3:
        total = quantidade * 5;
        break;
    case 4:
        total = quantidade * 2;
        break;
    case 5:
        total = quantidade * 1.5;
        break;
}

console.log(`Total: R$ ${total.toFixed(2)}`);
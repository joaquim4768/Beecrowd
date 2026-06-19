var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var A = Number(lines.shift());
var B = Number(lines.shift());
var C = Number(lines.shift());
var D = Number(lines.shift());

if(B > C && D > A && C + D > A + B && C > 0 && D > 0 && A%2 == 0){
    console.log(`Valores aceitos`);
}
else{
    console.log(`Valores nao aceitos`);
}


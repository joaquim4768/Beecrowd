var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());

var delta = b**2 - 4 * a * c;
var root = Math.sqrt(delta)

if(a == 0 || delta < 0){
    console.log(`Impossivel calcular`);
}
else{
    var r1 = (-b + root) / (2 * a);
    var r2 = (-b - root) / (2 * a);

    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}




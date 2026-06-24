var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

var n1 = Number(lines.shift());
var n2 = Number(lines.shift());
var n3 = Number(lines.shift());
var n4 = Number(lines.shift());

var media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;
console.log(`Media: ${media.toFixed(1)}`);

if(media >= 7){
    console.log(`Aluno aprovado.`);
}
else if(media < 5){
    console.log(`Aluno reprovado.`);
}
else if(media >= 5 && media <= 6.9){
    console.log(`Aluno em exame.`);

    let nExame = Number(lines.shift());
    console.log(`Nota do exame: ${nExame.toFixed(1)}`);
    let mediaFinal = (nExame + media) / 2;

    if(mediaFinal >= 5){
    console.log(`Aluno aprovado.`)
    }
    else if(mediaFinal <= 4.9){
    console.log(`Aluno reprovado.`)
    }
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}







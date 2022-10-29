let nota1 = parseInt(prompt('Ingrese la primera nota'));
let nota2= parseInt (prompt('Ingrese la segunda nota'));
let nota3= parseInt(prompt('Ingrese la tercera nota'));
let promedio= (nota1+ nota2+ nota3) / 3 ;
let promRound= Math.round (promedio)
if(promRound >= 40){
    document.write(`Su nota es: ${promRound} Aprobó.`) ;
}
else{
    document.write(`Su nota es: ${promRound} Desaprobó.`);
}
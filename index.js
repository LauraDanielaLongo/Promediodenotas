const calcularPromedio = (nota1, nota2, nota3) => {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return Math.round(promedio);
    };
    let nota1=0
    do{
        nota1= parseInt(prompt('Ingrese la primera nota'));
    }
    while  (isNaN(nota1)); 

    let nota2=0
    do{
        nota2= parseInt(prompt('Ingresar la segunda nota'));
    
    }
    while (isNaN(nota2));

    let nota3=0
    do{
        nota3=parseInt(prompt("Ingrese la tercera nota"));
    }
    while(isNaN(nota3));
   
    let promedio = calcularPromedio(nota1, nota2, nota3);
    if (promedio >= 7) {
    document.write(`Su nota es: ${promedio} Aprobó.`);
    }else {
        document.write(`Su nota es: ${promedio} Desaprobó.`);
    }
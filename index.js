let numero = parseInt(prompt("Cuantas peliculas vez por mes?"));

for(let i = 1; i <=12; i++){
    let multiplicacion = numero * i;
    let mensaje =  `${numero} * ${i} = ${multiplicacion}`;

    if(i===1)
    alert("En " +  i + " mes vez un total de " + mensaje + " películas");
    
    if(i!=1){
        alert("En " +  i + " meses vez un total de " + mensaje + " películas");
    }
}
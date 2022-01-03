let notas = [10, 4 , 5, 8 , 9 , 2, 7];

// metodo map

let notas100 = notas.map(function(numero){
return numero * 10;

});

//console.log(notas100);

// metodo filter
let notasAprobadas = notas.filter(function(numero){

return numero >= 7;
});

//console.log(notasAprobadas);

// metodo reduce 

let sumaNotas = notas.reduce(function(estado, numero){
 return estado + numero;
});

//console.log(sumaNotas);

notas.forEach(function(valor, indice){
console.log('En la posicion '+indice + ' tengo el valor ' + valor);
});
let sumar = (n1, n2) => 'Este es el resultado de la suma: ' + (n1 + n2); 
let restar = (n1, n2) => 'Este es el resultado de la resta: ' + (n1 - n2); 
let multiplicar = (n1, n2) => 'Este es el resultado de la multiplicación: ' + (n1 * n2); 
let dividir = (n1, n2) => 'Este es el resultado de la división: ' + (n1 / n2); 


// Este es el callback
let calculadora = (n1, n2, operacion)=> operacion (n1, n2);

console.log(calculadora(3, 5, sumar));
console.log(calculadora(3, 5, restar));
console.log(calculadora(3, 5, multiplicar));
console.log(calculadora(3, 5, dividir));
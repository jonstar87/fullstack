// call back 


let doble = (numero1) =>  numero1 * 2;
let triple = (numero1) =>  numero1 * 3;

let aplicarCallBack = (numero1 , operacion) => operacion (numero1) ;
console.log(aplicarCallBack(2, doble)); 
console.log(aplicarCallBack(4, triple)); 


// calculadora 

let suma = (numero1, numero2) =>  numero1 + numero2;
let resta = (numero1, numero2) =>  numero1 - numero2;
let multiplicacion = (numero1, numero2) =>  numero1 * numero2;
let dividision = (numero1, numero2) =>  numero1 / numero2;

let calculadora = (numero1 , numero2, operacion) => operacion (numero1, numero2);

console.log(calculadora(2, 3, suma)); 
console.log(calculadora(2, 3, resta)); 
console.log(calculadora(2, 3, multiplicacion)); 
console.log(calculadora(2, 3, dividision)); 

// callback reloaded

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ]


let triple = (numero1) =>  numero1 * 3;

let aplicarCallBack = (numero1 , operacion) => operacion (numero1);


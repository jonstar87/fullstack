const productos = [

    {nombre: 'Ordenador PC' , precio:699 , departamento: 'Tecnología' },
    {nombre: 'Sartenes Verdes' , precio: 39 , departamento: 'Hogar' },
    {nombre: 'Reloj Calculadora' , precio: 75, departamento: 'Tecnología' },
    {nombre: 'Máquina de Palomitas' , precio: 33 , departamento: 'Hogar' },
    {nombre: 'Mueble TV' , precio: 120 , departamento: 'Hogar' },
    {nombre: 'Tuppers' , precio: 10 , departamento: 'Hogar' }
];


const productosIva = productos.map(item => {
    let nuevoPrecio = item.precio + item.precio * 0.16;
    return {... item, precio: nuevoPrecio};

});

// console.log(productos);
//console.log(productosIva);

const productosHogar = productos.filter(item => {

    return item.departamento === 'Hogar'
});

// console.log(productosHogar);

// every devuelve true or false si todos los elementos cumplen una condicion dada 
const check = productos.every (item => { 
    return item.precio >= 1;

});

// console.log(check);

// Some devuelve true si alguno de los elementos cumole una condicion dada

const alguno = productos.some( item => {
    return item.precio >= 500;

});

// console.log(alguno);

const precioTotal = productos.reduce( ( total, item) => { 

    return total + item.precio;

}, 0);

console.log(precioTotal);
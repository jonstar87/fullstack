const productos = [

    {nombre: 'Ordenador PC' , precio:699 , departamento: 'Tecnología' },
    {nombre: 'Sartenes Verdes' , precio: 39 , departamento: 'Hogar' },
    {nombre: 'Reloj Calculadora' , precio: 75, departamento: 'Tecnología' },
    {nombre: 'Máquina de Palomitas' , precio: 33 , departamento: 'Hogar' },
    {nombre: 'Mueble TV' , precio: 120 , departamento: 'Hogar' },
    {nombre: 'Tuppers' , precio: 10 , departamento: 'Hogar' }
];

const muebleTv = productos.find (item => {

    // Primera forma
  //  return item.nombre === 'Mueble TV';

  //Segunda forma
    return (/Mueble/g).test(item.nombre);
});

console.log(muebleTv);
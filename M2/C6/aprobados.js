let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false}
];


estudiantes.forEach(function(valor){

    if (valor.aprobado == true){
        console.log("Los aprobados son");
        console.log(valor);
    } else {
        console.log("Los reprobados son");
        console.log(valor);
    }
});

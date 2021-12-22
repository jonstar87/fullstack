let fecha =    new Date ();

let anio = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];

//console.log("Día: "+ dia);

console.log('Hoy es '+ dia +' de '+ meses[mes] +' del año '+ anio);
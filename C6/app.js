// clase en vivo


// leer parámetro de consola nodejs

let accion = process.argv[2];

let tareas = [

    {
        titulo: 'Repasar JS',
        estado: 'terminado'
    },

    {
        titulo: 'Armar aplicacion de tareas',
        estado: 'pendiente'
    },

    {
        titulo: 'Realizar micro-desafio',
        estado: 'en progreso'
    }
];

switch (accion) {
    case 'listar':
        console.log('listado de tareas');
        console.log('-------');

        // ciclo para listar tareas 

        for(let i = 0; i < tareas.length; i++ ) {

            console.log(`${i + 1} - ${tareas[i].titulo} - ${tareas[i].estado}`);
        }
        break;
    case 'Crear':
        
    // crear nueva tarea

    const nuevaTarea = {
        titulo: process.argv[3],
        estado: 'pendiente'
    }
   
        tareas.push(nuevaTarea);
        console.log('Tarea creada!');
    case undefined: 
    console.log('Tienes que pasarme una acción');
    default:
        console.log('No entiendo qué me estás pidiendo');
        break;
}


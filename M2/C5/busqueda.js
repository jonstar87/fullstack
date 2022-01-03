function menciona(texto, palabra ){

    let busqueda = texto.indexOf(palabra);
    let seEncontro;
    if  (busqueda >= 0){
        seEncontro = true;
        
    } else {
        seEncontro = false;

    }
    console.log(seEncontro);
    // return seEncontro;  no sale aqui pero en el playground si
    }
    
    menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación');
    menciona("Hola mundo","Hola");
    menciona("Estoy programando","mundo");
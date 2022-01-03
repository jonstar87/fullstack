function reemplazoFastFast(texto, pBusqueda, pReemplazo){

    let textoSinGuiones =  texto.replace(pBusqueda,  pReemplazo);
    console.log(textoSinGuiones); //'Este texto es buena onda'
    }
    
    
    reemplazoFastFast('Este texto es mala onda','mala','buena');
    
    reemplazoFastFast("Hola ¿cómo estás?","estás","están");
    
    reemplazoFastFast("Todo lo que pasa tiene que bajar","pasa","sube");
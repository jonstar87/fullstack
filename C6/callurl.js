function agregarHttp(url) {
    let esArray = Array.isArray(url);
    if (esArray = true){
        let parar = url.length - 1;
        let array2 = [];
        for (let i= 0; i <= parar; i ++){
            let  unArray = url [i];
            let urlCompleta = 'http://' + unArray;
    
            array2.push(urlCompleta);
    
            // console.log(urlCompleta);
        
        }
        url = array2;
        console.log(url);

    }else {

        
    }
    
    }

let procesar = (url,agregarHttp) {
    let esArray = Array.isArray(url);
    if (esArray = true){

        console.log('Esto es un array');
    }else{

        console.log('Esto no es un array');
    }

}

agregarHttp(url);





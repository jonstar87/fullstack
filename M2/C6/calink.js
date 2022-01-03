function agregarHttp(unArray) {
    let parar = unArray.length - 1;
    for (let i= 0; i <= parar; i ++){
        let url = unArray[i];
        let urlCompleta = 'http://' + url;
       
        console.log(urlCompleta);
    
    }
    }
    
    
    agregarHttp(['www.google.com', 'www.facebook.com', 'www.innova-motion.com', 'www.ibm.com']);
    
        
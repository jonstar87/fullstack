function noParesDeContarImparesHasta(numero){
let suma = 0;
    for (let i = 0 ; i  <= numero; i++){
       
        if (i % 2 != 0){
         
       suma = suma + 1;
            
        }
   }
   
   return suma
}

console.log(noParesDeContarImparesHasta(4));

/* requerir módulo autos */

let autos = require("./autos");


const concesionaria = {
    autos: autos,
   buscarAuto: function (patenteB){
   
    autos.forEach(function(auto){
        if (auto.patente == patenteB){
            //return auto;
            console.log('El auto es: ' + auto.marca + ' ' + auto.modelo);
            //return auto.vendido = true;
        }else{
            return null;
        }
    })
   }
};
 
concesionaria.buscarAuto('APL123');
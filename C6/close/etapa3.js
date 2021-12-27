let autos =[ 
    { marca: 'Ford' , 
     modelo: 'Fiesta',
     precio: 150000, 
     km:200 , 
     color: 'Azul', 
     cuotas: 12 , 
     anio: 2019, 
     patente: 'APL123', 
     vendido: false },
 
     { marca: 'Toyota', 
         modelo: 'Corolla',
         precio: 100000, 
         km: 0, 
         color: 'Blanco', 
         cuotas: 14, 
         anio:2019, 
         patente:'JJK116', 
         vendido: false }
 ];

 const concesionaria = {
    autos: autos,  
    buscarAuto: function (patenteB){
   
        autos.forEach(function(auto){
            if (auto.patente == patenteB){
                console.log('El auto es: ' + auto.marca + ' ' + auto.modelo);
                
            }else{
                return null;
            }
        })
       },
    venderAuto: function (patenteB){
   
    autos.forEach(function(auto){
        if (auto.patente == patenteB){
            
            auto.vendido = true;
            console.log(auto);
        }else{
            return null;
        }
    })
   }};

   concesionaria.buscarAuto('APL123');
   concesionaria.venderAuto('APL123');
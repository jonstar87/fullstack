// operaciones con números


function anterior (n){
    return n -1;
    }
    
    function triple (n){
    return n * 3;
    }
    
    function anteriorDelTriple (n){
    return (triple (n) - anterior (n));
    }
    
    console.log(anterior(2));
    console.log(triple(2));
    console.log(anteriorDelTriple(2));
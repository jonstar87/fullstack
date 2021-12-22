let amigos = ["Jona", "Pepe", "Davo"];

console.log("Amigos normal: " + amigos);

let amigosJSON  = JSON.stringify(amigos);

console.log("El json: " + amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);

console.log("El original: " + amigosOriginal);
const express = require ('express');
const path = require('path');

const app = express();

// Hacemos fija la ruta de public
const publicPath = path.resolve(__dirname, './site/public');
app.use (express.static(publicPath));
// console.log(publicPath);
app.listen(3000,() => console.log('Conexión exitosa al puerto 300 Clase 11'));

app.get('/home', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, '/site/views/index.html'));
});

const express = require ('express');
const path = require('path');

const app = express();

app.listen(3000,() => console.log('Conexión exitosa al puerto 300'));

app.get('/home', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, '/site/views/index.html'));
});

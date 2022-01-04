const express = require ('express');
const path = require('path');

const app = express();

app.listen(3030,() => console.log('Conexión exitosa'));

app.get('/home', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, './DH-Heroes/views/index.html'));
});

app.get('/babbage', function (req, res) { 
    res.send ('Déjanos tus datos de contacto');
});

app.get('/berners-lee', function (req, res) { 
    res.send ('Ordena tu pedido ahora');
});

app.get('/clarke', function (req, res) { 
    res.send ('Bienvenidos al sitio 3030');
});

app.get('/hamilton', function (req, res) { 
    res.send ('Bienvenidos al sitio 3030');
});

app.get('/hopper', function (req, res) { 
    res.send ('Bienvenidos al sitio 3030');
});

app.get('/lovelace', function (req, res) { 
    res.send ('Bienvenidos al sitio 3030');
});

app.get('/turing', function (req, res) { 
    res.send ('Bienvenidos al sitio 3030');
});
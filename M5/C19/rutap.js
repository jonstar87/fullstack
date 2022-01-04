const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './');
app.use (express.static(publicPath));
console.log(publicPath);
app.listen(3000,() => console.log('Conexión exitosa al puerto 3000 Clase 19'));

app.get('/serie',function (req, res) {

    res.sendFile(path.join(__dirname, '/index.html'));

})


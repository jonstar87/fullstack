const express = require('express');
const app = express();

const rutasProductos = require('./routes/productos');

app.use('/productos', rutasProductos);
let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')
// ver rua dinamica con : que define que irá variando  Ejemplo: "/:productoID"
router.get('/:item',carritoController.agregarItem)

module.exports = router
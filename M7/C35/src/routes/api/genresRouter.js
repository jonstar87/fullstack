const express = require ('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

// Listado de todos los géneros

router.get('/', genresController.list);

module.exports = router;



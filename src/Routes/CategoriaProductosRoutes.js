const express = require('express');
const router = express.Router();
const categoriaProductosController = require('../Controllers/CategoriaProductosController');

router.get('/', categoriaProductosController.getAllCategoriasProductos);
router.get('/:id', categoriaProductosController.getCategoriaProductoById);
router.post('/', categoriaProductosController.createCategoriaProducto);
router.put('/:id', categoriaProductosController.updateCategoriaProducto);
router.delete('/:id', categoriaProductosController.deleteCategoriaProducto);

module.exports = router;
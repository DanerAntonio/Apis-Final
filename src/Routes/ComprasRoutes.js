const express = require('express');
const router = express.Router();
const comprasController = require('../Controllers/ComprasController');

router.get('/', comprasController.getAllCompras);
router.get('/:id', comprasController.getCompraById);
router.post('/', comprasController.createCompra);
router.put('/:id', comprasController.updateCompra);
router.delete('/:id', comprasController.deleteCompra);

module.exports = router;
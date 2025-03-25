const express = require('express');
const router = express.Router();
const detalleComprasController = require('../Controllers/DetalleComprasController');

router.get('/', detalleComprasController.getAllDetalleCompras);
router.get('/:id', detalleComprasController.getDetalleCompraById);
router.post('/', detalleComprasController.createDetalleCompra);
router.put('/:id', detalleComprasController.updateDetalleCompra);
router.delete('/:id', detalleComprasController.deleteDetalleCompra);

module.exports = router;
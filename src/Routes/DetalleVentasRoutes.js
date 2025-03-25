const express = require('express');
const router = express.Router();
const detalleVentasController = require('../Controllers/DetalleVentasController');

router.get('/', detalleVentasController.getAllDetalleVentas);
router.get('/:id', detalleVentasController.getDetalleVentaById);
router.post('/', detalleVentasController.createDetalleVenta);
router.put('/:id', detalleVentasController.updateDetalleVenta);
router.delete('/:id', detalleVentasController.deleteDetalleVenta);

module.exports = router;
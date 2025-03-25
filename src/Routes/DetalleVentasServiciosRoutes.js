const express = require('express');
const router = express.Router();
const detalleVentasServiciosController = require('../Controllers/DetalleVentasServiciosController');

router.get('/', detalleVentasServiciosController.getAllDetalleVentasServicios);
router.get('/:id', detalleVentasServiciosController.getDetalleVentaServicioById);
router.post('/', detalleVentasServiciosController.createDetalleVentaServicio);
router.put('/:id', detalleVentasServiciosController.updateDetalleVentaServicio);
router.delete('/:id', detalleVentasServiciosController.deleteDetalleVentaServicio);

module.exports = router;
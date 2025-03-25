const express = require('express');
const router = express.Router();
const detalleComprasController = require('../Controller/DetalleComprasController');

// Obtener todos los detalles de compras
router.get('/', detalleComprasController.getDetalleCompras);

// Crear un nuevo detalle de compra
router.post('/', detalleComprasController.createDetalleCompra);

// Actualizar un detalle de compra por ID
router.put('/:id', detalleComprasController.updateDetalleCompra);

// Eliminar un detalle de compra por ID
router.delete('/:id', detalleComprasController.deleteDetalleCompra);

module.exports = router;
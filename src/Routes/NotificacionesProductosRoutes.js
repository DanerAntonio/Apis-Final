const express = require('express');
const router = express.Router();
const notificacionesProductosController = require('../Controllers/NotificacionesProductosController');

router.get('/', notificacionesProductosController.getAllNotificacionesProductos);
router.get('/:id', notificacionesProductosController.getNotificacionProductoById);
router.post('/', notificacionesProductosController.createNotificacionProducto);
router.put('/:id', notificacionesProductosController.updateNotificacionProducto);
router.delete('/:id', notificacionesProductosController.deleteNotificacionProducto);

module.exports = router;
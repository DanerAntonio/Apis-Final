const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/verificarToken');
const verificarRol = require('../middleware/verificarRol');
const clientesController = require('../Controller/ClientesController');

// Ruta protegida solo para administradores
router.get('/admin', verificarToken, verificarRol(1), (req, res) => {
  res.json({ mensaje: 'Bienvenido, administrador' });
});

// Ruta protegida solo para clientes
router.get('/cliente', verificarToken, verificarRol(2), (req, res) => {
  res.json({ mensaje: 'Bienvenido, cliente' });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const UsuarioController = require("../Controller/UsuarioController");

// Rutas para usuarios


router.get('/', UsuarioController.getClientes);
router.post('/',  UsuarioController.createCliente);


module.exports = router;
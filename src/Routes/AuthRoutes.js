const express = require('express');
const router = express.Router();
const { 
  register,
  login,
  getUser 
} = require('../Controllers/AuthController');

// Ruta de registro
router.post('/register', register);

// Ruta de login
router.post('/login', login);

// Ruta para obtener información del usuario
router.get('/user', getUser);

module.exports = router;
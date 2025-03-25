const express = require('express');
const router = express.Router();
const citasController = require('../Controllers/CitasController');

router.get('/', citasController.getAllCitas);
router.get('/:id', citasController.getCitaById);
router.post('/', citasController.createCita);
router.put('/:id', citasController.updateCita);
router.delete('/:id', citasController.deleteCita);

module.exports = router;
const express = require('express');
const router = express.Router();
const mascotasController = require('../Controllers/MascotasController');

router.get('/', mascotasController.getAllMascotas);
router.get('/:id', mascotasController.getMascotaById);
router.post('/', mascotasController.createMascota);
router.put('/:id', mascotasController.updateMascota);
router.delete('/:id', mascotasController.deleteMascota);

module.exports = router;
const Mascota = require('../Models/MascotasModel');

exports.getAllMascotas = (req, res) => {
  Mascota.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getMascotaById = (req, res) => {
  const id = req.params.id;
  Mascota.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createMascota = (req, res) => {
  const data = req.body;
  Mascota.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateMascota = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Mascota.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteMascota = (req, res) => {
  const id = req.params.id;
  Mascota.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Mascota eliminada correctamente' });
  });
};
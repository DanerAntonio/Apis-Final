const Cita = require('../Models/CitasModel');

exports.getAllCitas = (req, res) => {
  Cita.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getCitaById = (req, res) => {
  const id = req.params.id;
  Cita.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createCita = (req, res) => {
  const data = req.body;
  Cita.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateCita = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Cita.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteCita = (req, res) => {
  const id = req.params.id;
  Cita.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Cita eliminada correctamente' });
  });
};
const Servicio = require('../Models/ServiciosModel');

exports.getAllServicios = (req, res) => {
  Servicio.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getServicioById = (req, res) => {
  const id = req.params.id;
  Servicio.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createServicio = (req, res) => {
  const data = req.body;
  Servicio.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateServicio = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Servicio.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteServicio = (req, res) => {
  const id = req.params.id;
  Servicio.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Servicio eliminado correctamente' });
  });
};
const TipoServicio = require('../Models/TipoServicioModel');

exports.getAllTiposServicio = (req, res) => {
  TipoServicio.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getTipoServicioById = (req, res) => {
  const id = req.params.id;
  TipoServicio.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createTipoServicio = (req, res) => {
  const data = req.body;
  TipoServicio.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateTipoServicio = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  TipoServicio.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteTipoServicio = (req, res) => {
  const id = req.params.id;
  TipoServicio.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Tipo de servicio eliminado correctamente' });
  });
};
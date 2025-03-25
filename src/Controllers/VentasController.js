const Venta = require('../Models/VentasModel');

exports.getAllVentas = (req, res) => {
  Venta.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getVentaById = (req, res) => {
  const id = req.params.id;
  Venta.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createVenta = (req, res) => {
  const data = req.body;
  Venta.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateVenta = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Venta.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteVenta = (req, res) => {
  const id = req.params.id;
  Venta.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Venta eliminada correctamente' });
  });
};
const DetalleVenta = require('../Models/DetalleVentasModel');

exports.getAllDetalleVentas = (req, res) => {
  DetalleVenta.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getDetalleVentaById = (req, res) => {
  const id = req.params.id;
  DetalleVenta.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createDetalleVenta = (req, res) => {
  const data = req.body;
  DetalleVenta.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateDetalleVenta = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  DetalleVenta.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteDetalleVenta = (req, res) => {
  const id = req.params.id;
  DetalleVenta.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Detalle de venta eliminado correctamente' });
  });
};
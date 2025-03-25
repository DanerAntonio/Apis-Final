const DetalleCompra = require('../Models/DetalleComprasModel');

exports.getAllDetalleCompras = (req, res) => {
  DetalleCompra.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getDetalleCompraById = (req, res) => {
  const id = req.params.id;
  DetalleCompra.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createDetalleCompra = (req, res) => {
  const data = req.body;
  DetalleCompra.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateDetalleCompra = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  DetalleCompra.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteDetalleCompra = (req, res) => {
  const id = req.params.id;
  DetalleCompra.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Detalle de compra eliminado correctamente' });
  });
};
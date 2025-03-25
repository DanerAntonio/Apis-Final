const Compra = require('../Models/ComprasModel');

exports.getAllCompras = (req, res) => {
  Compra.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getCompraById = (req, res) => {
  const id = req.params.id;
  Compra.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createCompra = (req, res) => {
  const data = req.body;
  Compra.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateCompra = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Compra.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteCompra = (req, res) => {
  const id = req.params.id;
  Compra.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Compra eliminada correctamente' });
  });
};
const Proveedor = require('../Models/ProveedoresModel');

exports.getAllProveedores = (req, res) => {
  Proveedor.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getProveedorById = (req, res) => {
  const id = req.params.id;
  Proveedor.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createProveedor = (req, res) => {
  const data = req.body;
  Proveedor.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateProveedor = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Proveedor.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteProveedor = (req, res) => {
  const id = req.params.id;
  Proveedor.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Proveedor eliminado correctamente' });
  });
};
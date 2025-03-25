const Producto = require('../Models/ProductosModel');

exports.getAllProductos = (req, res) => {
  Producto.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getProductoById = (req, res) => {
  const id = req.params.id;
  Producto.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createProducto = (req, res) => {
  const data = req.body;
  Producto.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateProducto = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Producto.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteProducto = (req, res) => {
  const id = req.params.id;
  Producto.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  });
};
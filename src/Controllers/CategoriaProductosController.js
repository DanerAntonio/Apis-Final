const CategoriaProducto = require('../Models/CategoriaProductosModel');

exports.getAllCategoriasProductos = (req, res) => {
  CategoriaProducto.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getCategoriaProductoById = (req, res) => {
  const id = req.params.id;
  CategoriaProducto.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createCategoriaProducto = (req, res) => {
  const data = req.body;
  CategoriaProducto.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateCategoriaProducto = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  CategoriaProducto.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteCategoriaProducto = (req, res) => {
  const id = req.params.id;
  CategoriaProducto.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Categoría de producto eliminada correctamente' });
  });
};
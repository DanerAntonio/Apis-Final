const Cliente = require('../Models/ClientesModel');

exports.getAllClientes = (req, res) => {
  Cliente.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getClienteById = (req, res) => {
  const id = req.params.id;
  Cliente.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createCliente = (req, res) => {
  const data = req.body;
  Cliente.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateCliente = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Cliente.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteCliente = (req, res) => {
  const id = req.params.id;
  Cliente.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Cliente eliminado correctamente' });
  });
};
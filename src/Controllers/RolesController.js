const Rol = require('../Models/RolesModel');

exports.getAllRoles = (req, res) => {
  Rol.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getRolById = (req, res) => {
  const id = req.params.id;
  Rol.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createRol = (req, res) => {
  const data = req.body;
  Rol.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateRol = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Rol.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteRol = (req, res) => {
  const id = req.params.id;
  Rol.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Rol eliminado correctamente' });
  });
};                                                                          
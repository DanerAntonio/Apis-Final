const Permiso = require('../Models/PermisosModel');

exports.getAllPermisos = (req, res) => {
  Permiso.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getPermisoById = (req, res) => {
  const id = req.params.id;
  Permiso.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createPermiso = (req, res) => {
  const data = req.body;
  Permiso.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updatePermiso = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Permiso.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deletePermiso = (req, res) => {
  const id = req.params.id;
  Permiso.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Permiso eliminado correctamente' });
  });
};  
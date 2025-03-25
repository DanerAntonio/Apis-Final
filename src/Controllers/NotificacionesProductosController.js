const NotificacionProducto = require('../Models/NotificacionesProductosModel');

exports.getAllNotificacionesProductos = (req, res) => {
  NotificacionProducto.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getNotificacionProductoById = (req, res) => {
  const id = req.params.id;
  NotificacionProducto.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createNotificacionProducto = (req, res) => {
  const data = req.body;
  NotificacionProducto.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateNotificacionProducto = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  NotificacionProducto.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteNotificacionProducto = (req, res) => {
  const id = req.params.id;
  NotificacionProducto.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Notificación de producto eliminada correctamente' });
  });
};
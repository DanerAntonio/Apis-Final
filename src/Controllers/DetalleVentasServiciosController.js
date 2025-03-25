const DetalleVentaServicio = require('../Models/DetalleVentasServiciosModel');

exports.getAllDetalleVentasServicios = (req, res) => {
  DetalleVentaServicio.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getDetalleVentaServicioById = (req, res) => {
  const id = req.params.id;
  DetalleVentaServicio.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.createDetalleVentaServicio = (req, res) => {
  const data = req.body;
  DetalleVentaServicio.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateDetalleVentaServicio = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  DetalleVentaServicio.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...data });
  });
};

exports.deleteDetalleVentaServicio = (req, res) => {
  const id = req.params.id;
  DetalleVentaServicio.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Detalle de venta de servicio eliminado correctamente' });
  });
};
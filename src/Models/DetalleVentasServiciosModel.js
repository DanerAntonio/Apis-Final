const db = require('../Config/db');

class DetalleVentaServicio {
  static getAll(callback) {
    db.query('SELECT * FROM DetalleVentasServicios', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM DetalleVentasServicios WHERE IdDetalleVentasServicios = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO DetalleVentasServicios SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE DetalleVentasServicios SET ? WHERE IdDetalleVentasServicios = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM DetalleVentasServicios WHERE IdDetalleVentasServicios = ?', [id], callback);
  }
}

module.exports = DetalleVentaServicio;
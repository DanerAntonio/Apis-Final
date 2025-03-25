const db = require('../Config/db');

class DetalleVenta {
  static getAll(callback) {
    db.query('SELECT * FROM DetalleVentas', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM DetalleVentas WHERE IdDetalleVentas = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO DetalleVentas SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE DetalleVentas SET ? WHERE IdDetalleVentas = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM DetalleVentas WHERE IdDetalleVentas = ?', [id], callback);
  }
}

module.exports = DetalleVenta;
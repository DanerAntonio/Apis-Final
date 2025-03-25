const db = require('../Config/db');

class DetalleCompra {
  static getAll(callback) {
    db.query('SELECT * FROM DetalleCompras', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM DetalleCompras WHERE IdDetalleCompras = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO DetalleCompras SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE DetalleCompras SET ? WHERE IdDetalleCompras = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM DetalleCompras WHERE IdDetalleCompras = ?', [id], callback);
  }
}

module.exports = DetalleCompra;
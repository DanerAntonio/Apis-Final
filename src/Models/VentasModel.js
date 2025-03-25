const db = require('../Config/db');

class Venta {
  static getAll(callback) {
    db.query('SELECT * FROM Ventas', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Ventas WHERE IdVenta = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Ventas SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Ventas SET ? WHERE IdVenta = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Ventas WHERE IdVenta = ?', [id], callback);
  }
}

module.exports = Venta;
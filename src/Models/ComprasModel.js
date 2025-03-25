const db = require('../Config/db');

class Compra {
  static getAll(callback) {
    db.query('SELECT * FROM Compras', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Compras WHERE IdCompra = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Compras SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Compras SET ? WHERE IdCompra = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Compras WHERE IdCompra = ?', [id], callback);
  }
}

module.exports = Compra;
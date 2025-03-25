const db = require('../Config/db');

class Producto {
  static getAll(callback) {
    db.query('SELECT * FROM Productos', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Productos WHERE IdProducto = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Productos SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Productos SET ? WHERE IdProducto = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Productos WHERE IdProducto = ?', [id], callback);
  }
}

module.exports = Producto;
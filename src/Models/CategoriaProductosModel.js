const db = require('../Config/db');

class CategoriaProducto {
  static getAll(callback) {
    db.query('SELECT * FROM CategoriaDeProductos', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM CategoriaDeProductos WHERE IdCategoriaDeProductos = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO CategoriaDeProductos SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE CategoriaDeProductos SET ? WHERE IdCategoriaDeProductos = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM CategoriaDeProductos WHERE IdCategoriaDeProductos = ?', [id], callback);
  }
}

module.exports = CategoriaProducto;
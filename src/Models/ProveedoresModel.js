const db = require('../Config/db');

class Proveedor {
  static getAll(callback) {
    db.query('SELECT * FROM Proveedores', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Proveedores WHERE IdProveedor = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Proveedores SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Proveedores SET ? WHERE IdProveedor = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Proveedores WHERE IdProveedor = ?', [id], callback);
  }
}

module.exports = Proveedor;
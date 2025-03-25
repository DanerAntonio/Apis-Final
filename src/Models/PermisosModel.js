const db = require('../Config/db');

class Permiso {
  static getAll(callback) {
    db.query('SELECT * FROM Permisos', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Permisos WHERE IdPermiso = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Permisos SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Permisos SET ? WHERE IdPermiso = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Permisos WHERE IdPermiso = ?', [id], callback);
  }
}

module.exports = Permiso;
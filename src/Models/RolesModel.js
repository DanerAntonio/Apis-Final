const db = require('../Config/db');

class Rol {
  static getAll(callback) {
    db.query('SELECT * FROM Roles', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Roles WHERE IdRol = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Roles SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Roles SET ? WHERE IdRol = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Roles WHERE IdRol = ?', [id], callback);
  }
}

module.exports = Rol;
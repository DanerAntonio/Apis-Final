const db = require('../Config/db');

class Servicio {
  static getAll(callback) {
    db.query('SELECT * FROM Servicios', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Servicios WHERE IdServicio = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Servicios SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Servicios SET ? WHERE IdServicio = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Servicios WHERE IdServicio = ?', [id], callback);
  }
}

module.exports = Servicio;
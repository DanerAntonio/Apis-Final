const db = require('../Config/db');

class Cita {
  static getAll(callback) {
    db.query('SELECT * FROM AgendamientoDeCitas', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM AgendamientoDeCitas WHERE IdCita = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO AgendamientoDeCitas SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE AgendamientoDeCitas SET ? WHERE IdCita = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM AgendamientoDeCitas WHERE IdCita = ?', [id], callback);
  }
}

module.exports = Cita;
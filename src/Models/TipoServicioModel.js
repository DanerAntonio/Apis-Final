const db = require('../Config/db');

class TipoServicio {
  static getAll(callback) {
    db.query('SELECT * FROM Tipo_Servicio', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Tipo_Servicio WHERE IdTipoServicio = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Tipo_Servicio SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Tipo_Servicio SET ? WHERE IdTipoServicio = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Tipo_Servicio WHERE IdTipoServicio = ?', [id], callback);
  }
}

module.exports = TipoServicio;
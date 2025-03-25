const db = require('../Config/db');

class Mascota {
  static getAll(callback) {
    db.query('SELECT * FROM Mascotas', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Mascotas WHERE IdMascota = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Mascotas SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Mascotas SET ? WHERE IdMascota = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Mascotas WHERE IdMascota = ?', [id], callback);
  }
}

module.exports = Mascota;
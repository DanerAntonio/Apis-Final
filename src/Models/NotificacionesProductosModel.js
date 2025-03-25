const db = require('../Config/db');

class NotificacionProducto {
  static getAll(callback) {
    db.query('SELECT * FROM Notificaciones_Productos', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Notificaciones_Productos WHERE IdNotificacion = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Notificaciones_Productos SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Notificaciones_Productos SET ? WHERE IdNotificacion = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Notificaciones_Productos WHERE IdNotificacion = ?', [id], callback);
  }
}

module.exports = NotificacionProducto;
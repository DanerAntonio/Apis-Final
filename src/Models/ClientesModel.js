const db = require('../Config/db');

class Cliente {
  static getAll(callback) {
    db.query('SELECT * FROM Clientes', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Clientes WHERE IdCliente = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO Clientes SET ?', data, callback);
  }

  static update(id, data, callback) {
    db.query('UPDATE Clientes SET ? WHERE IdCliente = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Clientes WHERE IdCliente = ?', [id], callback);
  }
}

module.exports = Cliente;
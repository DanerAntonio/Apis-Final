const pool = require('../Config/db');

class UsuariosModel {
  static async findByEmail(email) {
    try {
      const [rows] = await pool.query(
        'SELECT IdUsuario, IdRol, Documento, Correo, Nombre, Apellido, Telefono, Direccion, Foto, Estado, Contrasena FROM Usuarios WHERE Correo = ?', 
        [email]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error en findByEmail:', error);
      throw error;
    }
  }

  static async create(user) {
    try {
      const { IdRol, Documento, Correo, Nombre, Apellido, Telefono, Direccion, Foto, Estado, Contrasena } = user;
      const [result] = await pool.query(
        'INSERT INTO Usuarios SET ?',
        {
          IdRol,
          Documento,
          Correo,
          Nombre,
          Apellido,
          Telefono,
          Direccion,
          Foto,
          Estado,
          Contrasena
        }
      );
      return result.insertId;
    } catch (error) {
      console.error('Error en create:', error);
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await pool.query(
        'SELECT IdUsuario, IdRol, Documento, Correo, Nombre, Apellido, Telefono, Direccion, Foto, Estado FROM Usuarios WHERE IdUsuario = ?',
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error en findById:', error);
      throw error;
    }
  }
}

module.exports = UsuariosModel;
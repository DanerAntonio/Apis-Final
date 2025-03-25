// src/Controllers/AuthController.js
const UsuariosModel = require('../Models/UsuariosModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthController = {
  register: async (req, res) => {
    try {
      const { IdRol, Documento, Correo, Nombre, Apellido, Telefono, Direccion, Foto, Estado, Contrasena } = req.body;
      
      // Validación básica
      if (!Correo || !Contrasena) {
        return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
      }

      const existingUser = await UsuariosModel.findByEmail(Correo);
      if (existingUser) {
        return res.status(400).json({ message: 'El correo ya está registrado' });
      }

      const hashedPassword = await bcrypt.hash(Contrasena, 10);

      const userId = await UsuariosModel.create({
        IdRol: IdRol || 2,
        Documento,
        Correo,
        Nombre,
        Apellido,
        Telefono,
        Direccion,
        Foto,
        Estado: Estado !== undefined ? Estado : 1,
        Contrasena: hashedPassword
      });

      res.status(201).json({ message: 'Usuario registrado exitosamente', userId });
    } catch (error) {
      console.error('Error en registro:', error);
      res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { Correo, Contrasena } = req.body;

      if (!Correo || !Contrasena) {
        return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
      }

      const user = await UsuariosModel.findByEmail(Correo);
      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const isPasswordValid = await bcrypt.compare(Contrasena, user.Contrasena);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = jwt.sign(
        { userId: user.IdUsuario, email: user.Correo, rol: user.IdRol },
        process.env.JWT_SECRET || 'tu_secreto_jwt',
        { expiresIn: '8h' }
      );

      const userData = {
        IdUsuario: user.IdUsuario,
        Nombre: user.Nombre,
        Correo: user.Correo,
        IdRol: user.IdRol
      };

      res.status(200).json({ message: 'Inicio de sesión exitoso', token, user: userData });
    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await UsuariosModel.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const userData = {
        IdUsuario: user.IdUsuario,
        Nombre: user.Nombre,
        Correo: user.Correo,
        IdRol: user.IdRol
      };
      
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
    }
  }
};

module.exports = AuthController;
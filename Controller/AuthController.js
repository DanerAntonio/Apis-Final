const { pool, hashPassword, comparePassword } = require('../Models/Usuario');
const jwt = require('jsonwebtoken');

// Registrar un nuevo usuario
const register = async (req, res) => {
  const { IdRol, Correo, Contraseña, Nombre, Apellido, Documento, Direccion, Telefono } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const [user] = await pool.query('SELECT * FROM Usuarios WHERE Correo = ?', [Correo]);
    if (user.length > 0) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Hashear la contraseña
    const hashedPassword = await hashPassword(Contraseña);

    // Insertar el nuevo usuario
    const [result] = await pool.query(
      'INSERT INTO Usuarios (IdRol, Correo, Contraseña, Nombre, Apellido, Documento, Direccion, Telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [IdRol, Correo, hashedPassword, Nombre, Apellido, Documento, Direccion, Telefono]
    );
    res.status(201).json({ id: result.insertId, message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error("❌ Error en register:", error);
    res.status(500).json({ message: error.message });
  }
};

// Iniciar sesión
const login = async (req, res) => {
  const { Correo, Contraseña } = req.body;

  try {
    // Verificar si el usuario existe
    const [user] = await pool.query('SELECT * FROM Usuarios WHERE Correo = ?', [Correo]);
    if (user.length === 0) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Comparar contraseñas
    const isValidPassword = await comparePassword(Contraseña, user[0].Contraseña);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: user[0].IdUsuario, rol: user[0].IdRol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("❌ Error en login:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login
};
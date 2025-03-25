const pool = require('../Models/ClientesModel');

const getClientes = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Clientes');
    res.json(rows);
  } catch (error) {
    console.error("❌ Error en getClientes:", error);
    res.status(500).json({ message: error.message });
  }
};

const createCliente = async (req, res) => {
  const { IdUsuario, Nombre, Apellido, Documento, Direccion, Correo, Telefono } = req.body;

  if (!IdUsuario || !Nombre || !Apellido || !Documento || !Direccion || !Correo || !Telefono) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    // Validar si ya existe por Documento o Correo
    const [existing] = await pool.query(
      'SELECT * FROM Clientes WHERE Documento = ? OR Correo = ?',
      [Documento, Correo]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: 'Cliente con este Documento o Correo ya existe' });
    }

    const [result] = await pool.query(
      'INSERT INTO Clientes (IdUsuario, Nombre, Apellido, Documento, Direccion, Correo, Telefono) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [IdUsuario, Nombre, Apellido, Documento, Direccion, Correo, Telefono]
    );

    res.status(201).json({ id: result.insertId, message: 'Cliente creado exitosamente' });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: 'Documento o correo ya registrado' });
    }
    console.error("❌ Error en createCliente:", error);
    res.status(500).json({ message: error.message });
  }
};


const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { IdUsuario, Nombre, Apellido, Documento, Direccion, Correo, Telefono } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Clientes SET IdUsuario = ?, Nombre = ?, Apellido = ?, Documento = ?, Direccion = ?, Correo = ?, Telefono = ? WHERE IdCliente = ?',
      [IdUsuario, Nombre, Apellido, Documento, Direccion, Correo, Telefono, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json({ message: 'Cliente actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Clientes WHERE IdCliente = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente
};
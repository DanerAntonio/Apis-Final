const pool = require('../Models/ComprasModel');

const getCompras = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Compras');
    res.json(rows);
  } catch (error) {
    console.error("❌ Error en getCompras:", error);
    res.status(500).json({ message: error.message });
  }
};

const createCompra = async (req, res) => {
  const { IdProveedor, FechaCompra, TotalMonto, TotalIva, TotalMontoConIva, Estado } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Compras (IdProveedor, FechaCompra, TotalMonto, TotalIva, TotalMontoConIva, Estado) VALUES (?, ?, ?, ?, ?, ?)',
      [IdProveedor, FechaCompra, TotalMonto, TotalIva, TotalMontoConIva, Estado]
    );
    res.status(201).json({ id: result.insertId, message: 'Compra creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCompra = async (req, res) => {
  const { id } = req.params;
  const { IdProveedor, FechaCompra, TotalMonto, TotalIva, TotalMontoConIva, Estado } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Compras SET IdProveedor = ?, FechaCompra = ?, TotalMonto = ?, TotalIva = ?, TotalMontoConIva = ?, Estado = ? WHERE IdCompra = ?',
      [IdProveedor, FechaCompra, TotalMonto, TotalIva, TotalMontoConIva, Estado, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json({ message: 'Compra actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCompra = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Compras WHERE IdCompra = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json({ message: 'Compra eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCompras,
  createCompra,
  updateCompra,
  deleteCompra
};
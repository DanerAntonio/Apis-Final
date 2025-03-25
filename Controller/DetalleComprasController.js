const pool = require('../Models/DetalleComprasModel');

const getDetalleCompras = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM DetalleCompras');
    res.json(rows);
  } catch (error) {
    console.error("❌ Error en getDetalleCompras:", error);
    res.status(500).json({ message: error.message });
  }
};

const createDetalleCompra = async (req, res) => {
  const { IdProducto, IdCompra, Cantidad, PrecioUnitario, Subtotal, SubtotalConIva, IvaUnitario } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO DetalleCompras (IdProducto, IdCompra, Cantidad, PrecioUnitario, Subtotal, SubtotalConIva, IvaUnitario) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [IdProducto, IdCompra, Cantidad, PrecioUnitario, Subtotal, SubtotalConIva, IvaUnitario]
    );
    res.status(201).json({ id: result.insertId, message: 'Detalle de compra creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDetalleCompra = async (req, res) => {
  const { id } = req.params;
  const { IdProducto, IdCompra, Cantidad, PrecioUnitario, Subtotal, SubtotalConIva, IvaUnitario } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE DetalleCompras SET IdProducto = ?, IdCompra = ?, Cantidad = ?, PrecioUnitario = ?, Subtotal = ?, SubtotalConIva = ?, IvaUnitario = ? WHERE IdDetalleCompras = ?',
      [IdProducto, IdCompra, Cantidad, PrecioUnitario, Subtotal, SubtotalConIva, IvaUnitario, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Detalle de compra no encontrado' });
    }
    res.status(200).json({ message: 'Detalle de compra actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDetalleCompra = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM DetalleCompras WHERE IdDetalleCompras = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Detalle de compra no encontrado' });
    }
    res.status(200).json({ message: 'Detalle de compra eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDetalleCompras,
  createDetalleCompra,
  updateDetalleCompra,
  deleteDetalleCompra
};
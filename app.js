const express = require('express');
const app = express();

// Importar todas las rutas
const permisosRoutes = require('./src/Routes/PermisosRoutes');
const rolesRoutes = require('./src/Routes/RolesRoutes');

const clientesRoutes = require('./src/Routes/ClientesRoutes');
const tipoServicioRoutes = require('./src/Routes/TipoServicioRoutes');
const serviciosRoutes = require('./src/Routes/ServiciosRoutes');
const mascotasRoutes = require('./src/Routes/MascotasRoutes');
const citasRoutes = require('./src/Routes/CitasRoutes');
const proveedoresRoutes = require('./src/Routes/ProveedoresRoutes');
const categoriaProductosRoutes = require('./src/Routes/CategoriaProductosRoutes');
const productosRoutes = require('./src/Routes/ProductosRoutes');
const notificacionesProductosRoutes = require('./src/Routes/NotificacionesProductosRoutes');
const comprasRoutes = require('./src/Routes/ComprasRoutes');
const detalleComprasRoutes = require('./src/Routes/DetalleComprasRoutes');
const ventasRoutes = require('./src/Routes/VentasRoutes');
const detalleVentasRoutes = require('./src/Routes/DetalleVentasRoutes');
const detalleVentasServiciosRoutes = require('./src/Routes/DetalleVentasServiciosRoutes');
const authRoutes = require('./src/Routes/AuthRoutes'); // Importar las rutas de autenticación

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/api/permisos', permisosRoutes);
app.use('/api/roles', rolesRoutes);

app.use('/api/clientes', clientesRoutes);
app.use('/api/tipos-servicio', tipoServicioRoutes);
app.use('/api/servicios', serviciosRoutes);
app.use('/api/mascotas', mascotasRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/categorias-productos', categoriaProductosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/notificaciones-productos', notificacionesProductosRoutes);
app.use('/api/compras', comprasRoutes);
app.use('/api/detalle-compras', detalleComprasRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/detalle-ventas', detalleVentasRoutes);
app.use('/api/detalle-ventas-servicios', detalleVentasServiciosRoutes);
app.use('/api/auth', authRoutes); // Agregar las rutas de autenticación

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
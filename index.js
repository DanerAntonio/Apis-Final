const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Configuración de CORS para desarrollo/producción
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? [
        'https://apls-final.vercel.app',
        'https://apls-final.vercel.app' // Opcional: otros dominios
      ]
    : 'http://localhost:5173', // Desarrollo local
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

// Importación de rutas
const authRoutes = require('./src/Routes/AuthRoutes');
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

// Rutas API
app.use('/api/auth', authRoutes);
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

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Configuración para Vercel (exportamos la app)
if (process.env.NODE_ENV === 'production') {
  module.exports = app;
} else {
  // Ejecución local
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
  });
}
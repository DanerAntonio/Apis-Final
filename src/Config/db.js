// Config/db.js
const mysql = require('mysql2');

// Crear un pool de conexiones en lugar de una conexión única
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Chavo1705',
  database: process.env.DB_NAME || 'teocat',
  waitForConnections: true,
  connectionLimit: 10, // Número máximo de conexiones en el pool
  queueLimit: 0
});

// Manejar eventos de conexión para diagnóstico
pool.on('connection', (connection) => {
  console.log('Nueva conexión establecida');
});

pool.on('error', (err) => {
  console.error('Error en el pool de conexiones:', err);
});

// Exportar el pool para usar promesas
module.exports = pool.promise();
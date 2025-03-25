const mysql = require('mysql2');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Verificar que las variables están cargadas
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Crear conexión con la base de datos
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // Incluir el puerto aquí si es necesario
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Función para verificar la conexión de manera asíncrona
async function checkConnection() {
  try {
    const connection = await pool.promise().getConnection();
    console.log('Conexión exitosa a la base de datos');
    connection.release(); // Asegúrate de liberar la conexión
  } catch (err) {
    console.error('Error de conexión:', err.message); // Ver los detalles del error
  }
}

// Llamar a la función para verificar la conexión
checkConnection();

// Exportar la conexión
module.exports = pool.promise();

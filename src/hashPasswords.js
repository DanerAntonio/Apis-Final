const bcrypt = require('bcrypt');
const mysql = require('mysql2'); // Asegúrate de tener el paquete mysql o mysql2 instalado

// Configuración de la base de datos Teocat
const db = mysql.createConnection({
  host: 'localhost',  // Cambia esto según tu configuración
  user: 'root',       // Tu usuario de la base de datos
  password: '',       // Tu contraseña de la base de datos
  database: 'Teocat',  // Nombre de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Función para encriptar las contraseñas de los usuarios
async function hashPasswords() {
  // Consulta todos los usuarios en la base de datos
  db.query('SELECT * FROM Usuarios', async (err, users) => {
    if (err) throw err;

    console.log('Usuarios recuperados de la base de datos:', users); // Para ver los datos que estamos obteniendo

    // Itera sobre cada usuario y encripta su contraseña
    for (let user of users) {
      console.log(`Procesando usuario ID: ${user.IdUsuario}, Contraseña: ${user['Contrase?a']}`); // Accede a la columna con el nombre especial 'Contrase?a'
      if (user['Contrase?a'] && user['Contrase?a'].trim() !== '') {  // Verifica si la contraseña no está vacía
        try {
          // Encripta la contraseña
          const hashedPassword = await bcrypt.hash(user['Contrase?a'], 10);

          // Actualiza la contraseña encriptada en la base de datos
          db.query(
            'UPDATE Usuarios SET Contraseña = ? WHERE IdUsuario = ?',
            [hashedPassword, user.IdUsuario],
            (err, result) => {
              if (err) console.error('Error actualizando usuario ID:', user.IdUsuario, err);
              else console.log('Contraseña actualizada para usuario ID:', user.IdUsuario);
            }
          );
        } catch (err) {
          console.error('Error encriptando la contraseña para usuario ID:', user.IdUsuario, err);
        }
      } else {
        console.log(`Usuario ID ${user.IdUsuario} tiene una contraseña vacía o indefinida.`);
      }
    }
  });
}

hashPasswords();

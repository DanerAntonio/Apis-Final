const fetch = require('node-fetch'); // Asegúrate de tener node-fetch instalado: npm install node-fetch

const API_URL = 'http://localhost:3000/api';

// Función para probar una ruta GET
async function testGet() {
  try {
    const response = await fetch(`${API_URL}/clientes`);
    const data = await response.json();
    console.log('GET /clientes:', data);
  } catch (error) {
    console.error('Error en GET /clientes:', error);
  }
}

// Función para probar una ruta POST
// Función para probar una ruta POST
async function testPost() {
  try {
    const correoUnico = `ana${Date.now()}@example.com`; // Genera un correo único
    const response = await fetch(`${API_URL}/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Documento: '102345678', // Campo obligatorio
        Nombre: 'Ana',         // Campo obligatorio
        Apellido: 'Gómez',     // Campo obligatorio
        Correo: correoUnico,   // Usa un correo único
        Telefono: '1230456789', // Campo obligatorio
        Direccion: 'Calle 123', // Campo obligatorio
      }),
    });
    const data = await response.json();
    console.log('POST /clientes:', data);
  } catch (error) {
    console.error('Error en POST /clientes:', error);
  }
}
// Función para probar una ruta PUT
async function testPut() {
  try {
    const response = await fetch(`${API_URL}/clientes/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Nombre: 'Ana María', // Actualiza solo el nombre
      }),
    });
    const data = await response.json();
    console.log('PUT /clientes/1:', data);
  } catch (error) {
    console.error('Error en PUT /clientes/1:', error);
  }
}

// Función para probar una ruta DELETE
async function testDelete() {
  try {
    const response = await fetch(`${API_URL}/clientes/1`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log('DELETE /clientes/1:', data);
  } catch (error) {
    console.error('Error en DELETE /clientes/1:', error);
  }
}

// Ejecutar pruebas
(async () => {
  await testGet();
  await testPost();
  await testPut();
  await testDelete();
})();
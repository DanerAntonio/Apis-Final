const { pool } = require('./src/Config/db');

async function test() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Conexión OK. Hora BD:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await pool.end();
  }
}

test();
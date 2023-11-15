const sql = require('mssql')

const config = {
  user: 'sa',
  password: '123456789Abc',
  server: 'localhost',
  database: 'MiBaseDeDatos',
  options: {
    encrypt: false,
  },
}

async function queryDatabase() {
  try {
    // Conecta a la base de datos
    await sql.connect(config)

    // Realiza la consulta
    const result = await sql.query('SELECT * FROM Alumnos')

    // Procesa los resultados
    console.log(result.recordset)
  } catch (err) {
    console.error('Error al consultar la base de datos:', err)
  } finally {
    // Cierra la conexión a la base de datos
    sql.close()
  }
}

queryDatabase()

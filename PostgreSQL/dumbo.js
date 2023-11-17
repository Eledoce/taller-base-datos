const { Client } = require('pg')

// Configuración de la conexión a la base de datos
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'dumbo',
  password: '123456789Abc',
  port: 5432,
})

// Conectar a la base de datos
client.connect()

// Realizar la consulta
client.query('SELECT * FROM alumnos', (err, result) => {
  if (err) {
    console.error('Error al ejecutar la consulta', err)
    return
  }

  // Imprimir los resultados
  console.log('Resultados de la consulta:', result.rows)

  // Cerrar la conexión
  client.end()
})

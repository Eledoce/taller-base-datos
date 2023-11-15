// get the client xd
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789Abc',
  database: 'MiBaseDeDatos',
})

// simple query
connection.query('SELECT * FROM Alumnos', function (err, results, fields) {
  console.log(results) // results contains rows returned
})
connection.end()

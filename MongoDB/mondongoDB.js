const { MongoClient } = require('mongodb')

// URL de conexión a tu base de datos MongoDB
const url = 'mongodb://edoce:123456789Abc@localhost:27017' // Cambia esto según tu configuración

// Crea una instancia del cliente de MongoDB
const client = new MongoClient(url, { useUnifiedTopology: true })

// Conecta al servidor de MongoDB
const connectToMongoDB = async () => {
  try {
    await client.connect()
    console.log('Conexión exitosa a MongoDB')
    await queryCollection()
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
  }
}

const queryCollection = async () => {
  try {
    const database = client.db('la-db')
    const collection = database.collection('alumnos')

    const documents = await collection.find({}).toArray()
    client.close()
    // Imprime los resultados
    console.log('Documentos en la colección:')
    console.log(documents)
  } catch (error) {
    console.error('Error al consultar la colección:', error)
  }
}

connectToMongoDB()

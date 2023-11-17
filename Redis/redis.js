const { createClient } = require('redis')

const main = async () => {
  const client = await createClient({
    url: 'redis://default:123456789Abc@localhost:6379',
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()

  // obteniendo todos los valores de la base de datos
  const value = await client.get('basca')
  console.log(value)

  await client.disconnect()
}

main()

const { createClient } = require('redis')

const main = async () => {
  const client = await createClient({
    url: 'redis://default:123456789Abc@localhost:6379',
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()

  await client.set('telefono', '735 123 4567')
  const value = await client.get('telefono')
  console.log('telefono es', value)
  await client.disconnect()
}
main()

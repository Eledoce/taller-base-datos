const { createClient } = require('redis')

const main = async () => {
  const client = await createClient({
    url: 'redis://default:123456789Abc@localhost:6379',
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()

  await client.set('basca', '5678')
  const value = await client.get('basca')
  console.log('value', value)

  await client.disconnect()
}
main()

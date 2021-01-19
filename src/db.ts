import { MongoClient } from 'mongodb'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const name = 'gamer'
const password = 'games'

const url = `mongodb://${name}:${password}@localhost:27017`
const dbms = new MongoClient(url, options)

export const connect = async (): Promise<void> => {
  try {
    console.log('Trying to connect to mongo, wait...')

    const client = await dbms.connect()

    console.log('Successfully connected to Mongo!')

    const db = client.db('usersDb')
    const collection = db.collection('users')
    const user = { name: 'Tom', age: 23 }

    await collection.insertOne(user)

    await client.close()
  } catch (e) {
    console.log('Error with Mongo')
  }
}

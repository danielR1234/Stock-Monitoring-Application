import 'dotenv-safe/config'
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { createSchema } from './utils/createSchema'

const main = async (): Promise<void> => {
  const schema = await createSchema()
  const apolloServer = new ApolloServer({
    schema,
  })

  const app = express()

  app.use(cors())
  await apolloServer.start()
  apolloServer.applyMiddleware({
    app,
    cors: false,
  })

  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server started on ${process.env.PORT}/graphql`)
  })
}

main().catch((err) => console.error(err))

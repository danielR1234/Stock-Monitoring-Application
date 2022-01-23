import { SimpleMovingAverage } from './technicalIndicators/movingAverages/simpleMovingAverage'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import 'dotenv-safe/config'
import express from 'express'
import 'reflect-metadata'
import { createSchema } from './utils/createSchema'
import { LinkedList } from './technicalIndicators/utils/LinkedList'

const main = async () => {
  const schema = await createSchema()
  const apolloServer = new ApolloServer({
    schema: schema,
  })

  const app = express()

  app.use(cors())
  await apolloServer.start()
  apolloServer.applyMiddleware({
    app,
    cors: false,
  })

  app.listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}/graphql`)
  })
}

main().catch((err) => console.log(err))

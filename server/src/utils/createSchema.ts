import { StockResolver } from '../resolvers/stock'
import { buildSchema } from 'type-graphql'
import { GraphQLSchema } from 'graphql'

export const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [StockResolver],
    validate: false,
  })
}

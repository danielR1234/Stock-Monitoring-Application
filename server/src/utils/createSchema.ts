import { StockCoreDataResolver, StockMAResolver } from '../resolvers/stock'
import { buildSchema } from 'type-graphql'
import { GraphQLSchema } from 'graphql'

export const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [StockCoreDataResolver, StockMAResolver],
    validate: false,
  })
}

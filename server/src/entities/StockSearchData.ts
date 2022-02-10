import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class StockSearchData {
  @Field()
  symbol: string

  @Field()
  cik: string

  @Field()
  securityName: string

  @Field()
  securityType: string

  @Field()
  region: string

  @Field()
  exchange: string

  @Field()
  sector: string

  @Field()
  logo: string
}

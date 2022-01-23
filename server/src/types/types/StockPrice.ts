import { Field, Float, ObjectType } from 'type-graphql'

@ObjectType()
export class StockPrice {
  @Field()
  date: string
  @Field(() => Float)
  close: number
  @Field(() => Float)
  volume: number
  @Field(() => Float)
  change: number
  @Field(() => Float)
  changePercent: number
  @Field(() => Float)
  changeOverTime: number
}

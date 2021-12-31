import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class StockCoreDataParamsArgs {
  @Field(() => String, { nullable: true })
  period: string | null
  @Field(() => Int)
  last: number
  @Field()
  symbol: string
}

import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class StockCoreDataParamsArgs {
  @Field(() => String)
  period: string
  @Field(() => Int)
  last = 1
  @Field()
  symbol: string
  @Field(() => Boolean)
  chooseBalancesheet = true
  @Field(() => Boolean)
  chooseChashflow = true
  @Field(() => Boolean)
  chooseCompany = true
  @Field(() => Boolean)
  chooseDividends = true
  @Field(() => Boolean)
  chooseFinancials = true
  @Field(() => Boolean)
  chooseSearch? = true
}

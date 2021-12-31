import { Field, ObjectType } from 'type-graphql'
import { BalanceSheet, CashFlow } from '../types/types'

@ObjectType()
export class StockData {
  @Field()
  symbol: string

  @Field(() => [BalanceSheet])
  balancesheet: BalanceSheet[]

  @Field(() => [CashFlow])
  cashflow: CashFlow[]
}

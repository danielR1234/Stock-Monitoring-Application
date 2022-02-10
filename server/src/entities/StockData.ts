import { Field, ObjectType } from 'type-graphql'
import { BalanceSheet, CashFlow, Company, Financials } from '../types/types'
import { Dividends } from '../types/types/Dividends'

@ObjectType()
export class StockData {
  @Field()
  symbol: string

  @Field(() => [BalanceSheet], { nullable: true })
  balancesheet: BalanceSheet[] | null

  @Field(() => [CashFlow], { nullable: true })
  cashflow: CashFlow[] | null

  @Field(() => Company, { nullable: true })
  company: Company | null

  @Field(() => [Dividends], { nullable: true })
  dividends: Dividends[] | null

  @Field(() => [Financials], { nullable: true })
  financials: Financials[] | null
}

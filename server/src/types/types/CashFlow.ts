import { ObjectType, Field, Float, Int } from 'type-graphql'

@ObjectType()
export class CashFlow {
  @Field(() => Float)
  capitalExpenditures: number
  @Field(() => Float, { nullable: true })
  cashChange: number | null
  @Field(() => Float)
  cashFlow: number
  @Field(() => Float)
  cashFlowFinancing: number
  @Field(() => Float, { nullable: true })
  changesInInventories: number | null
  @Field(() => Float, { nullable: true })
  changesInReceivables: number | null
  @Field()
  currency: string
  @Field(() => Float)
  depreciation: number
  @Field(() => Float, { nullable: true })
  dividendsPaid: number | null
  @Field(() => Float, { nullable: true })
  exchangeRateEffect: number | null
  @Field()
  filingType: string
  @Field()
  fiscalDate: string
  @Field(() => Int)
  fiscalQuarter: number
  @Field(() => Int)
  fiscalYear: number
  @Field(() => Float, { nullable: true })
  investingActivityOther: number
  @Field(() => Float, { nullable: true })
  investments: number | null
  @Field(() => Float, { nullable: true })
  netBorrowings: number | null
  @Field(() => Float)
  netIncome: number
  @Field(() => Float, { nullable: true })
  otherFinancingCashFlows: number | null
  @Field()
  reportDate: string
  @Field()
  symbol: string
  @Field(() => Float)
  totalInvestingCashFlows: number
  @Field()
  id: string
  @Field()
  key: string
  @Field()
  subkey: string
  @Field(() => Float)
  date: number
  @Field()
  updated: string
}

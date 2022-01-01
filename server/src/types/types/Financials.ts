import { ObjectType, Float, Field, Int } from 'type-graphql'

@ObjectType()
export class Financials {
  @Field(() => Float)
  EBITDA: number
  @Field(() => Float)
  accountsPayable: number
  @Field(() => Float, { nullable: true })
  capitalSurplus: number
  @Field(() => Float, { nullable: true })
  cashChange: number
  @Field(() => Float)
  cashFlow: number
  @Field(() => Float)
  cashFlowFinancing: number
  @Field(() => Float)
  @Field(() => Float, { nullable: true })
  changesInInventories: number
  @Field(() => Float, { nullable: true })
  changesInReceivables: number
  @Field(() => Float)
  commonStock: number
  @Field(() => Float)
  costOfRevenue: number
  @Field()
  currency: string
  @Field(() => Float)
  currentAssets: number
  @Field(() => Float)
  currentCash: number
  @Field(() => Float)
  currentDebt: number
  @Field(() => Float, { nullable: true })
  currentLongTermDebt: number
  @Field(() => Float)
  depreciation: number
  @Field(() => Float, { nullable: true })
  dividendsPaid: number
  @Field(() => Float)
  ebit: number
  @Field(() => Float, { nullable: true })
  exchangeRateEffect: number
  @Field()
  filingType: string
  @Field()
  fiscalDate: string
  @Field(() => Float)
  fiscalQuarter: number
  @Field(() => Float)
  fiscalYear: number
  @Field(() => Float)
  goodwill: number
  @Field(() => Float)
  grossProfit: number
  @Field(() => Float)
  incomeTax: number
  @Field(() => Float)
  intangibleAssets: number
  @Field(() => Float)
  interestIncome: number
  @Field(() => Float)
  inventory: number
  @Field(() => Float, { nullable: true })
  investingActivityOther: number
  @Field(() => Float, { nullable: true })
  investments: number
  @Field(() => Float)
  longTermDebt: number
  @Field(() => Float)
  longTermInvestments: number
  @Field(() => Float)
  minorityInterest: number
  @Field(() => Float, { nullable: true })
  netBorrowings: number
  @Field(() => Float)
  netIncome: number
  @Field(() => Float)
  netIncomeBasic: number
  @Field(() => Float, { nullable: true })
  netTangibleAssets: number
  @Field(() => Float)
  operatingExpense: number
  @Field(() => Float)
  operatingIncome: number
  @Field(() => Float, { nullable: true })
  operatingRevenue: number
  @Field(() => Float)
  otherAssets: number
  @Field(() => Float)
  otherCurrentAssets: number
  @Field(() => Float, { nullable: true })
  otherCurrentLiabilities: number
  @Field(() => Float)
  otherIncomeExpenseNet: number
  @Field(() => Float, { nullable: true })
  otherLiabilities: number
  @Field(() => Float)
  pretaxIncome: number
  @Field(() => Float)
  propertyPlantEquipment: number
  @Field(() => Float)
  receivables: number
  @Field()
  reportDate: string
  @Field(() => Float)
  researchAndDevelopment: number
  @Field(() => Float)
  retainedEarnings: number
  @Field(() => Float)
  revenue: number
  @Field(() => Float)
  sellingGeneralAndAdmin: number
  @Field(() => Float)
  shareholderEquity: number
  @Field(() => Float)
  shortTermDebt: number
  @Field(() => Float, { nullable: true })
  shortTermInvestments: number
  @Field()
  symbol: string
  @Field(() => Float)
  totalAssets: number
  @Field(() => Float)
  totalCash: number
  @Field(() => Float)
  totalDebt: number
  @Field(() => Float)
  totalInvestingCashFlows: number
  @Field(() => Float)
  totalLiabilities: number
  @Field(() => Float)
  totalRevenue: number
  @Field(() => Float)
  treasuryStock: number
  @Field()
  id: string
  @Field()
  key: string
  @Field()
  subkey: string
  @Field(() => Float)
  updated: number
}

import { ObjectType, Field, Float, Int } from 'type-graphql'

@ObjectType()
export class BalanceSheet {
  @Field(() => Float)
  accountsPayable: number
  @Field(() => Float, { nullable: true })
  capitalSurplus: null
  @Field(() => Float)
  commonStock: number
  @Field()
  currency: string
  @Field(() => Float)
  currentAssets: number
  @Field(() => Float)
  currentCash: number
  @Field(() => Float, { nullable: true })
  currentLongTermDebt: number | null
  @Field()
  filingType: string
  @Field()
  fiscalDate: string
  @Field(() => Int)
  fiscalQuarter: number
  @Field(() => Int)
  fiscalYear: number
  @Field(() => Float)
  goodwill: number
  @Field(() => Float)
  intangibleAssets: number
  @Field(() => Float)
  inventory: number
  @Field(() => Float)
  longTermDebt: number
  @Field(() => Float)
  longTermInvestments: number
  @Field(() => Float)
  minorityInterest: number
  @Field(() => Float)
  netTangibleAssets: number
  @Field(() => Float)
  otherAssets: number
  @Field(() => Float)
  otherCurrentAssets: number
  @Field(() => Float, { nullable: true })
  otherCurrentLiabilities: number | null
  @Field(() => Float, { nullable: true })
  otherLiabilities: number | null
  @Field(() => Float)
  propertyPlantEquipment: number
  @Field(() => Float)
  receivables: number
  @Field()
  reportDate: string
  @Field(() => Float)
  retainedEarnings: number
  @Field(() => Float)
  shareholderEquity: number
  @Field(() => Float, { nullable: true })
  shortTermInvestments: number | null
  @Field()
  symbol: string
  @Field(() => Float)
  totalAssets: number
  @Field(() => Float)
  totalCurrentLiabilities: number
  @Field(() => Float)
  totalLiabilities: number
  @Field(() => Float)
  treasuryStock: 0
  @Field()
  id: string
  @Field()
  key: string
  @Field()
  subkey: string
  @Field(() => Float)
  date: number
  @Field(() => Float)
  updated: number
}

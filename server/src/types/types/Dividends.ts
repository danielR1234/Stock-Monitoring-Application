import { Field, ObjectType, Int, Float } from 'type-graphql'

@ObjectType()
export class Dividends {
  @Field(() => Float)
  adrFee: number
  @Field(() => Float)
  amount: number
  @Field()
  announceDate: string
  @Field()
  countryCode: string
  @Field(() => Float)
  coupon: number
  @Field()
  created: string
  @Field()
  currency: string
  @Field()
  declaredCurrencyCD: string
  @Field()
  declaredDate: string
  @Field(() => Float)
  declaredGrossAmount: number
  @Field()
  description: string
  @Field()
  exDate: string
  @Field()
  figi: string
  @Field()
  fiscalYearEndDate: string
  @Field()
  flag: string
  @Field()
  frequency: string
  @Field(() => Float)
  fromFactor: number
  @Field()
  fxDate: string
  @Field(() => Float)
  grossAmount: number
  @Field(() => String, { nullable: true })
  installmentPayDate: string | null
  @Field(() => String, { nullable: true })
  isApproximate: string | null
  @Field(() => String, { nullable: true })
  isCapitalGains: string | null
  @Field(() => String, { nullable: true })
  isDAP: string | null
  @Field(() => String, { nullable: true })
  isNetInvestmentIncome: string | null
  @Field()
  lastUpdated: string
  @Field()
  marker: string
  @Field(() => Int)
  netAmount: number
  @Field(() => String, { nullable: true })
  notes: string | null
  @Field()
  optionalElectionDate: string
  @Field(() => Float)
  parValue: number
  @Field()
  parValueCurrency: string
  @Field()
  paymentDate: string
  @Field()
  periodEndDate: string
  @Field()
  recordDate: string
  @Field()
  refid: string
  @Field()
  registrationDate: string
  @Field()
  secondExDate: string
  @Field()
  secondPaymentDate: string
  @Field()
  securityType: string
  @Field()
  symbol: string
  @Field(() => Float)
  taxRate: number
  @Field()
  toDate: string
  @Field(() => Float)
  toFactor: number
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

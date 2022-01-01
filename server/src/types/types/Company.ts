import { Field, Float, ObjectType } from 'type-graphql'

@ObjectType()
export class Company {
  @Field()
  symbol: string
  @Field()
  companyName: string
  @Field()
  exchange: string
  @Field()
  industry: string
  @Field()
  website: string
  @Field()
  description: string
  @Field()
  CEO: string
  @Field()
  securityName: string
  @Field()
  issueType: string
  @Field()
  sector: string
  @Field(() => Float)
  primarySicCode: number
  @Field(() => Float)
  employees: number
  @Field(() => [String])
  tags: string[]
  @Field()
  address: string
  @Field(() => String, { nullable: true })
  address2: string | null
  @Field()
  state: string
  @Field()
  city: string
  @Field()
  zip: string
  @Field()
  country: string
  @Field()
  phone: string
}

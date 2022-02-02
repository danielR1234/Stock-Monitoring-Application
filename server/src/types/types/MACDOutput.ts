import { ObjectType, Field, Float } from 'type-graphql'

@ObjectType()
export class MACDOutput {
  @Field(() => Float, { nullable: true })
  MACD?: number
  @Field(() => Float, { nullable: true })
  signal?: number
  @Field(() => Float, { nullable: true })
  histogram?: number
}

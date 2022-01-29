import { Field, ObjectType, Int, Float } from 'type-graphql'
import { isRegularExpressionLiteral } from 'typescript'

// Stock Moving Average

@ObjectType()
export class StockMA {
  @Field(() => [Float], { nullable: true })
  simpleMovingAverage: number[]
  @Field(() => [Float], { nullable: true })
  exponentialMovingAverage: number[]
}

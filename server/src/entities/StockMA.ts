import { Field, Float, ObjectType } from 'type-graphql'
import { MACDOutput } from '../types/types'

// Stock Moving Average

@ObjectType()
export class StockMA {
  @Field(() => [Float], { nullable: true })
  simpleMovingAverage: number[] | null
  @Field(() => [Float], { nullable: true })
  exponentialMovingAverage: number[] | null
  @Field(() => [MACDOutput], { nullable: true })
  movingAverageConvergenceDivergence: MACDOutput[] | null
}

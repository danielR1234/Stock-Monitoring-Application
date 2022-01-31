import { LinkedList } from '../utils/LinkedList'
import { MovingAverageInput, SimpleMovingAverage } from './SimpleMovingAverage'
import { Indicator } from '../indicator/indicator'

export class ExponentialMovingAverage extends Indicator {
  period: number
  prices: number[]
  result: number[]
  constructor(input: MovingAverageInput) {
    super(input)
    this.period = input.period
    this.prices = input.values
    this.result = []
  }
  generateExponentialAverage = (): number[] => {
    // less pricess than period return []
    if (this.prices.length < this.period) {
      return []
    }
    const SMA = new SimpleMovingAverage(
      {
        period: this.period,
        values: this.prices,
      },
      1
    )
    // generates first SMA of given prices
    const sma = SMA.generateSimpleMovingAverage()
    let List = new LinkedList()
    // pushes the SMA as first head in to the Linked List
    List.pushLastNode(sma[0])
    let current = 0
    const exponentialMovingAverages = []
    exponentialMovingAverages.push(sma[0])
    const multiplier = 2 / (this.period + 1)
    // start the calculation from the first day after the period e.g period is 5 --> start calculation on the 6 day
    while (this.period + current < this.prices.length) {
      const value = this.prices[this.period + current]
      // previosEMA = header in the LinkedList
      const previousEma = List.shift()
      const currentEma = (value - previousEma) * multiplier + previousEma
      exponentialMovingAverages.push(currentEma)
      List.pushLastNode(currentEma)
      current++
    }

    return exponentialMovingAverages
  }
}

// Initial SMA: 10-period sum / 10
// Multiplier: (2 / (Time periods + 1) ) = (2 / (10 + 1) ) = 0.1818 (18.18%)
// EMA: {Close - EMA(previous day)} x multiplier + EMA(previous day).

// Exponential moving averages (EMAs) reduce the lag by applying more weight to recent prices.
// EMAs differ from simple moving averages in that a given day's EMA calculation depends on the EMA calculations for all the days prior to that day.

// The formula for an EMA incorporates the previous period's EMA value, which in turn incorporates the value for the EMA value before that, and so on.
// Each previous EMA value accounts for a small portion of the current value.
// Therefore, the current EMA value will change depending on how much past data you use in your EMA calculation.
// Ideally, for a 100 % accurate EMA, you should use every data point the stock has ever had in calculating the EMA,
// starting your calculations from the first day the stock existed.This is not always practical,
// but the more data points you use, the more accurate your EMA will be.
// The goal is to maximize accuracy while minimizing calculation time.

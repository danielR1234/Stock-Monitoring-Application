import { LinkedList } from '../utils/LinkedList'
import { Indicator, IndicatorInput } from './../indicator/indicator'

export class MovingAverageInput extends IndicatorInput {
  constructor(public period: number, public values: number[]) {
    super()
  }
}

export class SimpleMovingAverage extends Indicator {
  period: number
  prices: number[]
  result: number[]
  numberOfSMAsCaluclated: number
  constructor(
    input: MovingAverageInput,
    numberOfSMAsCaluclated: number = Infinity
  ) {
    super(input)
    this.period = input.period
    this.prices = input.values
    this.numberOfSMAsCaluclated = numberOfSMAsCaluclated
    this.result = []
  }

  generateSimpleMovingAverage = (): number[] => {
    // less pricess than period return []
    if (this.prices.length < this.period) {
      return []
    }
    let List = new LinkedList()
    let sum = 0
    let current = 0
    let average
    let n = 0
    // The first head in the List must be 0
    List.pushLastNode(0)
    //make calucaltion with all pricess
    while (
      ++current < this.prices.length &&
      // if you just need the first SMA
      this.numberOfSMAsCaluclated + this.period - 2 > n++
    ) {
      if (current < this.period - 1) {
        sum = sum + this.prices[current]
        // push next header in the List
        List.pushLastNode(this.prices[current])
      } else {
        // remove first Header in the list (first header is 0)
        // which at the same time is the value which is no longer needed to calculate the total
        // so that it is deducted from the total, otherwise a value too much will be used for the calculation
        sum = sum - List.shift() + this.prices[current]
        List.pushLastNode(this.prices[current])
        average = sum / this.period
        this.result.push(average)
      }
    }
    return this.result
  }
}

// Also possible to calcule the simple Moving Average

// function simpleMovingAverage(prices: any, window = 5) {
//     if (!prices || prices.length < window) {
//       console.log('ifff')
//       return []
//     }

//     let index = window - 1
//     const length = prices.length + 1

//     const simpleMovingAverages: any = []

//     while (++index < length) {
//       const windowSlice = prices.slice(index - window, index)
//       const sum = windowSlice.reduce((prev: any, curr: any) => prev + curr)
//       simpleMovingAverages.push(sum / window)
//     }

//     return simpleMovingAverages
//   }

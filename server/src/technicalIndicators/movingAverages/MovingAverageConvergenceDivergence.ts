// Mac-Dee
import { ExponentialMovingAverage } from './ExponentialMovingAverage'
import { SimpleMovingAverage } from './SimpleMovingAverage'
import { Indicator, IndicatorInput } from '../indicator/indicator'
import { MACDOutput } from '../../types/types'

export class MACDInput extends IndicatorInput {
  fastPeriod: number
  slowPeriod: number
  signalPeriod: number
  constructor(public values: number[]) {
    super()
  }
}

export class MACD extends Indicator {
  result: MACDOutput[]
  prices: number[]
  fastPeriod: number
  slowPeriod: number
  signalPeriod: number
  constructor(input: MACDInput) {
    super(input)
    this.prices = input.values
    this.fastPeriod = input.fastPeriod
    this.slowPeriod = input.slowPeriod
    this.signalPeriod = input.signalPeriod
    this.result = []
  }
  generateMACD = (): MACDOutput[] => {
    let FastEMA = new ExponentialMovingAverage({
      period: this.fastPeriod,
      values: this.prices,
    })
    let SlowEMA = new ExponentialMovingAverage({
      period: this.slowPeriod,
      values: this.prices,
    })
    let fast = FastEMA.generateExponentialAverage()
    let slow = SlowEMA.generateExponentialAverage()
    console.log('fast', fast, 'slow', slow)

    let MACD: number[] = []
    let signal: number[] = []
    let histogramm: number[] = []

    if (this.slowPeriod > this.fastPeriod) {
      let i = 0
      while (i < slow.length) {
        let macd = fast[i + this.slowPeriod - this.fastPeriod] - slow[i]
        MACD.push(macd)
        i++
      }
    }

    if (MACD.length > 0) {
      let SignalEMA = new ExponentialMovingAverage({
        period: this.signalPeriod,
        values: MACD,
      })
      signal = SignalEMA.generateExponentialAverage()

      if (signal) {
        let i = 0
        let j = 0
        while (i < MACD.length) {
          if (i >= this.signalPeriod - 1) {
            histogramm.push(MACD[i] - signal[j])
            j++
          }
          i++
        }
      }
    }

    if (MACD.length > 0 && signal.length > 0 && histogramm.length > 0) {
      MACD.forEach((macd, index) => {
        this.result.push({
          MACD: macd,
          signal:
            index >= this.signalPeriod - 1
              ? signal[index - this.signalPeriod + 1]
              : undefined,
          histogram:
            index >= this.signalPeriod - 1
              ? histogramm[index - this.signalPeriod + 1]
              : undefined,
        })
      })
    }

    return this.result
  }
}

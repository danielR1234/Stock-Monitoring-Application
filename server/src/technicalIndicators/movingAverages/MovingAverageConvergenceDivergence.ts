import { ExponentialMovingAverage } from './ExponentialMovingAverage'
import { SimpleMovingAverage } from './SimpleMovingAverage'
// Mac-Dee

import { Indicator, IndicatorInput } from '../indicator/indicator'

export class MACDInput extends IndicatorInput {
  SimpleMAOscillator: boolean = true
  SimpleMASignal: boolean = true
  fastPeriod: number
  slowPeriod: number
  signalPeriod: number
  constructor(public values: number[]) {
    super()
  }
}

export class MACDOutput {
  MACD?: number
  signal?: number
  histogram?: number
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
  }

  generateMACD = (): MACDOutput[] => {
    let FastEMA = new ExponentialMovingAverage({
      period: this.fastPeriod,
      values: this.prices,
    })
    let SlowEMA = new ExponentialMovingAverage({
      period: this.fastPeriod,
      values: this.prices,
    })

    let MACD: number[] = []
    let signal: number[] = []
    let histogramm: number[] = []

    let fast = FastEMA.generateExponentialAverage()
    let slow = SlowEMA.generateExponentialAverage()
    if (fast && slow) {
      fast.forEach((fast, index) => {
        let macd = fast - slow[index]
        MACD.push(macd)
      })
    }
    if (MACD.length > 0) {
      let SignalEMA = new ExponentialMovingAverage({
        period: this.signalPeriod,
        values: MACD,
      })
      signal = SignalEMA.generateExponentialAverage()
      if (signal) {
        signal.forEach((signal, index) => {
          histogramm.push(MACD[index] - signal)
        })
      }
    }

    if (MACD.length < 0 && signal.length < 0 && histogramm.length < 0) {
      MACD.forEach((macd, index) => {
        this.result.push({
          MACD: macd,
          signal: signal[index],
          histogram: histogramm[index],
        })
      })
    }

    return this.result
  }
}

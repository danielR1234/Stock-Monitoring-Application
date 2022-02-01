import { getStockPrices } from '../../utils'
import { Arg, Int, Query, Resolver } from 'type-graphql'
import { StockMA } from '../../entities'
import {
  SimpleMovingAverage,
  ExponentialMovingAverage,
  MACD,
} from '../../technicalIndicators/movingAverages'

@Resolver()
export class StockMAResolver {
  @Query(() => StockMA)
  async simpleMovingAverage(
    @Arg('symbol') symbol: string,
    @Arg('range') range: string,
    @Arg('chartInterval', () => Int) chartInterval: number,
    @Arg('period', { defaultValue: 10 }) period: number,
    @Arg('chooseSMA', { defaultValue: true }) chooseSMA: boolean,
    @Arg('chooseEMA', { defaultValue: true }) chooseEMA: boolean
  ): Promise<StockMA> {
    const closePrices = await getStockPrices(symbol, range, chartInterval)
    const sma = new SimpleMovingAverage({ period: period, values: closePrices })
    const ema = new ExponentialMovingAverage({
      period: period,
      values: closePrices,
    })
    const macd = new MACD({
      fastPeriod: 5,
      slowPeriod: 8,
      signalPeriod: 3,
      values: [
        127.75, 129.02, 132.75, 145.4, 148.98, 137.52, 147.38, 139.05, 137.23,
        149.3, 162.45, 178.95, 200.35, 221.9, 243.23, 243.52, 286.42, 280.27, 1,
        2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 4, 5, 6, 7, 4, 3, 2, 1, 3, 4, 5, 6, 7,
      ],
    })
    const result = macd.generateMACD()
    console.log('result', result)
    return {
      simpleMovingAverage: chooseSMA ? sma.generateSimpleMovingAverage() : null,
      exponentialMovingAverage: chooseEMA
        ? ema.generateExponentialAverage()
        : null,
    }
  }
}

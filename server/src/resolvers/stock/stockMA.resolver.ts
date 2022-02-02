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
    @Arg('chooseEMA', { defaultValue: true }) chooseEMA: boolean,
    @Arg('chooseMACD', { defaultValue: true }) chooseMACD: boolean
  ): Promise<StockMA> {
    const closePrices = await getStockPrices(symbol, range, chartInterval)
    const sma = new SimpleMovingAverage({ period: period, values: closePrices })
    const ema = new ExponentialMovingAverage({
      period: period,
      values: closePrices,
    })
    const macd = new MACD({
      fastPeriod: 12,
      slowPeriod: 26,
      signalPeriod: 9,
      values: closePrices,
    })

    return {
      simpleMovingAverage: chooseSMA ? sma.generateSimpleMovingAverage() : null,
      exponentialMovingAverage: chooseEMA
        ? ema.generateExponentialAverage()
        : null,
      movingAverageConvergenceDivergence: chooseMACD
        ? macd.generateMACD()
        : null,
    }
  }
}

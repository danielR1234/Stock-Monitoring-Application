import { ExponentialMovingAverage } from './../../technicalIndicators/movingAverages/exponentialMovingAverage'
import { getStockPrices } from '../../utils'
import { Arg, Int, Query, Resolver } from 'type-graphql'
import { StockMA } from '../../entities'
import { SimpleMovingAverage } from '../../technicalIndicators/movingAverages'

@Resolver()
export class StockMAResolver {
  @Query(() => StockMA)
  async simpleMovingAverage(
    @Arg('symbol') symbol: string,
    @Arg('range') range: string,
    @Arg('chartInterval', () => Int) chartInterval: number,
    @Arg('period', { defaultValue: 10 }) period: number
  ): Promise<StockMA> {
    const closePrices = await getStockPrices(symbol, range, chartInterval)
    const SMA = new SimpleMovingAverage(
      { period: period, values: closePrices },
      1
    )
    const EMA = new ExponentialMovingAverage({
      period: period,
      values: [
        127.75, 129.02, 132.75, 145.4, 148.98, 137.52, 147.38, 139.05, 137.23,
        149.3, 162.45, 178.95, 200.35, 221.9, 243.23, 243.52, 286.42, 280.27,
      ],
    })
    EMA.generateExponentialAverage()
    return {
      simpleMovingAverage: SMA.generateSimpleMovingAverage(),
    }
  }
}

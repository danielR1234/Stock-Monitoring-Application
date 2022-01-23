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
    const SMA = new SimpleMovingAverage({ period: period, values: closePrices })
    return {
      simpleMovingAverage: SMA.generateSimpleMovingAverage(),
    }
  }
}

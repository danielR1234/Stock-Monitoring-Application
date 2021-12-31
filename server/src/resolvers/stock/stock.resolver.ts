import { Args, Query, Resolver } from 'type-graphql'
import { StockData } from '../../entities'
import { StockCoreDataParamsArgs } from '../../types/args'
import { getBalanceSheet, getCashFlow } from '../../utils'

@Resolver()
export class StockResolver {
  @Query(() => StockData)
  async stockData(
    @Args() { period, last, symbol }: StockCoreDataParamsArgs
  ): Promise<StockData> {
    return {
      symbol: symbol,
      balancesheet: await getBalanceSheet({ symbol, last, period }),
      cashflow: await getCashFlow({ symbol, last, period }),
    }
  }
}

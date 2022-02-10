import { Args, Query, Resolver } from 'type-graphql'
import { StockData } from '../../entities'
import { getStockCoreData } from '../../utils/getStockCoreData'
import { StockCoreDataParamsArgs } from '../../types/args'

@Resolver()
export class StockCoreDataResolver {
  @Query(() => StockData)
  async stockCoreData(
    @Args()
    {
      period,
      last,
      symbol,
      chooseBalancesheet,
      chooseChashflow,
      chooseCompany,
      chooseDividends,
      chooseFinancials,
    }: StockCoreDataParamsArgs
  ): Promise<StockData> {
    return getStockCoreData({
      period,
      last,
      symbol,
      chooseBalancesheet,
      chooseChashflow,
      chooseCompany,
      chooseDividends,
      chooseFinancials,
    })
  }
}

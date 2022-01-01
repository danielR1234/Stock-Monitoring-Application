import { Args, Query, Resolver } from 'type-graphql'
import { StockData } from '../../entities'
import { StockCoreDataParamsArgs } from '../../types/args'
import { getStockCoreData } from './../../utils/getStockCoreData'

@Resolver()
export class StockResolver {
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
    return await getStockCoreData({
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

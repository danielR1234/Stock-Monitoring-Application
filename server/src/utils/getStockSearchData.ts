import { StockSearchData } from '../entities/StockSearchData'
import axios from './axios'

interface SearchData {
  symbol: string
  cik: string
  securityName: string
  securityType: string
  region: string
  exchange: string
  sector: string
}

interface SearchLogo {
  url: string
}

export const getStockSearchData = async (
  symbol: string
): Promise<StockSearchData[]> => {
  const { data } = await axios.get<SearchData[]>(`search/${symbol}`)
  const newData: StockSearchData[] = data.map(async (searchData) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { data } = await axios.get<SearchLogo>(
      `stock/${searchData.symbol}/logo`
    )
    return { ...searchData, logo: data.url }
  })

  console.log('newData', newData)

  return newData
  // const symbol = await axios.get(`stock/${data.symbol}/logo`)
}

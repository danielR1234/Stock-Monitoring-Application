import { StockData } from '../entities'
import { StockCoreDataParamsArgs } from '../types/args'
import {
  BalanceSheet,
  CashFlow,
  Company,
  Dividends,
  Financials,
  StockPrice,
} from '../types/types'
import axios from './axios'

export const getBalanceSheet = async (
  symbol: string,
  period: string,
  last: number
): Promise<BalanceSheet[] | null> => {
  const { data } = await axios.get<StockData>(
    `stock/${symbol}/balance-sheet?&period=${period}&last=${last}`
  )

  return data.balancesheet
}

export const getCashFlow = async (
  symbol: string,
  period: string,
  last: number
): Promise<CashFlow[] | null> => {
  const { data } = await axios.get<StockData>(
    `stock/${symbol}/cash-flow?&period=${period}&last=${last}`
  )

  return data.cashflow
}

export const getCompany = async (symbol: string): Promise<Company> => {
  const { data } = await axios.get<Company>(`stock/${symbol}/company`)

  return data
}

export const getDividends = async (symbol: string): Promise<Dividends[]> => {
  const { data } = await axios.get<Dividends[]>(
    `time-series/advanced_dividends/${symbol}?last=4`
  )

  return data
}

export const getFinancials = async (
  symbol: string,
  period: string | null | undefined
): Promise<Financials[] | null> => {
  const { data } = await axios.get<StockData>(
    `stock/${symbol}/financials?period=${period}`
  )
  return data.financials
}

export const getStockPrices = async (
  symbol: string,
  range: string,
  chartInterval: number
): Promise<number[]> => {
  const { data } = await axios.get<StockPrice[]>(
    `stock/${symbol}/chart/${range}?chartInterval=${chartInterval}&chartCloseOnly=true`
  )

  return data.map((stockData) => stockData.close)
}

export const getStockCoreData = async (
  args: StockCoreDataParamsArgs
): Promise<StockData> => {
  const {
    period,
    last,
    symbol,
    chooseBalancesheet,
    chooseChashflow,
    chooseCompany,
    chooseDividends,
    chooseFinancials,
  } = args
  const data = {
    symbol,
    balancesheet: chooseBalancesheet
      ? await getBalanceSheet(symbol, period, last)
      : null,
    cashflow: chooseChashflow ? await getCashFlow(symbol, period, last) : null,
    company: chooseCompany ? await getCompany(symbol) : null,
    dividends: chooseDividends ? await getDividends(symbol) : null,
    financials: chooseFinancials ? await getFinancials(symbol, period) : null,
  }

  return data
}

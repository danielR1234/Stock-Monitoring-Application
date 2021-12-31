import axios from './axios'
import { StockData } from '../entities'
import { BalanceSheet, CashFlow } from '../types/types'
import { ArgsType, Field, Int } from 'type-graphql'
import { StockCoreDataParamsArgs } from '../types/args'

export const getBalanceSheet = async (
  params: StockCoreDataParamsArgs
): Promise<BalanceSheet[]> => {
  const { symbol, period, last } = params
  const { data } = await axios.get<StockData>(
    `stock/${symbol}/balance-sheet?&period=${period}&last=${last}`
  )

  return data.balancesheet
}

export const getCashFlow = async (
  params: StockCoreDataParamsArgs
): Promise<CashFlow[]> => {
  const { symbol, period, last } = params
  const { data } = await axios.get<StockData>(
    `stock/${symbol}/cash-flow?&period=${period}&last=${last}`
  )

  return data.cashflow
}

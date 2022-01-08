export class IndicatorInput {
  reversedInput?: boolean
  format?: (data: number) => number
}

export class AllInputs {
  reversedInput?: number[]
  values?: number[]
  open?: number[]
  high?: number[]
  low?: number[]
  close?: number[]
  volume?: number[]
  timestamp?: number[]
}

export class Indicator {
  result: any
  format?: (data: number) => number
  constructor(input: IndicatorInput) {
    this.format = input.format
  }
  static reverseInputs(input: any) {
    if (input.reversedInput) {
      console.log('if')
      input.values ? input.values.reverse() : undefined
      input.open ? input.open.reverse() : undefined
      input.high ? input.high.reverse() : undefined
      input.low ? input.low.reverse() : undefined
      input.close ? input.close.reverse() : undefined
      input.timestamp ? input.timestamp.reverse() : undefined
    }
  }

  getResult() {
    return this.result
  }
}

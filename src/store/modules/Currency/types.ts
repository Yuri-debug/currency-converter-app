export type TCurrency = {
  EUR: number
  USD: number
}

export type TInitialState = {
  currency: TCurrency
  baseCurrency: string
}

export type TResponse = {
  [index: string]: any
}

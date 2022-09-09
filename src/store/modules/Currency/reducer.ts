import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState, TCurrency } from './types'

const initialState: TInitialState = {
  currency: {
    EUR: 0.027,
    USD: 0.028,
  },
  baseCurrency: 'uah',
}

export const currencyReducer = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TCurrency>) => {
      state.currency.EUR = Number((1 / action.payload.EUR).toFixed())
      state.currency.USD = Number((1 / action.payload.USD).toFixed())
    },
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload
    },
  },
})

export default currencyReducer.reducer

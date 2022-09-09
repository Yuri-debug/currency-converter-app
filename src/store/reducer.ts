import { combineReducers } from '@reduxjs/toolkit'
import { currencyReducer } from './modules'

export const rootReducer = combineReducers({
  currency: currencyReducer,
})

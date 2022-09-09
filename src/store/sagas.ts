import { all, put, takeEvery, call } from 'redux-saga/effects'
import { Env } from '../config'
import { setData } from './modules'
import { ApiCurrencyService } from './modules/Currency/api.service'

function* fetchDataWorker() {
  const { data } = yield call(
    [ApiCurrencyService, ApiCurrencyService.get],
    Env.CURRENCY_API
  )
  const { EUR, USD } = data.conversion_rates
  yield put(setData({ EUR, USD }))
}

function* watchSaga() {
  yield takeEvery('LOAD_DATA', fetchDataWorker)
}

export function* rootSaga() {
  yield all([watchSaga()])
}

import { all, takeEvery } from 'redux-saga/effects'

function* fetchDataWorker() {
  yield
}

function* watchSaga() {
  yield takeEvery('LOAD_DATA', fetchDataWorker)
}

export function* rootSaga() {
  yield all([watchSaga()])
}

import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { updateAmountSuccess, addToCartSuccess } from './actions'

function * addToCart ({ id }) {
  const product = yield call(api.get, `/products/${id}`)

  yield put(addToCartSuccess(product))
}

function * updateAmount ({ id, amount }) {
  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])

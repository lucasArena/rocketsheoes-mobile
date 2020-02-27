import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { updateAmountSuccess, addToCartSuccess } from './actions'

function * addToCart ({ id }) {
  const product = yield call(api.get, `/products/${id}`)

  const existsProduct = yield select(state => state.cart.find(p => p.id === id))
  const currentAmount = existsProduct ? existsProduct.amount : 0
  console.tron.log(currentAmount)
  if (existsProduct) {
    yield put(updateAmountSuccess(id, (currentAmount + 1)))
  } else {
    const data = {
      ...product,
      amount: 1
    }
    yield put(addToCartSuccess(data))
  }
}

function * updateAmount ({ id, amount }) {
  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])

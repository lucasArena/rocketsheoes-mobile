import { all } from 'redux-saga/effects'

import cart from './Cart/saga'

export default function * rootsaga () {
  return yield all([cart])
}

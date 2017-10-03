import { all, put, takeLatest } from 'redux-saga/effects'
import { fetchById } from './api';

function * fetchProducts(action) {
  try {
    const data = yield fetchById(action.pageNumber)
    yield put({ type: 'SET_PRODUCTS', payload: data })
  } catch (error) {
    console.log('FETCHING PRODUCTS Error:', error);
  }
}

export default function* watchProduct() {
  yield all([
    takeLatest('FETCH_PRODUCTS_BY_PAGE', fetchProducts)
  ])
}
import { all, put, takeLatest } from 'redux-saga/effects'
import { fetchById, sortProducts } from './api';

function * fetchProducts(action) {
  try {
    const data = yield fetchById(action.pageNumber)
    let dispatchAction = { type: 'SET_PRODUCTS', payload: data };
    if (data.length === 0) {
      dispatchAction = { type: 'SET_PRODUCTS_LOADED', isLoadedAllProducts: true }
    }
    yield put(dispatchAction)
  } catch (error) {
    console.log('FETCHING PRODUCTS Error:', error);
  }
}

function * sortPoductsBy(action) {
  try {
    const data = yield sortProducts(action.sortBy, action.pageNumber)
    let dispatchAction = { type: 'SET_SORT_PRODUCTS', payload: data };
    if (data.length === 0) {
      dispatchAction = { type: 'SET_PRODUCTS_LOADED', isLoadedAllProducts: true }
    }
    yield put(dispatchAction)
  } catch (error) {
    console.log('SORTING PRODUCTS Error:', error);
  }
}

export default function* watchProduct() {
  yield all([
    takeLatest('FETCH_PRODUCTS_BY_PAGE', fetchProducts),
    takeLatest('SORT_PRODUCTS', sortPoductsBy)
  ])
}
export const FETCH_PRODUCTS_BY_PAGE = 'FETCH_PRODUCTS_BY_PAGE'
export const SORT_PRODUCTS = 'SORT_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'

export function fetchProductsByPage(pageNumber) {
  return {
    type: 'FETCH_PRODUCTS_BY_PAGE',
    pageNumber
  }
}

export function sortProductsBy(sortBy) {
  return {
    type: 'SORT_PRODUCTS',
    pageNumber: 1,
    sortBy
  }
}
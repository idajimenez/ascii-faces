export const FETCH_PRODUCTS_BY_PAGE = 'FETCH_PRODUCTS_BY_PAGE'
export const SORT_PRODUCTS = 'SORT_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'

export function fetchProductsByPage(pageNumber, sortBy) {
  return {
    type: 'FETCH_PRODUCTS_BY_PAGE',
    pageNumber,
    sortBy
  }
}

export function sortProductsBy(sortBy, pageNumber) {
  return {
    type: 'SORT_PRODUCTS',
    pageNumber: pageNumber || 1,
    sortBy
  }
}
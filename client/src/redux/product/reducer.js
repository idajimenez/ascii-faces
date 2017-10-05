const initialState = {
  isLoadedAllProducts: false,
  isFetching: false,
  isSortChanged: false,
  sortBy: null,
  products: [],
  pageNumber: 0
}
export default function(state = initialState, action) {
  let currentProducts = state.pageNumber === 1 ? [] : state.products;
  let fetchProducts = action.payload
  let products = currentProducts.concat(fetchProducts)
  
  switch (action.type) {
    case 'FETCH_PRODUCTS_BY_PAGE':
      return {
        ...state,
        isFetching: true,
        pageNumber: action.pageNumber
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        isSortChanged: false,
        products: products
      }
    case 'SORT_PRODUCTS':
      let sort = action.sortBy === 'default' ? null : action.sortBy
      return {
        ...state,
        pageNumber: action.pageNumber,
        sortBy: sort,
        isSortChanged: action.pageNumber > 1 ? false : true
      }
    case 'SET_SORT_PRODUCTS':
      return {
        ...state,
        products: products,
        isSortChanged: false        
      }
    case 'SET_PRODUCTS_LOADED':
      return {
        ...state,
        isLoadedAllProducts: action.isLoadedAllProducts
      }
    default:
      return state;
  }
}
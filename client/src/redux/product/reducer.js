const initialState = {
  isFetching: false,
  products: [],
  pageNumber: 0
}
export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_BY_PAGE':
      return {
        ...state,
        isFetching: true,
        pageNumber: action.pageNumber
      }
    case 'SET_PRODUCTS':
      console.log(state.products)
      let currentProducts = state.products;
      let fetchProducts = action.payload
      let products = currentProducts.concat(fetchProducts)
      
      return {
        ...state,
        products: products
      }
    default:
      return state;
  }
}
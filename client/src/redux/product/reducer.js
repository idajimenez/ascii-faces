const initialState = {
  isFetching: false,
  products: []
}
export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_BY_PAGE':
      return {
        ...state,
        isFetching: true
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}
import { combineReducers } from 'redux';
import product from './product/reducer';

const appReducer = combineReducers({
  product
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
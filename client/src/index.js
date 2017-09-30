import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux'
import saga from './redux/saga'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path={'/'} component={App} />
      </div>
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
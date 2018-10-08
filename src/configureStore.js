/**
 * Module for configuring Redux store. I have only one reducer but I created
 * a root reducer to able to expand it in the future.
 *
 * I used 'thunk' middleware for async actions. I also add redux dev tool for
 * development state.
 */
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import seasonReducer from './components/season/ducks';

const rootReducer = combineReducers({
    season: seasonReducer
});

const enhancers = [];
let composeEnhancers = compose;

const configureStore = () => {

  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
      ...enhancers
    )
  );

  if (module.hot) {
    module.hot.accept(() => {});
  }
  return store;
};

const store = configureStore();
export default store;

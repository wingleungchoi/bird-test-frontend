import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from 'reduxStore/index';

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const configureStore = (initialState) => {
  // configure middlewares
  const middlewares = [];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
};

export default configureStore;

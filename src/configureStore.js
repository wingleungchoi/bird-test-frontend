import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'reduxStore/index';
import { watcherSaga } from 'reduxStore/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const configureStore = (initialState) => {
  // configure middlewares
  const middlewares = [sagaMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  // create store
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  sagaMiddleware.run(watcherSaga);
  return store;
};

export default configureStore;

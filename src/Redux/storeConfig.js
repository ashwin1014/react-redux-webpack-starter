import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
      : compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));
  return store;
}

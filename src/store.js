import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './stores/reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  loadingBarMiddleware()
];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  /* eslint-enable */

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

export default store;

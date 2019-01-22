import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import sampleReducer from './sample/SampleReducer';

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  sampleReducer
});

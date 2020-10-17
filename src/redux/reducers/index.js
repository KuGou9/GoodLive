import { combineReducers } from 'redux';
import home from './home';
import currentCity from './city';

const rootReducer = combineReducers({
  home,
  currentCity,
});

export default rootReducer;

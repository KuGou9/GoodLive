import { combineReducers } from 'redux';
import home from './home';
import currentCity from './city';
import detail from './detail';

const rootReducer = combineReducers({
  home,
  currentCity,
  detail,
});

export default rootReducer;

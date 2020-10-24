import { combineReducers } from 'redux';
import home from './home';
import currentCity from './city';
import detail from './detail';
import login from './login';

const rootReducer = combineReducers({
  home,
  currentCity,
  detail,
  login,
});

export default rootReducer;

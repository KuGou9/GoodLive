import { SET_HOME_DATA } from '../../constants/index';

const homeData = (state = [], action) => {
  switch (action.type) {
    case SET_HOME_DATA:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default homeData;

import { SET_DETAIL_DATA } from '../../constants/index';

const detailData = (state = {}, action) => {
  switch (action.type) {
    case SET_DETAIL_DATA:
      state = action.data;
      return state;
    default:
      return state;
  }
};

export default detailData;

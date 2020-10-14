import axios from 'axios';
import { SET_HOME_DATA } from '../../constants/index';

export const setHomeData = (data) => {
  return {
    type: SET_HOME_DATA,
    data,
  };
};

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home').then(
      (response) => {
        const homeData = response.data.pop;
        dispatch(setHomeData(homeData));
      },
      (response) => {
        console.log('errors:' + response);
      }
    );
  };
};

import axios from 'axios';
import { SET_DETAIL_DATA } from '../../constants/index';

export const setDetailData = (data) => {
  return {
    type: SET_DETAIL_DATA,
    data,
  };
};

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detail').then(
      (response) => {
        const detailData = response.data.details;
        // 直接调用方法，而不是传递参数
        dispatch(setDetailData(detailData));
      },
      (response) => {
        console.log('errprs:' + response);
      }
    );
  };
};

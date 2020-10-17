const currentCity = (state = '北京', action) => {
  switch (action.type) {
    case 'setCity':
      state = action.city;
      return state;
    default:
      return state;
  }
};

export default currentCity;

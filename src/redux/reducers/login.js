const login = (state = '', action) => {
  switch (action.type) {
    case 'login':
      state = action.data;
      return state;
    default:
      return state;
  }
};

export default login;

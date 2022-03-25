export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return { ...state, isLogin: !state.isLogin };

    default:
      return state;
  }
};

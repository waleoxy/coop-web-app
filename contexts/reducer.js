export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return { ...state, isLogin: !state.isLogin };
    case "IS_SHOW":
      return { ...state, isShow: true };
    case "IS_NOT_SHOW":
      return { ...state, isShow: false };
    case "USER_LOGIN": {
      return { ...state, userInfo: action.payload };
    }

    default:
      return state;
  }
};

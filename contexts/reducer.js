export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return { ...state, isLogin: !state.isLogin };
    case "IS_SHOW":
      return { ...state, isShow: true };
    case "IS_NOT_SHOW":
      return { ...state, isShow: false };
    case "USER_LOGIN": {
      return { ...state, isDashbrd: true, userInfo: action.payload };
    }
    case "USER_LOGOUT": {
      return { ...state, isDashbrd: false, userInfo: null };
    }
    case "PROFILE_OPEN": {
      return { ...state, isProfOpen: true };
    }

    default:
      return state;
  }
};

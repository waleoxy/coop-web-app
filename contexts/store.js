import jsCookie from "js-cookie";
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Store = createContext();

const initialState = {
  isLogin: false,
  isShow: false,
  userInfo: jsCookie.get("userInfo")
    ? JSON.parse(jsCookie.get("userInfo"))
    : null,
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

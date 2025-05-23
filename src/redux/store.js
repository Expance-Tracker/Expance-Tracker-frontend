import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import balanceReducer from "./slices/balanceSlice";
import headerModalReducer from "./slices/headerModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    balance: balanceReducer,
    modal: headerModalReducer
  }
});

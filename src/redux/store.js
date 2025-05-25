import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import balanceReducer from "./slices/balanceSlice";
import { transactionsReducer } from "./transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    balance: balanceReducer,
    transactions: transactionsReducer
  }
});

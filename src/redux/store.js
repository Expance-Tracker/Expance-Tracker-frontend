import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import balanceReducer from "./slices/balanceSlice";
import { transactionsReducer } from "./transactions/transactionsSlice";
import headerModalReducer from "./slices/headerModalSlice";
import categoriesReducer from "./slices/categoriesSlice";
import globalReducer from "./global/globalSlice";
import deleteModalReducer from "./transactions/deleteModalSlice";
import deviceReducer from './slices/deviceSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth-data",
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    balance: balanceReducer,
    transactions: transactionsReducer,
    modal: headerModalReducer,
    global: globalReducer,
    categories: categoriesReducer,
    deleteModal: deleteModalReducer,
    device: deviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

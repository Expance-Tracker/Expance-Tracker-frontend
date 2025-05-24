import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import balanceReducer from './slices/balanceSlice';

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
  storage,
  whitelist: ["token", "value"]
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    auth: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }) 
});

export const persistor = persistStore(store);

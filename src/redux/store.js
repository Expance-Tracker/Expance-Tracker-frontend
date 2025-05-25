import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import balanceReducer from "./slices/balanceSlice";
import headerModalReducer from "./slices/headerModalSlice";
import statisticsReducer from "./slices/statisticsSlice"; // ✅ додати, якщо ще не підключено
import transactionsReducer from "./slices/transactionsSlice"; // ✅ додаємо

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
    auth: persistedReducer,
    balance: balanceReducer,
    modal: headerModalReducer,
    statistics: statisticsReducer,     // ✅ додаємо, якщо ще не було
    transactions: transactionsReducer, // ✅ вставили сюди
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

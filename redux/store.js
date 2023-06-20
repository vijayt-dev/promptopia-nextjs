import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
};
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);

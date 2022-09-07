import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./store/reducers";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = () => {
  configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware()],
  });
};
export default store;

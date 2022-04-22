import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import seisson from "redux-persist/lib/storage";
import { reducer } from "./index";
import thunk from "redux-thunk";

const persistConfig = {
  key: "user",
  storage: seisson,
};
const persistorReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistorReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

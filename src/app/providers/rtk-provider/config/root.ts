import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { IS_DEV } from "@/shared/lib/constants";
import { reducers } from "./reducers";

const reducer = combineReducers(reducers);

export const store = configureStore({
  reducer,
  devTools: IS_DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

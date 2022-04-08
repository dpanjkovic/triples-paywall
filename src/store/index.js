import { configureStore } from "@reduxjs/toolkit";
import varsReducer from "./varsSlice";
import displayReducer from "./displaySlice";

const store = configureStore({
  reducer: {
    vars: varsReducer,
    display: displayReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

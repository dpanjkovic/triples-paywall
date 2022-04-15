import { configureStore } from "@reduxjs/toolkit";
import varsReducer from "./varsSlice";
import displayReducer from "./displaySlice";
import langReducer from "./langSlice";

const store = configureStore({
  reducer: {
    vars: varsReducer,
    display: displayReducer,
    lang: langReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

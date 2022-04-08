import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    changePage: false,
    imgsLoaded: false,
    showContact: false,
  },
};

export const varsSlice = createSlice({
  name: "vars",
  initialState,
  reducers: {
    setVars: (state, action) => {
      const s = state;
      s.value = action.payload;
    },
  },
});

export const { setVars } = varsSlice.actions;

export default varsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isDesktopOrLaptop: false,
    isPortrait: false,
    isMax1440: false,
  },
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      const s = state;
      s.value = action.payload;
    },
  },
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;

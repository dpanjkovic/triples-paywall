import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "EN",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      const s = state;
      s.value = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;

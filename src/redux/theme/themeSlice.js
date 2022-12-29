import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPageTheme: "/"
};
  
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeBgColor: (state, { payload }) => {
      state.currentPageTheme = payload;
    },
  }
});

export const { changeBgColor } = themeSlice.actions;

export default themeSlice.reducer;
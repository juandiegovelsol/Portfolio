import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pages, text, content } from "./homeAPI";

const initialState = {
  pages: pages[1],
  text: text[1],
  content: content[1],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeEnglish: (state) => {
      state.pages = pages[0];
      state.text = text[0];
      state.content = content[0];
    },
    setHomeSpanish: (state) => {
      state.pages = pages[1];
      state.text = text[1];
      state.content = content[1];
    },
  },
});

export const { setHomeEnglish, setHomeSpanish } = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pages, text, content, resume } from "./homeAPI";

const initialState = {
  pages: pages[0],
  text: text[0],
  content: content[0],
  resume: resume[0],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeEnglish: (state) => {
      state.pages = pages[0];
      state.text = text[0];
      state.content = content[0];
      state.resume = resume[0];
    },
    setHomeSpanish: (state) => {
      state.pages = pages[1];
      state.text = text[1];
      state.content = content[1];
      state.resume = resume[1];
    },
  },
});

export const { setHomeEnglish, setHomeSpanish } = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;

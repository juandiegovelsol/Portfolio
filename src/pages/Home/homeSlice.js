import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  pages,
  text,
  content,
  resume,
  contact,
  whastapp_message,
} from "./homeAPI";

const initialState = {
  pages: pages[0],
  text: text[0],
  content: content[0],
  resume: resume[0],
  contact: contact[0],
  whastapp_message: whastapp_message[0],
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
      state.contact = contact[0];
      state.whastapp_message = whastapp_message[0];
    },
    setHomeSpanish: (state) => {
      state.pages = pages[1];
      state.text = text[1];
      state.content = content[1];
      state.resume = resume[1];
      state.contact = contact[1];
      state.whastapp_message = whastapp_message[1];
    },
  },
});

export const { setHomeEnglish, setHomeSpanish } = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const extractedTextSlice = createSlice({
  name: "extractedText",
  initialState: [],
  reducers: {
    updateExtractedText: (state, action) => {
      const { index, newText } = action.payload;
      state[index] = { extractedText: newText };
    },
  },
});

export const { updateExtractedText } = extractedTextSlice.actions;

export default extractedTextSlice;

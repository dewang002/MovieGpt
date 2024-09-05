import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "search",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleSearch } = GptSlice.actions;
export default GptSlice.reducer;

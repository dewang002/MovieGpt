import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "search",
  initialState: {
    showGptSearch: false,
    GPTmoviesresult:null,
    GPTmoviesname:null 
  },
  reducers: {
    toggleSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTmoviesresult: (state,action)=>{
      const {movieData,moviess}=action.payload
      state.GPTmoviesresult = movieData
      state.GPTmoviesname = moviess
    }
  },
});
export const { toggleSearch,addGPTmoviesresult } = GptSlice.actions;
export default GptSlice.reducer;

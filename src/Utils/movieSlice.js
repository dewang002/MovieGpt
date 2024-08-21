import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        trailerVideo:null
    },
    reducers:{
        addMovie:(state,action)=>{
            state.nowPlaying=action.payload;
            
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    },
});

export const {addMovie,addTrailer}= movieSlice.actions;
export default movieSlice.reducer;
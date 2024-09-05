import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularVideo:null
    },
    reducers:{
        addMovie:(state,action)=>{
            state.nowPlaying=action.payload;
            
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopular:(state,action)=>{
            state.popularVideo=action.payload;
        },
    },
});

export const {addMovie,addTrailer,addPopular}= movieSlice.actions;
export default movieSlice.reducer;
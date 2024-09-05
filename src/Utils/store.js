import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./GptSlice"
import config from "./configSlice";
const store = configureStore(
    {
        reducer: {
         user: userSlice,
         movies:movieSlice, 
         search:gptSlice,
         lang:config    
        }
    }
)
export default store;
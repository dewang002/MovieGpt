//⭐ name of a hook always start with 'use'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../Utils/constents";
import { addMovie } from "../Utils/movieSlice";

function useNowPlayingMovie() {
    const dispatch = useDispatch()
    const playmovie = useSelector(state=>state.movies?.nowPlaying)
    const get_movie_api = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_options
        );
        const json = await data.json();
        dispatch(addMovie(json.results));
      };
    
      useEffect(() => {
       !playmovie && get_movie_api();
      }, []);
  
}

export default useNowPlayingMovie


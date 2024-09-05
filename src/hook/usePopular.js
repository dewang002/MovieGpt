import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../Utils/constents";
import { addPopular } from "../Utils/movieSlice";

function usePopular() {
  let dispatch = useDispatch();
  const popularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addPopular(json?.results));
  };
  useEffect(() => {
    popularMovie();
  }, []);
}

export default usePopular;

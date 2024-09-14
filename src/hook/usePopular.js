import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../Utils/constents";
import { addPopular } from "../Utils/movieSlice";

function usePopular() {
  let dispatch = useDispatch();
  const popular = useSelector(state=>state.movies?.popularVideo)
  const popularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addPopular(json?.results));
  };
  useEffect(() => {
   !popular && popularMovie();
  }, [popular,popularMovie]);
}

export default usePopular;

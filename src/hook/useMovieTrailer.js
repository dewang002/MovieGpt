import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../Utils/movieSlice";
import { API_options } from "../Utils/constents";

function MovieTrailer(movieId) {
  const dispatch = useDispatch();
  const trailer = useSelector(state=>state.movies?.trailerVideo)
  const getmovietraler = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_options
    );
    const json = await data.json();
    const trailers = json.results.filter((elem) => elem.type === "Trailer");
    const trailer = trailers[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
   !trailer && getmovietraler();
  }, []);
}

export default MovieTrailer;

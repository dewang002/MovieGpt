import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_options } from "../Utils/constents"; // Assuming you have this constant file
import { addGPTmoviesresult } from "../Utils/GptSlice"; // Assuming this is where your slice is defined

const useHandlegpt = (searchtxt) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const searchMoviesGPT = async (movies) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1&${process.env.REACT_APP_AUTH_KEY}`,
      API_options
    );
    const json = await data.json();
    return json;
  };

  const handleGptSearch = async () => {
    try {
      const searchKey =
        "Act as a Movie Recommendation system. Don't give me an object, give me an array format and suggest some movies for the query: " +
        searchtxt.current.value +
        ". Only give me names of 5 movies, comma-separated like the example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const chatCompletion = await axios({
        url: process.env.REACT_APP_KEY,
        method: "post",
        data: { contents: [{ parts: [{ text: searchKey }] }] },
      });

      const moviess =
        chatCompletion.data?.candidates?.[0]?.content?.parts[0]?.text.split(
          ","
        );
      const movieDataRequests = moviess.map((movie) => searchMoviesGPT(movie));
      const movieData = await Promise.all(movieDataRequests);

      dispatch(addGPTmoviesresult({ movieData, moviess }));
    } finally {
      setLoading(false);
    }
  };

  return { handleGptSearch, loading };
};

export default useHandlegpt;

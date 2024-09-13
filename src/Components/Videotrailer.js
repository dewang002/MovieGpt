import { useSelector } from "react-redux";
import useMovieTrailer from "../hook/useMovieTrailer";

function Videotrailer({ movieId }) {

  const playtrailer = useSelector((state) => state.movies?.trailerVideo);//redux store
  useMovieTrailer(movieId); //custom hook

  return (
    <div className="h-screen w-screen">
      <iframe
        className="md:h-[100vh] h-[50vh] w-[110vw] "
        src={`https://www.youtube.com/embed/${playtrailer?.key}?autoplay=1&loop=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; web-share"
      ></iframe>
    </div>
  );
}

export default Videotrailer;

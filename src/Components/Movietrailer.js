import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videotrailer from "./Videotrailer"
function Movietrailer() {
  const movie = useSelector((state) => state.movies?.nowPlaying); //?. this is a way to say if it have come then look for this  
  if (!movie || movie.length===0) return;
  const { title, overview, release_date,id } = movie[0]; //math.random vala logic laga lena

  return (
    <div className="w-full [100vh]  overflow-x-hidden">
      <VideoTitle title={title} overview={overview}  date={release_date} />
      <Videotrailer movieId={id} />
    </div>
  );
}

export default Movietrailer;

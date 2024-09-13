import React from "react";
import { useSelector } from "react-redux";
import Moviecard from "./Moviecard";

function Movielist({ title,movelist }) {
  // const movelist = useSelector((state) => state.movies);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-semibold">{title}</h1>

    <div className="flex gap-10 overflow-x-auto scrollbar scrollbar-thumb-rose-500">
      {movelist?.map((elem, index) => (
        <Moviecard key={index} poster={elem.backdrop_path} />
      ))}
    </div>
  

    </div>
  );
}

export default Movielist;

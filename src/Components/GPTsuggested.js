import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

function GPTsuggested({loading}) {
  const move = useSelector((state) => state.search);
  const { GPTmoviesresult, GPTmoviesname } = move;
  if(loading){
    return( 
        <div className="md:flex flex-col md:flex-row md:gap-16 md:flex-wrap">
    <div className="h-[30vh] mb-4 md:mb-0 md:w-[20vw] bg-zinc-700 rounded-lg text-white p-4">search...</div>
    <div className="h-[30vh] mb-4 md:mb-0 md:w-[20vw] bg-zinc-700 rounded-lg"></div>
    <div className="h-[30vh] mb-4 md:mb-0 md:w-[20vw] bg-zinc-700 rounded-lg"></div>
    <div className="h-[30vh] mb-4 md:mb-0 md:w-[20vw] bg-zinc-700 rounded-lg"></div>
    
  
        </div>
)
  }else {
    return (
      <>
        <div className="h-[100vh] w-full bg-black rounded-lg text-white text-3xl font-semibold">
          {GPTmoviesname?.map((elem,index)=>(
            <Movielist key={GPTmoviesname} title={elem} movelist={GPTmoviesresult?.[index]?.results} />
          ))}  
        </div>
      </>
    );
  }
}

export default GPTsuggested;

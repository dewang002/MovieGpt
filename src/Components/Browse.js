import React, {  useState } from "react";
import { GrSettingsOption } from "react-icons/gr";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../Utils/constents";
import useNowPlayingMovie from "../hook/useNowPlayingMovie";
import Movietrailer from "./Movietrailer";

function Browse() {

  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const user = useSelector((store) => store.user);
  const handleClick = () => {
    setdropdown(!dropdown);
  };

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
 //made a hook in hookfolder;
  useNowPlayingMovie();

  return (
    <>
    <div className="navbar absolute h-24 w-full bg-gradient-to-b from-black text-white flex justify-between items-center pr-14 z-[999]">
      <img className="w-[16vw] " src={LOGO} />
      <div className="text-3xl h-16  p-1 flex items-center gap-6 rounded-full">
        <h1 className="relative">
          {user?.displayName}{" "}
          <span className="text-sm absolute -translate-x-8 -translate-y-4">
            (user)
          </span>
        </h1>
        <div onClick={() => handleClick()}>
          <GrSettingsOption />
        </div>
        {dropdown && (
          <div className="bg-zinc-700 text-white text-center translate-x-[-30%] translate-y-28 rounded h-40 w-40 outline outline-1 absolute pt-4">
            <h1 onClick={() => handlesignout()} className="text-xl font-semibold cursor-default">
              Sign-Out
            </h1>
          </div>
        )}
      </div>


    </div>
    
    {/* movietrailer */}
     <Movietrailer />
     
    {/* moviesection */}

    </>
  );
}

export default Browse;

import React, { useState } from "react";
import { GrSettingsOption } from "react-icons/gr";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../Utils/constents";
import useNowPlayingMovie from "../hook/useNowPlayingMovie";
import Movietrailer from "./Movietrailer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hook/usePopular";
import Gptsearch from "./Gptsearch";
import { toggleSearch } from "../Utils/GptSlice";
import { langOpt } from "../Utils/constents";
import { changeLang, configSlice } from "../Utils/configSlice";
import { APIClient } from "openai/core.mjs";
function Browse() {
  const gptview = useSelector((state) => state.search.showGptSearch);
  

  const dispatch = useDispatch();
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

  const gptsearchbtn = () => {
    dispatch(toggleSearch());
  };

  //made a hook in hookfolder;
  useNowPlayingMovie();
  usePopular();

  const handleLang = (val) => {
    dispatch(changeLang(val.target.value));
  };

  return (
    <>
      <div className="navbar absolute h-24 w-[100%] bg-black text-white flex justify-between items-center pr-14 z-[999]">
        <img className="md:w-[16vw] w-[38vw]" src={LOGO} />
        <div className="text-3xl h-16  p-1 flex items-center gap-6 rounded-full">
          <div className="active:scale-95 text-white text-xl font-bold  md:px-8 px-4 md:py-2 py-1 rounded-xl bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800">
            <button className="" onClick={gptsearchbtn}>
              {gptview ? "Home" : "search GPT"}
            </button>
          </div>
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
            <div
              className={`bg-zinc-700 text-white text-center ${
                gptview ? "md:translate-x-[60%] translate-x-[32%]" : "translate-x-[32%] md:translate-x-[100%]"
              } translate-y-28 rounded h-40 w-40 outline outline-1 absolute pt-4`}
            >
              <h1
                onClick={() => handlesignout()}
                className="text-xl font-semibold cursor-default border-b pb-3"
              >
                Sign-Out
              </h1>
              {gptview ? (
                <select
                  onChange={handleLang}
                  className="bg-transparent text-lg font-semibold"
                >
                  {langOpt.map((elem, index) => {
                    return (
                      <option value={elem.name} className="bg-zinc-700 ">
                        {elem.name}
                      </option>
                    );
                  })}
                </select>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {gptview ? (
        <Gptsearch />
      ) : (
        <>
          {/* movietrailer */}
          <Movietrailer />
          {/* moviesection */}
          <SecondaryContainer />
        </>
      )}
    </>
  );
}

export default Browse;

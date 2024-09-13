import React, { useRef } from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";
import GPTsuggested from "./GPTsuggested";
import useHandlegpt from "../hook/useHandlegpt";

function Gptsearch() {
  const searchtxt = useRef(null); //current.value
  const langkey = useSelector((state) => state.lang.lang);
  const { handleGptSearch, loading } = useHandlegpt(searchtxt);

  return (
    <>
      <div className=" w-full bg-black px-10 pb-10">
        <div className="pt-24 pb-10 flex  justify-center  w-full text-white">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex justify-center items-center w-full h-10"
          >
            <input
              ref={searchtxt}
              placeholder={lang[langkey].placeholder}
              className=" px-4 rounded text-black text-xl font-semibold h-full w-1/2 outline-none"
            />
            <button
              onClick={handleGptSearch}
              className=" rounded ml-2 h-full w-32 bg-black text-xl font-semibold"
            >
              {lang[langkey].searchbtn}
            </button>
          </form>
        </div>
        <GPTsuggested loading={loading} />
      </div>
    </>
  );
}

export default Gptsearch;

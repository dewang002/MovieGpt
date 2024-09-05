import React, { useRef } from "react";
import lang from "../Utils/languageConstant"
import { useSelector } from "react-redux";
import axios from "axios";


 function Gptsearch() {
  const searchtxt = useRef(null)
  const langkey = useSelector(state=>state.lang.lang)
  const handlegptsearch=async()=>{
    
    const searchkey = "act like a movie recommendation system and only send name of movie, no extra text. according to this search"+searchtxt.current.value+" regarding this search give 5 movie names and dont think much just give hindi move of it"
    const chatCompletion = await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCGicOlFnVzapY8bNmRLTVMelA9biDKiJU",
        method:"post",
        data:{contents:[{parts:[{text:searchkey}]}]},
      })
      
      console.log(chatCompletion)
  }
  
  

  return (
    <>
      <div className="pt-32 flex justify-center bg-zinc-800 h-[100vh] w-full text-white">

        <form onSubmit={(e)=>e.preventDefault()} className="flex justify-center items-center w-full h-10">
          <input ref={searchtxt}  placeholder={lang[langkey].placeholder} className=" px-4 rounded text-black text-xl font-semibold h-full w-1/2 outline-none" />
        <button onClick={handlegptsearch} className=" rounded ml-2 h-full w-32 bg-black text-xl font-semibold">{lang[langkey].searchbtn}</button>
        </form>

      </div>
    </>
  );
}

export default Gptsearch;

import React, { useState } from "react";
import Header from "./Header";
function Login() {
  const[togglesignin,settogglesignin]= useState(true)

  const handlesignin =()=>{
    settogglesignin(!togglesignin)
  }
  return (
    <div className="relative">
      <Header />
      <div className="h-[88vh] w-full ">
        <img
          className="h-full w-full object-cover relative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
        <div className="h-full w-full bg-gradient-to-b from-[#000000c8] absolute top-0"></div>
      </div>

      {/* --------------form----------------- */}
      
      <form className="text-center text-white h-5/6 w-3/12 px-14 pt-14 absolute top-0 left-1/3 my-[5vw] bg-zinc-900 bg-opacity-95 rounded">
        <h1 className="text-white text-left text-3xl pb-4 font-bold">
         {togglesignin?'Sign In':'Sign up'} 
        </h1>
        {!togglesignin? <input
          className="w-full p-3 my-4 bg-transparent outline outline-white outline-1 rounded-lg "
          placeholder="Full Name"
        />:""}
       
        <input
          className="w-full p-3 my-4 bg-transparent outline outline-white outline-1 rounded-lg "
          placeholder="Email"
        />
        <input
          className="w-full p-3 my-4 bg-transparent outline outline-white outline-1 rounded-lg "
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-red-800 text-white w-full p-2 my-4 rounded font-semibold"
        >
          {togglesignin?'Sign-In':'Sign-up'}
        </button>
        or
        {togglesignin? <button
          type="submit"
          className="bg-[#c3c3c332] text-white w-full p-2 my-4 rounded font-semibold"
        >
          Use a sign-In code
        </button>:""}
        <p>{togglesignin?'Forgot Password?':''}</p>
        {togglesignin?<div className="cursor-pointer text-left my-4"><input className="mx-2 " type="checkbox" />
          Remember Me
        </div>:""}
        <p onClick={handlesignin} className="text-left hover:text-zinc-400 cursor-pointer w-fit">{togglesignin? 'New to Netflix ?':'Already a user?'} <span className="font-semibold">{togglesignin?'Sign-up now':'Sign-In'}</span> </p>
      </form>
    </div>
  );
}

export default Login;

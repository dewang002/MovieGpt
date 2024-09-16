import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../Utils/firebase';

function SignInWithGoogle({ seterrmessage }) {
  const googlelogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterrmessage(errorMessage);
      });
  };

  return (
    <div onClick={googlelogin} className='w-full border-t-[1px] h-16 pt-4 flex flex-col justify-center items-center gap-5 hover:underline cursor-pointer'>
      <p>else Sign-In with Google</p>
      <p className='h-15 w-15 hover:scale-125 transition duration-150 ease-in-out'><FaGoogle /></p>
    </div>
  );
}

export default SignInWithGoogle

import React, { useEffect, useRef, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile,} from "firebase/auth";
import Header from "./Header";
import { auth } from "../Utils/firebase";
import Validationform from "../Utils/Validationform";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";

function Login() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store)=>store.user)
  const [togglesignin, settogglesignin] = useState(true);
  const [errmessage, seterrmessage] = useState(null);

  const handlesignin = () => {
    settogglesignin(!togglesignin); //this ! work with boolian value and invert true to false and vise&versa value.
  };

  //useref here
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);

  const handlesubmit = () => {
    const email = Email.current.value;
    const password = Password.current.value;
    const message = Validationform(email, password);
    seterrmessage(message);
    if (message) return;
    // ------------------------------👇---------------
    if (!togglesignin) {
      //sign up logic

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          
            navigate('/browse')
          }
        )

          .catch((error) => {
            seterrmessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmessage(errorCode+''+errorMessage)
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
           if(user)navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmessage(errorCode)
        });
    }

    // -------------------------------👆------------
  };

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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-center overflow-hidden text-white h-[40vw] w-3/12 px-14 pt-8 absolute top-0 left-1/3 my-[5vw] bg-zinc-900 bg-opacity-95 rounded"
      >
        <h1 className="text-white text-left text-3xl pb-4 font-bold">
          {togglesignin ? "Sign In" : "Sign up"}
        </h1>
        {/* useRef here */}

        {!togglesignin && <input
          ref={Name}
          type="name"
          className="w-full p-3 my-4 bg-transparent outline outline-white outline-1 rounded-lg "
          placeholder="Name"
        />}

        <input
          ref={Email}
          type="email"
          className="w-full p-3 my-4 bg-transparent outline outline-white outline-1 rounded-lg "
          placeholder="Email"
        />
        <input
          ref={Password}
          type="password"
          className="w-full p-3 my-4 bg-transparent outline outline-white outline-1 rounded-lg "
          placeholder="Password"
        />
        <h1 className="text-lg text-red-700">{errmessage}</h1>
        <button
          onClick={handlesubmit}
          type="submit"
          className="bg-red-800 active:scale-95 text-white w-full p-2 my-4 rounded font-semibold"
        >
          {togglesignin ? "Sign-In" : "Sign-up"}
        </button>
        <p>{errmessage}</p>
        or
        {togglesignin ? (
          <button
            type="submit"
            className="bg-[#c3c3c332] text-white w-full p-2 my-4 rounded font-semibold"
          >
            Use a sign-In code
          </button>
        ) : (
          ""
        )}
        <p>{togglesignin ? "Forgot Password?" : ""}</p>
        {togglesignin ? (
          <div className="cursor-pointer text-left my-4">
            <input className="mx-2 " type="checkbox" />
            Remember Me
          </div>
        ) : (
          ""
        )}
        <p
          onClick={handlesignin}
          className=" pb-4 text-left hover:text-zinc-400 hover:underline cursor-pointer w-fit"
        >
          {togglesignin ? "New to Netflix ?" : "Already a user?"}{" "}
          <span className="font-semibold">
            {togglesignin ? "Sign-up now" : "Sign-In"}
          </span>{" "}
        </p>
        {errmessage}
      </form>
    </div>
  );
}

export default Login;

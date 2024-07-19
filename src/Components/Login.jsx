import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { bg_loginimg } from "../Utils/constants";

const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(false);
  const [errorMessage, SetErrorMessage] = useState(null);

 
  const toggleSignInForm = () => {
    SetIsSignIn(!isSignIn);
  };
  // const auth = getAuth();
  const email = useRef(null);
  const password = useRef(null);
  const handlebtnclick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(msg);
    if (msg) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user,{
            displayName: name.current.value,
          })
          
        })
        .catch((error) => {
          console.error('Sign Up Error:', error);
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed in", user);
          if (user) {
            
          }
        })
        .catch((error) => {
          console.error('Sign In Error:', error);
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div className="m-0 p-0">
      <Header />

      <img
        className="left-0 absolute"
        src={bg_loginimg}
        alt="img not found"
      />

      <div className="absolute my-36 mx-auto left-0 right-0 bg-black border border-black border-solid w-96 p-12 text-white bg-opacity-80">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="m-2 p-2 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="m-2 p-2 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="m-2 p-2 w-full bg-gray-700"
          />
          <p className="text-red-600 font-bold px-2">{errorMessage}</p>
          <button
            onClick={handlebtnclick}
            className="p-4 m-2 w-full bg-red-600 rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogSignBtn from "../../components/LogSignBtn";
import SignUpScreen from "./SignUpScreen"; 
import InputField from "../../components/InputField";

function LoginScreen({ closeLogin , setIsLoginVisible }) {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const showSignUp = () => {
    setIsSignUpVisible(true);
  };

  const closeSignUp = () => {
    setIsSignUpVisible(false);
    setIsLoginVisible(false)
  };

  return (
    <>
      {isSignUpVisible ? (
        <SignUpScreen closeSignUp={closeSignUp} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeLogin}></div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
            <div className="mb-5 text-center">
              <p className="font-bold text-gray-900 text-2xl">Gaming Pro App</p>
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <InputField placeholder={'Enter your email'} id={'email'} type={"email"} />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
               
                <InputField placeholder={'Enter your password'} id={'password'} type={"password"} />
              </div>
              <div className="flex items-center justify-between">
                <LogSignBtn name={"Sign In"} />
              </div>
              <div className="w-full text-center mt-2">
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <span
                    onClick={showSignUp}
                    className="font-medium text-primary-600 hover:underline cursor-pointer"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginScreen;

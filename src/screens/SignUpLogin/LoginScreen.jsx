import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogSignBtn from "../../components/LogSignBtn";
import SignUpScreen from "./SignUpScreen";
import InputField from "../../components/InputField";
import { useLoginUserMutation } from "../../services/AuthServices";
import { useRefferalUserMutation } from "../../services/AuthServices";
import { useDispatch } from "react-redux";
import { setUser, setRecieverId } from "../../redux/AuthSlice";

function LoginScreen({ closeLogin, setIsLoginVisible }) {
  const dispatch = useDispatch();
  const [userLogin] = useLoginUserMutation();
  const [userRefferal] = useRefferalUserMutation();
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const showSignUp = () => {
    setIsSignUpVisible(true);
  };

  const closeSignUp = () => {
    setIsSignUpVisible(false);
    setIsLoginVisible(false);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const { email, password, RefCode } = values;
      const response = await userLogin({
        email: email,
        password: password,
      }).unwrap();
      dispatch(setUser(response));
      if (response) {
        const referralCode = RefCode || "00000";
        const refcode = await userRefferal({ referralCode: referralCode });
        dispatch(setRecieverId(refcode?.data?.user?._id));
        // console.log('refcode--->' , refcode?.data?.user?._id)
      }

      setIsLoginVisible(false);
    } catch (error) {
      console.error("Login Failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {isSignUpVisible ? (
        <SignUpScreen closeSignUp={closeSignUp} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeLogin}
          ></div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
            <div className="mb-5 text-center">
              <p className="font-bold text-gray-900 text-2xl">Gaming Pro App</p>
            </div>
            <Formik
              initialValues={{ email: "", password: "", RefCode: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <Field
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      name="email"
                      type="email"
                      as={InputField}
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Field
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      name="password"
                      type="password"
                      as={InputField}
                      placeholder="Enter your password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Referral code
                    </label>
                    <Field
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      name="RefCode"
                      type="RefCode"
                      as={InputField}
                      placeholder="Enter your  Referral code"
                    />
                    <ErrorMessage
                      name="RefCode"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <LogSignBtn
                      type="submit"
                      disabled={isSubmitting}
                      name={"Sign In"}
                    />
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginScreen;

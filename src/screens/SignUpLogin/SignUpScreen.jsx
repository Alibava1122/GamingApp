import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogSignBtn from "../../components/LogSignBtn";
import InputField from "../../components/InputField";
import {
  useSignUpUserMutation,
  useGetAdminQuery,
} from "../../services/AuthServices";
import { useChatUserMutation } from "../../services/ChatServices";
import { useDispatch } from "react-redux";
import { setUser, setRecieverId  , setChatRoomDetails} from "../../redux/AuthSlice";
import { showLoginModal , hideSignUpModal, hideLoginModal} from '../../redux/uiSlice'; 

function SignUpScreen() {
  const dispatch = useDispatch();
  const [SignUp] = useSignUpUserMutation();
  const { data, isLoading } = useGetAdminQuery();
  const [Chatfun] = useChatUserMutation();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (data) {
      setAdmins(data.admins);
    }
  }, [data]);

  const closeSignUp =() => {
    dispatch(hideSignUpModal());
    dispatch(hideLoginModal())

  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    adminId: Yup.string().required("Admin selection is required"),
  });

  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      const response = await SignUp({
        name: values.username,
        email: values.email,
        password: values.password,
        role: "User",
        referral: values.adminId,
      }).unwrap();
      // console.log('Response is here:', response?.user?._id);
      if (!response.error) {
        dispatch(setUser(response));
        const respons = await Chatfun({
          receiverId: values.adminId,
          senderId: response?.user?._id,
        });
        console.log('responseee --->' , respons)
        dispatch(setRecieverId(values.adminId));
        dispatch(setChatRoomDetails(respons))
        
        closeSignUp(true);
      }
    } catch (error) {
      console.log("Signup failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeSignUp}
      ></div>
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md z-10 border border-[#ceb75d">
        <div className="mb-5 text-center">
          <p className="font-bold text-white text-xl">Gaming Pro App</p>
        </div>
        <h2 className="text-xl text-white font-bold mb-6 text-center">Sign Up</h2>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            adminId: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <Field
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ceb75d] focus:border-[#ceb75d] placeholder:text-[13px]"
                  name="username"
                  type="text"
                  as={InputField}
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Field
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ceb75d] focus:border-[#ceb75d] placeholder:text-[13px]"
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
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ceb75d] focus:border-[#ceb75d] placeholder:text-[13px]"
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
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ceb75d] focus:border-[#ceb75d] placeholder:text-[13px]"
                  name="confirmPassword"
                  type="password"
                  as={InputField}
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="adminId"
                >
                  Select Admin
                </label>
                <Field
                  as="select"
                  name="adminId"
                  className="w-full h-[40px] px-3 py-2 border text-[13px] text-gray-400  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ceb75d] focus:border-[#ceb75d] "
                >
                  <option value="" disabled>
                    Select Admin
                  </option>
                  {admins.map((admin) => (
                    <option key={admin._id} value={admin._id}>
                      {admin.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="adminId"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <LogSignBtn
                  type="submit"
                  disabled={isSubmitting}
                  name="Sign Up"
                />
              </div>
              <div className="w-full text-center mt-2">
                <p className="text-[13px] font-light text-white">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      dispatch(showLoginModal());
                      dispatch(hideSignUpModal());
                    }}
                    className="font-medium text-primary-600 hover:underline cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUpScreen;

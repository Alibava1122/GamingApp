import React from 'react';
import LogSignBtn from '../../components/LogSignBtn';
import InputField from '../../components/InputField';

function SignUpScreen({ closeSignUp }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeSignUp}></div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <div className="mb-5 text-center">
          <p className="font-bold text-gray-900 text-2xl">Gaming Pro App</p>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <InputField placeholder={'Enter your username'} id={'username'} type={"email"} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <InputField placeholder={'Enter your email'} id={'email'} type={"email"} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <InputField placeholder={'Enter your password'} id={'password'} type={"password"} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <InputField placeholder={'Confirm your password'} id={'confirm-password'} type={"password"} />
          </div>
          <div className="flex items-center justify-between">
            <LogSignBtn name={'Sign Up'} />
          </div>
          <div className='w-full text-center mt-2'>
            <p className="text-sm font-light text-gray-500">
              Already have an account? <span onClick={closeSignUp} className="font-medium text-primary-600 hover:underline cursor-pointer">Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;

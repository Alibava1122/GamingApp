import React, { useState } from "react";
import backgroundImage from "../assets/Image1.jpg";
import PaymentButton from "../components/PaymentButton";
import StripeImage from '../assets/stripe.png';
import Paypal from '../assets/Paypal.png';
import Zelle from '../assets/zelle.png';
import Trustly from '../assets/trustly.png';
import Stripe2 from "./PaymentScreens/Stripe2";

const PaymentScreen = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-xl mt-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Select Your Payment Method
        </h1>
        <div className="flex space-x-4 justify-center">
          <PaymentButton name="Stripe" image={StripeImage} onClick={() => {}} />
          <PaymentButton name="Paypal" image={Paypal} onClick={() => {}} />
          <PaymentButton name="Zelle" image={Zelle} onClick={() => {}} />
          <PaymentButton name="Trustly" image={Trustly} onClick={() => {}} />
        </div>
      </div>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-8">
        <Stripe2 />
      </div>
    </div>
  );
};

export default PaymentScreen;

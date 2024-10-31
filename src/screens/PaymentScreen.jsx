import React, { useState } from "react";
import backgroundImage from "../assets/golden.jpg";
import PaymentButton from "../components/PaymentButton";
import StripeImage from '../assets/stripe.png';
import Paypal from '../assets/Paypal.png';
import Zelle from '../assets/zelle.png';
import Trustly from '../assets/trustly.png';
import Stripe2 from "./PaymentScreens/Stripe2";
import PaypalScreen from "./PaymentScreens/PaypalScreen";
import SquarePayment from "./PaymentScreens/SquarePayment";

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const renderPaymentComponent = () => {
    switch (selectedPaymentMethod) {
      case "Stripe":
        return <Stripe2 />;
      case "Paypal":
        return <PaypalScreen />;
      case "Square":
        return <SquarePayment/>
      // case "Trustly":
      //   return <div>Trustly Payment Component</div>;
      default:
        return <div>Please select a payment method.</div>;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-[#050508] "
    >
      <div className=" border border-[#ceb75d] backdrop-blur-md p-6 rounded-lg shadow-xl mt-4 bg-white">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#ceb75d]">
          Select Your Payment Method
        </h1>
        <div className="flex space-x-4 justify-center">
          <PaymentButton name="Stripe" image={StripeImage}  onClick={() => setSelectedPaymentMethod("Stripe")} />
          <PaymentButton name="Paypal" image={Paypal}  onClick={() => setSelectedPaymentMethod("Paypal")} />
          <PaymentButton name="Square" image={Zelle}  onClick={() => setSelectedPaymentMethod("Square")} />
          <PaymentButton name="Trustly" image={Trustly}  onClick={() => setSelectedPaymentMethod("Trustly")} />
        </div>
      </div>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-8">
      {renderPaymentComponent()}
      </div>
    </div>
  );
};

export default PaymentScreen;

import React, { useState } from "react";
import { usePaypalPaymentMutation } from "../../services/PaymentServices";

function PaypalScreen() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [paypalData , {isError}] = usePaypalPaymentMutation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading , isLoading] = useState(false)

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const sendButton = async () => {
    try {
      isLoading(true)
      const response = await paypalData({ amount, currency });
      if (response.error) {
        setErrorMessage("Failed to process the payment. Please try again.");
        return;
      }
      setAmount('');
      setCurrency('USD');
      const paypalLink = response?.data?.order?.result?.links[1]?.href;
      if (paypalLink) {
        window.location.href = paypalLink;
        isLoading(false)
      } else {
        console.log("PayPal link not found");
      }
    } catch (err) {
      console.error("Payment error: ", err);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col p-2 gap-y-3">
      <div>
        <label className="block text-black text-sm font-bold mb-2 ">
          Enter Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter amount in USD"
        />
      </div>
      <div>
        <label className="block text-black text-sm font-bold mb-2">
          Currency
        </label>
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="USD">USD - US Dollar</option>
        </select>
      </div>
      <div>
        <button
          onClick={sendButton}
          className={` p-3 text-sm w-full h-full text-white font-bold rounded bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700
     transform transition-all duration-300 ease-in-out
    
     `}
        >
          {
            loading ? 'Processing...' : 'Send Payment'
          }
        </button>
        {isError && (
        <p className="text-red-500 mt-3">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}
      </div>
    </div>
  );
}

export default PaypalScreen;

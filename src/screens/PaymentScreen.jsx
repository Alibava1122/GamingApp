import React, { useState } from "react";
import backgroundImage from '../assets/Image1.jpg'; 

const PaymentScreen = () => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardName">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-gray-500"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-gray-500"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              maxLength="16"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="expiryDate">
              Expiration Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-gray-500"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-gray-500"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;

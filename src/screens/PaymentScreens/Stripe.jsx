import React, { useState } from "react";

function Stripe() {
  const [formData, setFormData] = useState({
    Email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
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
    <>
      <div className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-md rounded-md mt-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Stripe</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-xl font-bold mb-2">Pay with card</label>
          <div className="mb-4">
            <input
              type="text"
              id="Email"
              name="Email"
              className="w-full px-3 py-2 border rounded-md "
              value={formData.Email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">
              Card information
            </label>
            <div className="w-full flex h-[90px] bg-white border  flex-col">
              <div className="w-full h-[50%] rounded-tr rounded-tl border-b-[1px] border-gray-300">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="w-full h-full p-2 rounded-lg placeholder:text-sm"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength="16"
                  placeholder="1234 1234 1234 1234"
                />
              </div>
              <div className="flex flex-row h-[50%] ">
                <div className="w-[50%] ">
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className="w-full h-full p-2 placeholder:text-sm "
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    maxLength="5"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-[50%] border-l border-gray-300">
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="w-full h-full p-2 placeholder:text-sm"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    maxLength="3"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="expiryDate">
              Name on card
            </label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              className="w-full px-3 py-2 border rounded-md "
              value={formData.nameOnCard}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="country">
              Country or region
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-3 py-2 border rounded-md "
              value={formData.country}
              onChange={handleChange}
              required
            >
               <option value="" disabled>
                    Select Country
                  </option>
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ceb75d] text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </>
  );
}

export default Stripe;

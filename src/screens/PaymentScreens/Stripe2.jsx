// src/App.js
import React, { useState } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { useStripePaymentMutation } from '../../services/PaymentServices';

const stripePromise = loadStripe('pk_test_51PysU6GkWxmNROPdHpfrwHksbsqD4iyG8HvL3BR20KdHjgAFV4Bh9u3ZIXTVKi1Hd8lUUVnRrpMmIp4Ecab2E0tB00lMUp5X3Y'); 

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#a0aec0',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const CheckoutForm = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log('user info is here---->', userInfo?.token);
  const [Payment] = useStripePaymentMutation(); 
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous error
    setSuccess(''); // Clear previous success message

    // Validate amount
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    if (!stripe || !elements) {
      setError('Stripe.js has not yet loaded. Please try again later.');
      return;
    }

    try {
      const paymentResponse = await Payment({
        body: { amount: amount },
        token: userInfo?.token,  
      }).unwrap();

      console.log('Payment successful:', paymentResponse?.clientSecret);
      const clientSecret = paymentResponse?.clientSecret;

      const stripeResponse = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (stripeResponse.error) {
        // Show error to the customer
        console.error('Stripe payment error:', stripeResponse.error.message);
        setError(stripeResponse.error.message);
      } else if (stripeResponse.paymentIntent.status === 'succeeded') {
        // Payment was successful
        console.log('Payment succeeded:', stripeResponse);
        setSuccess('Payment successful! Thank you.');
      } else {
        setError('Payment failed. Please try again.');
      }

    } catch (error) {
      // Handle network errors or payment service errors
      console.error('Payment failed:', error);
      setError('An error occurred during the payment process. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="card-element" className="block text-gray-700 font-semibold mb-2">
          Credit or Debit Card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          className="p-4 border rounded-lg border-gray-300 focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-4 border rounded-lg border-gray-300 focus:border-blue-500 transition-colors w-full"
          placeholder="Enter amount"
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full  text-white py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-600 transition-colors"
      >
        Pay Now
      </button>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
    </form>
  );
};

function Stripe2() {
  return (
    <div className="App">
      <h1>Stripe Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Stripe2;

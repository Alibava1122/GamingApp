
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const StripePaymentApi = createApi({
    reducerPath: 'StripePayment',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://chat-backend-gray.vercel.app/api' }),
    endpoints: (builder) => ({
      StripePayment: builder.mutation({
        query: ({ body, token }) => {
          return {
            url: '/payment/stripe',
            method: 'POST',
            body,
            headers: {
                Authorization: token,
              },
          };
        },
      }),
      PaypalPayment: builder.mutation({
        query: (body) => {
          return {
            url: '/payment/paypal',
            method: 'POST',
            body,
          };
        },
      }),
      SquarePayment: builder.mutation({
        query: (body) => {
          return {
            url: '/square/payment',
            method: 'POST',
            body,
          };
        },
      }),

    }),
  });
  
  export const { useStripePaymentMutation , usePaypalPaymentMutation ,useSquarePaymentMutation } = StripePaymentApi;
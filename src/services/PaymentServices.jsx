
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
    }),
  });
  
  export const { useStripePaymentMutation } = StripePaymentApi;
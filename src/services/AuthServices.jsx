
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userLoginApi = createApi({
  reducerPath: 'userLoginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://chat-backend-gray.vercel.app/api' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: 'user/login',
        method: 'POST',
        body
        
      }),
    }),
    SignUpUser: builder.mutation({
      query: (body) => ({
        url: 'user/register',
        method: 'POST',
        body 
      }),
    }),
    getAdmin: builder.query({
      query: () => 'user/admins'
    }),
    RefferalUser: builder.mutation({
      query: (body) => ({
        url: 'user/referralCode',
        method: 'POST',
        body 
      }),
    }),

  }),
});

export const { useLoginUserMutation , useSignUpUserMutation , useGetAdminQuery  , useRefferalUserMutation } = userLoginApi;
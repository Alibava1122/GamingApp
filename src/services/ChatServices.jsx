
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ChatFunApi = createApi({
  reducerPath: 'ChatFun',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://chat-backend-gray.vercel.app/api' }),
  endpoints: (builder) => ({
    ChatUser: builder.mutation({
      query: (body) => ({
        url: 'chat/create-room',
        method: 'POST',
        body
        
      }),
    }),
    sendMessage: builder.mutation({
      query: (body) => ({
        url: 'chat/send-message',
        method: 'POST',
        body
        
      }),
    }),
    chatHistory: builder.mutation({
      query: (body) => ({
        url: 'chat/get-previous-chats',
        method: 'POST',
        body
        
      }),
    }),
   
  }),
});

export const {useChatUserMutation , useSendMessageMutation , useChatHistoryMutation} = ChatFunApi;
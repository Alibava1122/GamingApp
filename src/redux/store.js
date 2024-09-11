import { configureStore } from '@reduxjs/toolkit';
// Import your API services
import { userLoginApi } from '../services/AuthServices';
import { ChatFunApi } from '../services/ChatServices';
// Import the default export of AuthSlice
import authReducer from './AuthSlice'; // Use the correct path to your AuthSlice file

export const store = configureStore({
  reducer: {
    [userLoginApi.reducerPath]: userLoginApi.reducer,
    [ChatFunApi.reducerPath]: ChatFunApi.reducer,
    user: authReducer, // Use the correct reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userLoginApi.middleware).concat(ChatFunApi.middleware),
});
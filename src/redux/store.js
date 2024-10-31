import { configureStore } from '@reduxjs/toolkit';
import { userLoginApi } from '../services/AuthServices';
import { ChatFunApi } from '../services/ChatServices';
import { StripePaymentApi } from '../services/PaymentServices';
import uiReducer from './uiSlice';
import authReducer from './AuthSlice'; 

export const store = configureStore({
  reducer: {
    [userLoginApi.reducerPath]: userLoginApi.reducer,
    [ChatFunApi.reducerPath]: ChatFunApi.reducer,
    [StripePaymentApi.reducerPath]: StripePaymentApi.reducer,

    user: authReducer, 
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userLoginApi.middleware).concat(ChatFunApi.middleware).concat(StripePaymentApi.middleware),
});
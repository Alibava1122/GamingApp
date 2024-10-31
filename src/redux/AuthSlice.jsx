import { createSlice } from '@reduxjs/toolkit';


const AuthSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    recieverId: null ,
    setChatRoomDetails: null,
    isLogedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload; 
      state.isLogedIn = !!action.payload; 
    },
    setRecieverId: (state , action) =>{
      state.recieverId = action.payload; 
    },
    setChatRoomDetails: (state , action) =>{
      state.setChatRoomDetails = action.payload; 
    }
  },
});


export const { setUser , setRecieverId , setChatRoomDetails } = AuthSlice.actions;


export default AuthSlice.reducer;
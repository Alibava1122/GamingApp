import { createSlice } from '@reduxjs/toolkit';


const AuthSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    recieverId: null 
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload; 
    },
    setRecieverId: (state , action) =>{
      state.recieverId = action.payload; 
    }
  },
});


export const { setUser , setRecieverId } = AuthSlice.actions;


export default AuthSlice.reducer;
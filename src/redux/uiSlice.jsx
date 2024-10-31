// uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoginModalVisible: false,
    isSignUpModalVisible: false,
    isChatModalVisible: false,
  },
  reducers: {
    showLoginModal: (state) => {
      state.isLoginModalVisible = true;
    },
    hideLoginModal: (state) => {
      state.isLoginModalVisible = false;
    },
    toggleLoginModal: (state) => {
      state.isLoginModalVisible = !state.isLoginModalVisible;
    },

    // signup
    showSignUpModal: (state) => {
      state.isSignUpModalVisible = true;
    },
    hideSignUpModal: (state) => {
      state.isSignUpModalVisible = false;
    },
    toggleSignUpModal: (state) => {
      state.isSignUpModalVisible = !state.isSignUpModalVisible;
    },

    // chat

    showChatModal: (state) => {
      state.isChatModalVisible = true;
    },
    hideChatModal: (state) => {
      state.isChatModalVisible = false;
    },
    toggleChatpModal: (state) => {
      state.isChatModalVisible = !state.isChatModalVisible;
    },
  },
});

export const {
  showLoginModal,
  hideLoginModal,
  toggleLoginModal,
  showSignUpModal,
  hideSignUpModal,
  toggleSignUpModal,
  showChatModal,
  hideChatModal,
  toggleChatModal,
} = uiSlice.actions;

export default uiSlice.reducer;

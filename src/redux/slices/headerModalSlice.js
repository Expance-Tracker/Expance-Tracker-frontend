import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogoutModalOpen: false
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLogoutModal: (state) => {
      state.isLogoutModalOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isLogoutModalOpen = false;
    }
  }
});

export const { openLogoutModal, closeLogoutModal } = modalSlice.actions;
export default modalSlice.reducer;

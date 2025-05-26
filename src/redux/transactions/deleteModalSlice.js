import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDeleteModalOpen: false,
  transactionId: null
};

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal: (state, action) => {
      state.isDeleteModalOpen = true;
      state.transactionId = action.payload;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
      state.transactionId = null;
    }
  }
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";

const initialState = {
  user: {
    email: null,
    name: null
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    });
  }
});

export const authReducer = slice.reducer;

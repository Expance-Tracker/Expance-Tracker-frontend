import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://expance-tracker-backend-9zu7.onrender.com/";


export const setTokenForRequest = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const clearTokenForRequest = () => {
  delete axios.defaults.headers.common.Authorization;
};

// LOGIN
export const login = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const { data } = await axios.post("/login", body);
    setTokenForRequest(data.data.accessToken);
    return data.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Login failed");
  }
});


export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/logout");
  } catch (error) {
    
  } finally {
    clearTokenForRequest(); 
  }
});


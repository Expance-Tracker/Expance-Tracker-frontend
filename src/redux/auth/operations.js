import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";

axios.defaults.baseURL = "https://expance-tracker-backend-9zu7.onrender.com/";

export const setTokenForRequest = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const { data } = await axios.post("/login", body);
    setTokenForRequest(data.data.accessToken);
    return data.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});
// logout
// export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
//   try {
//     await axios.post("/logout");
//     axios.defaults.headers.common.Authorization = "";
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/logout"); // використовуємо інстанс із interceptor'ом
    api.defaults.headers.common.Authorization = "";
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

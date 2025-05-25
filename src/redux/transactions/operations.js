import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://expance-tracker-backend-9zu7.onrender.com";

const ensureToken = () => {
  if (!axios.defaults.headers.common.Authorization) {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }
};

export const getTransactions = createAsyncThunk(
  "transactions/get",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { data } = await axios.get("/transactions");
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
  
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBalance } from "../slices/balanceSlice";
import { setLoading } from "../global/globalSlice";

axios.defaults.baseURL = "https://expance-tracker-backend-9zu7.onrender.com";

export const getTransactions = createAsyncThunk(
  "transactions/get",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { data } = await axios.get("/transactions");

      thunkAPI.dispatch(fetchBalance());

      return data.data;
    } catch (err) {
      thunkAPI.dispatch(setLoading(false));

      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/add",
  async (values, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      const formattedValues = {
        ...values,
        date: values.date ? values.date.toISOString().split("T")[0] : null
      };

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { data } = await axios.post("/transactions", formattedValues);

      thunkAPI.dispatch(fetchBalance());

      return data;
    } catch (err) {
      thunkAPI.dispatch(setLoading(true));

      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/update",
  async ({ id, values }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { data } = await axios.put(`/transactions/${id}`, values);

      thunkAPI.dispatch(fetchBalance());
      return data;
    } catch (err) {
      thunkAPI.dispatch(setLoading(false));

      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/delete",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      await axios.delete(`/transactions/${id}`);

      thunkAPI.dispatch(fetchBalance());

      return id;
    } catch (err) {
      thunkAPI.dispatch(setLoading(false));

      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

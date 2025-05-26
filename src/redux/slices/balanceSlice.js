// src/redux/slices/balanceSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_BALANCE_API_URL = 'https://expance-tracker-backend-9zu7.onrender.com/user/balance';

export const fetchBalance = createAsyncThunk(
  'balance/fetchBalance',
  async (_, thunkAPI) => {
    try {
      
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue('Error fetching balance token');
      }

      
      const response = await axios.get(GET_BALANCE_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      const userBalance = response.data.balance ?? 0;

      return userBalance;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || 'Error fetching balance'
      );
    }
  }
);

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default balanceSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchStatistics',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token || state.auth.value?.token;
      const period = state.statistics.period;
      const type = state.statistics.type;

      const response = await axios.get(
        `http://localhost:3000/api/transactions/statistics`,
        {
          params: { period, type },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data; // { Food: 120, Transport: 80, ... }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    clearTransactions(state) {
      state.items = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
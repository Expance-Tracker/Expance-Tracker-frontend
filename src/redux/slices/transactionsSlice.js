import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchStatistics',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token || state.auth.value?.token;
      const period = state.statistics.period; // ➜ "YYYY-MM"
      const type = state.statistics.type;

      const response = await axios.get(
        'https://expance-tracker-backend-9zu7.onrender.com/statistics/summary',
        {
          params: { month: period, type }, // 💥 Додано type
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('API response:', response.data); // Перевіримо тепер

      const summary = {};
      if (response.data && Array.isArray(response.data.categories)) {
        response.data.categories.forEach(({ category, total }) => {
          summary[category] = total;
        });
      }

      return summary;
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
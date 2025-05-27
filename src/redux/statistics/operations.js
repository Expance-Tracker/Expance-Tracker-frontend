import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async ({ type, month, year }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token || state.auth.value?.token;
      const response = await axios.get('/statistics', {
        params: { type, month, year },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
    }
  }
);
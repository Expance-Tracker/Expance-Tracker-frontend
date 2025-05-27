import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStatistics = createAsyncThunk(
    'statistics/fetchStatistics',
    async ({ type, month, year }, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const token = state.auth.token || state.auth.value?.token;
        
        const monthString = `${year}-${month.toString().padStart(2, '0')}`;
        const response = await axios.get(
          `https://expance-tracker-backend-9zu7.onrender.com/statistics/summary`,
          {
            params: {                  
                  month: monthString,
                  type, 
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
      }
    }
  );
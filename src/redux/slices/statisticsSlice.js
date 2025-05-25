import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const today = new Date();
const initialPeriod = format(today, 'yyyy-MM');

const initialState = {
  type: 'expense',
  period: initialPeriod,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setPeriod(state, action) {
      state.period = action.payload;
    },
  },
});

export const { setType, setPeriod } = statisticsSlice.actions;
export default statisticsSlice.reducer;
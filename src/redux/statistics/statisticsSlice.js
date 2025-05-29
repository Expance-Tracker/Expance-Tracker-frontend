import { createSlice } from "@reduxjs/toolkit";
import { fetchStatistics } from "./operations";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  type: "expense",
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear()
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { setType, setMonth, setYear } = statisticsSlice.actions;
export default statisticsSlice.reducer;

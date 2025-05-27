import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isMobile: window.innerWidth <= 768,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsMobile: (state, action) => { 
      state.isMobile = action.payload;
    }
  },
});

export const { setLoading, setIsMobile } = globalSlice.actions;
export default globalSlice.reducer;
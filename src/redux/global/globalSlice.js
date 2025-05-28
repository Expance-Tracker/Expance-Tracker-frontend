import { createSlice } from '@reduxjs/toolkit';

const getInitialMobileState = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768;
  }
  return false;
};

const initialState = {
  isLoading: false,
  isMobile: getInitialMobileState(),
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
    },
  },
});

export const { setLoading, setIsMobile } = globalSlice.actions;
export default globalSlice.reducer;

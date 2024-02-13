// baseUrlSlice.js
import { createSlice } from '@reduxjs/toolkit';

const baseUrlSlice = createSlice({
  name: 'baseUrl',
  initialState: {
    defaultbaseUrl: 'https://default-api-url.com',
    url:''
  },
  reducers: {
    updateBaseUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { updateBaseUrl } = baseUrlSlice.actions;
export const selectBaseUrl = (state) => state.baseUrl.url;
export default baseUrlSlice.reducer;

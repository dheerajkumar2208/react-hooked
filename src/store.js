import { configureStore } from '@reduxjs/toolkit';
import dropdownSlice from './Slices/dropdownSlice'
// import emailPreferenceReducer from './path-to/emailPreferenceSlice';

const store = configureStore({
  reducer: {
     dropdown: dropdownSlice,
  },
});

export default store;


import { configureStore } from '@reduxjs/toolkit';
import dropdownSlice from './Slices/dropdownSlice'
import baseUrlSlice from './Slices/baseUrlSlice'
import userProfileReducer from './Slices/userProfileSlice';
import userRolesReducer from './Slices/userRolesSlice';
import emailPreferenceReducer from './Slices/emailPreferenceSlice';
// import emailPreferenceReducer from './path-to/emailPreferenceSlice';

const store = configureStore({
  reducer: {
     dropdown: dropdownSlice,
     baseUrl: baseUrlSlice,
     userProfile: userProfileReducer,
     userRoles: userRolesReducer,
     emailPreference: emailPreferenceReducer,

  },
});

export default store;


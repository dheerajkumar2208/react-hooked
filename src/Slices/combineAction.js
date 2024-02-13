

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserProfile } from './UserProfileSlice'

import { fetchUserRoles } from './UserRolesSlice'
import { fetchEmailPreference } from './emailPreferenceSlice'
  
  
  // fetchUserRoles, fetchEmailPreference, fetchThemePreference } from './yourSliceFiles';

export const fetchAllData = createAsyncThunk('combinedActions/fetchAllData', async (requestData, { dispatch }) => {
  try {
    // Dispatch the first thunk and wait for its completion
    const userProfileAction = await dispatch(fetchUserProfile()).unwrap();

    // Extract necessary data from the first thunk's action
    const { userData, px4Access } = userProfileAction.payload;

    // // Dispatch the second thunk with the necessary data
    // await dispatch(fetchUserRoles(requestData, userData.userId, px4Access));

    // // Continue with the sequence for other thunks as needed
    // await dispatch(fetchEmailPreference(userData.emailId));
    // await dispatch(fetchThemePreference('user-theme-preference', userData.userId));

    // You can dispatch additional actions or perform other logic here

  } catch (error) {
    // Handle errors or dispatch error-related actions
  }
});
// emailPreferenceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
// import * as reqs from '../../common/constants/RequestConstants';

export const fetchEmailPreference = createAsyncThunk('emailPreference/fetchEmailPreference', async (emailId, { dispatch }) => {
  try {
    // dispatch(setEmailPreferenceStart());
    // const response = await Axios.post(reqs.FETCH_EMAIL_PREFERENCE_URL, { /* Your request data here */ }, {
    //   // headers: reqs.REQUEST_HEADER,
    // });
    // dispatch(setEmailPreferenceEnd(response.data.result.OUT_USER_PREF));
  } catch (error) {
    // Handle errors or dispatch error-related actions
  }
});

export const setEmailPreferenceSlice = createSlice({
  name: 'emailPreference',
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    setEmailPreferenceStart: (state) => {
      state.loading = true;
    },
    setEmailPreferenceEnd: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { setEmailPreferenceStart, setEmailPreferenceEnd } = setEmailPreferenceSlice.actions;
export default setEmailPreferenceSlice.reducer;
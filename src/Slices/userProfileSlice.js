import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
// import * as reqs from '../../common/constants/RequestConstants';
const REQUEST_HEADER = {
  'Content-Type': "application/json",
  'Accept': "application/json",
  "ALLOW-FROM-ORIGIN": "ALLOW",
  Cache: 'no-cache',
  CSRF: window.csrf_token_val,
  'X-Requested-With': 'XMLHttpRequest'
};
const REQUEST_HEADER_PROFILE = {
  Cache: 'no-cache',
  CSRF: window.csrf_token_val,
  'X-Requested-With': 'XMLHttpRequest',
};

export const fetchUserProfile = createAsyncThunk('userProfile/fetchUserProfile', async (requestData, { dispatch }) => {
  try {

    const profileReqData = {
      "_": new Date().getTime(),
      "appName": "SalesByState",
      "appKey": "SalesByState",
      "type": "jdbc",
      "queryName": "profile",
      "version": "V2.0",
      "useCache": false
  };

    let signinConfig={
      headers: REQUEST_HEADER
  }

  let config = {
    headers: REQUEST_HEADER_PROFILE,
    params: profileReqData,
}
    dispatch(fetchUserProfileStart());
    const siginResponse = Axios.get('/gsf/eurovat_snowflake/signin',signinConfig)

    const response = await Axios.get('/gsf/eurovat_snowflake/user/profile', config
    // { headers: reqs.REQUEST_HEADER_PROFILE }
    );
    //  const px4Access = response.data.result.groupIds.some(item => reqs.PX4_DS_GROUP_IDS.includes(item));
     dispatch(fetchUserProfileEnd({ userData: response.data.result }));
    // You can dispatch additional actions here based on the API response
  } catch (error) {
    // Handle errors or dispatch error-related actions
  }
});

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    loading: false,
    data: null,
    px4Access: false,
  },
  reducers: {
    fetchUserProfileStart: (state) => {
      state.loading = true;
    },
    fetchUserProfileEnd: (state, action) => {
      state.loading = false;
      state.data = action.payload.userData;
      // state.px4Access = action.payload.px4Access;
    },
  },
});

export const { fetchUserProfileStart, fetchUserProfileEnd } = userProfileSlice.actions;
export default userProfileSlice.reducer;

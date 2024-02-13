// userRolesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
// import * as reqs from '../../common/constants/RequestConstants';

export const fetchUserRoles = createAsyncThunk('userRoles/fetchUserRoles', async (requestData, { dispatch }) => {
  try {
    // dispatch(fetchUserRolesStart());
    // const response = await Axios.post('/gsf/eurovat_snowflake/businessareas/finance/subjectareas/eurovat_snowflake/services/fetchUserRoles', requestData, {
    //   headers: reqs.REQUEST_HEADER,
    // });
    // dispatch(fetchUserRolesSuccess(response.data.result));
  } catch (error) {
    dispatch(fetchUserRolesFail());
  }
});

export const userRolesSlice = createSlice({
  name: 'userRoles',
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    fetchUserRolesStart: (state) => {
      state.loading = true;
    },
    fetchUserRolesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserRolesFail: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchUserRolesStart, fetchUserRolesSuccess, fetchUserRolesFail } = userRolesSlice.actions;
export default userRolesSlice.reducer;
// dropdownApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API endpoints
export const api = createApi({

  
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gbifinance-uat.rno.apple.com' }),
  prepareHeaders: (headers, { getState }) => {
  
    headers.set('Cache', 'no-cache');
    headers.set('CSRFToken', window.csrf_token_val);
    headers.set('CSRF', window.csrf_token_val);
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    headers.set('ALLOW-FROM-ORIGIN', 'ALLOW"');
    headers.set('X-Requested-With', 'XMLHttpRequest"');
    return headers;
  },
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (postData) => ({
        url: 'gsf/eurovat_snowflake/businessareas/finance/subjectareas/eurovat_snowflake/services/MC_WIZARD_TAX_RPT_FISCAL_CAL_LIST',
        method: 'POST',
        body: postData,
      }),
    }),
    fetchDropdownData: builder.query({
      query: () => 'your-api-endpoint-for-dropdown-data',
    }),
    fetchOtherData: builder.query({
      query: () => 'your-api-endpoint-for-other-data',
    }),
    // Define more endpoints as needed
  }),
});

// Export the generated hooks for use in your components
export const { useFetchDropdownDataQuery, useFetchOtherDataQuery, useCreatePostMutation } = api;





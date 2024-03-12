import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {dropdownValues} from '../config/data'
import {restructureData,createStructureObjFromApi, getInvoiceInputs } from '../utils/utilFunc'
import { useSelector } from 'react-redux';
import { API_OBJECTS, QUERY_NAME} from "../constants/constant"; 

import api from '../api'; // Adjust the path based on your project structure\
const initialState = {
}





export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
       
      if (action.payload) {
        return {
          ...state,
          ...action.payload
        };
      } else {
        return state;
      }
    },
    submitDataSuccess: (state, action) => {
      // Reducer to handle successful data submission and updating the state if needed
      // Add logic here based on the response from the submit API call
      return state;
    },
    // fetchValues: (state, action) => {
    //   const { query = '' } = action.payload;
    //   let currentData = {}
    //   if(query === 'MC_EUR_VAT_FISCAL_CAL_LIST'){
    //   currentData = dropdownValues[query];

    //   let restructuredData = restructureData(currentData.datas)
    //   state.MC_EUR_VAT_FISCAL_CAL_LIST = restructuredData

    //   }
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    // //   state.value += 1
   
    // state.MC_APAC_TAX_RPT_GENERIC = dropdownValues.MC_APAC_TAX_RPT_GENERIC.datas
    // state.MC_IFIN_VENDOR_IND = dropdownValues.MC_IFIN_VENDOR_IND.datas
    // state.MC_EUR_VAT_WEB_ORDER_TYPE_LIST= dropdownValues.MC_EUR_VAT_WEB_ORDER_TYPE_LIST.datas
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchValues.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchValues.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchValues.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.payload;
  //     });
  // },
})


export const fetchValues = createAsyncThunk('dropdown/fetchValues', async (dataToUpdate, {getState, dispatch, rejectWithValue }) => {
  try {
     
    const query = dataToUpdate ? dataToUpdate : [];
    if(query && query.length > 0){

      const { dropdown } = getState();

      const dropdownKeysArray = Object.keys(dropdown);





      // Filter out keys that are already present in the state
      const keysToFetch = query.filter(key => !dropdownKeysArray.includes(key));
  
      // If there are keys to fetch, make the API call
      if (keysToFetch.length > 0) {
        try {


          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Running on local machine
            console.log('Running on localhost');




            const data = {}
            keysToFetch.forEach(key => 

             
  
              data[key] = dropdownValues[key].datas
  
            )
  
            // Dispatch success action with the new data
            console.log('this is  data ', data)

            if(keysToFetch.includes('MC_EUR_VAT_FISCAL_CAL_LIST') && data.MC_EUR_VAT_FISCAL_CAL_LIST){
          
                data.MC_EUR_VAT_FISCAL_CAL_LIST = restructureData(data.MC_EUR_VAT_FISCAL_CAL_LIST)
          
                }
            dispatch(fetchDataSuccess(data));

          } 
          else {
            // Deployed environment
console.log('Deployed environment');
            const apiRequests = keysToFetch.map(key => {

            let dummyData =  {
            "appName": "eurovat_snowflake",
            "appKey": "eurovat_snowflake",
            "type": "jdbc",
            "queryName": key,
            "version": "v2.0",
            "useCache": false,
            "acmtoken": "",
            "bindVars": [],
            }
  
            return  api.post(`/${key}`,dummyData)
  
            }
  
  
  
  
  
            );
    
            const responses = await Promise.all(apiRequests);
    
            // Extract the data from each response
            const newDataArray = responses.map(response => response.data);

    
            // Dispatch success action with the new data
            const transformedData = createStructureObjFromApi(newDataArray)
            if(keysToFetch.includes('MC_EUR_VAT_FISCAL_CAL_LIST') && transformedData.MC_EUR_VAT_FISCAL_CAL_LIST){
          
              transformedData.MC_EUR_VAT_FISCAL_CAL_LIST = restructureData(transformedData.MC_EUR_VAT_FISCAL_CAL_LIST)
        
              }

            dispatch(fetchDataSuccess(transformedData));
  
          }

         










        } catch (error) {
           
          // Dispatch an error action if the API call fails
          // dispatch(fetchDataFailure(error.message));
        }
      }
    }
















    } catch (error) {
       
      // Dispatch an error action if the API call fails
      // dispatch(fetchDataFailure(error.message));
    }
  }
);

export const submitReport = createAsyncThunk('dropdown/submitReport', async (config, {getState, dispatch, rejectWithValue }) => {
  try {
    let {dataToSubmit, appName} = config

    console.log("coming for submittijng the data with DataRouterStateContext", dataToSubmit)

    const userProfile = getState().userProfile; //

    // const userProfile = useSelector(state => state.userProfile);
    let invoiceInpits = getInvoiceInputs(userProfile)

    let submitObj = API_OBJECTS.POST_REPORT
    let queryName =  QUERY_NAME[appName].SUBMIT_REPORT_DATA
    submitObj.queryName = queryName
    submitObj.bindVars = [...dataToSubmit, ...invoiceInpits ]


    const response =api.post(`/${queryName}`,submitObj)
    dispatch(submitDataSuccess(response.data));
  } catch (error) {
    console.log('error encountered ', error)    //need to handle error 
  }
}
);




export const submitData = createAsyncThunk('dropdown/submitData', async (dataToSubmit, queryName, { getState, dispatch, rejectWithValue }) => {
  try {
    console.log("coming for submittijng the data with DataRouterStateContext", dataToSubmit)


    const userProfile = useSelector(state => state.userProfile);
    let invoiceInpits = getInvoiceInputs(userProfile)

    let submitObj = API_OBJECTS.POST_REPORT

    submitObj.queryName = queryName
    submitObj.bindVars = [...dataToSubmit, ...invoiceInpits ]


    const response =api.post(`/${queryName}`,submitObj)
    dispatch(submitDataSuccess(response.data));
  } catch (error) {
    console.log('error encountered ', error)    //need to handle error 
  }
});



     










// Export the slice and its actions
export const { fetchDataSuccess, submitDataSuccess } = dropdownSlice.actions;
export default dropdownSlice.reducer;

// {
//   "appName": "eurovat_snowflake",
//   "appKey": "eurovat_snowflake",
//   "type": "jdbc",
//   "queryName": "SP_APAC_TAX_RPT_REQ_SUBMIT",
//   "version": "v2.0",
//   "useCache": false,
//   "acmtoken": "",
//   "bindVars": [
//       {
//           "bindVarName": "IN_REQUEST_TYPE_CD",
//           "bindVarVal": "O"
//       },
//       {
//           "bindVarName": "IN_USER_DS_ID",
//           "bindVarVal": "2700805941"
//       },
//       {
//           "bindVarName": "IN_USER_DS_NAME",
//           "bindVarVal": "Lavanya Lakku"
//       },
//       {
//           "bindVarName": "IN_USER_DS_GROUP",
//           "bindVarVal": ""
//       },
//       {
//           "bindVarName": "IN_USER_EMAIL_ID",
//           "bindVarVal": "llakku@apple.com"
//       },
//       {
//           "bindVarName": "IN_HISTORY_DURATION",
//           "bindVarVal": "10"
//       },
//       {
//           "bindVarName": "IN_COMPANY_CD",
//           "bindVarVal": "0082"
//       },
//       {
//           "bindVarName": "IN_COUNTRY_CD",
//           "bindVarVal": "AU"
//       },
//       {
//           "bindVarName": "IN_FISCAL_YEAR",
//           "bindVarVal": 2021
//       },
//       {
//           "bindVarName": "IN_FISCAL_QUARTER",
//           "bindVarVal": 3
//       },
//       {
//           "bindVarName": "IN_FISCAL_PERIOD",
//           "bindVarVal": "8"
//       },
//       {
//           "bindVarName": "IN_REPORT_TYPE_ID",
//           "bindVarVal": "PANAMA_SUM_REPORT"
//       },
//       {
//           "bindVarName": "IN_VENDOR_TYPE",
//           "bindVarVal": "Foreign"
//       },
//       {
//           "bindVarName": "IN_WEB_ORDER_TYPE",
//           "bindVarVal": "BR"
//       },
//       {
//           "bindVarName": "IN_GL_ACCT_LIST",
//           "bindVarVal": "123001"
//       },
//       {
//           "bindVarName": "IN_ENV_Cd",
//           "bindVarVal": "UAT"
//       }
//   ]
// }


export const TEXT_CONSTANT = {
    ADD_UPLOAD_FILES: "Add or Upload File",
    FILES_ADDED: "Files Added",
    HEADER_TEXT: "GBI Finance Tax Report",
  };
  export const ButtonGroup = {
    envButton: {
      UAT: {
        name: "UAT",
        baseURL: "hello",
      },
      IT: {
        name: "IT",
        baseURL: "hiiiiii",
      },
    },
    formWrapper: {},
  };
  export const DASHBOARD_NAMES = {
    apac: "APAC",
    nonApac: "NON APAC",
    singco: "SING CO",
    sbspx4: "SBS PX4",
  };
  
  export const componentIdentifier = {
    MY_REQUEST: "myRequest",
    NEW_REQUEST: "newRequest",
    SCHEDULED_REQUEST: "scheduleReq",
  };
  
  export const submitMapping = {
    // common: {
  
    // },
    apac: {
      company_code: "IN_COMPANY_CD",
      country: "IN_COUNTRY_CD",
      yearDefault: "IN_FISCAL_YEAR",
      quarterDefault: "IN_FISCAL_QUARTER",
      weborder: "IN_WEB_ORDER_TYPE",
      periodDefault: "IN_FISCAL_PERIOD",
      glacctnum: "IN_GL_ACCT_LIST",
    },
  };
  
  export const constants = {
    NONE_SELECTED: {
      value: "None Selected",
      label: "None Selected",
    },
  };
  
  export const API_OBJECTS = {
    POST_REPORT: {
      appName: "eurovat_snowflake",
      appKey: "eurovat_snowflake",
      type: "jdbc",
      queryName: "",
      version: "v2.0",
      useCache: false,
      acmtoken: "",
      bindVars: [],
    },
    FETCH_DATA: {
      appName: "eurovat_snowflake",
      appKey: "eurovat_snowflake",
      type: "jdbc",
      queryName: "",
      version: "v2.0",
      useCache: false,
      acmtoken: "",
    },
  };
  
  export const QUERY_NAME = {
    apac: {
      myRequest: {
        FETCH_HIST_DATA: "SP_APAC_TAX_RPT_HIST_DATA",
      },
      newRequest: {
        SUBMIT_REPORT_DATA: "SP_APAC_TAX_RPT_REQ_SUBMIT",
      },
  
      scheduleReq: {
        FETCH_HIST_DATA: "SP_APAC_TAX_RPT_HIST_DATA_SCH",
      },
    },
    nonApac: {
      FETCH_HIST_DATA: "SP_APAC_TAX_RPT_HIST_DATA",
      SUBMIT_REPORT_DATA: "SP_APAC_TAX_RPT_REQ_SUBMIT",
    },
    singco: "SING CO",
    sbspx4: "SBS PX4",
  };
  
  /*{
      "appName": "eurovat_snowflake",
      "appKey": "eurovat_snowflake",
      "type": "jdbc",
      "queryName": "SP_APAC_TAX_RPT_REQ_SUBMIT",
      "version": "v2.0",
      "useCache": false,
      "acmtoken": "",
      "bindVars": [
          {
              "bindVarName": "IN_REQUEST_TYPE_CD",
              "bindVarVal": "O"
          },
          {
              "bindVarName": "IN_USER_DS_ID",
              "bindVarVal": "2700805941"
          },
          {
              "bindVarName": "IN_USER_DS_NAME",
              "bindVarVal": "Lavanya Lakku"
          },
          {
              "bindVarName": "IN_USER_DS_GROUP",
              "bindVarVal": ""
          },
          {
              "bindVarName": "IN_USER_EMAIL_ID",
              "bindVarVal": "llakku@apple.com"
          },
          {
              "bindVarName": "IN_HISTORY_DURATION",
              "bindVarVal": "10"
          },
          {
              "bindVarName": "IN_COMPANY_CD",
              "bindVarVal": "0082"
          },
          {
              "bindVarName": "IN_COUNTRY_CD",
              "bindVarVal": "AU"
          },
          {
              "bindVarName": "IN_Date_From",
              "bindVarVal": "2023-12-07"
          },
          {
              "bindVarName": "IN_Date_To",
              "bindVarVal": "2023-12-13"
          },
          {
              "bindVarName": "IN_REPORT_TYPE_ID",
              "bindVarVal": "PANAMA_PLI_REPORT"
          },
          {
              "bindVarName": "IN_VENDOR_TYPE",
              "bindVarVal": "Foreign"
          },
          {
              "bindVarName": "IN_WEB_ORDER_TYPE",
              "bindVarVal": "BR,CB"
          },
          {
              "bindVarName": "IN_GL_ACCT_LIST",
              "bindVarVal": "new"
          },
          {
              "bindVarName": "IN_ENV_Cd",
              "bindVarVal": "UAT"
          }
      ]
  }*/
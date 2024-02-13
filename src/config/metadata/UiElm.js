let UiElm = {
  "dropdown": {
    "company_code": {
      "queryName": "MC_APAC_TAX_RPT_GENERIC",
      "REF_TYPE_CD": "COMPANY_CD",
      "key": "",
      "name": "Company Code",
      "label": "REF_CD",
      "value": "REF_CD"
    },
    "country": {
      "queryName": "MC_APAC_TAX_RPT_GENERIC",
      "REF_TYPE_CD": "COUNTRY_CD",
      "key": "",
      "name": "Country",
      "label": "REF_DESC",
      "value": "REF_CD"
    },
    "businessmodel": {
      "queryName": "MC_IFIN_VENDOR_IND",
      "REF_TYPE_CD": "",
      "key": "",
      "name": "Business Model",
      "label": "METADATA_VALUES",
      "value": "METADATA_CD"
    },
    "weborder": {
      "queryName": "MC_EUR_VAT_WEB_ORDER_TYPE_LIST",
      "REF_TYPE_CD": "",
      "key": "",
      "name": "Web Order",
      "label": "REF_DESC",
      "value": "REF_CD"
    },
  },
  "datePicker" : {
    "datepicker_fiscalCalDate" : {
      "section" : {
        "fiscal" :{
          "REF_TYPE_CD": "COMPANY_CD",
          "key": "",
          "name": "Company Code",
          "label": "REF_CD",
          "value": "REF_CD"


        },
        "calendar" : {

        }

      }
    }
  }
}


export default UiElm

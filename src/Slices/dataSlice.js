/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
// import { Grid } from "@mui/material";
import Button from "./Button";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from "react-redux";
import { fetchValues, submitData, submitReport} from "../Slices/dropdownSlice";
import loadConfig from "../utils/configLoader";
import UiElm from "../config/metadata/UiElm";
import CustomDatePicker from "./CustomDatePicker";
//  import CustomTextField from "./customtextField";
import CustomDropdown from "./CustomDropdown";
import { transformData } from "../utils/utilFunc";
import { useParams } from "react-router-dom";
import { submitMapping , TEXT_CONSTANT, QUERY_NAME} from "../constants/constant";

import "./style/formWrapper.scss";

export default function FormWrapper() {
  // this is for redux state selection we are selecting dropdown values
  const [selectedButton, setSelectedButton] = useState("FILTERS");
  const dropdownValue = useSelector(state => state.dropdown);
  const [valueObj, setValueObj] = useState({});
  const [editObj, setEditObj] = useState({});

  const [nameArray, setNameArray] = useState([]);

  const [isValid, setIsValid] = useState(true);
  const [optionsObj, setOptionsObj] = useState({});
  // const [query, setQuery] = useState([]);
  const [initialObj, setInitialObj] = useState({});
  const [uploadButton, setUploadBtn] = useState(false);

  // const isInitializedRef = useRef(false);

  // ---------------------code for dynamic module loading needs to be completed----------------------------------------
  let { entity, subEntity } = useParams(); // Get the route parameter from useParams
  const pathPref = subEntity.split("-");
  const [layout, setConfig] = useState(null);

  const childRef = useRef();


  const fetchApiData = layout => {
    try {
      let allElm = layout.config;
      let uploadBtn = false;

      if (allElm && allElm.length > 0) {
        let obj = {},
          // optionsObj = {},
          queryItem = [];
        allElm.forEach(item => {
          // doing work fot the options optimisation
          if (item.type === "textarea") {
            uploadBtn = true;
          }
          let nameOfDrp = item.name,
            letDrpConfig = UiElm.dropdown[nameOfDrp];

          if (letDrpConfig) {
            queryItem.push(letDrpConfig.queryName);

            // let drpData = dropdownValue[letDrpConfig.queryName];
            // if (drpData && drpData.length > 0) {
            //   let opt = drpData
            //     .filter(item => {
            //       if (letDrpConfig.REF_TYPE_CD !== "") {
            //         return item.REF_TYPE_CD === letDrpConfig.REF_TYPE_CD;
            //       } else {
            //         return true;
            //       }
            //     })
            //     .map(item => {
            //       if (nameOfDrp === "country") {
            //         return {
            //           value: item[letDrpConfig.label],
            //           label: item[letDrpConfig.value],
            //           active: false
            //         };
            //       } else {
            //         return {
            //           value: item[letDrpConfig.label],
            //           label: item[letDrpConfig.value]
            //         };
            //       }
            //     });
            //   optionsObj[nameOfDrp] = opt;
            // }
          }

          // obj[nameOfDrp] = item.isMultiSelect ? [] : "";
        });
        // console.log("this is obj", uploadBtn);

        if (queryItem && queryItem.length > 0) {
          dispatch(fetchValues(queryItem));
        }
        setUploadBtn(uploadBtn);
        // setQuery(queryItem);
        // setValueObj(prevObj => ({ ...prevObj, ...obj }));
        // setInitialObj(prevObj => ({ ...prevObj, ...obj }));
        // setOptionsObj(prevObj => ({ ...prevObj, ...optionsObj }));
      }
    } catch (e) {
      console.log("this is the error", e);
    }
  };

  const createValuAandOptObj = layout => {
    try {
      let allElm = layout.config;
      let uploadBtn = false;

      if (allElm && allElm.length > 0) {
        let obj = {},
          optionsObj = {}
          // queryItem = [];
        allElm.forEach(item => {
          // doing work fot the options optimisation
          if (item.type === "textarea") {
            uploadBtn = true;
          }
          let nameOfDrp = item.name,
            letDrpConfig = UiElm.dropdown[nameOfDrp];

          if (letDrpConfig) {
            // queryItem.push(letDrpConfig.queryName);

            let drpData = dropdownValue[letDrpConfig.queryName];
            if (drpData && drpData.length > 0) {
              let opt = drpData
                .filter(item => {
                  if (letDrpConfig.REF_TYPE_CD !== "") {
                    return item.REF_TYPE_CD === letDrpConfig.REF_TYPE_CD;
                  } else {
                    return true;
                  }
                })
                .map(item => {
                  if (nameOfDrp === "country") {
                    return {
                      value: item[letDrpConfig.label],
                      label: item[letDrpConfig.value],
                      active: false
                    };
                  } else {
                    return {
                      value: item[letDrpConfig.label],
                      label: item[letDrpConfig.value]
                    };
                  }
                });
              optionsObj[nameOfDrp] = opt;
            }
          }

          obj[nameOfDrp] = item.isMultiSelect ? [] : "";
        });
        // console.log("this is obj", uploadBtn);
        setUploadBtn(uploadBtn);
        // setQuery(queryItem);
        setValueObj(prevObj => ({ ...prevObj, ...obj }));
        setInitialObj(prevObj => ({ ...prevObj, ...obj }));
        setOptionsObj(prevObj => ({ ...prevObj, ...optionsObj }));
      }
    } catch (e) {
      console.log("this is the error", e);
    }
  };

  useEffect(() => {
    const section = pathPref[0];
    const subsection = pathPref[1];
    // if (!isInitializedRef.current) {
    loadConfig(entity)
      .then(configData => {
        setConfig(configData.default[section].pages[subsection]);
        fetchApiData(configData.default[section].pages[subsection]);
      })
      .catch(error => {});
    // }
  }, [entity, subEntity]); // The empty dependency array means this effect runs once, similar to componentDidMount







  const dispatch = useDispatch();
  // useEffect(() => {
  //   // if (postStatus === 'idle') {
  //   if (query && query.length > 0) {
  //     dispatch(fetchValues(query));
  //   }

  //   // }
  // }, [dispatch, query]);

  useEffect(() => {
    console.log(
      "coming in dropdown values after adding the data",
      dropdownValue
    );
    if(dropdownValue !== null && dropdownValue !== undefined && Object.keys(dropdownValue).length !== 0 && layout !== null && layout !== undefined){
      createValuAandOptObj(layout);
    }
   
  }, [dropdownValue, layout]);

  const handleReset = () => {
    let initObj = initialObj;
    setValueObj(initObj);
    childRef.current.childFunction(initObj);
  };
  const validateSubmitData = (valueObj, layouttemp) => {
    let isValid = true;
    layouttemp.forEach(item => {
      if (item.type === "dropdown" && isValid) {
        isValid = valueObj[item.name] && valueObj[item.name] !== "";
      }
    });

    return isValid;
  };

  const handleSubmit = () => {
    console.log("this is the valueObj", valueObj, layout.config);
    //SP_APAC_TAX_RPT_REQ_SUBMIT

    // {"appName":"eurovat_snowflake","appKey":"eurovat_snowflake","type":"jdbc","queryName":"SP_APAC_TAX_RPT_REQ_SUBMIT","version":"v2.0","useCache":false,"acmtoken":"","bindVars":[{"bindVarName":"IN_REQUEST_TYPE_CD","bindVarVal":"O"},{"bindVarName":"IN_USER_DS_ID","bindVarVal":"2700805941"},{"bindVarName":"IN_USER_DS_NAME","bindVarVal":"Lavanya Lakku"},{"bindVarName":"IN_USER_DS_GROUP","bindVarVal":""},{"bindVarName":"IN_USER_EMAIL_ID","bindVarVal":"llakku@apple.com"},{"bindVarName":"IN_HISTORY_DURATION","bindVarVal":"10"},{"bindVarName":"IN_COMPANY_CD","bindVarVal":"0082"},{"bindVarName":"IN_COUNTRY_CD","bindVarVal":"AU"},{"bindVarName":"IN_FISCAL_YEAR","bindVarVal":2020},{"bindVarName":"IN_FISCAL_QUARTER","bindVarVal":1},{"bindVarName":"IN_FISCAL_PERIOD","bindVarVal":"1"},{"bindVarName":"IN_REPORT_TYPE_ID","bindVarVal":"GL_SUMMARY"},{"bindVarName":"IN_VENDOR_TYPE","bindVarVal":""},{"bindVarName":"IN_WEB_ORDER_TYPE","bindVarVal":""},{"bindVarName":"IN_ENV_Cd","bindVarVal":"UAT"}]}
    //getting the most recent picker data
    let data = childRef.current.fetchLatestValues();

    let finalData = {
      ...valueObj,
      ...data
    };

    let isValid = validateSubmitData(finalData, layout.config);
    setIsValid(isValid);
    let transformedData = transformData(finalData, submitMapping[entity]);

    dispatch(submitReport({
      dataToSubmit : transformedData,
       appName: entity
    }));
    // let initObj  =   initialObj
    // setValueObj(initObj)
  };

  const setInitValuesDatePicker = obj => {
    setInitialObj({
      ...initialObj,
      ...obj
    });
  };

  const fetchOptions = current => {
    if (optionsObj && Object.keys(optionsObj).length > 0) {
      return optionsObj[current.name];
    }
  };
  const setSelectedData = (value, name) => {
    if (name === "company_code" && entity === "apac") {
      // if(value.value === '0082'){
      let opOb = optionsObj;
      opOb.country.forEach(elm => {
        if (value.value === "0082") {
          if (elm.label === "JP") {
            elm.active = false;
          } else {
            elm.active = true;
          }
        } else if (value.value === "0170") {
          if (elm.label === "JP" || elm.label === "None Selected") {
            elm.active = true;
          } else {
            elm.active = false;
          }
        } else {
          elm.active = false;
        }
      });

      // }
      setOptionsObj(prevObj => {
        return { ...prevObj, [name]: opOb[name] };
      });
    }

    setValueObj(prevObj => {
      return { ...prevObj, [name]: value };
    });
  };

  const handleButtonClick = buttonName => {
    setSelectedButton(buttonName);
  };

  const handletextFieldChange = (value, name) => {
    setValueObj({
      ...valueObj,
      [name]: value
    });
  };

  const handleSaveRequest = (value, name) => {
    if (!value) {
      setNameArray(nameArray.filter(item => item !== name));
    } else {
      if (!nameArray.includes(name)) {
        setNameArray([...nameArray, name]);
      }
    }
    setEditObj({
      ...editObj,
      [name]: value
    });

    setValueObj({
      ...valueObj,
      [name]: ""
    });
  };

  if (!layout || (layout && !layout.config) || layout.config.length === 0) {
    // If layout.config is not available or empty, you can render a loading state, error message, or nothing
    return null; // or return loading state, error message, etc.
  }

  return (
    <div>

      <div className="button-group">
        <div className="flex-6">
          <Button
            variant="contained"
            className={
              selectedButton === "FILTERS"
                ? "button-selected button-custom-form float-right"
                : "button-not-selected button-custom-form float-right"
            }
            onClick={() => handleButtonClick("FILTERS")}
            size="large"
          >
            FILTERS
          </Button>
         
        </div>
        <div className="flex-6">
        <Button
            variant="contained"
            className={
              selectedButton === "UPLOAD FILES"
                ? "button-selected button-custom-form "
                : "button-not-selected button-custom-form"
            }
            onClick={() => handleButtonClick("UPLOAD FILES")}
            size="large"
            disabled={!uploadButton}
          >
            UPLOAD FILES
          </Button>
         
          <h6 className="typography-btn" onClick={handleReset}>
            Reset All
          </h6>
        </div>
      </div>
      













      <div >
        {selectedButton === "UPLOAD FILES" && (
          <>
            <div>
              <div className="typography-btn heading-uploadfile">
                <h6> {`${TEXT_CONSTANT.ADD_UPLOAD_FILES}`}</h6>
              </div>
            </div>
            <div>
              <div
                className={
                  nameArray.length > 0
                    ? "typography-btn heading-uploadfile"
                    : " typography-btn heading-uploadfile right-section"
                }
              >
                <h6> {`${TEXT_CONSTANT.FILES_ADDED} (${nameArray.length})`}</h6>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex">
      <div className="flex-6 flex-padding-40">
          {layout.config.map((item, index) => (
            <>
              {item.type === "dropdown" && selectedButton === "FILTERS" ? (
                <div className="flex">
                 
                    <span className="label-custom flex-3 flex-padding-10">
                      {`${item.label}`}{" "}
                      <>
                        {item.required ? (
                          <span class="mandatory-asterisk">*</span>
                        ) : (
                          ""
                        )}
                      </>
                      {`${" : "}`}
                    </span>

                    <span className="flex-9 flex-padding-10">

                    <CustomDropdown
                      key={index}
                      name={item.name}
                      options={fetchOptions(item)}
                      isMultiSelect={item.isMultiSelect}
                      // searchEnabled={false}
                      onSelectionChange={setSelectedData}
                      defaultValue={
                        valueObj[item.name] ? valueObj[item.name] : ""
                      }
                    />
                    </span>

                </div>
              ) : item.type === "textarea" &&
                selectedButton === "UPLOAD FILES" ? (
                <>
                    <div  className="flex-6" >
                       {/* <CustomTextField
                        mode="create"
                        value={valueObj[item.name]}
                        keyName={`${item.name}`}
                        label={`${item.label}`}
                        onSave={handleSaveRequest}
                      />  */}
                    </div>
                    {/* dcdscsdscdscdscdscd */}

{/* 
                    <div className="hello">
dcdcdc
                          </div> */}
                </>
              ) : (
                <> </>
              )}
            </>
          ))}
          </div>

        <div className="divider" />

        <div className="flex-6 flex-padding-40">
          {layout.config.map((item, index) => (
            <>
              {item.type === "datePicker" && selectedButton === "FILTERS" ? (
                <div>
                 
                    {
                      <CustomDatePicker
                        page={item.config.for}
                        entity={item.config.entity}
                        // onChange={handlePickerChange}
                        setInitialValues={setInitValuesDatePicker}
                        ref={childRef}
                      ></CustomDatePicker>
                    }
                </div>
              ) : item.type === "textarea" &&
                selectedButton === "UPLOAD FILES" ? (
                <>
                    {editObj[item.name] !== "" &&
                      editObj[item.name] !== undefined && (
                        <>
                          {/* Render date picker component here */}
                           {/* <CustomTextField
                            mode="modify"
                            value={editObj[item.name]}
                            keyName={`${item.name}`}
                            label={`${item.label}`}
                            onSave={handleSaveRequest}
                          />  */}

                          <div className="hello">
dcdcdc
                          </div>
                        </>
                      )}
                </>
              ) : (
                <> </>
              )}
            </>
          ))}
        </div>
      </div>

   
    </div>
  );
}

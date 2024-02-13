/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Button, Divider} from "@mui/material";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from "react-redux";
import { fetchValues, submitData } from "../Slices/dropdownSlice";
import loadConfig from "../utils/configLoader";
import UiElm from "../config/metadata/UiElm";
import CustomDatePicker from "./customDatePicker";
import CustomTextField from "./customtextField";
import CustomDropdown from "./customDropdown";
import { transformData } from "../utils/utilFunc";
import { useParams } from "react-router-dom";
import { submitMapping , TEXT_CONSTANT} from "../constants/constant";

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
  const [query, setQuery] = useState([]);
  const [initialObj, setInitialObj] = useState({});
  const [uploadButton, setUploadBtn] = useState(false);

  // const isInitializedRef = useRef(false);

  // ---------------------code for dynamic module loading needs to be completed----------------------------------------
  let { entity, subEntity } = useParams(); // Get the route parameter from useParams
  const pathPref = subEntity.split("-");
  const [layout, setConfig] = useState({
    config: []
  });

  const childRef = useRef();

  const createValuAandOptObj = layout => {
    try {
      let allElm = layout.config;
      let uploadBtn = false;

      if (allElm && allElm.length > 0) {
        let obj = {},
          optionsObj = {},
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
        console.log("this is obj", uploadBtn);
        setUploadBtn(uploadBtn);
        setQuery(queryItem);
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
        createValuAandOptObj(configData.default[section].pages[subsection]);
      })
      .catch(error => {});
    // }
  }, [entity, subEntity]); // The empty dependency array means this effect runs once, similar to componentDidMount

  const dispatch = useDispatch();
  useEffect(() => {
    // if (postStatus === 'idle') {
    if (query && query.length > 0) {
      dispatch(fetchValues(query));
    }

    // }
  }, [dispatch, query]);

  useEffect(() => {
    console.log(
      "coming in dropdown values after adding the data",
      dropdownValue
    );
    createValuAandOptObj(layout);
  }, [dropdownValue]);

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

    //getting the most recent picker data
    let data = childRef.current.fetchLatestValues();

    let finalData = {
      ...valueObj,
      ...data
    };

    let isValid = validateSubmitData(finalData, layout.config);
    setIsValid(isValid);
    let transformedData = transformData(finalData, submitMapping[entity]);

    dispatch(submitData(transformedData));
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
    if (name === "company_code" && entity === "wizard") {
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
    <Grid container>
      <Grid className="button-group" container xs={12} md={12}>
        <Button
          variant="contained"
          className={
            selectedButton === "FILTERS"
              ? "button-selected button-custom-form"
              : "button-not-selected button-custom-form"
          }
          onClick={() => handleButtonClick("FILTERS")}
          size="large"
        >
          FILTERS
        </Button>

        <Button
          variant="contained"
          className={
            selectedButton === "UPLOAD FILES"
              ? "button-selected button-custom-form"
              : "button-not-selected button-custom-form"
          }
          onClick={() => handleButtonClick("UPLOAD FILES")}
          size="large"
          disabled={!uploadButton}
        >
          UPLOAD FILES
        </Button>

        <Typography
          className="typography-btn"
          variant="h6"
          onClick={handleReset}
        >
          Reset All
        </Typography>
      </Grid>

      {/* {selectedButton === 'FILTERS' && ( */}

      <Grid container xs={12} md={12}>
        {selectedButton === "UPLOAD FILES" && (
          <>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                className="heading-uploadfile"
              >
                {`${TEXT_CONSTANT.ADD_UPLOAD_FILES}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography
                variant="body1"
                className={nameArray.length > 0 ? "heading-uploadfile" : "heading-uploadfile right-section"}
              >
                  {`${TEXT_CONSTANT.FILES_ADDED} (${nameArray.length})`}
              </Typography>
           
            </Grid>
          </>
        )}
      </Grid>

      <>
        <Grid container xs={12} md={6} rowSpacing={1} columnSpacing={1}>
          {layout.config.map((item, index) => (
            <>
              {item.type === "dropdown" && selectedButton === "FILTERS" ? (
                <>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid className="filters-adjust-left" item xs={12} md={10}>
                    <span className="label-custom">
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

                    {/* required */}
                  </Grid>
                  <Grid item xs={1} md={1}></Grid>
                </>
              ) : item.type === "textarea" &&
                selectedButton === "UPLOAD FILES" ? (
                <>
                 
                  <Grid item xs={12} md={10}>
                    <div>
                      <CustomTextField
                        mode="create"
                        value={valueObj[item.name]}
                        keyName={`${item.name}`}
                        label={`${item.label}`}
                        onSave={handleSaveRequest}
                      />
                    </div>
                  </Grid>
                </>
              ) : (
                <> </>
              )}
            </>
          ))}
        </Grid>

        <Divider orientation="vertical" flexItem />

        <Grid container xs={12} md={6} rowSpacing={2} columnSpacing={3}>
          {layout.config.map((item, index) => (
            <>
              {item.type === "datePicker" && selectedButton === "FILTERS" ? (
                <>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid
                    className="custom-date-picker-form"
                    item
                    xs={12}
                    md={10}
                  >
                    {
                      <CustomDatePicker
                        page={item.config.for}
                        entity={item.config.entity}
                        // onChange={handlePickerChange}
                        setInitialValues={setInitValuesDatePicker}
                        ref={childRef}
                      ></CustomDatePicker>
                    }
                  </Grid>
                </>
              ) : item.type === "textarea" &&
                selectedButton === "UPLOAD FILES" ? (
                <>
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={12} md={10}>
                    {editObj[item.name] !== "" &&
                      editObj[item.name] !== undefined && (
                        <>
                          {/* Render date picker component here */}
                          <CustomTextField
                            mode="modify"
                            value={editObj[item.name]}
                            keyName={`${item.name}`}
                            label={`${item.label}`}
                            onSave={handleSaveRequest}
                          />
                        </>
                      )}
                  </Grid>
                </>
              ) : (
                <> </>
              )}
            </>
          ))}
        </Grid>
      </>

      <Grid
        container
        xs={12}
        md={12}
        rowSpacing={5}
        columnSpacing={3}
        className="grid-spacing"
      >
        <Grid item xs={12} md={12}>
          {!isValid && (
            <div className="error-mark">Please fill the mandatory field</div>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        md={12}
        rowSpacing={5}
        columnSpacing={3}
        justifyContent="flex-end"
        className="grid-spacing"
      >
        <Grid item xs={12} md={1}>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
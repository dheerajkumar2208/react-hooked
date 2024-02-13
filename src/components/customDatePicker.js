import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./tabPanel";
import TextField from "@mui/material/TextField";
import CustomDropdown from "./customDropdown";
import { fetchValues } from "../Slices/dropdownSlice";
import { Grid } from "@mui/material";
import { constants } from "../constants/constant";


const CustomDatePicker = forwardRef(
  ({ page, entity, setInitialValues }, ref) => {
    const tabList = entity && Object.keys(entity);
    const dropdownValue = useSelector(state => state.dropdown);

    const [stateOptions, setStateOptions] = useState({
      yearOptions: [],
      quarterOptions: [],
      monthOptions: []
    });

    const [stateDefaults, setStateDefaults] = useState({
      yearDefault: "",
      quarterDefault: "",
      monthDefault: ""
    });

    const [tabValue, setTabValue] = useState("fiscal");
    const [SelectedDate, setSelectedDate] = useState({
      fromSelectedDate: "",
      toSelectedDate: ""
    });

    const dispatch = useDispatch();

    const handleChange = (event, data) => {
      console.log("this is the value ", SelectedDate);
      console.log("this is the value ", stateDefaults);
      debugger;
      setTabValue(data);
      setSelectedDate({
        fromSelectedDate: "",
        toSelectedDate: ""
      })
    };

    const constituteComponentData = obj => {
      if (obj !== undefined) {
        let yearext = Object.keys(obj);
        let yearOpt = yearext.map(item => {
          return {
            value: item,
            label: item
          };
        });
        let quaterExt = Object.keys(obj[yearext[0]]);
        let quater = quaterExt.map(item => {
          return {
            value: item,
            label: item
          };
        });
        let monthExt = obj[yearext[0]][quaterExt[0]];
        let month = monthExt.map(item => {
          return {
            value: item,
            label: item
          };
        });
        setStateOptions({
          yearOptions: yearOpt,
          quarterOptions: quater,
          monthOptions: month
        });
        setStateDefaults({
          yearDefault: yearOpt[0],
          quarterDefault: quater[0],
          monthDefault: ""
        });
        setInitialValues({
          Year: yearOpt[0],
          Quarter: quater[0],
          Month: constants.NONE_SELECTED
        });
      }
    };

    useEffect(() => {
      let query = entity[tabValue] && entity[tabValue].query;

      if (!dropdownValue[query]) {
        dispatch(fetchValues([query])).catch(error => {});
      }
    }, [tabValue, entity]);

    useEffect(() => {
      let query = entity[tabValue] && entity[tabValue].query;

      if (dropdownValue && dropdownValue[query]) {
        constituteComponentData(dropdownValue[query]);
      }
    }, [dropdownValue, tabValue, entity]);

    const ocChangeDate = event => {
      let { name, value } = event.target;
      setSelectedDate({
        ...SelectedDate,
        [name]: value
      });
      // onChange(value, name);
    };

    const handleChangeInDatePicker = (valueObj, name) => {
      if (name === "Year") {
        setStateDefaults(prevState => ({
          ...prevState,
          yearDefault: valueObj
        }));
      } else if (name === "Month") {
        setStateDefaults(prevState => ({
          ...prevState,
          monthDefault: valueObj
        }));
      } else if (name === "Quarter") {
        setStateDefaults(prevState => ({
          ...prevState,
          quarterDefault: valueObj
        }));
        let query = entity[tabValue] && entity[tabValue].query;

        if (valueObj !== null && valueObj !== undefined) {
          let dataSet = dropdownValue[query];
          let monthExt =
            dataSet[stateDefaults.yearDefault.value][valueObj.value];
          let month = monthExt.map(item => {
            return {
              value: item,
              label: item
            };
          });
          setStateOptions(prevState => ({ ...prevState, monthOptions: month }));
          setStateDefaults(prevState => ({
            ...prevState,
            monthDefault: constants.NONE_SELECTED
          }));
        }
      }
      // onChange(valueObj, name);
    };

    const childFunction = obj => {
      setStateDefaults({
        yearDefault: obj.Year,
        quarterDefault: obj.Quarter,
        monthDefault: obj.Month
      });

     setSelectedDate({
        fromSelectedDate: "",
        toSelectedDate: ""
      });

    };

    const fetchLatestValues = () => {
      debugger
      console.log("stateDefaults", stateDefaults);

      let obj = {};
      if (tabValue === "fiscal") {
        obj = { ...stateDefaults };
      } else if (tabValue === "date") {
        obj = { ...SelectedDate };
      }
      return obj;

      // setStateDefaults({
      //   yearDefault: obj.Year,
      //   quarterDefault: obj.Quarter,
      //   monthDefault: obj.Month,
      // });
    };

    useImperativeHandle(ref, () => ({
      childFunction,
      fetchLatestValues
    }));

    const renderDropdown = tabValue => {
      let childData = entity && entity[tabValue] && entity[tabValue].child;

      return (
        <>
          {childData.map((innerChild, index) => (
            <Grid key={index} container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <span className="label-custom">
                  {innerChild.name} <span class="mandatory-asterisk">*</span> :
                </span>
              </Grid>
              <Grid item xs={8}>
                <CustomDropdown
                  key={innerChild.name}
                  name={innerChild.name}
                  options={
                    stateOptions[`${innerChild.name.toLowerCase()}Options`]
                  }
                  isMultiSelect={innerChild.multiSelect}
                  searchEnabled={innerChild.search}
                  onSelectionChange={valueObj =>
                    handleChangeInDatePicker(valueObj, innerChild.name)
                  }
                  defaultValue={
                    stateDefaults[`${innerChild.name.toLowerCase()}Default`]
                  }
                />
              </Grid>
            </Grid>
          ))}
        </>
      );
    };

    return (
      <Box
        border={1}
        p={2}
        sx={{
          borderRadius: "8px",
          borderColor: "primary.main",
          backgroundColor: "#8080800a",
          boxShadow: 4
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        >
          {tabList.map(tab => (
            <Tab
              key={tab}
              label={entity[tab].label}
              value={entity[tab].value}
            />
          ))}
        </Tabs>

        {tabValue === "fiscal" && (
          <TabPanel name="fiscal" value={tabValue}>
            {renderDropdown(tabValue)}
          </TabPanel>
        )}

        {tabValue === "calendar" && (
          <TabPanel name="calendar" value={tabValue}>
            <TextField label="Year" variant="outlined" fullWidth />
            <Autocomplete
              options={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Month"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </TabPanel>
        )}

        {tabValue === "date" && (
          <TabPanel name="date" value={tabValue}>
            {/* Date Range Form */}
            <span className="label-custom">
              from <span class="mandatory-asterisk">*</span>:
            </span>
            <TextField
              id="fromSelectedDate"
              type="date"
              variant="outlined"
              fullWidth
              name="fromSelectedDate"
              value={SelectedDate.fromSelectedDate}
              onChange={ocChangeDate}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <Typography style={smallAsteriskStyle}>*</Typography>
              //     </InputAdornment>
              //   ),
              // }}
            />
            <span className="label-custom">
              from <span class="mandatory-asterisk">*</span>:
            </span>
            <TextField
              id="toSelectedDate"
              type="date"
              variant="outlined"
              fullWidth
              name="toSelectedDate"
              value={SelectedDate.toSelectedDate}
              onChange={ocChangeDate}
            />
          </TabPanel>
        )}
      </Box>
    );
  }
);

export default CustomDatePicker;
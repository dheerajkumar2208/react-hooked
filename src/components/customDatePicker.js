import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchValues } from "../Slices/dropdownSlice";
import { constants } from "../constants/constant";
import CustomDropdown from "./CustomDropdown";

import "./style/customDatePicker.scss";

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
      setTabValue(data);
      setSelectedDate({
        fromSelectedDate: "",
        toSelectedDate: ""
      });
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
      let obj = {};
      if (tabValue === "fiscal") {
        obj = { ...stateDefaults };
      } else if (tabValue === "date") {
        obj = { ...SelectedDate };
      }
      return obj;
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
            <div key={index} className="dropdown-container">
              <span className="label-custom">
                {innerChild.name} <span className="mandatory-asterisk">*</span> :
              </span>
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
            </div>
          ))}
        </>
      );
    };

    return (
      <div className="custom-date-picker">
        <div className="tabs-container">
          {tabList.map(tab => (
            <button
              key={tab}
              className={`tab-button ${tab === tabValue ? 'active' : ''}`}
              onClick={() => handleChange(null, entity[tab].value)}
            >
              {entity[tab].label}
            </button>
          ))}
        </div>

        {tabValue === "fiscal" && (
          <div className="tab-content">
            {renderDropdown(tabValue)}
          </div>
        )}

        {tabValue === "calendar" && (
          <div className="tab-content">
            <input type="text" placeholder="Year" />
            <CustomDropdown
              name="Month"
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
              isMultiSelect={false}
              searchEnabled={false}
              onSelectionChange={valueObj => handleChangeInDatePicker(valueObj, "Month")}
              defaultValue={constants.NONE_SELECTED}
            />
          </div>
        )}

        {tabValue === "date" && (
          <div className="tab-content">
            <span className="label-custom">
              from <span className="mandatory-asterisk">*</span>:
            </span>
            <input
              type="date"
              name="fromSelectedDate"
              value={SelectedDate.fromSelectedDate}
              onChange={ocChangeDate}
            />
            <span className="label-custom">
              from <span className="mandatory-asterisk">*</span>:
            </span>
            <input
              type="date"
              name="toSelectedDate"
              value={SelectedDate.toSelectedDate}
              onChange={ocChangeDate}
            />
          </div>
        )}
      </div>
    );
  }
);

export default CustomDatePicker;

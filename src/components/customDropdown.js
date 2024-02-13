/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './style/customDropdown.scss';

const StyledPaper = styled(Paper)``;

const CustomDropdown = ({
  options,
  label,
  onSelectionChange,
  isMultiSelect,
  defaultValue,
  isRequired,
  name,
  defaultOptionText,
}) => {
  let text = defaultOptionText ? defaultOptionText : 'None Selected';
  const noneSelectedOption = { label: text, value: text };

  let initialValues = isMultiSelect ? [] : defaultValue || noneSelectedOption;
  const [selectedOption, setSelectedOption] = useState(initialValues);

  useEffect(() => {
    let def =
      isMultiSelect && !Array.isArray(defaultValue) && defaultValue !== ''
        ? [defaultValue]
        : defaultValue;
    let effectEvalDefault = isMultiSelect
      ? def
        ? [...def]
        : []
      : def || noneSelectedOption;
    setSelectedOption(effectEvalDefault);
  }, [defaultValue]);

  if (options) {
    let displayOptions =
      options &&
      options.filter((item) => {
        return item.active === undefined || item.active === true;
      });

    displayOptions = [noneSelectedOption, ...displayOptions];
    console.log('this is dp op', displayOptions);

    const handleChange = (event, newValue) => {
      let length = newValue.length;
      if (newValue && length > 0 && newValue[length - 1].value === null) {
        setSelectedOption([]);
        onSelectionChange([], name);
      } else {
        setSelectedOption(newValue);
        onSelectionChange(newValue, name);
      }
    };

    return (
      <Autocomplete
        multiple={isMultiSelect}
        disableClearable={true}
        options={displayOptions || []}
        value={selectedOption}
        onChange={handleChange}
        disableClearable
        size="medium"
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionLabel={(option) => option.label}
        PaperComponent={({ children }) => (
          <StyledPaper>{children}</StyledPaper>
        )}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" />
        )}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={{ display: 'flex', alignItems: 'center' }}
            className="dropdownOptions"
          >
            {isMultiSelect ? (
              selected ? (
                <CheckBoxIcon className="marginRenderoption customdrpoptSelected" />
              ) : (
                <CheckBoxOutlineBlankIcon className="marginRenderoption" />
              )
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '5px',
                }}
              >
                {selected ? (
                  <RadioButtonCheckedIcon className="customdrpoptSelected" />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </div>
            )}
            {option.label}
          </li>
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option.label}
              {...getTagProps({ index })}
              style={{ backgroundColor: 'white', marginRight: '5px' }}
            />
          ))
        }
      />
    );
  } else {
    return null;
  }
};

export default CustomDropdown;

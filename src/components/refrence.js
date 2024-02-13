import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)`
  background-color: grey;
`;

const CustomDropdown = ({ options, label, onSelectionChange, isMultiSelect, defaultValue, isRequired}) => {
  const noneSelectedOption = { label: 'None Selected', value: null };

  const [selectedOption, setSelectedOption] = useState(
    isMultiSelect ? (defaultValue || []) : defaultValue || noneSelectedOption
  );
  const handleChange = (_, newValue) => {
    setSelectedOption(newValue);
    onSelectionChange(newValue);
  };
  if(options){

  
 

  let displayOptions = options && options.filter(item => {
      // Check if "active" key is not present or its value is true
      return item.active === undefined || item.active === true;
    });

   displayOptions = isMultiSelect ? [noneSelectedOption, ...displayOptions] : displayOptions;
   console.log('ths is dp op', displayOptions)

  return (
    <Autocomplete
       multiple={isMultiSelect}
      options={displayOptions || []}
      value={selectedOption}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      getOptionLabel={(option) => option.label}
      PaperComponent={({ children }) => <StyledPaper>{children}</StyledPaper>}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>{option.label}</li>
      )}
    />
  );

  }else{
    return
  }
};

export default CustomDropdown;

import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import CustomDropdown from './CustomDropdown';
import Sidebar from './sidebar';

const dropdownData = [
  {
    label: 'Select Option 1',
    options: [
      { label: 'Option 1.1', value: 1 },
      { label: 'Option 1.2', value: 2 },
      { label: 'Option 1.3', value: 3 },
    ],
    state: 'dropdown1Value',
  },
  {
    label: 'Select Option 2',
    options: [
      { label: 'Option 2.1', value: 1 },
      { label: 'Option 2.2', value: 2 },
      { label: 'Option 2.3', value: 3 },
    ],
    state: 'dropdown2Value',
  },
  // Add more dropdown data as needed
];

const DropdownGrid = () => {
  const [setDropdown1Value] = useState('');
  // Repeat the pattern for other dropdown states

  const handleDateChange = (date) => {
    // Handle date picker value change here
  };

  return (
    <Grid container spacing={2}>
      <Sidebar/>
       {/* <Outlet />  */}
      {dropdownData.map((dropdown, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <CustomDropdown
            label={dropdown.label}
            value={dropdown[dropdown.state]}
            onChange={(e) => {
              const newState = { ...dropdown };
              newState[dropdown.state] = e.target.value;
              setDropdown1Value(newState[dropdown.state]);
            }}
            options={dropdown.options}
          />
        </Grid>
      ))}

      {/* Date Picker */}
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select Date"
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
            value={null} // Provide your date value here
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default DropdownGrid;

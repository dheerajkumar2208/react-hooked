import ModernTable from "./ModernTable";
import { dataTables } from '../config/data'
import headersData from '../config/metadata/apac.json';

import {useParams, useLocation } from 'react-router-dom';
// import MyDatePicker from './DatePicker.js'
import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';

const columnConfig = {
  columnName1: { dropdownOptions: ['Option1', 'Option2', 'Option3'] },
  columnName2: {}, // Default to text field
  // ... other columns
};


export default function TableWrapper() {

  let { entity, subEntity } = useParams();
  const pathPref = subEntity.split("-");

const headers = headersData[pathPref[0]] && headersData[pathPref[0]].config.headers;
const columnConfig =headersData[pathPref[0]] && headersData[pathPref[0]].config.columnConfig;

  // const headers = ['Header 1', 'Header 2', 'Header 3'];
  // const apiEndpoint = 'https://example.com/api/data'; // Specify your API endpoint
  // const filterColumnIndex = 1; // Index of the column with the filter input
  const dummyData =  dataTables[entity] ? dataTables[entity] :  [] ;





  // const dummyHeaders =  headers[entity] ? headers[entity] : [] ;

  
  // Usage in the ModernTable component
  return (
  <ModernTable data={dummyData} allHeaders={headers} columnConfig={columnConfig} />
  )
}
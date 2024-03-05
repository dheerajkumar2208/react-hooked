// ModernTable.js
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import CustomDropdown from "./customDropdown";
import IconButton from '@mui/material/IconButton';
import PopoverList from './popoverList';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { useParams } from "react-router-dom";


// const StyledTableCell = styled(TableCell)`
//   padding: 10px;
//   padding-top: 3px;
//   padding-bottom: 3px;
//   /* Add your custom styles here */
// `;

const StyledTableCellHeader = styled.th`
  padding: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  max-width:  100px;
  /* Add your custom styles here */
`;

const StyledTableCellRow = styled.td`
  padding: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
   max-width:  100px;
   text-align: center;
  /* Add your custom styles here */
`;

const StyledTableRow = styled(TableRow)`
  height: 45px;
  &:hover {
    background-color: #f5f5f5;
    /* Add your custom hover styles here */
  }

  &:nth-child(even) {
    background-color: #F0F8FC;
  }

  &:nth-child(odd) {
    background-color: #FFFFFF ;
  }
`;

const StyledTableFilterRow = styled(TableRow)`
  height: 20px; /* Adjust height as needed */
  /* Add your custom styles here */
`;

const StyledTextField = styled(TextField)`
padding-right : 0px;
  && {
    padding-right : 0px;
    padding-top: 0px; /* Adjust the padding as per your requirement */
    padding-bottom: 0px; /* Adjust the padding as per your requirement */
}

  
  /* Add your custom styles here */
`;


const StyledPaper = styled(Paper)`
  /* Add your custom styles here */
`;

const ModernTable = ({ data, allHeaders, columnConfig }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let {subEntity } = useParams();
  const pathPref = subEntity.split("-");

  let reportTypeFilter = pathPref[1],
  filterObj = {}
   
  const [filters, setFilters] = useState(filterObj);
  const [filterDefaultObj, setDefaultValObj] = useState(
    {}
  )

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedHeaders, setSelectedHeaders] = useState([]);
 
  const handleSelectHeaders = (selectedHeaders) => {
    setSelectedHeaders(selectedHeaders);
    // closePopover();
  };


  const openPopover = (event) => {
    setIsPopoverOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
    setAnchorEl(null);
  };

  // const handleSelectHeaders = (selectedHeaders) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     ...selectedHeaders.reduce((acc, header) => ({ ...acc, [header]: '' }), {}),
  //   }));
  // };


  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    let valFilterApp  = reportTypeFilter.replace(/_/g, " ") ;

    if (valFilterApp === 'All' || valFilterApp === 'all' ) {
    valFilterApp = 'All'
    }else{
      valFilterApp = valFilterApp +   " Report" ;
    }

    handleFilterChange({
      value:valFilterApp,
      label : valFilterApp
    }, "ReportType")
  }, [reportTypeFilter]);



  const handleFilterChange = (valueObj, header) => {
    
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [header]: valueObj.value };
  
      // Check if the selected value is "All" and remove the filter
      if (valueObj.value === 'All') {
        delete updatedFilters[header];
      }
  
      return updatedFilters;
    });
    setDefaultValObj((prevFilters) => {
      const updatedFiltersObj = { ...prevFilters, [header]: valueObj.value };
      return updatedFiltersObj;
    });


  };

  const renderFilter = (header, index) => {
    const config = columnConfig[header];
    if (config && config.type === 'dropdown' && config.dropdownOptions) {
       
      return (
        <StyledTableCellHeader key={index}>
           <CustomDropdown
           defaultOptionText="All"
                    key={index}
                     name={header}
                    options={config.dropdownOptions}
                    isMultiSelect={false}
                    // searchEnabled={false}
                    onSelectionChange={handleFilterChange}
                    defaultValue={ filters[header] ? {value : filters[header], label : filters[header] }: "" }
                  />
        </StyledTableCellHeader>
      );
    } else if(config && config.type === 'textfield') {
let sx = {}
      if(header === 'RequestId'){
        sx = {
          width:"30px"
        }
      }
      return (
        <StyledTableCellHeader key={index}>
        
           <StyledTextField
            // variant="outlined"
            value={filters[header] || ''}
            size="small"
             sx={{...sx}}
            onChange={(e) => handleFilterChange({
              value : e.target.value
            },header)}
            // InputProps={{
            //   endAdornment: (
            //     <StyledSearchIconWrapper>
            //       <StyledSearchIcon />
            //     </StyledSearchIconWrapper>
            //   ),
            // }}
          /> 
        </StyledTableCellHeader>
      );
    }else{
      return (
        <StyledTableCellHeader key ={index}>
        </StyledTableCellHeader>
        )
    }
  };

   const filteredData = data.filter((item) => 
   Object.entries(filters).every(([header, value]) =>
       item[header].toString().toLowerCase().includes(value.toLowerCase())
   )
   );


  // const visibleHeaders = allHeaders.filter(header => !selectedHeaders.includes(header));
  const visibleHeaders = allHeaders.filter(header => !selectedHeaders.some(selected => selected.dataKey === header.dataKey));


  return (
    <>
    <StyledPaper>


<div className="popover-layout">

<IconButton onClick={openPopover}>
          <FilterAltOutlinedIcon />
        </IconButton>
     <PopoverList
          isOpen={isPopoverOpen}
          onClose={closePopover}
          anchorEl={anchorEl}
          onSelect={handleSelectHeaders}
          allHeaders={allHeaders}
          selectedHeaders={selectedHeaders}
        /> 
    

    <IconButton >
          <RefreshOutlinedIcon />
        </IconButton>

      </div>
      <TableContainer>
        <Table aria-label="modern table">
          <TableHead>
           
            <StyledTableRow>
              {visibleHeaders.map((header, index) => (
                 <StyledTableCellHeader key={index}>{header.label}</StyledTableCellHeader>
                // <th>
                //   hello
                // </th>
              ))}
            </StyledTableRow>
             <StyledTableFilterRow>
              {visibleHeaders.map((header, index) => (
                 renderFilter(header.dataKey, index)
              ))}
            </StyledTableFilterRow> 
          </TableHead>
           <TableBody>
            {filteredData
             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <StyledTableRow key={rowIndex}>
                  {visibleHeaders.map((header, colIndex) => (
                    <StyledTableCellRow sx={{ maxWidth: 30, width: 30, '!important': true }} key={colIndex}>{row[header.dataKey]}</StyledTableCellRow>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody> 
        </Table>
      </TableContainer>
  
    </StyledPaper>
    <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
        nextIconButtonText="Next Page"
        backIconButtonText="Previous Page"
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
      /> 
      </>
  );
};

ModernTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  columnConfig: PropTypes.object, // Add prop type validation for columnConfig
};

export default ModernTable;
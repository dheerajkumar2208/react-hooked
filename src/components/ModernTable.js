import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CustomDropdown from "./CustomDropdown";
import PopoverList from './popoverList';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
// import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { useParams } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
import './style/ModernTable.scss'; // Import SCSS file

const ModernTable = ({ data, allHeaders, columnConfig }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let {subEntity } = useParams();
  const pathPref = subEntity.split("-");

  let reportTypeFilter = pathPref[1],
      filterObj = {}
   
  const [filters, setFilters] = useState(filterObj);
  const [filterDefaultObj, setDefaultValObj] = useState({});

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedHeaders, setSelectedHeaders] = useState([]);
 
  const handleSelectHeaders = (selectedHeaders) => {
    setSelectedHeaders(selectedHeaders);
  };

  const openPopover = (event) => {
    setIsPopoverOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
    setAnchorEl(null);
  };

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
    } else {
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
        <th key={index}>
          <CustomDropdown
            defaultOptionText="All"
            key={index}
            name={header}
            options={config.dropdownOptions}
            isMultiSelect={false}
            onSelectionChange={handleFilterChange}
            defaultValue={ filters[header] ? {value : filters[header], label : filters[header] }: "" }
          />
        </th>
      );
    } else if(config && config.type === 'textfield') {
      let sx = {}
      if(header === 'RequestId'){
        sx = {
          width:"30px"
        }
      }
      return (
        <th key={index}>
          <input
          className='textfield-style'
            value={filters[header] || ''}
            size="small"
            style={{...sx}}
            onChange={(e) => handleFilterChange({
              value : e.target.value
            },header)}
          /> 
        </th>
      );
    } else {
      return (
        <th key ={index}></th>
      )
    }
  };

  const filteredData = data.filter((item) => 
    Object.entries(filters).every(([header, value]) =>
      item[header].toString().toLowerCase().includes(value.toLowerCase())
    )
  );

  const visibleHeaders = allHeaders.filter(header => !selectedHeaders.some(selected => selected.dataKey === header.dataKey));

  return (
    <>
      <div className="popover-layout">
        <button className='icon-button' onClick={openPopover}>
        <FontAwesomeIcon icon={faFilter} /> 
        </button>
        <PopoverList
          isOpen={isPopoverOpen}
          onClose={closePopover}
          anchorEl={anchorEl}
          onSelect={handleSelectHeaders}
          allHeaders={allHeaders}
          selectedHeaders={selectedHeaders}
        /> 
        <button className='icon-button'>
        <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {visibleHeaders.map((header, index) => (
                <th key={index}>{header.label}</th>
              ))}
            </tr>
            <tr>
              {visibleHeaders.map((header, index) => (
                renderFilter(header.dataKey, index)
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {visibleHeaders.map((header, colIndex) => (
                    <td key={colIndex}>{row[header.dataKey]}</td>
                  ))}
                </tr>
              ))}
          </tbody> 
        </table>
      </div>
      <div className="table-pagination">
        {/* Pagination component */}
      </div>
    </>
  );
};

ModernTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  columnConfig: PropTypes.object, // Add prop type validation for columnConfig
};

export default ModernTable;

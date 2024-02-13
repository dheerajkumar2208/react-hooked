import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import './style/popverList.scss';

const PopoverList = ({ isOpen, onClose, anchorEl, onSelect, allHeaders, selectedHeaders }) => {
  const handleToggle = (header) => {
    const currentIndex = selectedHeaders.findIndex(selectedHeader => selectedHeader.dataKey === header.dataKey);
    const newSelectedHeaders = [...selectedHeaders];

    if (currentIndex === -1) {
      newSelectedHeaders.push(header);
    } else {
      newSelectedHeaders.splice(currentIndex, 1);
    }

    onSelect(newSelectedHeaders);
  };

  const visibleHeaders = allHeaders.filter(header => header.dataKey !== "RequestID");

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      className='popover-class'
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Paper className="popover-paper">
      <div className="heading-container">
          <h4 className="heading-style"> Apply Filters </h4>
        </div>
        {/* <h4 className="heading-style"> Apply Filters </h4> */}
        <div className="list-container">
          <List className="scrollable-list">
          {visibleHeaders.map((header, index) => (
            <ListItem className="list-item-style" key={index} button onClick={() => handleToggle(header)}>
              <Checkbox
                edge="start"
                checked={selectedHeaders.some(selectedHeader => selectedHeader.dataKey === header.dataKey)}
                tabIndex={-1}
                disableRipple
                className="check-box"
              />
              <ListItemText primary={header.label} className="list-item-text" />
            </ListItem>
          ))}
        </List>
        </div>
      </Paper>
    </Popover>
  );
};

export default PopoverList;
import React from 'react';
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
    <div className={`popover ${isOpen ? 'open' : ''}`}>
      <div className="popover-content" ref={anchorEl}>
        <div className="heading-container">
          <h4 className="heading-style"> Apply Filters </h4>
        </div>
        <div className="list-container">
          <ul className="scrollable-list">
            {visibleHeaders.map((header, index) => (
              <li className="list-item-style" key={index} onClick={() => handleToggle(header)}>
                <input
                  type="checkbox"
                  checked={selectedHeaders.some(selectedHeader => selectedHeader.dataKey === header.dataKey)}
                  className="check-box"
                  readOnly
                />
                <label className="list-item-text">{header.label}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
    </div>
  );
};

export default PopoverList;

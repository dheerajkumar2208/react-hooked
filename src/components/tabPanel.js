import React from 'react';

function TabPanel({ children, value, name }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== name}
      id={`tabpanel-${name}`}
      aria-labelledby={`tab-${name}`}
    >
      {value === name && <div>{children}</div>}
    </div>
  );
}

export default TabPanel;

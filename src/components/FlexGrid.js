// FlexGrid.js
import React from 'react';
import PropTypes from 'prop-types';
import './style/FlexGrid.scss'; // Import the CSS file for styling

const FlexGrid = ({ children, container, direction, justify, alignItems, spacing }) => {
  const containerClass = container ? 'flex-grid-container' : '';
  const directionClass = direction === 'column' ? 'flex-grid-column' : '';
  const justifyClass = justify ? `justify-${justify}` : '';
  const alignClass = alignItems ? `align-${alignItems}` : '';
  const spacingClass = `spacing-${spacing}`;

  const classes = `flex-grid ${containerClass} ${directionClass} ${justifyClass} ${alignClass} ${spacingClass}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

FlexGrid.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline']),
  spacing: PropTypes.number,
};

FlexGrid.defaultProps = {
  container: false,
  direction: 'row',
  justify: null,
  alignItems: null,
  spacing: 0,
};

export default FlexGrid;

import React from 'react';
import './style/Button.scss'; // Import custom styles for the button component

const Button = ({ variant = '', className = '', onClick, size = '', children }) => {
  // Define a function to handle classNames
  const classNames = () => {
    const classes = ['custom-button'];

    // Add variant class if provided
    if (variant) {
      classes.push(variant);
    }

    // Add className if provided
    if (className) {
      classes.push(className);
    }

    // Add size class if provided
    if (size) {
      classes.push(size);
    }

    // Join all classes and return
    return classes.join(' ');
  };

  return (
    <button
      className={classNames()} // Add size class
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

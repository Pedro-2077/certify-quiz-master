import React from 'react';
import styles from './Label.module.css';

const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={`${styles.label} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
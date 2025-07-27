import React from 'react';
import styles from './Progress.module.css';

const Progress = ({ value = 0, className = '', ...props }) => {
  return (
    <div className={`${styles.progress} ${className}`} {...props}>
      <div 
        className={styles.progressIndicator}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </div>
  );
};

export default Progress;
import React, { createContext, useContext } from 'react';
import styles from './RadioGroup.module.css';

const RadioGroupContext = createContext();

const RadioGroup = ({ children, value, onValueChange, className = '', ...props }) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={`${styles.radioGroup} ${className}`} role="radiogroup" {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

const RadioGroupItem = ({ value, id, className = '', ...props }) => {
  const context = useContext(RadioGroupContext);
  
  if (!context) {
    throw new Error('RadioGroupItem must be used within RadioGroup');
  }
  
  const { value: groupValue, onValueChange } = context;
  const isChecked = groupValue === value;

  return (
    <input
      type="radio"
      id={id}
      value={value}
      checked={isChecked}
      onChange={() => onValueChange(value)}
      className={`${styles.radioItem} ${className}`}
      {...props}
    />
  );
};

export { RadioGroup, RadioGroupItem };
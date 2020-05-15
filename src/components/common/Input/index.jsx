import React from 'react';
import './index.scss';

const Input = ({ children, className='', ...props }) => (
  <input
    className={`input ${className}`}
    {...props}
  />
);

export default Input;

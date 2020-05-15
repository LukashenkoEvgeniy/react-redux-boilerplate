import React from 'react';
import './index.scss';

const Button = ({ onClick, children, className, ...props }) => (
  <button
    className={`button ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;

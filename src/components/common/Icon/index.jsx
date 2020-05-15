import React from 'react';
import icons from './icons';

const Icon = ({ name, onClick }) => (
  <span onClick={onClick}>
    {icons[name]}
  </span>
);

export default Icon;

Icon.defaultProps = {
  name: '',
  onClick: () => {},
};

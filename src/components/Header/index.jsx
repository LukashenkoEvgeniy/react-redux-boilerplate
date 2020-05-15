import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className="header">
    <Link className="header__logo-link" to="/">
      <span className="header__log-text">
        HEADER
      </span>
    </Link>
  </header>
);

export default Header;

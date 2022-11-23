import React from 'react';
import './Header.scss';

import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navItems">
        <NavLink>Why Nexos</NavLink>
        <NavLink>How it works</NavLink>
        <NavLink>News</NavLink>
        <NavLink>Nexos Gold</NavLink>
        <NavLink>Transparency</NavLink>
        <NavLink></NavLink>
      </div>
      <div className='registrationItems'>
        <span className='loginBtn'>Log In</span>
        <span className='signinBtn'>Sign Up</span>
      </div>
    </header>
  );
}

export default Header;

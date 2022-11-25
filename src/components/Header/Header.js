import React from 'react';
import './Header.scss';

import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <NavLink to={'/'}>
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <div className="navItems">
        <NavLink to={'why-nexos'}>Why Nexos</NavLink>
        <NavLink to={'how-it-works'}>How it works</NavLink>
        <NavLink>News</NavLink>
        <NavLink>Nexos Gold</NavLink>
        <NavLink>Transparency</NavLink>
      </div>
      <div className="registrationItems">
        <span className="loginBtn">Log In</span>
        <span className="signinBtn">Sign Up</span>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import './Header.scss';

import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

import { HeaderContainer, LogoContainer, MenuContainer } from './Header.styles';
import { ReactComponent as Menu } from '../../assets/menuBlack.svg';
import menu from '../../assets/menu.png';

function Header({ openSidebar }) {
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
      <MenuContainer to={'/'}>
        <img src={menu} alt="menu" onClick={() => openSidebar(true)} />
        {/* <Menu onClick={() => openSidebar(true)} /> */}
      </MenuContainer>
    </header>
  );
}

export default Header;

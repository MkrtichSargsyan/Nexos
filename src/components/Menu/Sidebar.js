import React from 'react';

import '../../App.css';

import { LogoContainer, MenuContainer } from '../Header/Header.styles';
import {
  SidebarContainer,
  SidebarDataContainer,
  SidebarItem,
  SidebarMenuContainer,
} from './Sidebar.styles';

// import { ReactComponent as Logo } from '../../assets/logo1.png';
import logo from '../../assets/logo.png';
import x from '../../assets/x.png'
// import { ReactComponent as ClosingIcon } from '../../assets/x.png';

import { ROUTES } from './sidebarData';
import { Link } from 'react-router-dom';

function Sidebar({ isActive, closeSidebar }) {
  return (
    <SidebarContainer active={isActive} className="sidebarContainer">
      <SidebarMenuContainer>
        <LogoContainer
          to={'/'}
          onClick={() => {
            closeSidebar(false);
          }}
        >
          <img src={logo} alt="logo" />
        </LogoContainer>
        <MenuContainer>
          <img src={x} alt="x"  onClick={() => {
              closeSidebar(false);
            }} />
          {/* <ClosingIcon
            onClick={() => {
              closeSidebar(false);
            }}
          /> */}
        </MenuContainer>
      </SidebarMenuContainer>
      <SidebarDataContainer>
        {ROUTES.map((el, i) => (
          <SidebarItem
            key={i}
            to={el.path}
            onClick={() => {
              closeSidebar(false);
            }}
          >
            {el.routeName}
          </SidebarItem>
        ))}
      </SidebarDataContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

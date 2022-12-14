import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const activeStyle = css`
  left: 0;
  right: 0;
`;

const notActiveStyle = css`
  left: 100%;
  right: -100%;
`;

const makeSidebarActive = (props) => {
  return props.active ? activeStyle : notActiveStyle;
};

export const SidebarContainer = styled.section`
  position: fixed;
  height: 100%;
  z-index: 2000;
  transition: 1s;
  background-color: white;


  svg {
    @media (max-width: 415px) {
      width: 30px;
    }
  }

  ${makeSidebarActive}
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #4e4e4e;


  img {
    width: 100%;
    height: 100%;
  }
`;

export const SidebarDataContainer = styled.div`
  margin: 80px 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const SidebarItem = styled(Link)`
  color: #586871;
  width: 435px;
  font-weight: 900;
  line-height: 28px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 100%;
    text-decoration: none;
    font-size: 4.2vw;
    line-height: 3vw;

    &:hover {
      cursor: pointer;
    }
  }
`;

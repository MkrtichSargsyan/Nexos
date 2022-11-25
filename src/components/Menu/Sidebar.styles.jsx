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
  /* min-height: 100vh; */
  height: 100%;
  padding: 0 30px;
  z-index: 2000;
  transition: 1s;

  background: rgba(4, 4, 4, 0.79);
  backdrop-filter: blur(19px);

  @media (max-width: 415px) {
    padding: 0 5px;
  }

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
  height: 70px;
`;

export const SidebarDataContainer = styled.div`
  margin: 80px auto 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const SidebarItem = styled(Link)`
  color: white;
  width: 435px;
  font-weight: 900;
  line-height: 28px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 8.2vw;
    line-height: 34px;
  }
`;

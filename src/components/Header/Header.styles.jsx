import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  height: 50px;
  margin-left: 20px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`;

export const MenuContainer = styled.div`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

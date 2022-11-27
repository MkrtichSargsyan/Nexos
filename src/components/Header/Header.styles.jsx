import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  height: 50px;
  outline: none;

  img {
    height: 100%;
  }
`;

export const MenuContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

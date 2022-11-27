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
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  padding: 14px 0;
  color: ${p => p.theme.palette.text.white};

  &.active {
    color: ${p => p.theme.palette.text.accent};
  }
  :hover {
    color: ${p => p.theme.palette.text.accent};
    border-bottom: 1px solid ${p => p.theme.palette.text.accent};
  }
`;

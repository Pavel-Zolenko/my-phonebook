import styled from '@emotion/styled';
import { AppBar } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 12px;
  padding-left: 12px;

  @media screen and (min-width: 900px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

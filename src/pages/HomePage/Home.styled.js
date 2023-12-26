import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export const Container = styled(Box)`
  min-height: 100vh;
`;

export const Title = styled(Typography)`
  color: ${p => p.theme.palette.text.primary};
`;

export const Text = styled.p`
  color: ${p => p.theme.palette.text.primary};
  max-width: 410px;

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const DescrWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-left: 14px;
  padding-right: 14px;
`;
export const ButtonStyled = styled(Button)`
  width: 180px;
`;
export const LinkBtn = styled(NavLink)``;

export const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  margin-top: 100px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    max-width: 1400px;
  }
`;

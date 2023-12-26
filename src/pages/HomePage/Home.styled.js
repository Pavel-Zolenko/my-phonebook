import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100dvh;

  padding-top: 70px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    padding: 120px 16px 0px 16px;
    max-width: 1400px;
  }
`;

export const Title = styled(Typography)`
  color: ${p => p.theme.palette.text.primary};
`;

export const DescrText = styled.p`
  color: ${p => p.theme.palette.text.primary};
  max-width: 410px;

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Wrap = styled(Box)`
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

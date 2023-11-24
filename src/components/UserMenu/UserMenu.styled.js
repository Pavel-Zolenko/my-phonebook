import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const MobileMenu = styled(Box)`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DeskMenu = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
export const ButtonStyled = styled(Button)`
  color: ${p => p.theme.palette.primary.button};
`;

export const TypographyStyled = styled(Typography)``;

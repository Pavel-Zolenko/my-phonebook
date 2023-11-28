import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 10px;
  background-color: ${p => p.theme.palette.background.modal};
`;

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
`;

export const BoxWpap = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const TypographyStyled = styled(Typography)`
  color: ${p => p.theme.palette.text.primary};
`;

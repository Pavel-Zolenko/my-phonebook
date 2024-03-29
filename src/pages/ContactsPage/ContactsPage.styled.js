import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const WrapPage = styled(Box)`
  padding-left: 10px;
  padding-right: 10px;
  min-height: 100dvh;
`;

export const MainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 auto;
  max-width: 350px;

  margin-top: 100px;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 16px;
  background-color: ${p => p.theme.palette.background.secondary};
`;

export const TypographyStyled = styled(Typography)`
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.palette.text.primary};
`;

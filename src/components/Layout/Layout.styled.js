import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)`
  display: grid;
  grid-template-rows: 1fr auto;

  background-color: ${p => p.theme.palette.background.main};
`;

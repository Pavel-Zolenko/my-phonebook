import styled from '@emotion/styled';

import { ListItemText, ListItem, Checkbox } from '@mui/material';

export const ListItemTextStyled = styled(ListItemText)`
  color: ${p => p.theme.palette.text.primary};
`;

export const ListItemStyled = styled(ListItem)`
  padding-left: 0;
`;

export const CheckboxStyled = styled(Checkbox)`
  @media screen and (max-width: 400px) {
    padding-left: 0;
  }
`;

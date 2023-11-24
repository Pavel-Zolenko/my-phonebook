import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { themeChange } from 'redux/themeSlice';
import { Tooltip, IconButton } from '@mui/material';
import { Brightness3, Brightness7 } from '@mui/icons-material';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import {
  MobileMenu,
  DeskMenu,
  ButtonStyled,
  TypographyStyled,
} from './UserMenu.styled';

export const UserMenu = () => {
  const [mode, setMode] = useState('dark');

  const dispatch = useDispatch();
  const { user } = useAuth();

  const theme = useTheme();

  const toggleColorMode = () => {
    if (mode === 'dark') {
      setMode('light');
      return dispatch(themeChange('light'));
    }

    setMode('dark');
    return dispatch(themeChange('dark'));
  };

  return (
    <>
      <MobileMenu>
        <Tooltip title={theme.palette.mode + ' mode'}>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness3 /> : <Brightness7 />}
          </IconButton>
        </Tooltip>

        <ButtonStyled
          size="small"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </ButtonStyled>
      </MobileMenu>

      <DeskMenu>
        <TypographyStyled>Welcome, {user.name}</TypographyStyled>

        <IconButton onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness3 /> : <Brightness7 />}
        </IconButton>

        <ButtonStyled
          size="small"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </ButtonStyled>
      </DeskMenu>
    </>
  );
};

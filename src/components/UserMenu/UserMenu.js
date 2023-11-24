import { useState, useEffect } from 'react';
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
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem('themeMode')) ?? 'dark'
  );

  const dispatch = useDispatch();
  const { user } = useAuth();

  const theme = useTheme();

  useEffect(() => {
    dispatch(themeChange(mode));
    localStorage.setItem('themeMode', JSON.stringify(mode));
  }, [dispatch, mode]);

  const toggleColorMode = () => {
    if (mode === 'dark') {
      return setMode('light');
    }
    return setMode('dark');
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

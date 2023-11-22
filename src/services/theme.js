import { amber, grey } from '@mui/material/colors';

export const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
      ...(mode === 'light' && {
        main: '#b2dfdb',
      }),
    },
    secondary: {
      main: '#004d40',
    },
    ...(mode === 'dark'
      ? {
          background: {
            main: '#263238',
            secondary: '#37474f',
          },
        }
      : {
          background: {
            main: '#b0bec5',
            secondary: '#eceff1',
          },
        }),

    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
            accent: '#9e9d24',
          }
        : {
            primary: '#fff',
            secondary: grey[500],
            accent: '#e6ee9c',
          }),
    },
  },
});

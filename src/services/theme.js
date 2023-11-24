import { amber, grey, teal, yellow, purple } from '@mui/material/colors';

export const getDesignTokens = mode => ({
  components: {
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          ...(mode === 'dark'
            ? {
                color: grey[400],
              }
            : {
                color: grey[700],
              }),
        },
      },
    },
  },
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
        dark: amber[600],
        button: grey[100],
      }),
      ...(mode === 'light' && {
        main: teal[500],
        dark: teal[700],
        button: grey[100],
      }),
    },
    secondary: {
      main: purple[500],
    },
    ...(mode === 'dark'
      ? {
          background: {
            main: '#263238',
            secondary: '#37474f',
            header: grey[900],
          },
        }
      : {
          background: {
            main: '#b0bec5',
            secondary: '#eceff1',
            header: grey[700],
          },
        }),

    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
            white: grey[100],
            accent: teal[400],
          }
        : {
            primary: grey[300],
            secondary: grey[500],
            white: grey[300],
            accent: yellow[600],
          }),
    },
  },
});

import {
  CssBaseline,
  Typography,
  Container,
  IconButton,
  TextField,
  Collapse,
  Avatar,
  Button,
  Alert,
  Box,
} from '@mui/material';
import { Close, LockOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { FormStyled } from './LoginForm.styled';
import { logIn, clearError } from 'redux/auth/operations';
import { selectIsError } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectIsError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormStyled component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error && (
            <Collapse in={true}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      dispatch(clearError(null));
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                severity="error"
              >
                Invalid username or password
              </Alert>
            </Collapse>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </FormStyled>
      </Box>
    </Container>
  );
};

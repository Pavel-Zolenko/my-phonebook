import { useEffect, lazy, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import { Layout } from 'components/Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { getDesignTokens } from 'services/theme';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const [mode, setMode] = useState('dark');

  const { isRefreshing } = useAuth;
  const dispatch = useDispatch();

  const getMode = useSelector(state => state.theme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    setMode(getMode);
  }, [getMode]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};

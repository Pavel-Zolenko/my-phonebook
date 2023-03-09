import { useDispatch} from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from "react";
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import { Layout } from 'components/Layout';
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";


const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const NotFound = lazy(() => import('../../pages/NotFound'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;
   

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  


  return (!isRefreshing && (<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>)
   
    
  );

      
    
};
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { MainContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <MainContainer>
      <Header />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </MainContainer>
  );
};

import { useAuth } from 'hooks/useAuth';
import { Nav } from './Navigation.styled';
import { LinkStyled } from '../LinkStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkStyled to="/">Home</LinkStyled>
      {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
    </Nav>
  );
};

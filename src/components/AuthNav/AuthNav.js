import { Container } from './AuthNav.styled';
import { LinkStyled } from '../LinkStyled';

export const AuthNav = () => {
  return (
    <Container>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </Container>
  );
};

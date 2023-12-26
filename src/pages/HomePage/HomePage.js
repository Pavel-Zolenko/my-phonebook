import { Container } from './Home.styled';
import { Carousel } from 'components/Carousel/Carousel';
import { Title, DescrText, Wrap, ButtonStyled, LinkBtn } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Wrap>
        <Title variant="h3">Phonebook</Title>
        <DescrText>
          In this application, you can save contacts, switch between dark and
          light themes, and add contacts to favorites.
        </DescrText>
        <LinkBtn to="/contacts">
          <ButtonStyled color="primary" variant="contained">
            Get Stated
          </ButtonStyled>
        </LinkBtn>
      </Wrap>

      <Carousel />
    </Container>
  );
}

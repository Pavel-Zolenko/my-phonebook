import { Container } from './Home.styled';
import { Carousel } from 'components/Carousel/Carousel';
import {
  ButtonStyled,
  DescrWrap,
  LinkBtn,
  Title,
  Text,
  Wrap,
} from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Wrap>
        <DescrWrap>
          <Title variant="h3">Phonebook</Title>
          <Text>
            In this application, you can save contacts, switch between dark and
            light themes, and add contacts to favorites.
          </Text>
          <LinkBtn to="/contacts">
            <ButtonStyled color="primary" variant="contained">
              Get Started
            </ButtonStyled>
          </LinkBtn>
        </DescrWrap>

        <Carousel />
      </Wrap>
    </Container>
  );
}

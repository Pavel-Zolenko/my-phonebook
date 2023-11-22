import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { getError, getIsLoading } from 'redux/contacts/selectors';

import { fetchContacts } from 'redux/contacts/operations';

import { MainBox, TypographyStyled, WrapPage } from './ContactsPage.styled';

export default function ContactsPage({ toggleColorMode }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <WrapPage>
      <MainBox>
        <Toaster position="top-center" reverseOrder={false} />
        <Button variant="contained" color="primary" onClick={toggleColorMode}>
          Contained
        </Button>

        <TypographyStyled variant="h4" component="h1">
          Phonebook
        </TypographyStyled>

        <ContactForm />

        <TypographyStyled variant="h5" component="h2">
          Contacts
        </TypographyStyled>

        {contacts.length > 0 || filter ? (
          <Filter />
        ) : (
          <Notification msg="No contacts added" />
        )}
        {isLoading && !error && <b>Request in progress...</b>}

        <ContactList />
      </MainBox>
    </WrapPage>
  );
}

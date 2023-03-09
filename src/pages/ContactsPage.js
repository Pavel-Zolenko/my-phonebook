import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { getError, getIsLoading } from "redux/contacts/selectors";

import { fetchContacts } from 'redux/contacts/operations';

import {
  Container,
  Title,
  SubTitle,
} from 'components/App/App.styled.js';


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);



 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    
      
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 || filter ? (
        <Filter />
      ) : (
        <Notification msg="No contacts added" />
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
      
  );
}

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';

export const ContactList = () => {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite')) ?? []
  );

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleAddFavorite = id => {
    setFavorite(prevFavorite =>
      prevFavorite.includes(id)
        ? prevFavorite.filter(favId => favId !== id)
        : [...prevFavorite, id]
    );
  };

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <ul>
      {filteredContacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, phone, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            number={number}
            handleAddFavorite={handleAddFavorite}
            favorite={favorite}
          />
        ))}
    </ul>
  );
};

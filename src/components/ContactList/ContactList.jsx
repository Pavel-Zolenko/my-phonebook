import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { ContactItem } from 'components/ContactItem';

export const ContactList = () => {
  const [addFavorite, setAddFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite')) ?? []
  );
  console.log('addFavorite', addFavorite);
  const [value, setValue] = useState('all');
  const [favFilter, setFavFilter] = useState([]);

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleChange = (event, status) => {
    if (status === 'favorite') {
      const filterFav = filteredContacts.filter(obj =>
        addFavorite.includes(obj.id)
      );

      setFavFilter(filterFav);
    }
    setValue(status);
  };

  const updateFavInLocalStorage = id => {
    const upadateFav = addFavorite.filter(fav => fav !== id);
    return setAddFavorite(upadateFav);
  };

  const handleAddFavorite = id => {
    setAddFavorite(prevFavorite =>
      prevFavorite.includes(id)
        ? prevFavorite.filter(favId => favId !== id)
        : [...prevFavorite, id]
    );
  };

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(addFavorite));
  }, [addFavorite]);

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="all" value="all" />
            <Tab label="favotite" value="favorite" />
          </TabList>
        </Box>
        <TabPanel value="all" sx={{ padding: 0 }}>
          {
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
                    favorite={addFavorite}
                    updateFavInLocalStorage={updateFavInLocalStorage}
                  />
                ))}
            </ul>
          }
        </TabPanel>
        <TabPanel value="favorite" sx={{ padding: 0 }}>
          {
            <ul>
              {favFilter
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(({ id, name, phone, number }) => (
                  <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                    number={number}
                    handleAddFavorite={handleAddFavorite}
                    favorite={addFavorite}
                    updateFavInLocalStorage={updateFavInLocalStorage}
                  />
                ))}
            </ul>
          }
        </TabPanel>
      </TabContext>
    </>
  );
};

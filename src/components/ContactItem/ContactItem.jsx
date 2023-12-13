import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItemAvatar, IconButton, Tooltip, Avatar } from '@mui/material';
import {
  AccountCircle,
  Delete,
  Edit,
  FavoriteBorder,
  Favorite,
} from '@mui/icons-material';

import { deleteContact } from 'redux/contacts/operations';
import { EditModal } from 'components/EditModal/EditModal';
import {
  ListItemTextStyled,
  ListItemStyled,
  CheckboxStyled,
} from './ContactItem.styled';

export const ContactItem = ({
  id,
  name,
  number,
  phone,
  favorite,
  handleAddFavorite,
  updateFavInLocalStorage,
}) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    updateFavInLocalStorage(id);
    return dispatch(deleteContact(id));
  };

  const handleChangeCheckbox = () => {
    handleAddFavorite(id);
  };

  const isFavorite = favorite.includes(id);

  useEffect(() => {
    setChecked(isFavorite);
  }, [isFavorite]);

  return (
    <ListItemStyled
      secondaryAction={
        <>
          <Tooltip title="Edit">
            <IconButton edge="end" aria-label="edit" onClick={handleOpen}>
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </Tooltip>
          <EditModal
            open={open}
            handleClose={handleClose}
            id={id}
            name={name}
            number={number}
          />
        </>
      }
    >
      <CheckboxStyled
        label="favorite"
        size="small"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={handleChangeCheckbox}
        checked={checked}
      />
      <ListItemAvatar>
        <Avatar>
          <AccountCircle />
        </Avatar>
      </ListItemAvatar>
      <ListItemTextStyled primary={name} secondary={number || phone} />
    </ListItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};

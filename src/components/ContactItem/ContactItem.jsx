import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { AccountCircle, Delete, Edit } from '@mui/icons-material';
import {
  ListItemAvatar,
  IconButton,
  ListItem,
  Tooltip,
  Avatar,
} from '@mui/material';
import { EditModal } from 'components/EditModal/EditModal';
import { ListItemTextStyled } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, phone }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem
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
      <ListItemAvatar>
        <Avatar>
          <AccountCircle />
        </Avatar>
      </ListItemAvatar>
      <ListItemTextStyled primary={name} secondary={number || phone} />
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};

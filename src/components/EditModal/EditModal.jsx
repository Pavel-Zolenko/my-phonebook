import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import 'yup-phone';
import { useFormik } from 'formik';
import { Typography, Modal, Button, TextField } from '@mui/material';

import {
  BoxStyled,
  FormStyled,
  BoxWpap,
  TypographyStyled,
} from './EditModal.styled';
import { editContact } from 'redux/contacts/operations';

let schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().phone('UA').required(),
});

export const EditModal = ({ id, open, handleClose, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = value => {
    const updateContact = {
      id: id,
      ...value,
    };

    dispatch(editContact(updateContact));
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      number: number,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <TypographyStyled id="modal-modal-title" variant="h6" component="h2">
          Edit contact
        </TypographyStyled>

        <FormStyled onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="number"
            name="number"
            label="number"
            type="tel"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <BoxWpap>
            <Button sx={{ color: '#4caf50' }} fullWidth type="submit">
              save
            </Button>
            <Button sx={{ color: '#f44336' }} onClick={handleClose}>
              Cancel
            </Button>
          </BoxWpap>
        </FormStyled>
      </BoxStyled>
    </Modal>
  );
};

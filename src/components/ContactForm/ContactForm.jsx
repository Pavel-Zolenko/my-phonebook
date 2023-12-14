import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import 'yup-phone';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

import { addContact } from 'redux/contacts/operations';
import { FormStyled } from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().phone('UA').required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));

    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
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

      <Button color="primary" variant="contained" fullWidth type="submit">
        Add contact
      </Button>
    </FormStyled>
  );
};

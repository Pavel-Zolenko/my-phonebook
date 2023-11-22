import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { filterChange } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <TextField
      id="filled-search"
      label="Put the name for search"
      type="search"
      variant="filled"
      onChange={handleFilter}
    />
  );
};

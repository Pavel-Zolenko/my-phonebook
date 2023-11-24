import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: '',
  reducers: {
    themeChange: (_, action) => {
      return action.payload;
    },
  },
});

export const { themeChange } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

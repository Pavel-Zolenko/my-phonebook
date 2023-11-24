import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    themeChange: (_, action) => {
      return action.payload;
    },
  },
});

export const { themeChange } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

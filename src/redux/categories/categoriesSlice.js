import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // No reducer needed for categories at the moment
  },
});

export default categoriesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

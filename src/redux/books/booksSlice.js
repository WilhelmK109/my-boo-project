import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const BOOKSTOREID = 'PMAK-642f3e6459ed195b863d0da0-e8f5af61ff182b59f7e205dcddb149792e';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${BOOKSTOREID}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    await axios.delete(`${url}/${bookId}`);
    return bookId;
  } catch (error) {
    return error;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.book_id !== bookId),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => ({ ...state, status: 'loading', error: null }))
      .addCase(createBook.fulfilled, (state, action) => ({ ...state, status: 'succeeded', books: [...state.books, action.payload] }))
      .addCase(createBook.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }))
      .addCase(deleteBook.pending, (state) => ({ ...state, status: 'loading', error: null }))
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        return {
          ...state,
          status: 'succeeded',
          books: state.books.filter((book) => book.id !== bookId),
        };
      })
      .addCase(deleteBook.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }));
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

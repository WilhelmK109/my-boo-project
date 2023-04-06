import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import './BookList.css';
import { addBook } from '../redux/books/booksSlice';
import AddBookButton from './AddBookButton';

export default function BookList() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(addBook({ title, author, category }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <ul className="books-list">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <form onSubmit={handleAddBook}>
        <input type="text" placeholder="Book title" value={title} onChange={handleTitleChange} />
        <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} />
        <input type="text" placeholder="Category" value={category} onChange={handleCategoryChange} />
        <AddBookButton />
      </form>
    </div>
  );
}

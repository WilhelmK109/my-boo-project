import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, createBook } from '../redux/books/booksSlice';

export default function AddBookButton() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleAddBook = (event) => {
    event.preventDefault();
    if (title && author) {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category: null,
      };
      dispatch(createBook(book))
        .then(() => {
          dispatch(addBook(book));
          setTitle('');
          setAuthor('');
        });
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <input className="input-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input className="input-author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button className="add-button" type="submit">Add Book</button>
      </form>
    </div>
  );
}

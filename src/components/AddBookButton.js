import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function AddBookButton() {
  const dispatch = useDispatch();

  const handleAddBook = (event) => {
    event.preventDefault();
    const book = {
      id: Math.random().toString(36).substring(7),
      title: 'New Book Title',
      author: 'New Book Author',
    };
    dispatch(addBook(book));
  };

  return (
    <button type="submit" onClick={handleAddBook}>Add Book</button>
  );
}

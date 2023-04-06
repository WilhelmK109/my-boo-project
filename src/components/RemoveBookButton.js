import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function RemoveBookButton({ bookId }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook({ id: bookId }));
  };

  return (
    <button type="button" onClick={handleRemoveBook}>remove Book</button>
  );
}

RemoveBookButton.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBookButton;

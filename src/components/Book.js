import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <li>
      <div className="book-info">
        <p>{book.title}</p>
        <span>{book.author}</span>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;

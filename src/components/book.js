/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemoveClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="container">
      <p>
        { title }
          &nbsp;-&nbsp;
        { author }
          &nbsp;
        <button type="button" onClick={() => handleRemoveClick(id)}>Remove</button>
      </p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Book;

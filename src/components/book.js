/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import progress from './progress.png';
import vert from './vert.png';

function Book(props) {
  const dispatch = useDispatch();
  // const { name, author } = props;
  const handleRemoveClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="singleBook">
      <div className="bookInfo">
        <h3>Category</h3>
        <h2>{props.props.name}</h2>
        <h4>{props.props.author}</h4>
        <div className="bookOptions">
          <button type="button" className="bookOptBtn">
            Comments
          </button>
          <button
            type="button"
            className="bookOptBtn rem"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
          <button type="button" className="bookOptBtn">
            Edit
          </button>
        </div>
      </div>
      <div className="bookExtraInfo">
        <img src={progress} alt="Progress bar" className="pbar" />
        <div className="progress">
          <h3>0%</h3>
          <p>Completed</p>
        </div>
        <img src={vert} alt="Vertical line" className="vline" />
        <div className="progressExtra">
          <p className="pExtraTitle">CURRENT CHAPTER</p>
          <p>Chapter 1</p>
          <button type="button" className="updateProgressBtn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Book;

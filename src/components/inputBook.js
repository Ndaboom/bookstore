import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function InputBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddbook = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        id="title"
        name="title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author"
        id="author"
        name="author"
        value={author}
        onChange={handleAuthor}
      />
      <button type="submit" onClick={handleAddbook}>
        Add new
      </button>
    </form>
  );
}
export default InputBook;

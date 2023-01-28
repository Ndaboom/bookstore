import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

function BooksList() {
  const books = useSelector((state) => state.books) || [];
  return (
    <div className="container">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksList;

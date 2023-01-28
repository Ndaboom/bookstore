/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Book from './book';

class BooksList extends React.Component {
  state = {
    books: [],
  };

  render() {
    return (
      <div className="container">
        {this.state.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  }
}

export default BooksList;

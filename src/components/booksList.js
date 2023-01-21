/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Book from './book';

class BooksList extends React.Component {
  state = {
    books: [
      {
        id: 1,
        name: 'The Hunger Games',
        progression: 60,
        chapter: 20,
      },
      {
        id: 2,
        name: 'Dune',
        progression: 60,
        chapter: 20,
      },
    ],
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

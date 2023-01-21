import React from 'react';
import InputBook from './inputBook';
import BooksList from './booksList';

function HomePage() {
  return (
    <div className="container">
      <div className="inner">
        <BooksList />
        <InputBook />
      </div>
    </div>
  );
}

export default HomePage;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        { this.props.book.name }
      </div>
    );
  }
}

export default Book;

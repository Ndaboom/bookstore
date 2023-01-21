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
        <p>
          { this.props.book.name }
          &nbsp;-&nbsp;
          { this.props.book.author }
          &nbsp;
          <button type="button">Remove</button>
        </p>
      </div>
    );
  }
}

export default Book;

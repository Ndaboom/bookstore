/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Category from './category';

class CategoriesPage extends React.Component {
  state = {
    categories: [
      {
        id: 1,
        name: 'Category one',
      },
      {
        id: 2,
        name: 'Category two',
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {this.state.categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

export default CategoriesPage;

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';

function Category(props) {
  return (
    <div className="container">
      {props.category.name}
      <input type="checkbox" />
    </div>
  );
}
export default Category;

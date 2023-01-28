/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Category() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleStatusClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="container">
      {status}
      <input type="checkbox" onClick={handleStatusClick} />
    </div>
  );
}
export default Category;

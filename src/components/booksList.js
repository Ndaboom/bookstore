/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import Book from "./book";

function BooksList() {
  const books = useSelector((state) => state.book);
  return (
    <div className="container">
      {/* {books.map((book) => (
        <Book key={book.id} props={book} />
      ))} */}
    </div>
  );
}

export default BooksList;

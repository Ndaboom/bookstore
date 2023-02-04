/* eslint-disable quotes */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/books/books";

function InputBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  let books = useSelector((state) => state.book);

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAddbook = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      name,
      author,
    };

    dispatch(addBook(newBook));
    // books.push(newBook);
    setName("");
    setAuthor("");

    console.log(books);
  };
  return (
    <div className="add_book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={handleAddbook}>
          <input
            className="titleInp"
            type="text"
            name="name"
            placeholder="Add Name"
            required
            value={name}
            onChange={handleName}
          />
          <input
            className="authorInp"
            type="text"
            name="author"
            placeholder="Add Author"
            required
            value={author}
            onChange={handleAuthor}
          />
          <button type="submit" className="addBookBtn">
            ADD BOOK
          </button>
        </form>
      </div>
    </div>
  );
}
export default InputBook;

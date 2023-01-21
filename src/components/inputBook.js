import React from 'react';

function InputBook() {
  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        name="title"
      />
      <select>
        <option>Author</option>
      </select>
    </form>
  );
}
export default InputBook;

// ACTIONS
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

// REDUCER
const booksReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADDBOOK':
      return state.push(action.book);
    case 'REMOVEBOOK':
      return state.books.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// ACTION CREATORS
export const addBook = (book) => ({
  type: ADDBOOK,
  payload: {
    id: book.id,
    title: book.title,
    author: book.author,
  },
});

export const removeBook = (bookId) => ({
  type: REMOVEBOOK,
  payload: {
    id: bookId,
  },
});

export default booksReducer;

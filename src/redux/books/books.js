/* eslint-disable quotes */
// import { v4 as uuidv4 } from 'uuid';

// ACTIONS
const ADDBOOK = "bookstore/books/ADDBOOK";
const REMOVEBOOK = "bookstore/books/REMOVEBOOK";

export const initState = [
  {
    id: 1,
    name: "The Hunger Games",
    author: "Sammy Ndabo",
    progression: 60,
    chapter: 20,
  },
  {
    id: 2,
    name: "Dune",
    author: "Marc Dubois",
    progression: 60,
    chapter: 20,
  },
];

// REDUCER
const booksReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADDBOOK:
      return { ...state.push(action.payload), ...action.payload };
    case "REMOVEBOOK":
      return state.books.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// ACTION CREATORS
export const addBook = (book) => ({
  type: ADDBOOK,
  payload: {
    name: book.name,
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

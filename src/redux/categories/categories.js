// Actions
const STATUSCHECKER = 'bookstore/categories/STATUSCHECKER';

// CATEGORIES REDUCER
const categoriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'STATUSCHECKER':
      return 'Under construction';
    default:
      return state;
  }
};

// ACTIONS CREATORS
export const checkStatus = () => ({
  type: STATUSCHECKER,
});

export default categoriesReducer;

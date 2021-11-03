const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const START_FETCH = 'bookStore/books/START_FETCH';
const ERROR_FETCH = 'bookStore/books/ERROR_FETCH';

const initialState = { loading: false, books: [], error: '' };

export const startFetch = (payload) => ({
  type: START_FETCH,
  payload,
});

export const errorFetch = (payload) => ({
  type: ERROR_FETCH,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { loading: false, books: action.payload, error: '' };
    case ADD_BOOK:
      return { loading: false, books: [...state.books, action.payload], error: '' };
    case REMOVE_BOOK:
      return { loading: false, books: state.books.filter((book) => book.item_id !== action.payload), error: '' };
    case START_FETCH:
      return { loading: true, books: [...state.books], error: '' };
    case ERROR_FETCH:
      return { loading: false, books: [], error: action.payload };
    default:
      return state;
  }
};

export default bookReducer;

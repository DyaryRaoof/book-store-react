import axios from 'axios';
import {
  startFetch, errorFetch, getBooks, addBook, removeBook,
} from '../redux/books/books';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const sendBook = async (dispatch, payload) => {
  dispatch(startFetch(null));
  const endPoint = '/apps/OCVT2EcTk0M24kOL5Svv/books';
  axios.post(BASE_URL + endPoint, payload)
    .then(() => dispatch(addBook(payload)))
    .catch((error) => dispatch(errorFetch(error.response.data)));
};

export const fetchBooks = async (dispatch) => {
  let counter = 0;
  dispatch(startFetch(null));
  const endPoint = '/apps/OCVT2EcTk0M24kOL5Svv/books';
  axios.get(BASE_URL + endPoint)
    .then((response) => {
      const ids = Object.keys(response.data);
      return dispatch(getBooks(Object.values(response.data)
        .map((book) => {
          const object = {
            item_id: parseInt(ids[counter], 10),
            ...book[0],
          };

          counter += 1;
          return object;
        })));
    })
    .catch((error) => dispatch(errorFetch(error.response.data)));
};

export const deleteBookOnServer = async (dispatch, payload) => {
  dispatch(startFetch(null));
  const endPoint = `/apps/OCVT2EcTk0M24kOL5Svv/books/${payload}`;
  axios.delete(BASE_URL + endPoint)
    .then(() => dispatch(removeBook(payload)))
    .catch((error) => dispatch(errorFetch(error.response.data)));
};

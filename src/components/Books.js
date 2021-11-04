import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SingleBook from './SingleBook';
import BookForm from './BookForm';
import { fetchBooks } from '../api';
import './Books.css';

function Books() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookReducer);
  useEffect(() => {
    if (!state.loading) {
      fetchBooks(dispatch);
    }
  }, []);

  return (
    <div>
      { state.books
        .map((book) => (
          <SingleBook
            key={book.item_id}
            title={book.title}
            category={book.category}
            id={book.item_id}
          />
        ))}
      <hr />
      <BookForm />
    </div>
  );
}

export default Books;

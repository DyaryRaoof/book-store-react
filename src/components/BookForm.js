import './BookForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { sendBook } from '../api';

const BookForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookReducer);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    const book = {
      item_id: state.books.length > 0 ? state.books[state.books.length - 1].item_id + 1 : 0,
      title,
      category,
    };

    if (title && category) {
      sendBook(dispatch, book);
      setTitle('');
      setCategory('');
      setError(null);
    } else {
      setError('Title and author should not be empty !');
    }
  };

  return (
    <div className="book-form-wrapper">
      <div>
        <div>Add New Book</div>
        <form className="book-form">
          <input
            placeholder="Book title"
            className="book-title"
            onChange={(e) => { setTitle(e.target.value); }}
            value={title}
            minLength="1"
          />
          <input
            placeholder="Book category"
            onChange={(e) => { setCategory(e.target.value); }}
            value={category}
            minLength="1"
          />
          <button type="submit" onClick={(e) => { addBookToStore(e); }}>Add Book</button>
        </form>
        {error ? <span className="error-span">{state.error ? state.error : error}</span> : null}

      </div>

    </div>
  );
};

export default BookForm;

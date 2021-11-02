import './BookForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    const book = {
      id: books.length,
      title,
      author,
    };

    if (title && author) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
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
            placeholder="Book author"
            onChange={(e) => { setAuthor(e.target.value); }}
            value={author}
            minLength="1"
          />
          <button type="submit" onClick={(e) => { addBookToStore(e); }}>Add Book</button>
        </form>
        {error ? <span className="error-span">{error}</span> : null}

      </div>

    </div>
  );
};

export default BookForm;
